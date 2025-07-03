import { Box, Text, Paper } from '@mantine/core';

export default function Home() {
  return (
    <Box style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 90px)',
      marginTop: 60,
      gap: 48,
    }}>
      <Box style={{ maxWidth: 520 }}>
        <Text style={{ color: '#fff', fontSize: 22, fontWeight: 500, lineHeight: 1.7 }}>
          <span style={{
            background: 'linear-gradient(90deg, #FFD43B 0%, #8C1223 100%)',
            borderRadius: 10,
            padding: '0.18em 0.9em 0.18em 0.7em',
            marginRight: 12,
            fontWeight: 900,
            fontSize: 22,
            color: '#fff',
            boxShadow: '0 2px 12px 0 rgba(140,18,35,0.10)',
            display: 'inline-block',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
          }}>
            Frontend Developer
          </span>
          creating engaging, accessible, and user-focused web experiences. Passionate about building great UIs, collaborating with teams, and making a positive impact through technology.
        </Text>
      </Box>
      <Paper shadow="xl" radius={0} p={0} style={{ background: 'none', border: 'none', width: 320, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/home.png"
          alt="Marcus Taugner photo"
          style={{ width: 308, height: 380, borderRadius: 18, objectFit: 'cover', border: 'none', background: 'none', boxShadow: '0 4px 32px 0 rgba(140,18,35,0.10)' }}
        />
      </Paper>
    </Box>
  );
}
