import { ApiReference } from "@scalar/nextjs-api-reference";
import openApiSpec from "@/lib/openapi.json";

export const GET = ApiReference({
  content: openApiSpec,
});
