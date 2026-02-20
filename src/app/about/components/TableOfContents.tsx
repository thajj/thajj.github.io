"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Flex, Text } from "@/components/once-ui/components";
import styles from "@/app/about/about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const SCROLL_DURATION_MS = 600;
const SCROLL_OFFSET = 80;
const ACTIVE_THRESHOLD = 120;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animatedScrollTo(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  structure,
  about,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const visibleSections = useMemo(
    () => structure.filter((s) => s.display),
    [structure]
  );

  const orderedIds = useMemo(() => {
    const ids: string[] = [];
    visibleSections.forEach((section) => {
      ids.push(section.title);
      if (about.tableOfContent.subItems) {
        section.items.forEach((item) => ids.push(item));
      }
    });
    return ids;
  }, [visibleSections, about.tableOfContent.subItems]);

  useEffect(() => {
    const updateActive = () => {
      let current: string | null = null;
      for (const id of orderedIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= ACTIVE_THRESHOLD) current = id;
        }
      }
      if (current === null && orderedIds.length > 0) current = orderedIds[0];
      setActiveId((prev) => (current !== prev ? current : prev));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [orderedIds]);

  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const targetY = elementPosition + window.scrollY - offset;
      animatedScrollTo(targetY);
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <Flex
      style={{
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      direction="column"
      hide="s"
    >
      {visibleSections.map((section, sectionIndex) => (
        <Flex key={sectionIndex} gap="12" direction="column">
          <Flex
            style={{ cursor: "pointer" }}
            className={`${styles.hover} ${styles.tocItem} ${activeId === section.title ? styles.tocItemActive : ""}`}
            gap="8"
            alignItems="center"
            onClick={() => scrollTo(section.title, SCROLL_OFFSET)}
          >
            <Flex
              className={styles.tocLine}
              height="1"
              width="16"
              background="neutral-strong"
            />
            <Text className={styles.tocText}>{section.title}</Text>
          </Flex>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item, itemIndex) => (
                  <Flex
                    key={itemIndex}
                    style={{ cursor: "pointer" }}
                    className={`${styles.hover} ${styles.tocItem} ${activeId === item ? styles.tocSubItemActive : ""}`}
                    gap="12"
                    paddingLeft="24"
                    alignItems="center"
                    onClick={() => scrollTo(item, SCROLL_OFFSET)}
                  >
                    <Flex
                      className={styles.tocLine}
                      height="1"
                      width="8"
                      background="neutral-strong"
                    />
                    <Text className={styles.tocText}>{item}</Text>
                  </Flex>
                ))}
              </>
            )}
        </Flex>
      ))}
    </Flex>
  );
};

export default TableOfContents;
