import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';
import Input from '../common/Input';

export default function RegisterForm() {
  const { t } = useTranslation('auth');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    agreeTerms: false,
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form validation and submission logic here
    console.log(formData);
  };

  return (
    <div className="px-2 sm:px-0">
      <p className="text-gray-600 mb-6 sm:mb-8 text-center text-sm sm:text-base">
        There are many advantages to creating an account: the payment process is
        faster, shipment tracking is possible and much more.
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6">
        <Input
          label={t('register.usernameLabel')}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <Input
          label={t('register.emailLabel')}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label={t('register.passwordLabel')}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Input
          label={t('register.confirmPasswordLabel')}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                type="radio"
                id="customer"
                name="role"
                value="customer"
                checked={formData.role === 'customer'}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label
                htmlFor="customer"
                className="ml-2 block text-sm text-gray-900"
              >
                {t('register.roleCustomer')}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="vendor"
                name="role"
                value="vendor"
                checked={formData.role === 'vendor'}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label
                htmlFor="vendor"
                className="ml-2 block text-sm text-gray-900"
              >
                {t('register.roleVendor')}
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 space-y-3">
          <label className="flex items-start text-sm text-gray-600">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-0.5 flex-shrink-0"
              required
            />
            <span className="leading-5">{t('register.agreeTerms')}</span>
          </label>
        </div>

        <p className="text-xs text-gray-500 mb-4 sm:mb-6 leading-relaxed">
          {t('register.dataUsage')}
          <a href="#" className="text-indigo-600 hover:underline">
            {t('register.privacyPolicy')}
          </a>
          .
        </p>

        <div className="pt-2">
          <Button>{t('register.submitButton')}</Button>
        </div>
      </form>
    </div>
  );
}
