import "./globals.css";
import Head from "next/head";
import { ContextProvider } from "./Context/Context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Medhive",
  description: "A hospital bed vacancy finder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <ContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
