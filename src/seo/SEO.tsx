import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Next.js, SEO, Example" />
      {/* 기타 메타 태그 추가 */}
    </Head>
  );
};
