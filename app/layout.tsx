import "./globals.css";
import "@/components/Header.css";
import "@/components/LandingPage.css";
import FaviconHandler from "@/components/FaviconHandler";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Nozzle</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/logoBlack.png" />
      </head>
      <body>
        <FaviconHandler />
        {children}
      </body>
    </html>
  );
}