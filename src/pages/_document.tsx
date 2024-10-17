import { Html, Head, Main, NextScript } from "next/document";
// import logo from "../../public/logo.png"
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./logo.png" sizes="any"></link>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
