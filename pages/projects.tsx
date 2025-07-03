import { Card, Text, Badge, Button, Group } from '@mantine/core';

export default function Projects() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 400, width: '100%' }}>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Projects</Text>
          <Badge color="gray">Coming Soon</Badge>
        </Group>
      </Card>
    </div>
  );
}
