import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Users,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Music,
  Headphones,
  Volume1
} from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import Video from "../assets/Video1.mp4"
import Laxmi1 from "../assets/Laxmipolymer.jpeg";
import Laxmi2 from "../assets/Laxmi/LaxmiP5.jpeg";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState("/video.mp4");
  const nativeVideoRef = useRef<HTMLVideoElement>(null);
  const categories = products.slice(0, 6);
  

  const brands = [
    { name: "Greenply", logo: "https://www.greenply.com/assets/images/logo.png" },
    { name: "Action Tesa", logo: "https://www.actiontesa.com/wp-content/uploads/2018/07/logo.png" },
    { name: "Marino", logo: "https://www.marinolaminates.com/wp-content/uploads/2021/04/marino-logo.png" },
    { name: "Greenlam", logo: "https://www.greenlam.com/india/wp-content/themes/greenlam/images/logo.png" },
    { name: "Advance", logo: "https://advancelam.com/wp-content/uploads/2019/04/Advance-Logo-1.png" }
  ];

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    
    if (nativeVideoRef.current) {
      nativeVideoRef.current.muted = nextMuted;
      // Safeguard autoplay browser policies by triggering play on click if needed
      if (!nextMuted) {
        nativeVideoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            ref={nativeVideoRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] min-w-full min-h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onError={() => {
              if (videoSrc === "/video.mp4") {
                // Fallback to high speed, royalty-free furniture interior CDN link if the local file is missing
                setVideoSrc(Video);
              }
            }}
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>

        {/* Audio Toggle Button */}
        <div className="absolute bottom-10 right-10 z-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleMute}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-4 rounded-full border border-white/20 transition-all shadow-2xl flex items-center gap-3"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            <AnimatePresence mode="wait">
              {isMuted ? (
                <motion.div
                  key="muted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <VolumeX size={20} />
                  {/*<span className="text-[10px] font-bold uppercase tracking-widest">Audio Muted</span>*/}
                </motion.div>
              ) : (
                <motion.div
                  key="unmuted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Volume2 size={20} />
                  {/*<span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Audio On</span>*/}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            {/*<span className="inline-block px-4 py-1.5 bg-brand-accent/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              Established Quality
            </span>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1] text-balance">
              Crafting Spaces Where <br />
              <span className="italic">Memories</span> Reside.
            </h2>
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-lg font-light leading-relaxed">
              Premium furniture solutions for modern homes and offices, built with the finest materials and masterful craftsmanship.
            </p>*/}
            <div className="flex absolute top-60 left-10">
              <Link to="/products" className="bg-brand-accent text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-accent/90 transition-all flex items-center gap-7 group shadow-xl">
                Explore Collection
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Bar */}
        {/*<div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden md:block">
          <div className="bg-white p-6 md:p-8 grid grid-cols-3 gap-8 shadow-2xl rounded-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl">10+ Years</h4>
                <p className="text-gray-500 text-sm">Of Industry Expertise</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-x border-gray-100 px-8">
              <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl">2000+</h4>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl">Premium</h4>
                <p className="text-gray-500 text-sm">Materials Guaranteed</p>
              </div>
            </div>
          </div>
        </div>*/}
      </section>

      {/* Categories Section Preview */}
      <section className="py-20 md:py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Modern Interiors</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6">Our Collections</h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((cat) => (
              <motion.div 
                key={cat.id}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-lg"
              >
                <Link to={`/products/${cat.id}`}>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-semibold text-white mb-2">{cat.name}</h3>
                    <div className="flex items-center text-brand-accent font-bold text-sm uppercase tracking-tighter">
                      View Details <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline">
              View All Home Furniture <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Furniture Section */}
      <section className="py-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Professional Spaces</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-primary">Furniture for Institutions</h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                Beyond homes, we specialize in high-durability furniture for Hotels, Hospitals, and Schools. Engineered for performance and built to last.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">Hotels</h4>
                  <p className="text-xs text-gray-500">Luxury Hospitality</p>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">Hospitals</h4>
                  <p className="text-xs text-gray-500">Hygienic Care</p>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">Schools</h4>
                  <p className="text-xs text-gray-500">Creative Learning</p>
                </div>
              </div>
              <Link to="/other-furniture" className="bg-brand-primary text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-primary/90 flex items-center justify-center gap-2 group w-full sm:w-auto">
                Discover Other Furniture 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400" 
                  alt="Hotel Furniture" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" 
                  alt="Hospital Furniture" 
                  className="w-full h-48 object-cover rounded-sm shadow-lg"
                />
              </div>
              <div className="pt-4">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400" 
                  alt="School Furniture" 
                  className="w-full h-105 object-cover rounded-sm shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=800" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/30 -z-0 rounded-sm hidden md:block" />
          </div>

          <div>
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-8">Plynest: A Legacy of Quality</h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Associated with <strong>Amrut Laxmi Polymers</strong>, PlyNest has been a pioneer in creating attractive, durable, and modern furniture. Since our inception, we have been driven by a passion for woodwork and interior design excellence.
            </p>
            <Link to="/about" className="border-2 border-brand-primary text-brand-primary px-8 py-4 font-bold hover:bg-brand-primary hover:text-white transition-all inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Materials Section */}
      <section className="py-18 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            We Use Only Premium Certified Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {brands.map((brand) => (
              <motion.div 
                key={brand.name} 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="h-16 w-32 md:h-20 md:w-40 bg-gray-50 rounded-lg p-4 flex items-center justify-center shadow-sm border border-gray-100">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} Logo`} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-black text-gray-800 tracking-tighter">${brand.name}</span>`;
                    }}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laxmi Polymers Parent Brand Section */}
      <section className="py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={Laxmi2}
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/25 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block">Parent Company</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Amrut Laxmi Polymers</h2>
              <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
                The strength behind PlyNest. Amrut Laxmi Polymers is a pioneer in premium material distribution, ensuring that every furniture piece we build starts with the finest foundations.
              </p>
              <Link 
                to="/laxmi-polymers" 
                className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 font-bold rounded-sm border border-transparent hover:bg-brand-accent hover:text-white transition-all shadow-xl group"
              >
                Learn More About Amrut Laxmi Polymers 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl shrink-0"
            >
               <img 
                src={Laxmi1}
                alt="Amrut Laxmi Polymers Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
