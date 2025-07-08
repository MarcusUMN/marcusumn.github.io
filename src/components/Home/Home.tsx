import { Container, Image, Title } from '@mantine/core';
import classes from './Home.module.css';

export function Home() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}> Frontend Developer</span> creating engaging, accessible, and user-focused web experiences. Passionate about building great UIs.
          </Title>
        </div>
        <Image src={'./home.png'} className={classes.image} />
      </div>
    </Container>
  );
}