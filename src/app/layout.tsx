import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css'; 
import InteractiveBackground from '@/components/InteractiveBackground';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-primary',
});

export const metadata = {
  title: 'Meu Curriculo :D',
  description: 'Curriculo de um Estudante de Engenharia de Software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-[#0f0f0f] text-[#E6E6E6] ${poppins.variable} ${poppins.className}`}>
        
        <InteractiveBackground />
        
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
