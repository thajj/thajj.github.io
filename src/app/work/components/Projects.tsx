import { Flex } from "@/components/once-ui/components";
import { ProjectCard } from "@/components/ProjectCard";

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
      {displayedProjects.map((post) => (
        <ProjectCard
          key={post.slug}
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
      ))}
    </Flex>
  );
}
