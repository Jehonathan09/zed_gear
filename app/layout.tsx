import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import "./globals.css";

// Define the metadata for the application
export const metadata: Metadata = {
  // Set the title of the application
  title: "Zed Gear",
  // Set the description of the application
  description: "Discover the best cars in Zambia.",
};

// Define the RootLayout component
export default function RootLayout({
   // The children prop contains the content to be rendered inside the layout
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Return the HTML structure for the layout
  return (
    <html lang="en">
      <body className="relative">

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
