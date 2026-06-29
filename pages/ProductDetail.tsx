import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  ArrowLeft, 
  MessageSquare, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Image as ImageIcon,
  ChevronRight
} from "lucide-react";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [showMoreImages, setShowMoreImages] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <Link to="/products" className="text-brand-primary font-bold hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const isOtherFurniture = ["hotel-furniture", "hospital-furniture", "school-furniture"].includes(product.id || "");
  const backPath = isOtherFurniture ? "/other-furniture" : "/products";
  const backLabel = isOtherFurniture ? "Other Furniture" : "Home Furniture";

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2 px-2 sticky top-[72px] md:top-[116px] z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to={backPath} className="text-gray-500 hover:text-brand-primary flex items-center gap-1 text-sm">
            <ArrowLeft size={16} /> {backLabel}
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium text-brand-primary">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-gray-100 rounded-sm overflow-hidden shadow-2xl h-fit"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">
              Premium Interior Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-8 text-green-600 bg-green-50 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              <ShieldCheck size={14} /> 10-Year Warranty Guaranteed
            </div>

            <p className="text-gray-600 text-lg leading-relaxed font-light mb-10">
              {product.longDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`https://wa.me/919850985027?text=${encodeURIComponent(`can you send quote of ${product.name}`)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-primary text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-brand-primary/90 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Get a Quote
              </a>
              <a 
                href="#our-work"
                className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ImageIcon size={20} />
                View Our Work
              </a>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-2">Material</h5>
                <p className="text-gray-500 text-sm">710 Grade Plywood, Merino Laminates</p>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-2">Hardware</h5>
                <p className="text-gray-500 text-sm">Action Tesa, Advance Fitted</p>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-2">Completion</h5>
                <p className="text-gray-500 text-sm">15-20 Business Days</p>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-2">Customization</h5>
                <p className="text-gray-500 text-sm">100% Bespoke Designs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Work Section (Gallery) */}
        <section id="our-work" className="mt-32">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Showcase</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6">Our Work</h2>
            <p className="text-gray-500 font-light mb-8 max-w-2xl mx-auto">
              A curated collection of our {product.name} installations across Aurangabad.
            </p>
            <div className="h-1 w-20 bg-brand-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-gray-100 rounded-sm overflow-hidden shadow-lg group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`${product.name} project ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Explore More Collections */}
      <section className="mt-10 max-w-7xl mx-auto px-4 border-t border-gray-100 pt-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-2 italic">Other Collections</h3>
            <p className="text-gray-400 text-sm font-light uppercase tracking-widest">Explore more designs</p>
          </div>
          <Link to={backPath} className="text-brand-primary font-bold text-sm uppercase tracking-widest hover:underline flex items-center gap-2">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
            <Link 
              key={p.id} 
              to={`/products/${p.id}`}
              className="group"
            >
              <div className="aspect-square bg-gray-100 mb-4 overflow-hidden rounded-sm">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wide group-hover:text-brand-primary transition-colors text-center">{p.name}</h4>
              <p className="text-[10px] text-gray-400 mt-1 uppercase text-center tracking-tighter">View Details</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
