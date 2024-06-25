import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <p style={{ color: "white" }}>HEADER</p> */}
        {children}
      </body>
    </html>
  );
}
