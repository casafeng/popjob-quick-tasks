import { Briefcase } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 bg-foreground text-background">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-6 h-6" />
            <span className="text-xl font-heading font-bold">PopJob</span>
          </div>
          <p className="text-sm opacity-70">Work when you want. Hire when you need.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Link</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><a href="#client-form" className="hover:opacity-100 transition-opacity">Trova un worker</a></li>
            <li><a href="#worker-form" className="hover:opacity-100 transition-opacity">Lavora con noi</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Termini di servizio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contatti</h4>
          <p className="text-sm opacity-70 mb-3">info@popjob.it</p>
          <div className="flex gap-3">
            {["Instagram", "LinkedIn", "TikTok"].map(s => (
              <a key={s} href="#" className="text-xs px-3 py-1.5 rounded-full border border-background/20 opacity-70 hover:opacity-100 transition-opacity">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-xs opacity-50">
        © 2026 PopJob. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default FooterSection;
