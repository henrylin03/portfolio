import { MantineProvider } from "@mantine/core";
import theme from "./styles/theme";

// components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// css
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/global.css";

const Head = () => {
  const TITLE = "Henry Lin | Freelance Web Developer from Sydney Australia";
  const DESCRIPTION =
    "Henry Lin is a freelance web developer with specialisation on the front-end, using React.js. Let's build something amazing on the web together!";
  const KEYWORDS = [
    "React web developer",
    "front-end developer portfolio",
    "hire freelance web developer",
    "freelance web designer",
    "freelance UI/UX designer",
    "web developer Sydney",
    "web developer Australia",
    "front-end web developer Australia",
    "front-end web developer Sydney",
    "React developer Sydney",
    "website building Sydney",
    "website building Australia",
  ];
  const URL = "https://henrylin.io";
  const IMAGE_URL = "https://i.imgur.com/Hl0Llmz.png";

  const STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Henry Lin",
        jobTitle: "Front-End Web Developer",
        url: "https://henrylin.io",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "Australia",
        },
        sameAs: ["https://github.com/henrylin03/"],
      },
      {
        "@type": "Service",
        serviceType: "Web Development",
        provider: {
          "@type": "Person",
          name: "Henry Lin",
        },
        areaServed: {
          "@type": "Place",
          name: "Sydney, Australia",
        },
        description:
          "Custom website building and front-end development using React.js, HTML, CSS, and JavaScript.",
      },
      {
        "@type": "Service",
        serviceType: "UI/UX Design",
        provider: {
          "@type": "Person",
          name: "Henry Lin",
        },
        areaServed: {
          "@type": "Place",
          name: "Sydney, Australia",
        },
        description:
          "User research, wireframing, and testing for intuitive website and web applications.",
      },
      {
        "@type": "CreativeWork",
        name: "Henry Lin's Portfolio",
        url: "https://henrylin.io/#projects",
        creator: {
          "@type": "Person",
          name: "Henry Lin",
        },
        description:
          "A showcase of recent projects by Henry Lin, a freelance front-end web developer based in Sydney, Australia.",
      },
    ],
  };

  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(",")} />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:image" content={IMAGE_URL} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE_URL} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<script type="application/ld+json">${JSON.stringify(STRUCTURED_DATA)}</script>`,
        }}
      />
    </>
  );
};

const App = () => {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <Head />

      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </MantineProvider>
  );
};

export default App;
