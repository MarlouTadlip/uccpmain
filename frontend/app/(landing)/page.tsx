"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion, useInView } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Target,
  Heart,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

export const products = [
  {
    title: "Moonbeam",
    thumbnail: "/hero/1.jpg",
  },
  {
    title: "Cursor",
    thumbnail: "/hero/2.jpg",
  },
  {
    title: "Rogue",
    thumbnail: "/hero/3.jpg",
  },
  {
    title: "Editorially",
    thumbnail: "/hero/4.jpg",
  },
  {
    title: "Editrix AI",
    thumbnail: "/hero/5.jpg",
  },
  {
    title: "Pixel Perfect",
    thumbnail: "/hero/6.jpg",
  },
  {
    title: "Algochurn",
    thumbnail: "/hero/7.jpg",
  },
  {
    title: "Aceternity UI",
    thumbnail: "/hero/8.jpg",
  },
  {
    title: "Tailwind Master Kit",
    thumbnail: "/hero/9.jpg",
  },
  {
    title: "SmartBridge",
    thumbnail: "/hero/10.jpg",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "Service",
    description:
      "Dedicated to serving our fellow students with compassion and excellence.",
    color: "bg-rose-500",
    lightColor: "bg-yellow-100 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
  },
  {
    icon: Users,
    title: "Unity",
    description:
      "Building a strong, inclusive community where every voice matters.",
    color: "bg-blue-500",
    lightColor: "bg-amber-100 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing creative solutions to improve student life and experiences.",
    color: "bg-amber-500",
    lightColor: "bg-yellow-50 dark:bg-yellow-900/30",
    borderColor: "border-yellow-300 dark:border-yellow-700",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding honesty, transparency, and accountability in all we do.",
    color: "bg-emerald-500",
    lightColor:
      "bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20",
    borderColor: "border-yellow-400 dark:border-yellow-600",
  },
];

const sbosImages = [
  {
    image: "/sbos/cas.png",
    alt: "CAS - College of Arts and Sciences",
  },
  {
    image: "/sbos/es.png",
    alt: "ES - Engineering School",
  },
  {
    image: "/sbos/iiee.png",
    alt: "IIEE - Institute of Industrial and Electronics Engineering",
  },
  {
    image: "/sbos/pice.png",
    alt: "PICE - Philippine Institute of Civil Engineers",
  },
  {
    image: "/sbos/psits.png",
    alt: "PSITS - Philippine Society of Information Technology Students",
  },
  {
    image: "/sbos/sjh.png",
    alt: "SJH - School of Justice and Humanities",
  },
];

const Page = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const sbosRef = useRef(null);

  const visionInView = useInView(visionRef, { once: false, margin: "-100px" });
  const missionInView = useInView(missionRef, {
    once: false,
    margin: "-100px",
  });
  const valuesInView = useInView(valuesRef, { once: false, margin: "-100px" });
  const sbosInView = useInView(sbosRef, { once: false, margin: "-100px" });

  return (
    <div>
      <HeroParallax products={products} />

      {/* SBOS Infinite Moving Cards */}
      <section ref={sbosRef} className="py-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-9xl mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={sbosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={sbosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              Our Student Body Organizations
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={sbosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              Supporting diverse student communities across all colleges and
              departments
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={sbosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <InfiniteMovingCards
              items={sbosImages}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              className="py-4"
            />
          </motion.div>
        </div>
      </section>

      <section
        ref={visionRef}
        className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20 dark:from-amber-950/10 dark:via-neutral-900 dark:to-orange-950/10"
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-6">
              <div className="w-2 h-2 bg-neutral-500 rounded-full mr-3 animate-pulse" />
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm uppercase tracking-wider">
                Our Vision
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
              Our Vision
            </h2>
            <div className="w-32 h-1 bg-neutral-300 dark:bg-neutral-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              visionInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-200/20 dark:bg-neutral-800/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl p-12">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-neutral-800 dark:text-neutral-200 text-center font-medium">
                  To be the leading student organization that empowers,
                  inspires, and unites the UC community through exceptional
                  service, innovative programs, and unwavering commitment to
                  student welfare and development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="py-32 px-4 relative overflow-hidden bg-gradient-to-bl from-blue-50/30 via-white to-cyan-50/20 dark:from-blue-950/10 dark:via-neutral-900 dark:to-cyan-950/10"
      >
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-6">
              <div className="w-2 h-2 bg-neutral-500 rounded-full mr-3 animate-pulse" />
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
              Our Mission
            </h2>
            <div className="w-32 h-1 bg-neutral-300 dark:bg-neutral-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              missionInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{
              duration: 1.0,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-200/20 dark:bg-neutral-800/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl p-12">
                <div className="w-20 h-20 mx-auto mb-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-8">
                  {[
                    {
                      title: "Academic Excellence",
                      text: "Foster a vibrant campus culture that promotes academic excellence, personal growth, and social responsibility",
                    },
                    {
                      title: "Student Advocacy",
                      text: "Serve as the voice of the student body, advocating for their rights, needs, and aspirations",
                    },
                    {
                      title: "Future Success",
                      text: "Create meaningful programs and initiatives that enhance student life and prepare students for future success",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={
                        missionInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -30 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + index * 0.15,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex items-start gap-6 text-left"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-neutral-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2 font-serif">
                          {item.title}
                        </h4>
                        <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={valuesRef}
        className="py-32 px-4 relative overflow-hidden bg-gradient-to-r from-yellow-50/30 via-amber-50/30 to-yellow-50/20 dark:from-yellow-950/10 dark:via-amber-950/10 dark:to-yellow-950/10"
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath d='M25 25L0 0h50z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-6">
              <div className="w-2 h-2 bg-neutral-500 rounded-full mr-3 animate-pulse" />
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm uppercase tracking-wider">
                Core Values
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
              Our Core Values
            </h2>
            <div className="w-32 h-1 bg-neutral-300 dark:bg-neutral-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 1.0,
                  delay: 0.2 + index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
                className="text-center p-8 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg border border-neutral-200/50 dark:border-neutral-700/50"
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${value.lightColor} flex items-center justify-center`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center shadow-md`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-serif font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
