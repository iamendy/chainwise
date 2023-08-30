import Head from "next/head";

function SEOHead() {
  const href = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

  return (
    <Head>
      <title> Chainwise </title>
      <meta name="description" content="secription" />
      <meta name="keywords" content="some nice keywords" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={href} />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <meta property="og:title" content="description: description " />
      <meta property="og:description" content="description:description " />
      <meta property="og:image" content={`${href}/logo.png`} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="description:description" />
      <meta name="twitter:title" content="title!" />
      <meta name="twitter:description" content="description:description" />
      <meta name="twitter:image" content={`${href}/banner.png`} />
    </Head>
  );
}

export default SEOHead;
