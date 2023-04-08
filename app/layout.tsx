import "./globals.css";

export const metadata = {
  title: "Simple TodoApp",
  description: "Simple toto app for learning next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
