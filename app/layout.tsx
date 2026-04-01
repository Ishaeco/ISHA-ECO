import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // This is what appears in the Browser Tab
  title: "ISHA ECO SOLUTIONS | Engineering a Zero-Waste Future",
  
  // This is the description shown in Google and when sharing links
  description: "Premier destination for expert waste management. Transforming environmental liabilities into clean, sustainable ecosystems through scalable engineering.",
  
  // This helps with social media sharing (OpenGraph)
  openGraph: {
    title: "ISHA ECO SOLUTIONS",
    description: "Engineering Sustainable Waste Management Infrastructure.",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "ISHA ECO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}