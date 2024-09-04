import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Opensource Next.js GeoJSON Viewer with Leaflet and OpenStreetMap Integration",
  description: "A Next.js 14 template for creating interactive GeoJSON viewers using Leaflet and OpenStreetMap. This template allows you to visualize and validate various GeoJSON data types, including Points, LineStrings, and Polygons, with real-time error feedback and dynamic map interactions. Easily deployable on Vercel, this project is perfect for developers looking to quickly set up a GeoJSON visualization tool. Includes a user-friendly interface with customizable popups and seamless integration with OpenStreetMap tiles. Ideal for both development and deployment in production environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
