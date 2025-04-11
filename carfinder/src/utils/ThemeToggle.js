import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
