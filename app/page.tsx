import { ReactLenis} from 'lenis/react'
import Founders from "@/components/founders";
import Hero from "../components/hero";
import HeroAlt from "@/components/hero-alt";
import Trusted from "../components/trusted";
import { Projects } from "@/components/projects";
import Stats from "@/components/stats";
import Faq from "@/components/faq";
import ParallaxDivider from "@/components/parallaxdivider";
import Schedule from "@/components/schedule";
const Home = () => {
  return ( <div>
    <ReactLenis root>
    <Hero />
    {/* <HeroAlt /> */}
    <Trusted />
    <Projects />
    <ParallaxDivider />
    <Schedule />
    <Founders />
    <Stats />
    <Faq />
    </ReactLenis>
  </div> );
}
 
export default Home;