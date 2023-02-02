import { useMemo, useState, Suspense } from 'react';

import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

import SubtitlePage from './pages/SubtitlePage/SubtitlePage';
import { createPlatformTheme, defaultPrimaryColor, defaultSecondaryColor } from './Theme/theme';

function App() {
  const [primaryColor, setPrimaryColor] = useState(defaultPrimaryColor);
  const [secondaryColor, setSecondaryColor] = useState(defaultSecondaryColor);

  const theme = useMemo(() => createPlatformTheme(primaryColor, secondaryColor), [primaryColor, secondaryColor]);

  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        

        <Routes>         

          <Route path="/subtitle" element={<SubtitlePage />} />

          <Route path="/*" element={<SubtitlePage />} />
        </Routes>       

        
      </ThemeProvider>
    </>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
