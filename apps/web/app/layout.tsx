import "@repo/ui/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./providers/theme-provider";

const geistFont = localFont({
  src: "./fonts/GeistVF.woff",
});

export const metadata: Metadata = {
  title: "Cadence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geistFont.className}>
      <body>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
