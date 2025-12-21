import { NextResponse } from "next/server";
import { db } from "@/db";
import { user, session, campaign, contact, company } from "@/db/schema";
import { eq } from "drizzle-orm";
import { randomBytes } from "crypto";

const DEMO_USER_EMAIL = "demo@example.com";

// Simple ID generator
const generateId = (length = 21) => {
  return randomBytes(Math.ceil(length / 2))
    .toString("base64")
    .replace(/[+/]/g, "")
    .slice(0, length);
};

export async function POST() {
  try {
    // Validate database connection
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not configured");
      return NextResponse.json(
        { error: "Database not configured. Please set DATABASE_URL environment variable." },
        { status: 500 }
      );
    }

    // Check if demo user exists
    let demoUser = await db.query.user.findFirst({
      where: eq(user.email, DEMO_USER_EMAIL),
    });

    // Create demo user if it doesn't exist
    if (!demoUser) {
      const userId = generateId();
      await db.insert(user).values({
        id: userId,
        email: DEMO_USER_EMAIL,
        name: "Demo User",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      demoUser = await db.query.user.findFirst({
        where: eq(user.email, DEMO_USER_EMAIL),
      });

      if (!demoUser) {
        return NextResponse.json({ error: "Failed to create demo user" }, { status: 500 });
      }

      // Create some dummy data for the demo user
      // Create a demo company
      const companyId = generateId();
      await db.insert(company).values({
        id: companyId,
        name: "Acme Corporation",
        website: "https://acme.com",
        domain: "acme.com",
        industry: "Technology",
        size: "500-1000 employees",
        description: "Leading provider of enterprise software solutions",
        location: "San Francisco, CA",
        country: "United States",
        userId: demoUser.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Create demo contacts
      const contactIds = [generateId(), generateId(), generateId()];
      await db.insert(contact).values([
        {
          id: contactIds[0],
          firstName: "John",
          lastName: "Smith",
          email: "john.smith@acme.com",
          title: "VP of Marketing",
          department: "Marketing",
          status: "active",
          companyId: companyId,
          userId: demoUser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: contactIds[1],
          firstName: "Sarah",
          lastName: "Johnson",
          email: "sarah.j@acme.com",
          title: "Director of Sales",
          department: "Sales",
          status: "active",
          companyId: companyId,
          userId: demoUser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: contactIds[2],
          firstName: "Michael",
          lastName: "Chen",
          email: "m.chen@acme.com",
          title: "Product Manager",
          department: "Product",
          status: "active",
          companyId: companyId,
          userId: demoUser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      // Create a demo campaign
      const campaignId = generateId();
      await db.insert(campaign).values({
        id: campaignId,
        name: "Q1 2025 Product Launch",
        status: "active",
        emailSubject: "Introducing our new AI-powered solution",
        emailBody: "Hi {{firstName}},\n\nI wanted to reach out to share some exciting news about our latest product...",
        emailTone: "professional",
        productInfo: "AI-powered analytics platform for enterprise businesses",
        targetCount: 3,
        emailsSent: 3,
        emailsOpened: 2,
        emailsClicked: 1,
        emailsFailed: 0,
        userId: demoUser.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        launchedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      });
    }

    // Create a new session
    const sessionId = generateId();
    const sessionToken = generateId(32);
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    await db.insert(session).values({
      id: sessionId,
      userId: demoUser.id,
      token: sessionToken,
      expiresAt,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Create response with session cookie
    const response = NextResponse.json({ success: true, user: demoUser });

    // Set session cookie (matching better-auth's cookie name)
    response.cookies.set("better-auth.session_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: expiresAt,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Demo login error:", error);
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    const errorDetails = error instanceof Error && error.stack ? error.stack : String(error);
    console.error("Error details:", errorDetails);

    return NextResponse.json(
      {
        error: "Failed to create demo session",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
