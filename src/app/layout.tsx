import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Mantenha esta linha aqui para garantir a injeção do CSS
import './../styles/globals.css'; 


const inter = Inter({ subsets: ['latin'] });

// A função `generateMetadata` é a nova forma de definir metadata e SEO
export const metadata = {
  title: 'Meu Currículo :D',
  description: 'Currículo de um Estudante de Engenharia de Software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      
      {/* 1. CORREÇÃO: COLOCAR O FUNDO E TEXTO NO <body> */}
      {/* Se a tela não ficar vermelha AGORA, o problema é de build do Tailwind. */}
      <body className={`bg-red-500 text-white ${inter.className}`}>
        
        {/* 2. CORREÇÃO: A DIV INTERNA FICA SÓ COM O FLEXBOX PARA O LAYOUT */}
        <div className="flex flex-col min-h-screen">
          <Header />
          
          {/* AQUI ESTÁ A CENTRALIZAÇÃO: max-w-6xl mx-auto */}
          <main className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}