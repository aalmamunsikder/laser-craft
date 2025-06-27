import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-100px 0px' 
  });

  const products = [
    {
      id: 1,
      name: 'Metal Business Card',
      image: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Premium stainless steel with laser-etched details'
    },
    {
      id: 2,
      name: 'Custom Nameplate',
      image: 'https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Brushed aluminum with precision engraving'
    },
    {
      id: 3,
      name: 'Wooden Keepsake',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Sustainably sourced wood with intricate laser designs'
    },
    {
      id: 4,
      name: 'Acrylic Award',
      image: 'https://images.unsplash.com/photo-1619118884592-11b151f1ae11?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Crystal-clear acrylic with internal 3D laser etching'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      x: -40,
      scale: 0.8,
      rotateY: -15,
      filter: 'blur(10px)',
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        type: 'spring',
        bounce: 0.3,
        ease: 'easeOut',
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -40,
      scale: 0.9,
      filter: 'blur(8px)',
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        type: 'spring',
        bounce: 0.2,
      }
    }
  };

  return (
    <section ref={ref} className="w-full py-20 bg-black relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {/* Floating laser lines */}
        <motion.div 
          className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/20 to-transparent"
          animate={isInView ? {
            scaleX: [0, 1, 0.7, 1],
            opacity: [0, 0.4, 0.2, 0.4],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-red-600/15 to-transparent"
          animate={isInView ? {
            scaleX: [0, 0.8, 1, 0.6],
            opacity: [0, 0.3, 0.5, 0.3],
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              textShadow: isInView ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none',
            }}
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              textShadow: isInView ? '0 0 10px rgba(255, 255, 255, 0.1)' : 'none',
            }}
          >
            Explore our premium laser-engraved products, crafted with precision
            and attention to detail.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800"
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(239, 68, 68, 0.3)',
                borderColor: 'rgb(127, 29, 29)',
              }}
              whileTap={{
                scale: 0.98,
              }}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="aspect-video overflow-hidden relative">
                {/* Image overlay effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                />
                
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                  whileHover={{
                    filter: 'brightness(1.1) contrast(1.1)',
                  }}
                />
                
                {/* Animated scanning line effect */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    y: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Content with enhanced styling */}
              <motion.div 
                className="absolute bottom-0 left-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-1 group-hover:text-white transition-colors duration-300"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {product.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300"
                  style={{
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {product.description}
                </motion.p>
              </motion.div>

              {/* Enhanced border with glow effect */}
              <motion.div 
                className="absolute inset-0 border border-gray-800 rounded-lg group-hover:border-red-900 transition-all duration-300 pointer-events-none"
                whileHover={{
                  boxShadow: 'inset 0 0 20px rgba(239, 68, 68, 0.2)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced background accents with animation */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 bg-red-900 rounded-full opacity-5 blur-3xl"
        animate={isInView ? {
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -right-20 w-48 h-48 bg-red-900 rounded-full opacity-3 blur-2xl"
        animate={isInView ? {
          scale: [1, 1.5, 1],
          opacity: [0.03, 0.08, 0.03],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </section>
  );
};

export default GallerySection;