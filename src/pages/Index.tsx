import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TaskExamplesSection from "@/components/landing/TaskExamplesSection";
import WhyPopJobSection from "@/components/landing/WhyPopJobSection";
import LeadFormClient from "@/components/landing/LeadFormClient";
import LeadFormWorker from "@/components/landing/LeadFormWorker";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";
import LeadFormsSection from "@/components/landing/LeadFormsSection";

const Index = () => {
  const [clientOpen, setClientOpen] = useState(false);
  const [workerOpen, setWorkerOpen] = useState(false);

  return (
    <main>
      <HeroSection onClientClick={() => setClientOpen(true)} onWorkerClick={() => setWorkerOpen(true)} />
      <ProblemsSection />
      <HowItWorksSection />
      <TaskExamplesSection />
      <WhyPopJobSection />
      <LeadFormsSection onClientClick={() => setClientOpen(true)} onWorkerClick={() => setWorkerOpen(true)} />
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
