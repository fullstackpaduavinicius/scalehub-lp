import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LeadForm } from "./components/LeadForm";
import { FixedActions } from "./components/FixedActions";

import {
  AudienceSection,
  MeasurementSection,
  MethodSection,
  ProblemSection,
  ProcessSection,
  StructureSection,
} from "./components/StrategySections";

import { usePageTracking } from "./hooks/usePageTracking";

function App() {
  usePageTracking();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05080d]">
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <StructureSection />
        <AudienceSection />
        <MeasurementSection />
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