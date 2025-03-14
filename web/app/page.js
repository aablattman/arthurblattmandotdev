import Image from "next/image";

import WebsiteIntro from './components/website-intro';
import PickCrunchBox from './components/pick-crunch-box';
import BTSBox from './components/boston-terrier-simulator-box';


export default function Home() {
  return (
    <>
      <WebsiteIntro />
      <PickCrunchBox />
      <BTSBox />
    </>
  );
}