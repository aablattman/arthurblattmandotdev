import WebsiteIntro from './components/website-intro';
import CaseStudies from './components/case-studies';
import SideProjects from './components/side-projects';


export default function Home() {
  return (
    <>
      <WebsiteIntro />
      <CaseStudies />
      <SideProjects />
    </>
  );
}