import { motion } from "motion/react";
import { MessageSquare, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function OtherFurniture() {
  // Filtering for institutional furniture
  const institutionalProducts = products.filter(p => 
    ["hotel-furniture", "hospital-furniture", "school-furniture"].includes(p.id)
  );

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
            alt="Institutional Furniture Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Institutional Furniture</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            High-durability, specialized furniture solutions for Hotels, Hospitals, and Educational Institutions. Engineered for performance and longevity.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {institutionalProducts.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border border-gray-100 rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <Link to={`/products/${p.id}`} className="block h-72 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="p-8">
                  <Link to={`/products/${p.id}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-brand-primary transition-colors font-serif">{p.name}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <Link 
                      to={`/products/${p.id}`}
                      className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest group/link"
                    >
                      View Solutions
                      <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href={`https://wa.me/919850985027?text=${encodeURIComponent(`can you send quote of ${p.name}`)}`}  
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-brand-accent/10 text-brand-accent p-2 rounded-full cursor-pointer hover:bg-brand-accent hover:text-white transition-all shadow-sm"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800" 
                alt="Institutional Quality" 
                className="w-full rounded-sm shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Industrial Grade</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-brand-primary">Built for High Traffic Environments</h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  At PlyNest, we understand that institutional furniture needs to be more than just aesthetically pleasing. It must withstand continuous use, maintain hygiene, and ensure safety.
                </p>
                <p>
                  Our institutional range is built using premium <strong>Amrut Laxmi Polymer</strong> resins and treated hardwoods from Greenply and Action Tesa, ensuring maximum resistance to moisture, termites, and heavy impacts.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    <span>Hygienic easy-clean medical surfaces</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    <span>Fire-retardant and non-toxic materials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    <span>Ergonomic designs for student and staff wellness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Industrial Bulk Solutions</h2>
          <p className="text-white/70 mb-12 text-lg font-light">
            We offer specialized pricing and design consultations for large-scale hospital, school, and hotel projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
           
            <Link 
              to="/contact" 
              className="border border-white/30 text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all inline-block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
