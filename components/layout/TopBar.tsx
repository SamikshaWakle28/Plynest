import { Phone, Clock, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-primary text-white py-2 px-4 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone size={14} /> +91 89754 59891</span>
          <a href="mailto:samikshawakle28@gmail.com" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
            <Mail size={14} /> plynestfurniture0@gmail.com
          </a>
          <span className="flex items-center gap-2 font-serif italic text-white/80">Associated with Laxmi Polymers</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><Clock size={14} /> 10 AM – 7 PM</span>
        </div>
      </div>
    </div>
  );
}
