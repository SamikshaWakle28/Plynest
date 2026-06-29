import { Link } from "react-router-dom";
import Logo from "../../assets/LogoF.jpeg";
import Logo1 from "../../assets/LogoF1.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col items-center md:items-start">
          <img 
            src= {Logo1}
            alt="Amrut Laxmi Polymers / PlyNest Logo" 
            className="h-12 w-auto object-contain"
            id="brand-logo-footer"
          />
          <p className="text-gray-500 text-sm mt-6 max-w-xs leading-relaxed">
            Premium furniture solutions and industrial material excellence. Part of the Amrut Laxmi Polymers Industrial Group.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">Quick Links</h3>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Home Furniture</Link>
          <Link to="/other-furniture" className="text-gray-400 hover:text-white transition-colors">Other Furniture</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About PlyNest</Link>
          <Link to="/laxmi-polymers" className="text-gray-400 hover:text-white transition-colors">Amrut Laxmi Polymers</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
        </div>
        
        <div className="text-center md:text-right">
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4">Legacy</h3>
          <p className="text-gray-400 text-sm mb-4">
            Authorized Distributor & Manufacturer <br/>Aurangabad, Maharashtra
          </p>
          <p className="text-gray-500 text-sm">
            © {/*new Date().getFullYear()*/} PlyNest by Amrut Laxmi Polymers.
          </p>
          <p className="text-gray-300 text-xs mt-2 italic font-serif">
            "Every Drop Counts"
          </p>
        </div>
      </div>
    </footer>
  );
}
