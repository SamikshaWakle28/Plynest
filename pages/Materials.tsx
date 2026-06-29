import { motion } from "motion/react";
import { ShieldCheck, Leaf, Zap, Crown } from "lucide-react";

export default function Materials() {
  const brands = [
    { name: "Greenply", logo: "https://www.greenply.com/assets/images/logo.png", focus: "Plywood & Veneers", desc: "India's highest quality plywood, ensuring longevity and termite resistance." },
    { name: "Action Tesa", logo: "https://www.actiontesa.com/wp-content/uploads/2018/07/logo.png", focus: "MDF & Boards", desc: "Engineered boards for seamless modular finishes and versatile interior applications." },
    { name: "Marino", logo: "https://www.marinolaminates.com/wp-content/uploads/2021/04/marino-logo.png", focus: "Laminates", desc: "Wide range of decorative laminates with superior scratch and heat resistance." },
    { name: "Greenlam", logo: "https://www.greenlam.com/india/wp-content/themes/greenlam/images/logo.png", focus: "Finishing Touches", desc: "International standard surfaces that add elegance and luxury to every piece." },
    { name: "Advance", logo: "https://advancelam.com/wp-content/uploads/2019/04/Advance-Logo-1.png", focus: "Hardware & Surfaces", desc: "Durable hardware and protective surfaces for daily heavy-duty use." },
  ];

  const features = [
    { icon: <ShieldCheck className="text-brand-accent" />, title: "Termite Proof", desc: "Chemically treated wood that withstands environmental challenges." },
    { icon: <Leaf className="text-green-600" />, title: "Eco-Friendly", desc: "Sustainably sourced materials compliant with modern E1/E0 standards." },
    { icon: <Zap className="text-blue-500" />, title: "Moisture Resistant", desc: "Special Boiling Water Proof (BWP) materials for kitchens and bathrooms." },
    { icon: <Crown className="text-yellow-500" />, title: "Premium Hardware", desc: "Soft-close channels and hydraulic hinges from globally certified brands." },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Quality First</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-8">Materials & Partners</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg font-light leading-relaxed">
            The soul of furniture lies in the quality of the wood and the precision of the hardware. At PlyNest, we never compromise on the core.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 transform origin-top translate-x-20" />
      </section>

      {/* Brand Partners */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-16 text-center uppercase tracking-widest">Our Certified Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {brands.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 bg-white rounded-sm shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="h-20 w-40 bg-gray-50 p-4 mb-6 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={b.logo} 
                    alt={`${b.name} Logo`} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-black text-brand-primary tracking-tighter">${b.name}</span>`;
                    }}
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-brand-secondary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full">
                  {b.focus}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Badges */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 p-3 bg-white/5 rounded-sm">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{f.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">Transparency is our policy</h2>
          <p className="text-gray-600 mb-0 font-light leading-relaxed">
            We encourage our clients to inspect the raw materials at our factory (MIDC Shendra) before pieces are finished. Feel the weight, check the certification, and see the craftsmanship firsthand.
          </p>
        </div>
      </section>
    </div>
  );
}
