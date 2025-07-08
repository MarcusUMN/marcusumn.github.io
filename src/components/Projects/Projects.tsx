import { Container, SimpleGrid, Title } from '@mantine/core';
import { ProjectCard } from './ProjectCard';

const projectData = [
  {
    title: 'Cribbage Helper',
    description:
      'Built a cribbage service that analyzes hands and recommends the best cards to pick, improving gameplay strategy.',
    liveLink: 'https://marcusumn.github.io/cribbage-helper',
    githubLink: 'https://github.com/MarcusUMN/cribbage-helper',
  },
  {
    title: 'Craigslist Notification Bot',
    description:
      'Python script that checks multiple Craigslist filters and sends alerts for new listings matching user criteria.',
    githubLink: 'https://github.com/MarcusUMN/craigslist-notifier',
  },
];

export const Projects = () => {
  return "Hello, this is the Projects component!";
  return (
    <Container size="md" py="xl">
      <Title order={2} mb="lg">
        Projects
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {projectData.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
