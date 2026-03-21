import AnimateEntry from './AnimateEntry'

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-abelha py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título de seção com borda esquerda amarela */}
        <AnimateEntry>
          <h2 className="font-titulo text-3xl font-bold mb-10 border-l-4 border-mel pl-4">
            Sobre mim
          </h2>
        </AnimateEntry>

        <AnimateEntry>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">
            Sou um desenvolvedor fullstack apaixonado por tecnologia e pela arte de transformar ideias em produtos reais.
            Com mentalidade de <em className="text-mel not-italic font-semibold">worker bee</em> — foco, consistência e entrega —
            enfrento desafios complexos com o mesmo entusiasmo de quem está resolvendo um puzzle.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">
            Ao longo da minha trajetória evolui de desenvolvedor júnior a líder técnico, sempre buscando elevar a qualidade
            do código e o crescimento do time. Acredito que boas soluções nascem da combinação entre código limpo,
            colaboração e visão de negócio.
          </p>

          {/* Badges de perfil */}
          <ul className="flex flex-wrap gap-3" aria-label="Perfis profissionais">
            <li className="bg-favo text-mel font-titulo font-semibold px-4 py-2 rounded-full text-sm border border-mel/30">
              Fullstack
            </li>
            <li className="bg-favo text-mel font-titulo font-semibold px-4 py-2 rounded-full text-sm border border-mel/30">
              Líder Técnico
            </li>
            <li className="bg-favo text-mel font-titulo font-semibold px-4 py-2 rounded-full text-sm border border-mel/30">
              Next.js
            </li>
            <li className="bg-favo text-mel font-titulo font-semibold px-4 py-2 rounded-full text-sm border border-mel/30">
              Problem Solver
            </li>
          </ul>
        </AnimateEntry>

      </div>
    </section>
  )
}
