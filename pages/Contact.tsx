import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-white/70 text-lg font-light">
            Have a project in mind? We'd love to hear from you. Visit our factory or reach out via phone.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div>
              <h2 className="text-3xl font-serif mb-12">Visit Our Factory</h2>

              <div className="space-y-10">
                {/* Address */}
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-brand-primary/5 text-brand-primary rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Company Address</h4>
                    <p className="text-gray-500 mb-4 font-light leading-relaxed">
                      Laxmi Polymers / PlyNest
                      <br />
                      Plot No. D-76, MIDC, Shendra
                      <br />
                      CHH Sambhajinagar, Maharashtra - 431007
                    </p>

                    <a
                      href="https://www.google.com/maps/place/75,+Shendra+MIDC,+Area,+Kubhephal,+Maharashtra+431154,+India/@19.8819049,75.4950459,20.21z/data=!4m12!1m5!3m4!2zMTnCsDUyJzU0LjYiTiA3NcKwMjknNDEuNiJF!8m2!3d19.8818264!4d75.4949005!3m5!1s0x3bdba50fa85b5f63:0x58d9a632d2a7de2f!8m2!3d19.8819806!4d75.4950257!16s%2Fg%2F11f5sq0wvr?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest hover:underline"
                    >
                      <MapPin size={14} />
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-brand-primary/5 text-brand-primary rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Phone & WhatsApp</h4>
                    <p className="text-brand-primary font-bold text-lg mb-1">
                      +91 9850985027
                    </p>
                    <p className="text-gray-500 font-light">
                      +91 8975459891 (Secondary)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-brand-primary/5 text-brand-primary rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email Address</h4>
                    <p className="text-brand-primary font-bold text-lg">
                      <a
                        href="mailto:plynest@gmail.com"
                        className="hover:underline transition-colors"
                      >
                        plynestfurniture@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-brand-primary/5 text-brand-primary rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Working Hours</h4>
                    <p className="text-gray-500 font-light">
                      Monday — Saturday
                      <br />
                      10:00 AM – 07:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-16 pt-16 border-t border-gray-100">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">
                  Join our social family
                </h4>

                

                <div className="flex gap-6">
                  {/* Instagram Icon Only */}
    <div className="p-4 bg-gray-100 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 cursor-pointer">
      <FaInstagram size={20} />
    </div>

                  <a
                    href="https://www.facebook.com/people/Plynest-Furniture/pfbid02imC5fjjJSgBiA41ncqVFDhRSnLY911sNEq5JmwDgsd1LKZ2GPf2BtP6Fni1S8arLl/?rdid=snyPPoRv9GtRaaYU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DgMijohMv%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href="https://wa.me/919850985027"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-green-500/10 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="h-[500px] lg:h-full min-h-[500px] rounded-sm overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://maps.google.com/maps?q=19.8819806,75.4950257&z=19&output=embed" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PlyNest Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-accent py-20 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif mb-6">
            Visiting for a quote?
          </h3>

          <p className="text-white/80">
            We highly recommend giving us a call before visiting so our
            specialists can be ready with material samples for your specific
            needs.
          </p>
        </div>
      </section>
    </div>
  );
}