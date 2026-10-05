import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KELD — Titanium field bottle | Field Outdoor",
  description:
    "KELD is a 500 ml double-wall vacuum titanium bottle — light on the strap, stubborn with heat, measured hold times, founders batch of 400.",
  openGraph: {
    title: "KELD — Titanium field bottle",
    description:
      "Grade 1 titanium. 12 h hot / 24 h cold. Reserve the founders batch.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0c1210",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
