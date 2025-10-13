import { useTranslation } from 'react-i18next';

export default function BottomFooter() {
  const { t } = useTranslation('footer');

  return (
    <div className="border-t border-gray-200 py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-600">
              {t('bottom.copyright', {
                link: (
                  <a href="#" className="text-blue-600 hover:underline">
                    {t('bottom.poweredBy')}
                  </a>
                ),
              })}
            </p>

            <div className="flex items-center space-x-2 pt-3">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="/payPal.png" alt="PayPal" className="h-6" />
              <img src="/skrill.png" alt="Skrill" className="h-6" />
              <img src="/klarna.png" alt="Klarna" className="h-6" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t('bottom.links.terms')}
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t('bottom.links.privacy')}
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t('bottom.links.orderTracking')}
          </a>
        </div>
      </div>
    </div>
  );
}
