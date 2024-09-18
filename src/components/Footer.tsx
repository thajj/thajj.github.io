import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import portfolioData from "@/data/portfolio-data.json";

const Footer = () => {
  const { socialLinks } = portfolioData;

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="mb-6">
          © {new Date().getFullYear()} Toufic Hajj. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/toufic-hajj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={`mailto:${socialLinks.email}`}
            aria-label="Email"
            className="hover:text-blue-400 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MailIcon className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
