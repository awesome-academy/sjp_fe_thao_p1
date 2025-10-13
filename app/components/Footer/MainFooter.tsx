import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { HiClock, HiMail, HiPhone } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export default function MainFooter() {
  const { t } = useTranslation('footer');

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6">
            {t('sections.help.title')}
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            {t('sections.help.description')}
          </p>

          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <HiClock className="w-4 h-4 mr-2 text-gray-500" />
              <span>{t('sections.help.schedule')}</span>
            </div>

            <div className="flex items-center text-lg font-bold">
              <HiPhone className="w-5 h-5 mr-2 text-gray-500" />
              <span>{t('sections.help.phone')}</span>
            </div>

            <div className="flex items-center text-sm">
              <HiMail className="w-4 h-4 mr-2 text-gray-500" />
              <div>
                <p className="text-gray-600">{t('sections.help.emailTitle')}</p>
                <p className="font-medium">{t('sections.help.email')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Make Money with Us */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6">
            {t('sections.makeMoney.title')}
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.sellOnOrgani')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.sellServices')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.sellBusiness')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.sellApps')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.becomeAffiliate')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.advertiseProducts')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.sellPublish')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.makeMoney.links.becomeVendor')}
              </a>
            </li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6">
            {t('sections.letUsHelp.title')}
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.accessibility')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.yourOrders')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.returns')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.shipping')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.refund')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.privacy')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.terms')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.cookies')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.letUsHelp.links.helpCenter')}
              </a>
            </li>
          </ul>
        </div>

        {/* Get to Know Us */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6">
            {t('sections.getToKnow.title')}
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.careers')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.about')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.investor')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.devices')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.reviews')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.social')}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                {t('sections.getToKnow.links.stores')}
              </a>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-6">
            {t('sections.downloadApp.title')}
          </h4>
          <div className="space-y-3">
            <a href="#" className="block">
              <div className="flex items-center bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-xs">{t('sections.downloadApp.getItOn')}</p>
                  <p className="font-semibold">
                    {t('sections.downloadApp.googlePlay')}
                  </p>
                </div>
              </div>
            </a>

            <a href="#" className="block">
              <div className="flex items-center bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors">
                <FaApple className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-xs">
                    {t('sections.downloadApp.downloadOn')}
                  </p>
                  <p className="font-semibold">
                    {t('sections.downloadApp.appStore')}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8">
            <h5 className="font-semibold text-gray-800 mb-4">
              {t('sections.downloadApp.followUs')}
            </h5>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-400 text-white rounded flex items-center justify-center hover:bg-blue-500"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-pink-600 text-white rounded flex items-center justify-center hover:bg-pink-700"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
