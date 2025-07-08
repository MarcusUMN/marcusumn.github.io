import { Card, Text, Group, ActionIcon, Image } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react'; 

interface CardProps {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
}

export function ProjectCard({ title, description, liveLink, githubLink }: CardProps) {
  return (
    <Card shadow="md" radius="md" padding="xl" withBorder>
      <Text size="lg">
        {title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {description}
      </Text>

      <Group mt="md">
        {liveLink && (
          <ActionIcon
            component="a"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="blue"
          >
            <IconExternalLink size={18} />
          </ActionIcon>
        )}
        {githubLink && (
          <ActionIcon
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="gray"
          >
            <Image
    src="/icons/github.svg"
    alt="GitHub"
    width={18}
    height={18}
  />
          </ActionIcon>
        )}
      </Group>
    </Card>
  );
}
