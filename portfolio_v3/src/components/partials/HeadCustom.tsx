import HeadCustomProps from "@types/components/HeadCustomProps";
import Head from "next/head";
import defaultKeywords from "@constants/keywords";

const HeadCustom = ({ title, keywords, otherMeta }: HeadCustomProps) => {
  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  return (
    <Head>
      <title>{`David Bishop | ${title}`}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="" />
      <meta name="author" content="David Bishop" />
      <meta name="application-name" content="David Bishop's Portfolio" />
      <meta
        name="description"
        content="David Bishop's Software Developer portfolio website that's all about him and his tech skills, projects, etc."
      />
      <meta name="keywords" content={allKeywords} />
      {otherMeta &&
        otherMeta.map((meta) => (
          <meta key={meta.key} name={meta.key} content={meta.value} />
        ))}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadCustom;
