"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link?: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="min-h-screen md:h-[180vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* Desktop Parallax */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hidden md:block"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Mobile Carousel */}
      <div className="md:hidden px-4 pb-12">
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex space-x-4 pb-4">
            {products.map((product) => (
              <MobileProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-4">
          Swipe to see more →
        </p>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <motion.div 
      className="max-w-7xl relative mx-auto py-12 md:py-40 px-4 w-full left-0 top-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.h1 
        className="text-3xl md:text-7xl font-bold dark:text-white leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        Service <br /> Above Self
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-sm md:text-xl mt-4 md:mt-8 dark:text-neutral-200 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </motion.p>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link?: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl overflow-hidden rounded-lg h-full w-full"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-300 group-hover/product:scale-105"
          alt={product.title}
        />
      </a>
    </motion.div>
  );
};

// Mobile Product Card Component
export const MobileProductCard = ({
  product,
}: {
  product: {
    title: string;
    link?: string;
    thumbnail: string;
  };
}) => {
  return (
    <a
      href={product.link}
      className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
    >
      <div className="relative w-64 h-64">
        <Image
          src={product.thumbnail}
          fill
          className="object-cover"
          alt={product.title}
        />
      </div>
    </a>
  );
};
