"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import portfolioData from "@/data/portfolio-data.json";
import { ExternalLinkIcon, LinkedinIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import BentoDemo from "./FeaturedProject";

const MotionCard = motion(Card);

const MainContent = ({ activeSection, setActiveSection }) => {
  const { sections, experiences, projects, skills, socialLinks } =
    portfolioData;

  return (
    <main className="pt-20">
      {/* Other sections like About, Experience, Projects, Skills, Contact */}

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Image
              src="/assets/logo512.png"
              alt="Toufic Hajj"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </motion.div>
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
            As a seasoned Full Stack Developer with over a decade of experience,
            I specialize in crafting innovative solutions at the intersection of
            AI, blockchain, and cloud technologies. My passion lies in pushing
            the boundaries of what's possible in software development,
            consistently delivering high-performance, scalable applications that
            drive business growth and technological advancement.
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
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
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
          <BentoDemo />
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
                      View Project <ExternalLinkIcon className="ml-1 h-4 w-4" />
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
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <MotionCard
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardContent className="p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
                  <Input id="email" type="email" placeholder="your@email.com" />
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

      {sections.map((section) => (
        <section
          key={section}
          id={section}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center capitalize">
              {section}
            </h2>
            {section === "about" && (
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg mb-4">
                  I'm a passionate full-stack developer with expertise in
                  building scalable web applications and exploring cutting-edge
                  technologies.
                </p>
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get in touch
                </Button>
              </div>
            )}
            {section === "experience" && (
              <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                  <MotionCard
                    key={index}
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.company} | {exp.period}
                      </p>
                      <p className="mt-2">{exp.description}</p>
                    </CardContent>
                  </MotionCard>
                ))}
              </div>
            )}
            {section === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                  <MotionCard
                    key={index}
                    className="h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </MotionCard>
                ))}
              </div>
            )}
            {section === "skills" && (
              <Tabs
                defaultValue={skills[0].category}
                className="max-w-3xl mx-auto"
              >
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8">
                  {skills.map((skillCategory, index) => (
                    <TabsTrigger key={index} value={skillCategory.category}>
                      {skillCategory.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {skills.map((skillCategory, index) => (
                  <TabsContent key={index} value={skillCategory.category}>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}
            {section === "contact" && (
              <div className="max-w-lg mx-auto text-center">
                <p className="mb-4">
                  I'm always open to new opportunities and collaborations. Feel
                  free to reach out!
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open(socialLinks.linkedin, "_blank")}
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(socialLinks.github, "_blank")}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href = `mailto:${socialLinks.email}`)
                    }
                  >
                    Email
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </section>
      ))}
    </main>
  );
};

export default MainContent;
