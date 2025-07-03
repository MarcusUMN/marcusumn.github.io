import { Box, Group, Button } from '@mantine/core';
import Link from 'next/link';

const indigo = '#228be6';
const white = '#fff';

export default function TopBar({ active = 'home' }: { active?: 'home' | 'about' | 'projects' }) {
  return (
    <Box style={{ position: 'absolute', top: 24, left: 32, right: 32, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Box
          style={{
            width: 54,
            height: 54,
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #fff 0%, #FFD43B 60%, #8C1223 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2.5px solid #8C1223',
            boxShadow: '0 4px 18px 0 rgba(140,18,35,0.10), 0 2px 12px 0 rgba(255,183,27,0.08)',
            userSelect: 'none',
            marginRight: 2,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              color: '#8C1223',
              fontWeight: 900,
              fontSize: 32,
              letterSpacing: 0,
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 2px 8px rgba(140,18,35,0.13)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.12)',
              boxShadow: '0 1.5px 8px 0 rgba(255,183,27,0.10)',
            }}
          >
            M
          </span>
        </Box>
        <span style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: 22,
          letterSpacing: 1.2,
          userSelect: 'none',
          textShadow: '0 2px 8px rgba(140,18,35,0.10)',
          fontFamily: 'Inter, sans-serif',
        }}>
          Marcus Taugner
        </span>
      </Box>
      <Group gap={8}>
        <Button
          component={Link}
          href="/"
          size="sm"
          radius="xl"
          variant={active === 'home' ? 'white' : 'subtle'}
          color="indigo"
          style={{ fontWeight: 700, fontSize: 15, padding: '0.3rem 1.1rem', opacity: active === 'home' ? 0.92 : 0.85, pointerEvents: active === 'home' ? 'none' : undefined, border: active === 'home' ? `2px solid ${indigo}` : undefined, color: active === 'home' ? indigo : white, background: active === 'home' ? white : undefined }}
        >
          Home
        </Button>
        <Button
          component={Link}
          href="/about"
          size="sm"
          radius="xl"
          variant={active === 'about' ? 'white' : 'subtle'}
          color="indigo"
          style={{ fontWeight: 700, fontSize: 15, padding: '0.3rem 1.1rem', opacity: active === 'about' ? 0.92 : 0.85, pointerEvents: active === 'about' ? 'none' : undefined, border: active === 'about' ? `2px solid ${indigo}` : undefined, color: active === 'about' ? indigo : white, background: active === 'about' ? white : undefined }}
        >
          About Me
        </Button>
        <Button
          component={Link}
          href="/projects"
          size="sm"
          radius="xl"
          variant={active === 'projects' ? 'white' : 'subtle'}
          color="indigo"
          style={{ fontWeight: 700, fontSize: 15, padding: '0.3rem 1.1rem', opacity: active === 'projects' ? 0.92 : 0.85, pointerEvents: active === 'projects' ? 'none' : undefined, border: active === 'projects' ? `2px solid ${indigo}` : undefined, color: active === 'projects' ? indigo : white, background: active === 'projects' ? white : undefined }}
        >
          Projects
        </Button>
        <Button
          component="a"
          href="https://www.linkedin.com/in/marcus-taugner-5a25161a4"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          radius="xl"
          variant="subtle"
          color="indigo"
          style={{ fontWeight: 700, fontSize: 15, padding: '0.3rem 1.1rem', color: white, opacity: 0.85 }}
        >
          LinkedIn
        </Button>
      </Group>
    </Box>
  );
}
