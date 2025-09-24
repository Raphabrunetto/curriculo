import './../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// A função `generateMetadata` é a nova forma de definir metadata e SEO
export const metadata = {
  title: 'Meu Currículo :D',
  description: 'Currículo de um Estudante de Engenharia de Software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          <Header />
          <main className="flex-grow container mx-auto p-4 sm:p-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}