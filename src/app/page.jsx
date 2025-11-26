import HomeBanner from "@/components/HomeBanner";
import HomeFeatures from "@/components/HomeFeatures";
import Hero from "@/components/HomeHero";
import HomePopular from "@/components/HomePopular";
import HomeTestimonials from "@/components/HomeTestimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeFeatures/>
      <HomePopular/>
      <HomeTestimonials/>
      <HomeBanner/>
    </div>
  );
}
