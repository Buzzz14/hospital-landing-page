import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import ReactQueryProvider from "@/providers/reactQueryProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Nepal Mediciti Hospital",
    template: "%s - Nepal Mediciti Hospital",
  },
  description: "This is a project for Nepal Mediciti Hospital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.variable} ${poppins.variable} antialiased max-w-[1920px] mx-auto text-text`}
      >
        <ReactQueryProvider>
          <Navigation />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
