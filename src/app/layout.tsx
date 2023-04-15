import localfont from 'next/font/local';
import './globals.css';

export const metadata = {
  title: 'Ayo Folio',
  description: 'About myself',
};

const font = localfont({
  src: [
    {
      path: '../../public/fonts/Poppins-Light.woff',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/fonts/Poppins-Regular.woff',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/Poppins-Medium.woff',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.woff',
      style: 'normal',
      weight: '600',
    },

    {
      path: '../../public/fonts/Poppins-Bold.woff',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--poppins-variable',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
