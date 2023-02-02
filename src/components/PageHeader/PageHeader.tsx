import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface BrowsePageProps {
  text?: string
}

const BrowsePage = ({ text }: BrowsePageProps) => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: '100%',
      height: '126px',
      p: '40px',
      background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      color: theme.palette.primary.contrastText,
    }}
    >
      <Typography variant="h4" component="h1" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.4)' }}>
        {text}
      </Typography>
    </Box>
  );
};

export default BrowsePage;
