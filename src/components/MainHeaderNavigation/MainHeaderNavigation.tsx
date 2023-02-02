import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const navOptions = [
  {
    path: '/',
    translationKey: 'nav.dashboard',
  },
  {
    path: '/browse',
    translationKey: 'nav.browse',
  },
  {
    path: '/my-learning',
    translationKey: 'nav.myLearning',
  },
];

const MainHeaderNavigation = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(0);

  useEffect(() => {
    navOptions.map((navOption, index) => {
      if (navOption.path === location.pathname) {
        setValue(index);
      }
      return null;
    });
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        textColor="inherit"
        TabIndicatorProps={{ style: { background: theme.palette.primary.contrastText } }}
      >
        {navOptions.map((navOption) => (
          <Tab
            key={navOption.path}
            sx={{ color: 'primary.contrastText' }}
            component="a"
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(e, navOption.path)}
            label={t(navOption.translationKey)}
            href={navOption.path}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MainHeaderNavigation;
