import { Fredoka, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode, Suspense } from 'react';
import { AppProvider } from './AppProvider';
import { LoginModal } from './users/auth/login/LoginModal';
import { Header } from './components/Header/Header';
import { PageSpinner } from './components/PageSpinner/PageSpinner';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE
      }
    })
};

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka'
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin']
});

const berlinRounded = localFont({
  src: [
    {
      path: '../../public/assets/fonts/berlin/Berlin.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/berlin/Berlin Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-berlin-rounded',
  display: 'swap'
});

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${fredoka.variable} ${berlinRounded.variable} ${poppins.variable}`}
    >
      <body className='bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white'>
        <AppProvider>
          <Header />
          {/* <Suspense fallback={<h1>HOME FALLBACK</h1>}> */}
          <Suspense fallback={<PageSpinner backgroundColor='bg-ibc-gray' />}>
            <main>{children}</main>
            <LoginModal />
          </Suspense>
        </AppProvider>
      </body>
    </html>
  );
}
