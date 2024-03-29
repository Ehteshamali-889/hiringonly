import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
// import Script from "next/script";
const inter = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WQ5Z5KX618"></script>
        <script id='google-analytics'>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WQ5Z5KX618');`}
        </script>
      </head> */}
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-WQ5Z5KX618" />
    </html>
  );
}
