import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const languages = [
  { lang: 'en', nativeName: 'English' },
  { lang: 'pt', nativeName: 'Português' },
];

const LanguageChange = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      {languages.map((language) => (
        <Button
          variant="contained"
          key={language.lang}
          style={{ fontWeight: i18n.resolvedLanguage === language.lang ? 'bold' : 'normal' }}
          type="submit"
          onClick={() => i18n.changeLanguage(language.lang)}
        >
          {language.nativeName}
        </Button>
      ))}
    </div>
  );
};

export default LanguageChange;
