import type { Metadata } from "next";
import { NextUITheme } from "@/client_theme";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-VariableFont_opsz,wght.ttf",
    },
  ],
});

export const metadata: Metadata = {
  title: "Dynamics365",
  description:
    "Dynamics365 project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-sidebar`}>
        <NextUITheme>{children}</NextUITheme>
      </body>
    </html>
  );
}
