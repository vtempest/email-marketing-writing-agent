import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Email Marketing Writing Agent",
  description: "AI-powered email marketing campaign management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
