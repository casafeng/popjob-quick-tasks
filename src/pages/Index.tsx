import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import FooterSection from "@/components/landing/FooterSection";
import LeadFormClient from "@/components/landing/LeadFormClient";
import LeadFormWorker from "@/components/landing/LeadFormWorker";

const Index = () => {
  const [clientOpen, setClientOpen] = useState(false);
  const [workerOpen, setWorkerOpen] = useState(false);

  return (
    <main>
      <HeroSection onClientClick={() => setClientOpen(true)} onWorkerClick={() => setWorkerOpen(true)} />
      <FooterSection />
      <LeadFormClient open={clientOpen} onOpenChange={setClientOpen} />
      <LeadFormWorker open={workerOpen} onOpenChange={setWorkerOpen} />
    </main>
  );
};

export default Index;
