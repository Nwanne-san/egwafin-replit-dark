import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Components ---

function AnimatedCounter({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

// --- Page ---

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-black">
      {/* Floating Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 glass-nav rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold">
            <TrendingUp size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">
            Egwafin<span className="text-primary">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#products" className="hover:text-primary transition-colors">
            Products
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="rounded-full font-semibold">
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-medium">
          <a href="#home" onClick={toggleMenu} className="hover:text-primary">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="hover:text-primary">
            About
          </a>
          <a
            href="#services"
            onClick={toggleMenu}
            className="hover:text-primary"
          >
            Services
          </a>
          <a
            href="#products"
            onClick={toggleMenu}
            className="hover:text-primary"
          >
            Products
          </a>
          <Button asChild className="rounded-full mt-4" size="lg">
            <a href="#contact" onClick={toggleMenu}>
              Get Started
            </a>
          </Button>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <ShieldCheck size={16} />
              Licensed by CBN
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Empowering <br />
              Your Growth with <br />
              <span className="text-primary relative inline-block">
                Tailored
                <Sparkles className="absolute -top-4 -right-6 text-primary w-6 h-6 animate-pulse" />
              </span>{" "}
              Solutions
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
              We are a licensed Nigerian microfinance bank dedicated to
              empowering SMEs, farmers, and ambitious entrepreneurs. Your
              success is our mission.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full h-14 px-8 text-base font-semibold"
              >
                <a href="#services">Explore Our Services</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-base font-semibold hover:bg-white hover:text-black border-white/20"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 max-w-md mx-auto">
              <img
                src="/images/hero-businesswoman.png"
                alt="Confident Nigerian Businesswoman"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-card border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">10+</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg">Years Experience</p>
                <p className="text-white/50 text-sm">
                  Trusted financial partner
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-white/5 rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 shadow-2xl">
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">
                <AnimatedCounter end={2000} />+
              </h3>
              <p className="text-sm md:text-base text-white/60 font-medium">
                SMEs Financed
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={10} />+
              </h3>
              <p className="text-sm md:text-base text-white/60 font-medium">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={800} />
                M+
              </h3>
              <p className="text-sm md:text-base text-white/60 font-medium">
                Naira Disbursed
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={150} />
                M+
              </h3>
              <p className="text-sm md:text-base text-white/60 font-medium">
                Naira in Assets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-6"
          >
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              OUR MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Turning Ideas Into{" "}
              <span className="text-white/50 italic font-serif">
                Masterpieces
              </span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              At Egwafin MFB, we believe that every great business starts with a
              single idea. Our mission is to provide the financial fuel needed
              to turn those ideas into thriving enterprises. Whether you're
              tending to crops or scaling a tech startup, we stand by you as a
              partner in growth.
            </p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "Tailored financial advice",
                "Flexible repayment terms",
                "Community-focused growth",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <img
              src="/images/value-entrepreneurs.png"
              alt="Entrepreneurs meeting"
              className="absolute top-0 right-0 w-[80%] h-[65%] object-cover rounded-3xl border border-white/10 shadow-2xl z-10"
            />
            <img
              src="/images/value-farmer.png"
              alt="Farmer"
              className="absolute bottom-0 left-0 w-[65%] h-[65%] object-cover rounded-3xl border border-white/10 shadow-2xl z-20"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-primary text-black font-bold py-3 px-6 rounded-full shadow-xl rotate-[-5deg] border border-black/10 backdrop-blur-sm whitespace-nowrap">
              A TRUSTED FINANCIAL PARTNER
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee Banner */}
      <section className="py-12 border-y border-white/10 bg-card/50 overflow-hidden flex whitespace-nowrap">
        <div className="flex w-[200%] marquee-scroll">
          <div className="flex items-center gap-8 w-1/2 justify-around px-4">
            <span
              className="text-5xl md:text-7xl font-black text-transparent stroke-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              Innovate
            </span>
            <span className="text-3xl text-primary">✦</span>
            <span className="text-5xl md:text-7xl font-black">Inspire</span>
            <span className="text-3xl text-primary">✦</span>
            <span
              className="text-5xl md:text-7xl font-black text-transparent stroke-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              Create
            </span>
            <span className="text-3xl text-primary">✦</span>
            <span className="text-5xl md:text-7xl font-black">Grow</span>
            <span className="text-3xl text-primary">✦</span>
            <span className="text-5xl md:text-7xl font-black text-primary">
              Thrive
            </span>
            <span className="text-3xl text-primary">✦</span>
          </div>
          <div className="flex items-center gap-8 w-1/2 justify-around px-4">
            <span
              className="text-5xl md:text-7xl font-black text-transparent stroke-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              Innovate
            </span>
            <span className="text-3xl text-primary">✦</span>
            <span className="text-5xl md:text-7xl font-black">Inspire</span>
            <span className="text-3xl text-primary">✦</span>
            <span
              className="text-5xl md:text-7xl font-black text-transparent stroke-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              Create
            </span>
            <span className="text-3xl text-primary">✦</span>
            <span className="text-5xl md:text-7xl font-black">Grow</span>
            <span className="text-3xl text-primary">✦</span>
            <span className="text-5xl md:text-7xl font-black text-primary">
              Thrive
            </span>
            <span className="text-3xl text-primary">✦</span>
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Our Services
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  title: "Tailored Loans",
                  desc: "Customized financial support for SMEs, agricultural projects, and personal needs with flexible terms.",
                },
                {
                  num: "02",
                  title: "Safe & Secure Deposits",
                  desc: "Grow your wealth with our high-yield savings and fixed deposit accounts built on a rock-solid foundation.",
                },
                {
                  num: "03",
                  title: "Market Access",
                  desc: "We connect our business clients with prospective buyers and trusted suppliers within our network.",
                },
                {
                  num: "04",
                  title: "Human Capital Development",
                  desc: "Gain access to training resources, workshops, and mentorship programs to elevate your business acumen.",
                },
              ].map((service, i) => (
                <details
                  key={i}
                  className="group border border-white/10 bg-card rounded-2xl overflow-hidden hover:border-primary transition-colors duration-300"
                >
                  <summary className="cursor-pointer p-6 font-bold text-xl flex items-center justify-between list-none focus:outline-none">
                    <div className="flex items-center gap-4">
                      <span className="text-white/30 text-sm font-mono">
                        {service.num}
                      </span>
                      <span>{service.title}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                      <ArrowRight
                        size={16}
                        className="group-open:rotate-90 transition-transform"
                      />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-white/60 leading-relaxed text-sm md:text-base border-t border-white/5 mx-6 mt-2">
                    <p className="mt-4">{service.desc}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square lg:aspect-[4/5]"
          >
            <img
              src="/images/services.png"
              alt="Services Overview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 bg-primary rounded-2xl p-6 text-black flex items-center justify-between hover:scale-[1.02] transition-transform cursor-pointer shadow-xl">
              <div>
                <p className="font-bold text-lg">Ready to accelerate?</p>
                <p className="text-black/70 text-sm font-medium">
                  See how we work
                </p>
              </div>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-primary">
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-card border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-white/60">
              We combine the speed of a modern fintech with the security and
              reliability of a traditional bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Quick & Easy Application",
                desc: "No endless paperwork. Get approved fast and access your funds when you need them most.",
              },
              {
                icon: ShieldCheck,
                title: "Competitive Interest Rates",
                desc: "We offer some of the most accessible and fair rates in the market to ensure your business thrives.",
              },
              {
                icon: Handshake,
                title: "Dedicated Customer Support",
                desc: "A dedicated account manager who understands your unique business landscape and goals.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
                OUR PORTFOLIO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Products designed <br />
                for your journey
              </h2>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-white/20 hover:bg-white hover:text-black"
            >
              View All Products
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/product-business.png",
                title: "SME Business Loan",
                desc: "Scale your operations with flexible working capital.",
              },
              {
                img: "/images/product-farmer.png",
                title: "Agricultural Loan",
                desc: "Empowering farmers with tools, seeds, and equipment financing.",
              },
              {
                img: "/images/product-personal.png",
                title: "Personal Savings",
                desc: "Secure your family's future with our high-yield accounts.",
              },
            ].map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-card aspect-[4/5] flex flex-col justify-end"
              >
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold mb-2">{prod.title}</h3>
                  <p className="text-white/70 mb-6 text-sm">{prod.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Trusted by Growth Leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chinedu Okeke",
                role: "CEO, TechHive Solutions",
                text: "Egwafin understood our vision when traditional banks wouldn't even look at us. Their SME loan helped us scale our operations across three states.",
              },
              {
                name: "Aisha Bello",
                role: "Commercial Farmer",
                text: "The agricultural financing from Egwafin allowed me to purchase automated irrigation equipment. My yield doubled in just one season.",
              },
              {
                name: "Folake Adeyemi",
                role: "Retail Entrepreneur",
                text: "Customer service is exceptional. My dedicated account manager feels like an extension of my own business team. Highly recommended.",
              },
            ].map((test, i) => (
              <div
                key={i}
                className="bg-background border border-white/5 p-8 rounded-3xl relative"
              >
                <div className="absolute -top-4 right-8 text-primary opacity-20">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <div className="flex gap-1 text-primary mb-6">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-white/80 leading-relaxed mb-8 italic">
                  "{test.text}"
                </p>
                <div>
                  <h4 className="font-bold">{test.name}</h4>
                  <p className="text-sm text-white/50">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-black py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Get in Touch <br />
              Today!
            </h2>
            <p className="text-black/70 mb-12 text-lg max-w-md">
              Ready to take the next step? Our team of financial experts is
              ready to help you navigate your journey to success.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p className="text-black/70">
                    Plot 2, Suite 1, Egwafin House, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold">Call Us</p>
                  <p className="text-black/70">08061965876</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-black/70">support@egwafinmfb.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">
                    Full Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 focus-visible:ring-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 focus-visible:ring-primary h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">
                  Subject
                </label>
                <Input
                  placeholder="How can we help?"
                  className="bg-white/5 border-white/10 focus-visible:ring-primary h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="bg-white/5 border-white/10 focus-visible:ring-primary min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full mt-4 h-14 text-base bg-primary text-black hover:bg-white hover:text-black"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                  <TrendingUp size={20} />
                </div>
                <span className="font-bold text-2xl tracking-tight">
                  Egwafin<span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-white/50 mb-6 max-w-xs">
                Empowering SMEs, farmers, and entrepreneurs with tailored
                financial solutions for a brighter future.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                <ShieldCheck size={14} className="text-primary" />
                Licensed by CBN
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-white/50">
                <li>
                  <a
                    href="#home"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-primary transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Legal</h4>
              <ul className="flex flex-col gap-3 text-white/50">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
              <p className="text-white/50 mb-4 text-sm">
                Subscribe to get the latest financial insights and updates.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-white/5 border-white/10"
                />
                <Button className="bg-primary text-black hover:bg-white hover:text-black">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2026. All Rights Reserved. Egwafin MFB</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
