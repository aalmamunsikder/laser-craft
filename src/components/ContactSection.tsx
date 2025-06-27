import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-100px 0px' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted');
    // Reset form (would typically be done with form state)
    (e.target as HTMLFormElement).reset();
  };

  const formVariants = {
    hidden: { 
      opacity: 0,
      x: -60,
      scale: 0.9,
      filter: 'blur(10px)',
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        type: 'spring',
        bounce: 0.3,
        delay: 0.2,
      }
    }
  };

  const infoVariants = {
    hidden: { 
      opacity: 0,
      x: 60,
      scale: 0.9,
      filter: 'blur(10px)',
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        type: 'spring',
        bounce: 0.3,
        delay: 0.4,
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -30,
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
    <section ref={ref} id="contact" className="w-full py-24 bg-black relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {/* Dynamic laser grid */}
        <motion.div 
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/25 to-transparent"
          animate={isInView ? {
            scaleX: [0, 1, 0.8, 1],
            opacity: [0, 0.5, 0.3, 0.5],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-red-600/20 to-transparent"
          animate={isInView ? {
            scaleX: [0, 0.7, 1, 0.6],
            opacity: [0, 0.4, 0.6, 0.4],
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
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
            Get In Touch
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
            Ready to elevate your brand with premium laser engraving? Contact us
            today for a consultation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div 
            className="bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-gray-800 hover:border-red-900 transition-all duration-300 group"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: '0 20px 40px -10px rgba(239, 68, 68, 0.3), 0 0 30px rgba(239, 68, 68, 0.2)',
              borderColor: 'rgb(127, 29, 29)',
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              Send Us a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <motion.input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300" 
                  required 
                  whileFocus={{
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgb(239, 68, 68)',
                  }}
                />
              </motion.div>

              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <motion.input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300" 
                  required 
                  whileFocus={{
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgb(239, 68, 68)',
                  }}
                />
              </motion.div>

              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <motion.input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300" 
                  required 
                  whileFocus={{
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgb(239, 68, 68)',
                  }}
                />
              </motion.div>

              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <motion.textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 resize-none" 
                  required 
                  whileFocus={{
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgb(239, 68, 68)',
                  }}
                />
              </motion.div>

              <motion.button 
                type="submit" 
                className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group border border-red-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.6), 0 0 50px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                style={{
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                <span>Send Message</span>
                <SendIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div 
            variants={infoVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 
              className="text-2xl font-bold mb-8"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-8">
              {[
                {
                  icon: <MailIcon className="w-6 h-6 text-red-600" />,
                  title: 'Email',
                  lines: ['info@lasercraft.com', 'support@lasercraft.com'],
                },
                {
                  icon: <PhoneIcon className="w-6 h-6 text-red-600" />,
                  title: 'Phone',
                  lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
                },
                {
                  icon: <MapPinIcon className="w-6 h-6 text-red-600" />,
                  title: 'Location',
                  lines: ['123 Laser Avenue', 'San Francisco, CA 94103'],
                },
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    x: 5,
                  }}
                >
                  <motion.div 
                    className="bg-red-600 bg-opacity-20 p-3 rounded-full border border-red-900/30"
                    style={{
                      boxShadow: '0 0 15px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{
                      boxShadow: '0 0 25px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      scale: 1.05,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    {item.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 }}
              >
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-400">
                  <p>Monday - Friday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                  <p>Saturday:</p>
                  <p>10:00 AM - 4:00 PM</p>
                  <p>Sunday:</p>
                  <p>Closed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background accents with animation */}
      <motion.div 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-900 rounded-full opacity-5 blur-3xl"
        animate={isInView ? {
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-red-900 rounded-full opacity-5 blur-3xl"
        animate={isInView ? {
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
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

export default ContactSection;