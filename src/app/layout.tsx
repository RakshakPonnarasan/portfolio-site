import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import PageLoader from "@/components/PageLoader/PageLoader";
import PageTransition from "@/components/PageTransition/PageTransition";


const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Rakshak M P — UI/UX Designer",

  description:
    "Rakshak M P is a UI/UX Designer focused on clear, useful digital products and strong visual interfaces.",

  keywords: [
    "UI/UX Designer",
    "UI Designer",
    "Visual Designer",
    "Product Design",
    "Rakshak M P",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={ibmPlexMono.variable}>
        <ThemeProvider>
          <PageLoader />

          <div className="layout-shell">

            <Sidebar />

            <main className="layout-main">
              <PageTransition>
                {children}
              </PageTransition>

              <Footer />
            </main>

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}