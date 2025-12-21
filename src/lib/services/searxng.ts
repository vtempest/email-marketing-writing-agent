import axios from "axios";

const SEARXNG_URL = process.env.SEARXNG_URL || "https://searx.be";

export interface SearchResult {
  title: string;
  url: string;
  content: string;
  engine: string;
  score?: number;
}

export interface CompanyResearchResult {
  companyName: string;
  website: string;
  description: string;
  industry: string;
  recentNews: string[];
  socialMedia: {
    linkedin?: string;
    twitter?: string;
  };
  rawResults: SearchResult[];
}

/**
 * Search using SearXNG
 */
export async function searchWithSearXNG(
  query: string,
  options: {
    categories?: string[];
    engines?: string[];
    language?: string;
    timeRange?: string;
    safesearch?: number;
    format?: "json" | "html";
  } = {}
): Promise<SearchResult[]> {
  try {
    const params = new URLSearchParams({
      q: query,
      format: options.format || "json",
    });

    if (options.categories?.length) {
      params.append("categories", options.categories.join(","));
    }

    if (options.engines?.length) {
      params.append("engines", options.engines.join(","));
    }

    if (options.language) {
      params.append("language", options.language);
    }

    if (options.timeRange) {
      params.append("time_range", options.timeRange);
    }

    if (options.safesearch !== undefined) {
      params.append("safesearch", options.safesearch.toString());
    }

    const response = await axios.get(`${SEARXNG_URL}/search`, {
      params,
      headers: {
        "User-Agent": "GPT-Marketer/1.0",
      },
      timeout: 10000,
    });

    if (response.data.results) {
      return response.data.results.map((result: any) => ({
        title: result.title || "",
        url: result.url || "",
        content: result.content || "",
        engine: result.engine || "",
        score: result.score,
      }));
    }

    return [];
  } catch (error) {
    console.error("SearXNG search error:", error);
    throw new Error("Failed to search with SearXNG");
  }
}

/**
 * Research a company using SearXNG
 */
export async function researchCompany(
  companyNameOrUrl: string
): Promise<CompanyResearchResult> {
  try {
    // Extract domain if URL provided
    let companyName = companyNameOrUrl;
    let website = companyNameOrUrl;

    if (companyNameOrUrl.includes("http") || companyNameOrUrl.includes(".")) {
      try {
        const url = new URL(
          companyNameOrUrl.startsWith("http")
            ? companyNameOrUrl
            : `https://${companyNameOrUrl}`
        );
        website = url.hostname.replace("www.", "");
        companyName = website.split(".")[0];
      } catch (e) {
        // If URL parsing fails, treat as company name
      }
    }

    // Search for company information
    const companyResults = await searchWithSearXNG(
      `${companyName} company information`,
      {
        categories: ["general"],
        language: "en",
      }
    );

    // Search for recent news
    const newsResults = await searchWithSearXNG(
      `${companyName} company news`,
      {
        categories: ["news"],
        language: "en",
        timeRange: "month",
      }
    );

    // Extract information
    const description =
      companyResults[0]?.content ||
      `Information about ${companyName}`;

    const recentNews = newsResults.slice(0, 5).map((result) => result.title);

    // Try to find social media links
    const socialMedia: { linkedin?: string; twitter?: string } = {};

    for (const result of companyResults.slice(0, 10)) {
      if (result.url.includes("linkedin.com/company")) {
        socialMedia.linkedin = result.url;
      }
      if (result.url.includes("twitter.com") || result.url.includes("x.com")) {
        socialMedia.twitter = result.url;
      }
    }

    // Try to determine industry from search results
    const industry = extractIndustry(companyResults);

    return {
      companyName,
      website,
      description,
      industry,
      recentNews,
      socialMedia,
      rawResults: [...companyResults, ...newsResults],
    };
  } catch (error) {
    console.error("Company research error:", error);
    throw new Error("Failed to research company");
  }
}

/**
 * Extract industry from search results
 */
function extractIndustry(results: SearchResult[]): string {
  const industries = [
    "technology",
    "software",
    "saas",
    "fintech",
    "healthcare",
    "finance",
    "retail",
    "e-commerce",
    "manufacturing",
    "consulting",
    "marketing",
    "education",
    "real estate",
    "logistics",
    "telecommunications",
    "media",
    "entertainment",
    "energy",
    "automotive",
    "aerospace",
  ];

  const text = results
    .slice(0, 5)
    .map((r) => `${r.title} ${r.content}`.toLowerCase())
    .join(" ");

  for (const industry of industries) {
    if (text.includes(industry)) {
      return industry.charAt(0).toUpperCase() + industry.slice(1);
    }
  }

  return "Technology";
}

/**
 * Enrich contact with additional information
 */
export async function enrichContact(
  name: string,
  company: string,
  email?: string
): Promise<{
  title?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  bio?: string;
}> {
  try {
    const query = `${name} ${company} ${email || ""}`;
    const results = await searchWithSearXNG(query, {
      categories: ["general"],
      language: "en",
    });

    const enrichedData: {
      title?: string;
      linkedinUrl?: string;
      twitterUrl?: string;
      bio?: string;
    } = {};

    // Find LinkedIn profile
    const linkedinResult = results.find((r) =>
      r.url.includes("linkedin.com/in")
    );
    if (linkedinResult) {
      enrichedData.linkedinUrl = linkedinResult.url;
      enrichedData.bio = linkedinResult.content;

      // Try to extract title from LinkedIn snippet
      const titleMatch = linkedinResult.content.match(
        /(?:at|@)\s+([^-•|]+)/i
      );
      if (titleMatch) {
        enrichedData.title = titleMatch[1].trim();
      }
    }

    // Find Twitter profile
    const twitterResult = results.find(
      (r) =>
        r.url.includes("twitter.com") || r.url.includes("x.com")
    );
    if (twitterResult) {
      enrichedData.twitterUrl = twitterResult.url;
    }

    return enrichedData;
  } catch (error) {
    console.error("Contact enrichment error:", error);
    return {};
  }
}
