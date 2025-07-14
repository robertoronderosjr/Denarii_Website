import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import AuthWrapper from "@/components/auth-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denarii Labs - Tokenomics & Blockchain Consulting",
  description: "Expert tokenomics consulting and blockchain advisory services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AuthWrapper>
      </body>
    </html>
  );
}
