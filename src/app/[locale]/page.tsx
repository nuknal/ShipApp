'use client';
import { motion } from 'framer-motion';
import AppDownloadSection from '@/components/AppDownloadSection';
import AppFAQSection from '@/components/AppFAQSection';
import AppFeaturesSection from '@/components/AppFeaturesSection';
import AppHeroSection from '@/components/AppHeroSection';
import AppScreenshotsSection from '@/components/AppScreenshotsSection';
import AppTestimonialsSection from '@/components/AppTestimonialsSection';
import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <AppHeroSection />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AppFeaturesSection />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AppScreenshotsSection />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AppTestimonialsSection />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AppDownloadSection />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AppFAQSection />
        </motion.div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
