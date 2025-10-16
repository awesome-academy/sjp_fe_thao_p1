import React from 'react';

interface ErrorIllustrationProps {
  code: number;
}

const ErrorIllustration: React.FC<ErrorIllustrationProps> = ({ code }) => {
  const getImage = (src: string, fallback: string) => (
    <img
      src={src}
      alt="Error Illustration"
      className="w-96 h-96 object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).src = fallback;
      }}
    />
  );

  switch (code) {
    case 404:
      return (
        <div className="flex justify-center mb-8">
          {getImage(
            '/404.png',
            'https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg'
          )}
        </div>
      );
    case 403:
      return (
        <div className="flex justify-center mb-8">
          {getImage(
            'https://cdni.iconscout.com/illustration/premium/thumb/access-denied-5902506-4922050.png',
            'https://illustrations.popsy.co/red/security.svg'
          )}
        </div>
      );
    case 500:
      return (
        <div className="flex justify-center mb-8">
          {getImage(
            'https://cdni.iconscout.com/illustration/premium/thumb/server-error-5902510-4922054.png',
            'https://illustrations.popsy.co/orange/server-down.svg'
          )}
        </div>
      );
    case 0:
      return (
        <div className="flex justify-center mb-8">
          {getImage(
            'https://cdni.iconscout.com/illustration/premium/thumb/no-internet-connection-5902512-4922056.png',
            'https://illustrations.popsy.co/gray/no-connection.svg'
          )}
        </div>
      );
    default:
      return (
        <div className="flex justify-center mb-8">
          {getImage(
            'https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-5902504-4922048.png',
            'https://illustrations.popsy.co/gray/fatal-error.svg'
          )}
        </div>
      );
  }
};

export default ErrorIllustration;
