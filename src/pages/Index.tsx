import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import TaskExamplesSection from "@/components/landing/TaskExamplesSection";
import LeadFormClient from "@/components/landing/LeadFormClient";
import LeadFormWorker from "@/components/landing/LeadFormWorker";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  const [clientOpen, setClientOpen] = useState(false);
  const [workerOpen, setWorkerOpen] = useState(false);

  return (
    <main>
      <HeroSection onClientClick={() => setClientOpen(true)} onWorkerClick={() => setWorkerOpen(true)} />
      <TaskExamplesSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection onClientClick={() => setClientOpen(true)} onWorkerClick={() => setWorkerOpen(true)} />
      <FooterSection />
      <LeadFormClient open={clientOpen} onOpenChange={setClientOpen} />
      <LeadFormWorker open={workerOpen} onOpenChange={setWorkerOpen} />
    </main>
  );
};

export default Index;
