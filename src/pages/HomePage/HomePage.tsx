import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import PageHeader from '../../components/PageHeader/PageHeader';

const HomePage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <PageHeader text={t('pageDashboard.header')} />

      <Stack spacing={2} direction="row" sx={{ margin: '10px' }}>
        <Button variant="text">Text Button</Button>

        <Button variant="contained">Contained Button</Button>

        <Button variant="outlined">Outlined Button</Button>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          >
            Primary Color
          </Box>

          <Box sx={{
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          }}
          >
            Light Primary Color
          </Box>

          <Box sx={{
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          }}
          >
            Dark Primary Color
          </Box>

          <Box sx={{
            width: '100%',
            height: '100px',
            background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
            color: theme.palette.primary.contrastText,
          }}
          >
            Gradient
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
          >
            Secondary Color
          </Box>

          <Box sx={{
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.contrastText,
          }}
          >
            Light Secondary Color
          </Box>

          <Box sx={{
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
          }}
          >
            Dark Secondary Color
          </Box>

          <Box sx={{
            width: '100%',
            height: '100px',
            background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
            color: theme.palette.primary.contrastText,
          }}
          >
            Gradient
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
