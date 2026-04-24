import { site } from "@/lib/site";

/**
 * JSON-LD structured data for the whole site. Rendered once in the root
 * layout so every page emits the same Organization + WebSite schema.
 *
 * Google's AI Overviews and rich-result panels heavily favor sites whose
 * identity, mission, founder, and contact are stated as machine-readable
 * facts via schema.org markup. This is the single most impactful "tell
 * Google who we are" lever we have.
 *
 * Validates against https://search.google.com/test/rich-results
 */
export function StructuredData() {
  const orgUrl = "https://aivanguard.org";
  const orgLogo = `${orgUrl}/img/brand/aivanguard-mark.png`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${orgUrl}#organization`,
    name: site.name,
    alternateName: "AI Vanguard Inc.",
    url: orgUrl,
    logo: {
      "@type": "ImageObject",
      url: orgLogo,
      width: 1024,
      height: 1024,
    },
    image: orgLogo,
    description: site.description,
    slogan: site.tagline,
    foundingDate: "2024",
    nonprofitStatus: "Nonprofit501c3",
    founder: {
      "@type": "Person",
      name: "Avery Updike",
      jobTitle: "Founder & President",
      affiliation: site.name,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Southern California",
      },
      {
        "@type": "AdministrativeArea",
        name: "California",
      },
    ],
    email: site.email,
    sameAs: [site.social.instagram, site.social.linkedin],
    knowsAbout: [
      "Artificial intelligence in education",
      "Student voice",
      "AI policy in K-12 schools",
      "Education advocacy",
      "Student-led research",
      "Responsible AI use",
      "AI literacy",
    ],
    keywords:
      "AI in education, student voice, AI policy, K-12 nonprofit, youth-led, Southern California schools",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    memberOf: {
      "@type": "Organization",
      name: "Student-led nonprofits",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${orgUrl}#website`,
    url: orgUrl,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${orgUrl}#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
