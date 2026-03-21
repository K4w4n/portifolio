import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Habilidades from '@/components/Habilidades'
import Projetos from '@/components/Projetos'
import Experiencia from '@/components/Experiencia'
import Contato from '@/components/Contato'

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Experiencia />
        <Contato />
      </main>

      <footer className="bg-colmeia border-t border-favo py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Feito com ☕ por Kawan Araújo · 2026
          </p>
        </div>
      </footer>
    </>
  )
}
