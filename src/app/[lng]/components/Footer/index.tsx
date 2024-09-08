import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../../i18n';
import { languages } from '@/app/i18n/setting';

interface FooterProps {
  lng: string;
}

export const Footer = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng, 'footer');
  
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{ lng }</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => (
        <span key={l}>
          {index > 0 && ' or '}
          <Link href={`/${l}`}>
            {l}
          </Link>
        </span>
      ))}
    </footer>
  );
};
