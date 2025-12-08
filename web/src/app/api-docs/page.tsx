import { ApiReference } from "@scalar/nextjs-api-reference";
import openApiSpec from "@/lib/openapi.json";

export default function ApiDocsPage() {
  return (
    <ApiReference
      configuration={{
        spec: {
          content: openApiSpec,
        },
        theme: "default",
        layout: "modern",
        defaultHttpClient: {
          targetKey: "javascript",
          clientKey: "fetch",
        },
      }}
    />
  );
}
