import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAME - Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

