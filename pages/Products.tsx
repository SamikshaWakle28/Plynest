import { motion } from "motion/react";
import { MessageSquare, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  const homeProducts = products.filter(p => 
    !["hotel-furniture", "hospital-furniture", "school-furniture"].includes(p.id)
  );
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-primary text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Home Furniture Collections</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            From modern modular kitchens to executive office spaces, we craft furniture that blends functionality with timeless aesthetics.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-4 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeProducts.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border border-gray-100 rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Link to={`/products/${p.id}`} className="block h-64 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="p-6">
                  <Link to={`/products/${p.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-brand-primary transition-colors">{p.name}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/products/${p.id}`}
                      className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest group/link"
                    >
                      View Details
                      <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href={`https://wa.me/919850985027?text=${encodeURIComponent(`can you send quote of ${p.name}`)}`}  
                      target="_blank" 
                      rel="noreferrer"
                      className="text-brand-accent p-1 cursor-pointer hover:scale-110 transition-transform"
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


      {/* Custom Design CTA */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Need a custom design?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Our interior specialists work with you to plan every inch of your space.
          </p>
          <a 
            href="https://wa.me/919850985027" 
            target="_blank" 
            rel="noreferrer"
            className="bg-brand-accent text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-brand-accent/90 shadow-lg inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
