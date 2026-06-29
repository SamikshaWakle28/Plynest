export interface Product {
  id: string;
  name: string;
  image: string;
  images: string[];
  desc: string;
  longDesc: string;
}

//import kitchen1 from "../assets/furniture/WhatsApp Image 2026-05-06 at 3.46.13 PM (1).jpeg";   
//import kitchen7 from "../assets/furniture/WhatsApp Image 2026-05-06 at 3.46.15 PM (2).jpeg"; 
import kitchen2 from "../assets/Web/Kitchen2.jpeg";
import kitchen3 from "../assets/Web/Kitchen3.jpeg";
import kitchen4 from "../assets/Web/Kitchen4.jpeg";
import kitchen5 from "../assets/Web/Kitchen5.jpeg";
import kitchen8 from "../assets/Web/kitchen8.jpeg";
import kitchen9 from "../assets/Web/kitchen9.jpeg";
import kitchen10 from "../assets/Web/kitchen10.jpeg";
import kitchen11 from "../assets/Web/kitchen11.jpeg";
import kitchen12 from "../assets/Web/kitchen12.jpeg";
import kitchen13 from "../assets/Web/kitchen13.jpeg";

import Bed1 from "../assets/Web/Bed1.jpeg"; 
import Bed2 from "../assets/Web/Bed2.jpeg"; 
import Bed3 from "../assets/Web/Bed3.jpeg"; 
import Bed4 from "../assets/Web/Bed4.jpeg"; 
import Bed5 from "../assets/Web/Bed5.jpeg"; 
import Bed6 from "../assets/Web/Bed6.jpeg"; 
import Bed7 from "../assets/Web/Bed7.jpeg"; 
import Bed8 from "../assets/Web/Bed8.jpeg"; 
import Bed9 from "../assets/Web/Bed9.jpeg"; 
import Bed10 from "../assets/Web/Bed10.jpeg"; 
import Bed11 from "../assets/Web/Bed11.jpeg"; 
import Bed12 from "../assets/Web/Bed12.jpeg"; 
import Bed13 from "../assets/Web/Bed13.jpeg"; 
import Bed14 from "../assets/Web/Bed14.jpeg"; 

import DT1 from "../assets/Web/DT1.jpeg";
import DT2 from "../assets/Web/DT2.jpeg"; 
import DT3 from "../assets/Web/DT3.jpeg"; 
import DT4 from "../assets/Web/DT4.jpeg"; 
import DT5 from "../assets/Web/DT5.jpeg"; 
import DT6 from "../assets/Web/DT6.jpeg"; 
import DT7 from "../assets/Web/DT7.jpg";

import TV1 from "../assets/furniture/Tv1.jpg"; 
import TV2 from "../assets/furniture/Tv2.webp"; 
import TV3 from "../assets/Web/Living 1.jpeg"; 
import TV4 from "../assets/Web/Living 2.jpeg"; 
import TV5 from "../assets/Web/Living 5.jpeg"; 
import TV6 from "../assets/Web/TV1.jpeg"; 
import TV7 from "../assets/Web/TV2.jpeg"; 
import TV8 from "../assets/Web/TV3.jpeg"; 
import TV9 from "../assets/Web/TV4.jpeg"; 
import TV10 from "../assets/Web/TV5.jpeg"; 
import TV11 from "../assets/Web/TV6.jpeg"; 

import Wardrobes1 from "../assets/Web/Bed4.jpeg"; 
import Wardrobes2 from "../assets/Web/Wardrobes2.jpeg"; 
import Wardrobes3 from "../assets/Web/Wardrobes3.jpeg"; 
import Wardrobes4 from "../assets/Web/Wardrobes4.jpeg"; 
import Wardrobes5 from "../assets/Web/Wardrobes5.jpeg"; 
import Wardrobes6 from "../assets/Web/Wardrobes6.jpeg"; 

import Sofa1 from "../assets/furniture/Sofa2.jpg"; 
import Sofa2 from "../assets/furniture/Sofa1.webp"; 
import Sofa3 from "../assets/Web/Living 6.jpeg"; 
import Sofa4 from "../assets/Web/Sofa7.jpeg"; 
import Sofa5 from "../assets/Web/Sofa8.jpeg"; 
import Sofa6 from "../assets/Web/Sofa9.jpeg"; 
import Sofa7 from "../assets/Web/Sofa10.jpeg"; 
import Sofa8 from "../assets/Web/Sofa11.jpeg"; 
import Sofa9 from "../assets/Web/Sofa12.jpeg"; 
import Sofa10 from "../assets/Web/Sofa13.jpeg"; 
import Sofa11 from "../assets/Web/Sofa14.jpeg"; 
import Sofa12 from "../assets/Web/Sofa15.jpeg"; 
import Sofa13 from "../assets/Web/Sofa16.jpeg"; 
import Sofa14 from "../assets/Web/Sofa17.jpeg"; 
import Sofa15 from "../assets/Web/Sofa4.jpeg"; 
import Sofa16 from "../assets/Web/Sofa5.jpeg"; 
import Sofa17 from "../assets/Web/Sofa6.jpeg";

