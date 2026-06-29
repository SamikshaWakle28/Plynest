import { motion } from "motion/react";
import { Award, ShieldCheck, Heart, Zap } from "lucide-react";
import About1 from "../assets/carousel-2.jpg";
import About2 from "../assets/Owner img.jpeg";
export default function About() {
  const values = [
    { icon: <Award />, title: "Excellence", description: "Woven into every joint and finish of our furniture." },
    { icon: <ShieldCheck />, title: "Durability", description: "Built to last generations using premium certified materials." },
    { icon: <Heart />, title: "Customer First", description: "Your vision is our blueprint. We customize to your soul." },
    { icon: <Zap />, title: "Innovation", description: "Modern modular designs that optimize your living space." },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Since 2014</span>
          <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-6 italic">Our Story & Vision</h1>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            PlyNest (A brand by <span className="font-semibold text-brand-primary">Amrut Laxmi Polymers</span>) is more than just a furniture company. We are a team of craftsmen dedicated to turning wood into comfort.
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">The Beginning</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We started with a simple belief: <span className="text-brand-primary font-medium italic">"Believe in the Best"</span>. In 2014, in the heart of Aurangabad, our founders set out to redefine household furniture. What began as a small workshop focused on quality woodwork quickly grew as locals recognized the difference in our craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By 2016, supported by our growing family of 2,000+ happy customers, we expanded our team and services to include full interior solutions, modular kitchens, and office transformations.
            </p>
          </motion.div>
          <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden relative shadow-2xl">
            <img 
              src= {About1}
              alt="Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-4 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden shadow-2xl max-w-sm mx-auto">
            <img 
              src= {About2}
              alt="Founder" 
              className="w-full h-full object-cover "
            />
          </div>
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4 mb-8">Meet Our Founder</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg italic font-serif border-l-4 border-brand-primary pl-6">
              "Quality is not an act, it is a habit. At PlyNest, we don't just build furniture; we create foundations for happy homes and professional workspaces."
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              Founded under his vision, PlyNest has grown from a local workshop into a premier furniture brand in Aurangabad, dedicated to blending traditional craftsmanship with modern innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16">What Defines Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <div key={i} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laxmi Polymers Association */}
      <section className="py-24 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">Part of Amrut Laxmi Polymers</h2>
          <p className="text-gray-600 mb-0 italic font-serif text-lg">
            "Our association with Laxmi Polymers ensures a robust supply chain of the highest quality materials, allowing us to maintain our promise of excellence at competitive value."
          </p>
        </div>
      </section>
    </div>
  );
}
