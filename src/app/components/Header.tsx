"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/components/once-ui/components";
import styles from "@/app/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, home, about, blog, work, gallery } from "@/app/resources";

import { motion } from "framer-motion";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const tabs = [
    { id: "world", label: "World" },
    { id: "ny", label: "N.Y." },
    { id: "business", label: "Business" },
    { id: "arts", label: "Arts" },
    { id: "science", label: "Science" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Flex
      style={{ height: "fit-content" }}
      className={styles.position}
      as="header"
      zIndex={9}
      fillWidth
      padding="8"
      justifyContent="center"
    >
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <Flex
        hide="s"
        paddingLeft="12"
        fillWidth
        alignItems="center"
        textVariant="body-default-s"
      >
        {display.location && <>{person.location}</>}
      </Flex>
      <Flex
        background="surface"
        border="neutral-medium"
        borderStyle="solid-1"
        radius="m-4"
        shadow="l"
        padding="4"
        justifyContent="center"
      >
        <Flex gap="4" textVariant="body-default-s">
          {routes["/"] && (
            <ToggleButton
              prefixIcon="home"
              href="/"
              selected={pathname === "/"}
            >
              <Flex paddingX="2" hide="s">
                {home.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/about"] && (
            <ToggleButton
              prefixIcon="person"
              href="/about"
              selected={pathname === "/about"}
            >
              <Flex paddingX="2" hide="s">
                {about.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/work"] && (
            <ToggleButton
              prefixIcon="grid"
              href="/work"
              selected={pathname.startsWith("/work")}
            >
              <Flex paddingX="2" hide="s">
                {work.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/blog"] && (
            <ToggleButton
              prefixIcon="book"
              href="/blog"
              selected={pathname.startsWith("/blog")}
            >
              <Flex paddingX="2" hide="s">
                {blog.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/gallery"] && (
            <ToggleButton
              prefixIcon="gallery"
              href="/gallery"
              selected={pathname.startsWith("/gallery")}
            >
              <Flex paddingX="2" hide="s">
                {gallery.label}
              </Flex>
            </ToggleButton>
          )}
        </Flex>
      </Flex>
      <Flex
        hide="s"
        paddingRight="12"
        fillWidth
        justifyContent="flex-end"
        alignItems="center"
        textVariant="body-default-s"
      >
        {display.time && <TimeDisplay timeZone={person.location} />}
      </Flex>
    </Flex>
  );
};
