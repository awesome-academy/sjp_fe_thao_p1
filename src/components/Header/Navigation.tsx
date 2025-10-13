import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import DropdownMenu from '../common/DropDownMenu';

interface DropdownMenuConfig {
  key: string;
  selectedValue: string;
  values: string[];
  links: string[];
}

interface NavigationLinkConfig {
  key: string;
  label: string;
  href: string;
}

export default function Navigation() {
  const { t } = useTranslation('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownMenus: DropdownMenuConfig[] = [
    {
      key: 'home',
      selectedValue: t('navigation.home'),
      values: ['Cart', 'Checkout', 'Shop', 'My Account'],
      links: ['#', '#', '#', '#'],
    },
    {
      key: 'shop',
      selectedValue: t('navigation.shop'),
      values: ['All Products', 'Featured Items', 'New Arrivals'],
      links: ['#', '#', '#'],
    },
  ];

  const navigationLinks: NavigationLinkConfig[] = [
    {
      key: 'fruitsVegetables',
      label: t('navigation.fruitsVegetables'),
      href: '#',
    },
    {
      key: 'beverages',
      label: t('navigation.beverages'),
      href: '#',
    },
    {
      key: 'blog',
      label: t('navigation.blog'),
      href: '#',
    },
    {
      key: 'contact',
      label: t('navigation.contact'),
      href: '#',
    },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            {dropdownMenus.map((menu) => (
              <DropdownMenu
                key={menu.key}
                selectedValue={menu.selectedValue}
                values={menu.values}
                as="Link"
                links={menu.links}
              />
            ))}

            {navigationLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-gray-700">
              {t('navigation.trendingProducts')}
            </span>
            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              {t('navigation.almostFinished')}
              <span className="ml-1 bg-red-600 px-1 rounded text-xs">
                {t('navigation.sale')}
              </span>
            </span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Sale Badge */}
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              <span className="hidden sm:inline">
                {t('navigation.almostFinished')}{' '}
              </span>
              <span className="bg-red-600 px-1 rounded text-xs">
                {t('navigation.sale')}
              </span>
            </span>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col space-y-3">
                {dropdownMenus.map((menu) => (
                  <div key={menu.key} className="border-b border-gray-100 pb-2">
                    <DropdownMenu
                      selectedValue={menu.selectedValue}
                      values={menu.values}
                      as="Link"
                      links={menu.links}
                    />
                  </div>
                ))}

                {navigationLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={handleMobileLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-gray-700 text-sm">
                  {t('navigation.trendingProducts')}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
