import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

const SEO = ({ title, description, canonical, type = "website" }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Ivatech Informatics Limited",
        url: "https://www.ivatech.co.tz",
        logo: "https://www.ivatech.co.tz/logo.png",
        description: "Turnkey service providers to the telecoms, security and energy industries in Tanzania",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3rd Floor, EAGT Building",
          addressLocality: "Dar es Salaam",
          addressCountry: "TZ",
          postalCode: "38698",
        },
        telephone: "+255788222899",
        email: "ivatech@ivatech.co.tz",
      })}
    </script>
  </Helmet>
);

export default SEO;
