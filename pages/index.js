import Blogs from "@/components/Blogs";
import CasesSection from "@/components/CaseSection";
import Enroll from "@/components/Enroll";
import FAQ from "@/components/FAQ";
import FeatureSection from "@/components/FeatureSection";
import Header from "@/components/header";
import ListSection from "@/components/ListSection";
import Page from "@/components/page";
import SocialProof from "@/components/SocialProof";
import VideoSection from "@/components/VideoSection";
import { NextSeo } from "next-seo";
// import Page from "../components/page";
// import Header from "../components/header";
// import VideoSection from "../components/video-section";
// import ListSection from "../components/list-section";
// import FeatureSection from "../components/feature-section";
// import CasesSection from "../components/cases-section";
// import SocialProof from "../components/social-proof";

// import Blogs from "../components/blogs";
// import FAQ from "../components/qna";
// import Enroll from "../components/Enroll";

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="TheTechGenius"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <Blogs />
        <FAQ />
        <Enroll />

      </main>
    </Page>
  );
}
