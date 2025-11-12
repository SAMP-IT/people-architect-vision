import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = "SAMP IT | Design Beyond Aesthetics",
  description = "Crafting intelligent spaces that inspire. Independent architectural design studio specializing in architectural design, interior design, and material consulting in Chennai, Tamil Nadu.",
  keywords = "architecture, interior design, material consulting, chennai architect, residential design, commercial design, sustainable architecture",
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "website",
  article
}: SEOProps) => {
  const siteUrl = "https://sampit.in"; // Update with your actual domain
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Structured Data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ArchitectsOffice",
    "name": "SAMP IT",
    "description": description,
    "url": siteUrl,
    "telephone": "+91-98765-43210",
    "email": "hello@sampit.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "₹₹₹",
    "sameAs": [
      "https://instagram.com/sampit",
      "https://youtube.com/@SAMPIT"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Architectural Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural Design",
            "description": "Complete architectural design services from concept to completion"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design",
            "description": "Bespoke interior design solutions with functional beauty"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Material Consulting",
            "description": "Expert advice on finishes, materials, and textures"
          }
        }
      ]
    }
  };

  // Article structured data for blog posts
  const articleData = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${siteUrl}${ogImage}`,
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "author": {
      "@type": "Organization",
      "name": article.author || "SAMP IT"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SAMP IT",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "articleSection": article.section,
    "keywords": article.tags?.join(", ")
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="SAMP IT" />
      <meta property="og:locale" content="en_IN" />

      {/* Article Meta Tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sampit" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="SAMP IT" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {articleData && (
        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
