import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Mantenha esta linha aqui para garantir a injeção do CSS
import './globals.css'; 
import InteractiveBackground from '@/components/InteractiveBackground';


const inter = Inter({ subsets: ['latin'] });

// A função `generateMetadata` é a nova forma de definir metadata e SEO
export const metadata = {
  title: 'Meu Currículo :D',
  description: 'Currículo de um Estudante de Engenharia de Software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-gray-950 text-white ${inter.className}`}>
        
        {/* NOVO: Fundo Interativo */}
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