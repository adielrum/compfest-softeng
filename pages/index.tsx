import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import TestimonialSection from "../components/TestimonialSection";
import ContactCard from "../components/ContactCard";
export default function Home() {
  return (
    
      <div>
        {/* Ensure Layout component wraps this content via _app.tsx */}
        <Hero />
        <FeatureList />
        <TestimonialSection />
        {/* Existing ContactCard might be moved to the new /contact page later */}
        <ContactCard />
      </div>
    
  );
}
