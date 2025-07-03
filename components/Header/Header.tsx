import { useState, useEffect } from 'react';
import { Burger, Container, Group, Avatar, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Me' },
  { link: '/projects', label: 'Projects' },
  { link: 'https://www.linkedin.com/in/marcus-taugner-5a25161a4', label: 'Linkedin', external: true },
];


export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  // Update active link on route change
  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  const handleNav = (link: string, external?: boolean) => {
    close();
    if (external) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(link);
    }
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={e => {
        e.preventDefault();
        handleNav(link.link, link.external);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5}>
          <Avatar color="cyan" radius="xl">M</Avatar>
          Marcus Taugner
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Drawer
          opened={opened}
          onClose={close}
          padding="md"
          size="45vw"
          position="top"
          withCloseButton={true}
        >
          <Stack gap="md" align="center">
            {items}
          </Stack>
        </Drawer>
      </Container>
    </header>
  );
}