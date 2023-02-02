import { useTranslation } from 'react-i18next';

import PageHeader from '../../components/PageHeader/PageHeader';

const BrowsePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader text={t('pageBrowse.header')} />

      {t('pageBrowse.description')}
    </>
  );
};

export default BrowsePage;
