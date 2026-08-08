import "./globals.css";
import "@/components/Header.css";
import "@/components/LandingPage.css";
import "@/app/Loader.css";
import FaviconHandler from "@/components/FaviconHandler";
import type { Metadata } from "next";
import Silkw from "@/components/silkw";
import { ThemeProvider } from "next-themes";
import { Jost } from "next/font/google";

const jost = Jost({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Nozzle - A coding agent that lives in your discord",
  description:
    "A coding agent that lives in your Discord. Select your GitHub repo, @mention nozzle to create tasks, and it'll submit PRs.",
  metadataBase: new URL("https://nozzle.cns-studios.com"),
  openGraph: {
    title: "Nozzle - A coding agent that lives in your discord",
    description:
      "A coding agent that lives in your Discord. @mention nozzle to create tasks.",
    type: "website",
    images: [{ url: "/og_image.png", width: 1200, height: 630, alt: "Nozzle" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og_image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className={jost.variable}>
      <head>
        <title>Nozzle</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/logoBlack.png" />
      </head>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="silk-bg">
          <Silkw />
        </div>
        <FaviconHandler />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}