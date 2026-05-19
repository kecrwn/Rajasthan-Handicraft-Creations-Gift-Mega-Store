import Image from 'next/image';
import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';

const PRODUCTS = [
  {
    category: "Home Showpieces",
    description: "Ganesha & Buddha Idols",
    image: "https://picsum.photos/seed/homedecor123/400/500",
  },
  {
    category: "Bandarwars",
    description: "Seasonal Essentials",
    image: "https://picsum.photos/seed/festive456/400/500",
  },
  {
    category: "Return Gifts",
    description: "Corporate & Weddings",
    image: "https://picsum.photos/seed/gifts789/400/500",
  },
  {
    category: "Traditional Toys",
    description: "Handcrafted Art",
    image: "https://picsum.photos/seed/toys012/400/500",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-[#3d2b1f] overflow-x-hidden font-sans">
      <header className="h-16 flex items-center justify-between px-6 md:px-10 border-b border-[#3d2b1f]/10 bg-white/50 backdrop-blur-sm z-50 sticky top-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#b45309] rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-serif font-bold text-xs">RH</span>
          </div>
          <h1 className="font-serif text-lg font-bold tracking-tight uppercase hidden sm:block">Rajasthan Handicraft Creations</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-[#3d2b1f]/70">
          <a href="#" className="hover:text-[#3d2b1f] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#3d2b1f] transition-colors">About</a>
          <a href="#products" className="hover:text-[#3d2b1f] transition-colors">Products</a>
          <a href="#reviews" className="hover:text-[#3d2b1f] transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-[#3d2b1f] transition-colors">Contact</a>
        </nav>
        <button className="bg-[#3d2b1f] text-white px-4 md:px-6 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#b45309] transition-colors">
          WhatsApp Shop
        </button>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="flex flex-col md:flex-row min-h-[600px] lg:h-[70vh] overflow-hidden border-b border-[#3d2b1f]/10">
          <div className="w-full md:w-3/5 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-white to-transparent">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-10 h-[1px] bg-[#b45309]"></span>
                <span className="text-[#b45309] text-[10px] font-bold uppercase tracking-[0.3em]">Direct from Manufacturers</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-8 italic">
                Premium Indian <br />
                <span className="font-bold not-italic">Handicrafts.</span>
              </h2>
              <p className="text-sm md:text-base text-[#3d2b1f]/70 leading-relaxed max-w-lg mb-10 italic">
                Discover our exclusive collection of royal home decor, traditional toys, and unique festive gifts crafted in the heart of Jaipur. We pride ourselves on delivering unique, premium-quality products to your home.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center bg-[#b45309]/10 px-6 py-3 rounded-full border border-[#b45309]/20">
                  <span className="text-[#b45309] font-bold text-xl mr-3">4.9</span>
                  <div className="flex text-[#b45309] text-xs space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                  <span className="ml-3 text-[10px] sm:text-xs font-bold uppercase text-[#b45309] tracking-wider">Google Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5 p-8 relative bg-[#efece6] flex-shrink-0 min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
            >
              <div className="w-full h-full max-w-md border-[12px] md:border-[16px] border-white shadow-2xl relative overflow-hidden group">
                <Image
                  src="https://picsum.photos/seed/hero-handicraft/800/800"
                  alt="Traditional Royal Decor"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute bottom-0 right-0 bg-[#b45309] text-white px-6 py-4 font-serif italic text-lg md:text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  Traditional Royal Decor
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="products" className="flex flex-col md:flex-row border-b border-[#3d2b1f]/10 relative z-10">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-1/4 p-6 lg:p-8 flex flex-col group cursor-pointer hover:bg-white transition-colors border-b md:border-b-0 md:border-r border-[#3d2b1f]/10 last:border-r-0 last:border-b-0"
            >
              <span className="text-[10px] md:text-xs font-bold text-[#b45309] mb-3 uppercase tracking-widest">
                0{index + 1} / {product.category.split(' ')[0]}
              </span>
              <h3 className="font-serif text-2xl mb-4 italic">{product.category}</h3>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-[#f0ede6]">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] lg:text-xs uppercase font-bold tracking-widest opacity-60 mt-auto pt-2">
                {product.description}
              </p>
            </motion.div>
          ))}
        </section>
      </main>

      <footer id="contact" className="bg-[#3d2b1f] text-[#fdfbf7] flex flex-col lg:flex-row border-t border-white/10 z-20 relative">
        <div className="w-full lg:w-1/3 p-10 lg:p-14 space-y-3 flex flex-col justify-center">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] opacity-60 mb-3">Our Location</p>
          <p className="text-base lg:text-lg leading-relaxed font-serif italic text-white/90">
            14/256, Kaveri Path, Sector 12,<br />
            Mansarovar, Jaipur,<br />
            Rajasthan 302020, India
          </p>
        </div>
        
        <div className="w-full lg:w-1/3 p-10 lg:p-14 border-y lg:border-y-0 lg:border-x border-white/10 flex flex-col items-center justify-center bg-black/10">
          <div className="flex flex-wrap gap-3 lg:gap-4 mb-6 justify-center">
            <span className="text-[10px] lg:text-xs font-bold px-3 py-1.5 border border-white/20 rounded-md tracking-wider text-[#d4af37]">NFC PAY</span>
            <span className="text-[10px] lg:text-xs font-bold px-3 py-1.5 border border-white/20 rounded-md tracking-wider text-[#d4af37]">DELIVERY</span>
            <span className="text-[10px] lg:text-xs font-bold px-3 py-1.5 border border-white/20 rounded-md tracking-wider text-[#d4af37]">PARKING</span>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center text-[#d4af37] gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs lg:text-sm uppercase tracking-[0.15em] text-center italic text-white/80">
              &quot;Good quality and price reasonable.&quot;
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 p-10 lg:p-14 text-center lg:text-right space-y-2 flex flex-col justify-center">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Visiting Hours</p>
          <p className="text-sm lg:text-base font-bold tracking-wide">Mon - Fri: 10 AM - 9:30 PM</p>
          <p className="text-sm lg:text-base font-bold tracking-wide">Sat - Sun: 10 AM - 10:30 PM</p>
          
          <div className="pt-8">
            <a href="#" className="inline-block text-[10px] lg:text-xs italic opacity-60 hover:opacity-100 transition-opacity border-b border-transparent hover:border-white/40 pb-1">
              Follow along @rjhandicraftcreation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
