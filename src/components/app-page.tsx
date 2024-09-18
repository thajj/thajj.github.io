"use client";
import "@/translations/i18n";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ReactTyped, Typed } from "react-typed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
  ExternalLinkIcon,
  ArrowUpIcon,
} from "lucide-react";
import portfolioData from "@/data/portfolio-data.json";

const MotionCard = motion(Card);

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [typed, setTyped] = useState<Typed | undefined>();
  const typedRef = useRef(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { sections, experiences, projects, skills, socialLinks } =
    portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Toufic Hajj
          </motion.h1>
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`text-sm uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                  activeSection === section
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 flex flex-col space-y-2"
            >
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-sm uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {section}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span ref={typedRef}></span>
            </motion.h2>
            <ReactTyped
              strings={["Toufic Hajj"]}
              typeSpeed={40}
              backSpeed={50}
              loop
              typedRef={setTyped}
            />
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            >
              Innovating at the Intersection of AI, Blockchain, and Cloud
              Technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20"
                >
                  <LinkedinIcon className="mr-2 h-5 w-5" /> Connect
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Get in Touch
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              As a seasoned Full Stack Developer with over a decade of
              experience, I specialize in crafting innovative solutions at the
              intersection of AI, blockchain, and cloud technologies. My passion
              lies in pushing the boundaries of what's possible in software
              development, consistently delivering high-performance, scalable
              applications that drive business growth and technological
              advancement.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="py-20 bg-gray-100 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Professional Journey
            </h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MotionCard
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {exp.company} | {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </CardContent>
                  </MotionCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MotionCard
                    className="h-full flex flex-col"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,

                      damping: 10,
                    }}
                  >
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold mb-3">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center transition-colors duration-200 mt-auto"
                        whileHover={{ x: 5 }}
                      >
                        View Project{" "}
                        <ExternalLinkIcon className="ml-1 h-4 w-4" />
                      </motion.a>
                    </CardContent>
                  </MotionCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-20 bg-gray-100 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Expertise
            </h2>
            <div className="max-w-4xl mx-auto">
              <Tabs
                defaultValue={skills[0].category.toLowerCase()}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                  {skills.map((skill, index) => (
                    <TabsTrigger
                      key={index}
                      value={skill.category.toLowerCase()}
                      className="text-sm"
                    >
                      {skill.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {skills.map((skill, index) => (
                  <TabsContent key={index} value={skill.category.toLowerCase()}>
                    <MotionCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          {skill.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <Badge variant="outline">{item}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </MotionCard>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get in Touch
            </h2>
            <MotionCard
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardContent className="p-8">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </MotionCard>
          </div>
        </motion.section>
      </main>

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
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