import School1 from "../assets/Web/school1.webp";
import School2 from "../assets/Web/school2.webp";
import School3 from "../assets/Web/school3.jpeg";

import Hotel1 from "../assets/other/Hotel1.jpg";
import Hotel2 from "../assets/other/Hotel2.jpg";
import Hotel3 from "../assets/other/Hotel3.jpg";


 

export const products: Product[] = [
  { 
    id: "modular-kitchen",
    name: "Modular Kitchen", 
    image: kitchen2,
    images: [
      kitchen2, 
      kitchen3, 
      kitchen4, 
      kitchen5, 
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800", 
      kitchen8, 
      kitchen9, 
      kitchen10, 
      kitchen11, 
      kitchen12, 
      kitchen13 
    ],
    desc: "Customizable high-gloss and matte finishes with hydraulic fittings.",
    longDesc: "Our Modular Kitchens are designed to maximize space and efficiency. We use high-quality BWP (Boiling Water Proof) plywood from Greenply and Action Tesa. Choose from a wide range of finishes including acrylic, laminate, and glass. Our designs feature ergonomic layouts, soft-close channels from Advance, and custom storage solutions for every Indian kitchen need."
  },
  { 
    id: "tv-units",
    name: "TV Units", 
    image: TV1,
    images: [
      TV1,  
      TV3, 
      TV4, 
      TV5, 
      TV6, 
      TV7, 
      TV8, 
      TV9, 
      TV10, 
      TV11
    ],
    desc: "Minimalist and luxury wall-mounted units for your entertainment center.",
    longDesc: "Transform your living room with our contemporary TV units. From minimalist floating shelves to wall-to-wall luxury entertainment centers, our designs integrate cable management and ambient lighting. Crafted with premium veneers and laminates, these units provide ample storage for devices and decor."
  },
  { 
    id: "bedroom",
    name: "Bedroom", 
    image: Bed4,
    images: [
      Bed1, Bed2, Bed3, Bed4, 
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800", Bed5, Bed6, Bed7, Bed8, Bed9, Bed10, Bed11, Bed12, Bed13, Bed14
    ],
    desc: "Complete sets including king/queen beds, side tables, and dressers.",
    longDesc: "Our bedroom sets prioritize rest and elegance. We offer king and queen size beds with optional hydraulic storage. Each set includes perfectly matched nightstands, a dressing table, and a wardrobe option. Using termite-proof Greenply plywood, we ensure your bedroom furniture lasts for decades."
  },
  { 
    id: "wardrobes",
    name: "Wardrobes", 
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jZwIPDP0wiDsN_DYxlhivJi7fbpC_OAHog&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCM1LCOVbs-ST6fahHfgobiNGzJteKe6LeQ&s", Wardrobes1, "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800", Wardrobes2, Wardrobes3, Wardrobes4, Wardrobes5, Wardrobes6 
    ],
    desc: "Space-saving sliding and swing-door wardrobes with smart storage.",
    longDesc: "Maximize your storage with our custom wardrobes. Whether you prefer classic swing doors or modern sliding systems, our wardrobes are internally optimized with drawers, hanging rods, and hidden lockers. We use high-grade Action Tesa boards for internal structuring and premium laminates for external aesthetics."
  },
  { 
    id: "sofa-sets",
    name: "Sofa Sets", 
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800", 
      Sofa1,  
      Sofa3, 
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800", 
      Sofa4, Sofa5, Sofa6, Sofa7, Sofa8, 
      Sofa9, Sofa10, Sofa11, Sofa12, 
      Sofa13, Sofa14, Sofa15, Sofa16, 
      Sofa17, 
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Premium fabric and leatherette sofas crafted for ultimate comfort.",
    longDesc: "Our sofa sets are the centerpiece of any home. Available in L-shape, 3+2+1, and lounge configurations. We use high-density foam and treated wood frames to ensure both comfort and structural integrity. Choose from hundreds of fabric and leatherette options to match your decor."
  },
  { 
    id: "dressing-tables",
    name: "Dressing Tables", 
    image: DT7,
    images: [
       "data:image/jpeg;base64,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", 
       "https://thearchitectsdiary.com/wp-content/uploads/2024/07/Dressing-Table-14-1024x1024.jpg", 
       "https://i.pinimg.com/736x/4c/ea/b3/4ceab310dc37540f72fc08b69a901316.jpg", 
       "https://i.pinimg.com/236x/f2/d9/3d/f2d93df4e9b0b4e028c7a73a94b76491.jpg", 
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYHno_Wj9kakZF_vbbw12Rzm2cGcQcmJCi3EDcyZ97w&s", 
       "https://i.pinimg.com/236x/0a/90/a4/0a90a4a7a5e90620effeedb10825ef18.jpg", 
       "https://ouchcart.com/cdn/shop/files/Kusiak_Vanity_1_600x_0b85e42c-7334-4a01-8cd3-91055d3eec01.webp?v=1721402513&width=600", 
       "https://apollo.olx.in/v1/files/bhtw93mupqm5-IN/image",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicUqythbsHAFsBueoK4xqt2BVWcziMi3Bgsw3-S8VmQ&s", 
      DT1, 
      DT2, 
      DT3, 
      DT4, 
      DT5, 
      DT6 
    ],
    desc: "Elegant designs with wide mirrors and organized cosmetic storage.",
    longDesc: "Functional elegance for your vanity. Our dressing tables feature full-length or designer mirrors with integrated LED lighting. Ample drawer space with customized partitions helps in keeping your jewelry and cosmetics perfectly organized."
  },
  { 
    id: "office-desks",
    name: "Office Desks", 
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Ergonomic workstations and executive desks for productivity.",
    longDesc: "Designed for professional workspaces. We create executive desks and modular workstations that include cable cutouts, side runners, and sturdy pedestals. Using Action Tesa MDF and high-pressure laminates from Marino, we ensure a scratch-resistant work surface."
  },

  { 
    id: "hotel-furniture",
    name: "Hotel Furniture", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eZQz2s6l8lTNe2VnsgLuPhYV9bwZE_CCoXc3v3erfQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbgCjnLPTxWiD2uikQ48H47rUbw-1vytRZQVFduC20w&s=10",
      Hotel3,
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHowDKinBeaK3hBfX-IUxU-1hVR3DYw6zQxz985bdjnA&s=10"
    ],
    desc: "Luxury hospitality solutions for lobbies, guest rooms, and banquet halls.",
    longDesc: "We provide complete hospitality furniture solutions that balance luxury with durability. Our hotel range includes bespoke lobby furniture, high-end guest room beds, executive suite wardrobes, and ergonomic reception desks. Every piece is crafted to withstand heavy use while maintaining a premium aesthetic."
  },
  { 
    id: "hospital-furniture",
    name: "Hospital Furniture", 
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxMP678f4qmw-Z1PGq1fl2jCFPAy9ut0Q8vyB4_dtRg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCYnn3URjPExjWW1s3ysdDoC7OXUIBGoju-NBvyBZ_Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpvQsMKR4KdVbs1dEx_l89VsOT-rGIfV1z_GF8IqTXQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrjtWTLYVNojje9PUJwTQ4S1TllMTqNAHcvt_C-Vi-g&s=10",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    ],
    desc: "Hygienic and durable furniture for patient rooms, waiting areas, and clinics.",
    longDesc: "Our hospital furniture is built with hygiene and patient comfort as top priorities. We use antimicrobial surfaces and moisture-resistant polymer boards to ensure a sterile environment. The range includes patient room units, durable waiting area seating, doctor's desks, and storage solutions for medical labs."
  },
  { 
    id: "school-furniture",
    name: "School Furniture", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VvtjmeucT74wUx6G3yVdGw14v0YiQDwG4x7lvPmSbQ&s=10",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVpLlv6GAHWt97WPMMUEyOkVJmVclCzQ5q2kCtNzbIg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjwtZyXg0O0EySDXXBTjLMYAOcmRuESHlKYxCCN8Pmw&s=10",
      School3,
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtSF304b43WjRYjLTG3GhweWwnkl2F97b7KUM6O19PQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuRmDghVzvr94H7R6NEc54DqUMRlpRiDFWEiuq2WjjA&s"
    ],
    desc: "Ergonomic desks, durable benches, and creative laboratory furniture.",
    longDesc: "Create an inspiring learning environment with our ergonomic school furniture. We manufacture high-durability classroom desks, stackable chairs, library shelving systems, and specialized laboratory workstations. Built to withstand the daily rigors of student life, our furniture uses rounded edges and non-toxic materials for safety."
  }
];
