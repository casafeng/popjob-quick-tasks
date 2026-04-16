import { useState } from "react";
import LeadFormClient from "@/components/landing/LeadFormClient";
import LeadFormWorker from "@/components/landing/LeadFormWorker";
import heroSvg from "@/assets/hero-illustration.svg";

const Index = () => {
  const [clientOpen, setClientOpen] = useState(false);
  const [workerOpen, setWorkerOpen] = useState(false);

  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#b6ddf4" }}
      >
        <img
          src={heroSvg}
          alt="PopJob landing"
          className="w-full h-auto max-w-[1440px]"
        />
      </div>

      {/* Invisible click targets over the CTA buttons area */}
      <button
        onClick={() => setClientOpen(true)}
        className="fixed z-10 opacity-0 cursor-pointer"
        style={{ left: "8%", bottom: "18%", width: "180px", height: "50px" }}
        aria-label="Trova un worker"
      />
      <button
        onClick={() => setWorkerOpen(true)}
        className="fixed z-10 opacity-0 cursor-pointer"
        style={{ left: "22%", bottom: "18%", width: "180px", height: "50px" }}
        aria-label="Lavora con noi"
      />

      <LeadFormClient open={clientOpen} onOpenChange={setClientOpen} />
      <LeadFormWorker open={workerOpen} onOpenChange={setWorkerOpen} />
    </>
  );
};

export default Index;
