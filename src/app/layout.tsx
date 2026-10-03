import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Davi Cruz | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Java, Spring Boot, Node.js and scalable web applications.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Davi Cruz | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Java, Spring Boot, Node.js and scalable web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Davi Cruz Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1086,
        height: 1448,
        alt: "Profile photo of Davi Cruz",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)] pb-28 text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
