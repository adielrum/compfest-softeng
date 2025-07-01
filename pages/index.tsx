import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <Layout>
    
      <div>
        <Hero />
        <FeatureList />
        <ContactCard />
      </div>
    </Layout>
  );
}
