import { Flex } from "@/components/once-ui/components";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProjectsProps {
  projects: any[];
  range?: [number, number?];
}

export function Projects({ projects, range }: ProjectsProps) {
  const displayedProjects = range
    ? projects.slice(range[0], range[1] ?? projects.length)
    : projects;

  return (
    <Flex fillWidth gap="l" marginBottom="40" paddingX="l" direction="column">
      {displayedProjects.map((post, index) => (
        <ScrollReveal key={post.slug} delay={index * 0.1} y={30}>
          <ProjectCard
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={
              post.metadata.team?.map((member: { avatar: any }) => ({
                src: member.avatar,
              })) || []
            }
          />
        </ScrollReveal>
      ))}
    </Flex>
  );
}
