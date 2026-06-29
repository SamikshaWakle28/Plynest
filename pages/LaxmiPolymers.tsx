import { motion } from "motion/react";
import { 
  Droplet, 
  ShieldCheck, 
  Globe, 
  Target, 
  Award,
  Factory,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Laxmi1 from "../assets/Laxmi/LaxmiP1.jpg";
import Laxmi2 from "../assets/Laxmipolymer.jpeg";
import Laxmi3 from "../assets/Laxmi/LaxmiP2.jpg";
import tank from "../assets/Laxmi/LaxmiP3.png";
import PB1 from "../assets/Laxmi/PolymerB1.webp";
import Pipe1 from "../assets/Laxmi/Pipe1.jpg";
import Pipe3 from "../assets/Laxmi/Pipe3.jpg";
import Laxmi4 from "../assets/Laxmi/LaxmiP4.jpeg";

export default function AmrutLaxmiPolymers() {
  const products = [
    {
      title: "PVC Pipes",
      description: "ISI marked high-grade rigid PVC pipes designed for agricultural irrigation, urban plumbing, and industrial drainage systems with superior pressure resistance.",
      icon: <Droplet className="w-6 h-6" />,
      image: Pipe1
    },
    {
      title: "Water Tanks",
      description: "State-of-the-art multilayered storage solutions. UV-stabilized, antimicrobial, and heat-resistant tanks that ensure the purity of every drop.",
      icon: <Target className="w-6 h-6" />,
      image: tank
    },
    {
      title: "Polymer Boards",
      description: "Innovative WPC and PVC boards that are 100% waterproof and termite-proof. The ultimate sustainable alternative for modern construction and premium furniture.",
      icon: <Factory className="w-6 h-6" />,
      image: PB1
    },
    {
      title: "Industrial Solutions",
      description: "Expertise in custom polymer extrusion and injection molding. Providing specialized components for the automotive, construction, and manufacturing sectors.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: Pipe3
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 opacity-20">
          <img 
            src= {Laxmi3}
            alt="Industrial Polymer" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 mx-auto mb-8 shadow-2xl">
               <img 
                src= {Laxmi2}
                alt="Amrut Laxmi Polymers Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight tracking-tight">
              Amrut Laxmi Polymers
            </h1>
            <p className="text-xl md:text-2xl font-light text-brand-accent italic tracking-widest uppercase">
              "Every Drop Counts"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Manufacturing Excellence</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-brand-primary">Precision Engineering, Polymer Perfection</h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light mb-12">
            Amrut Laxmi Polymers is a leader in industrial polymer manufacturing. As the backbone of brands like PlyNest, we provide the foundational materials that define quality in the interior and construction industries. With our advanced facility in Aurangabad, we combine decades of expertise with cutting-edge technology to deliver products that exceed international standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-gray-50 p-8 border-l-4 border-brand-accent">
              <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary flex items-center gap-2">
                <Target size={20} className="text-brand-accent" /> Innovation-Led
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Continuous R&D in polymer science to develop materials that are more durable, recyclable, and efficient for modern industrial applications.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border-l-4 border-brand-primary">
              <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary flex items-center gap-2">
                <Globe size={20} className="text-brand-primary" /> Global Standards
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Adhering to strict quality management systems to ensure that our PVC and polymer solutions perform reliably in the most demanding environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif text-brand-primary">Our Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white overflow-hidden shadow-sm border border-gray-100 rounded-sm group transition-all hover:shadow-xl flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white text-brand-primary rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Trust */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 text-brand-accent mb-6" />
            <h4 className="text-2xl font-bold mb-2">ISI & ISO Certified</h4>
            <p className="text-gray-500 font-light tracking-wide">Compliant with National & International quality benchmarks for PVC manufacturing.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" />
            <h4 className="text-2xl font-bold mb-2">Zero-Failure Policy</h4>
            <p className="text-gray-500 font-light tracking-wide">Rigorous batch testing for pressure, heat, and chemical resistance before every shipment.</p>
          </div>
          <div className="flex flex-col items-center">
            <Droplet className="w-12 h-12 text-brand-accent mb-6" />
            <h4 className="text-2xl font-bold mb-2">Sustainable Materials</h4>
            <p className="text-gray-500 font-light tracking-wide">Utilizing non-toxic, recyclable polymer blends for a greener construction industry.</p>
          </div>
        </div>
      </section>

      {/* Relationship with PlyNest */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] bg-white p-4 rounded-sm shadow-2xl">
              <img 
                src= {Laxmi1}
                alt="PlyNest Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-brand-accent z-10" />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-8 leading-tight">Integration Excellence: <br/><span className="text-brand-accent italic">PlyNest & Polymers</span></h2>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
              Every PlyNest product is built using the high-durability polymer resins and supply chain optimizations provided by Amrut Laxmi Polymers. This integration ensures that our furniture is not just beautiful on the outside, but structurally invincible on the inside.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand-accent rotate-45" />
                <span className="font-light">Direct sourcing of premium plywood cores</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand-accent rotate-45" />
                <span className="font-light">Custom industrial-grade adhesive solutions</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-brand-accent rotate-45" />
                <span className="font-light">Rigorous stress and climate testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img 
                        src= {Laxmi4} 
                        alt="Amrut Laxmi Polymers Logo" 
                        className="w-full h-full object-contain"
                      />
      </section>
      {/* Contact Section */}
      <section className="py-24 px-4 bg-white" id="laxmi-contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 text-brand-primary rounded-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 font-serif">Headquarters</h4>
                <p className="text-gray-500 font-light">Plot No. L-25, MIDC Area,<br/>Waluj, Aurangabad - 431136</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 text-brand-primary rounded-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 font-serif">Contact Sales</h4>
                <p className="text-gray-500 font-light">+91 94222 04514<br/>+91 94222 05615</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 text-brand-primary rounded-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 font-serif">Inquiries</h4>
                <p className="text-gray-500 font-light">info@amrutlaxmi.com<br/>sales@laxmipolymers.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
