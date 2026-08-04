import Header from "./components/Header";
import Hero from "./components/Hero";
import LeadForm from "./components/LeadForm";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FixedActions from "./components/FixedActions";

import {
  AudienceSection,
  InvestmentSection,
  MethodSection,
  OfferSection,
  ProblemSection,
  ProcessSection,
  TrustBar,
} from "./components/StrategySections";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05080d] text-white">
      <Header />

      <main>
        <Hero />

        <TrustBar />

        <ProblemSection />

        <OfferSection />

        <MethodSection />

        <AudienceSection />

        <InvestmentSection />

        <ProcessSection />

        <LeadForm />

        <FaqSection />
      </main>

      <Footer />

      <FixedActions />
    </div>
  );
}

export default App;