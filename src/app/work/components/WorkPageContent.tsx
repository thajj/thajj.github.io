"use client";

import { useMemo, useState } from "react";
import { Flex, Tag, Text } from "@/components/once-ui/components";
import { Projects } from "@/app/work/components/Projects";
import { Timeline } from "@/components/ui/timeline";

type Project = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
    tags?: string[];
    team?: { avatar: string }[];
  };
  content: string;
};

interface WorkPageContentProps {
  sortedProjects: Project[];
}

export function WorkPageContent({ sortedProjects }: WorkPageContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    sortedProjects.forEach((p) => {
      (p.metadata.tags || []).forEach((t: string) => set.add(t));
    });
    return Array.from(set).sort();
  }, [sortedProjects]);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return sortedProjects;
    return sortedProjects.filter(
      (p) => p.metadata.tags && p.metadata.tags.includes(selectedTag)
    );
  }, [sortedProjects, selectedTag]);

  const projectsByYear = useMemo(() => {
    const acc: Record<string, Project[]> = {};
    filteredProjects.forEach((project) => {
      const year = new Date(project.metadata.publishedAt)
        .getFullYear()
        .toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
    });
    return acc;
  }, [filteredProjects]);

  const timelineData = useMemo(
    () =>
      Object.entries(projectsByYear)
        .map(([year, projects]) => ({
          title: year,
          content: <Projects projects={projects} />,
        }))
        .reverse(),
    [projectsByYear]
  );

  return (
    <Flex fillWidth maxWidth="m" direction="column" gap="l">
      {allTags.length > 0 && (
        <Flex direction="column" gap="s" paddingX="l">
          <Text variant="body-default-s" onBackground="neutral-weak">
            Filter by tag
          </Text>
          <Flex gap="s" wrap>
            <Tag
              size="m"
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer" }}
              className={
                selectedTag === null
                  ? "ring-2 ring-offset-2 ring-neutral-strong"
                  : ""
              }
              onClick={() => setSelectedTag(null)}
              onKeyDown={(e) =>
                e.key === "Enter" && setSelectedTag(null)
              }
            >
              All
            </Tag>
            {allTags.map((tag) => (
              <Tag
                key={tag}
                size="m"
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                className={
                  selectedTag === tag
                    ? "ring-2 ring-offset-2 ring-neutral-strong"
                    : ""
                }
                onClick={() => setSelectedTag(tag)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedTag(tag)
                }
              >
                {tag}
              </Tag>
            ))}
          </Flex>
        </Flex>
      )}
      {timelineData.length > 0 ? (
        <Timeline data={timelineData} />
      ) : (
        <Flex paddingY="xl" paddingX="l" justifyContent="center">
          <Text onBackground="neutral-weak">
            No projects match the selected filter.
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
