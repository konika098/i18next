import Link from 'next/link';
import { useTranslation } from '../../i18n';
import { Footer } from '../components/Footer';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, 'second-page'); // Pass the appropriate namespace

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>
        {t('back-to-home')}
      </Link>
      <Footer lng={lng} />
    </>
  );
}
