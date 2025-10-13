import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import DropdownMenu from '../common/DropDownMenu';

export default function Navigation() {
  const { t } = useTranslation('header');

  const shop = ['All Products', 'Featured Items', 'New Arrivals'];
  const home = ['Cart', 'Checkout', 'Shop', 'My Account'];

  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <DropdownMenu
            selectedValue={t('navigation.home')}
            values={home}
            as="Link"
            links={['#', '#', '#', '#']}
          />
          <DropdownMenu
            selectedValue={t('navigation.shop')}
            values={shop}
            as="Link"
            links={['#', '#', '#']}
          />
          <Link
            to="#"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('navigation.fruitsVegetables')}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('navigation.beverages')}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('navigation.blog')}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('navigation.contact')}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <span className="text-gray-700">
            {t('navigation.trendingProducts')}
          </span>
          <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
            {t('navigation.almostFinished')}
            <span className="ml-1 bg-red-600 px-1 rounded text-xs">
              {t('navigation.sale')}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
