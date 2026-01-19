import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import InteractiveBackground from '@/components/InteractiveBackground';
import { LanguageProvider } from '@/components/LanguageProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-primary',
});

export const metadata = {
  title: 'Meu Currículo :D',
  description: 'Currículo de um estudante de Engenharia de Software',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`bg-[#0f0f0f] text-[#E6E6E6] ${poppins.variable} ${poppins.className}`}>
        <LanguageProvider>
          <InteractiveBackground />

          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
              {children}
            </main>

            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
