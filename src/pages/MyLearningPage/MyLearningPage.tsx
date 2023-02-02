import { useTranslation } from 'react-i18next';

import PageHeader from '../../components/PageHeader/PageHeader';

const MyLearningPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader text={t('pageMyLearning.header')} />

      {t('pageMyLearning.description')}
    </>
  );
};

export default MyLearningPage;
