import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Facts from "@/components/Facts";
import About from "@/components/About";
import Features from "@/components/Features";
import Services from "@/components/Services";
import PricingPlan from "@/components/PricingPlan";
import Quote from "@/components/Quote";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Facts />
        <About />
        <Features />
        <Services />
        <PricingPlan />
        <Quote />
        <Testimonials />
        <Team />
        <Blog />
      </main>
    </>
  );
}
