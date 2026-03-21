import AnimateEntry from './AnimateEntry'

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="bg-colmeia py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateEntry>
          <h2 className="font-titulo text-3xl font-bold mb-10 border-l-4 border-mel pl-4">
            Habilidades
          </h2>
        </AnimateEntry>

        {/* Grid de 3 categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Frontend */}
          <AnimateEntry>
            <article
              className="bg-abelha rounded-xl p-6 border border-favo hover:border-mel hover:shadow-lg hover:shadow-mel/10 transition-all"
              aria-label="Habilidades de Frontend"
            >
              <div className="flex items-center gap-3 mb-5">
                <i className="fa-solid fa-display text-mel text-xl" aria-hidden="true"></i>
                <h3 className="font-titulo text-xl font-semibold text-white">Frontend</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Next.js</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">React</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">TypeScript</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">JavaScript</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">HTML</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">CSS</li>
              </ul>
            </article>
          </AnimateEntry>

          {/* Backend */}
          <AnimateEntry>
            <article
              className="bg-abelha rounded-xl p-6 border border-favo hover:border-mel hover:shadow-lg hover:shadow-mel/10 transition-all"
              aria-label="Habilidades de Backend"
            >
              <div className="flex items-center gap-3 mb-5">
                <i className="fa-solid fa-server text-mel text-xl" aria-hidden="true"></i>
                <h3 className="font-titulo text-xl font-semibold text-white">Backend</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Nest.js</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Node.js</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Python</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">REST API</li>
              </ul>
            </article>
          </AnimateEntry>

          {/* Ferramentas */}
          <AnimateEntry>
            <article
              className="bg-abelha rounded-xl p-6 border border-favo hover:border-mel hover:shadow-lg hover:shadow-mel/10 transition-all"
              aria-label="Ferramentas e DevOps"
            >
              <div className="flex items-center gap-3 mb-5">
                <i className="fa-solid fa-wrench text-mel text-xl" aria-hidden="true"></i>
                <h3 className="font-titulo text-xl font-semibold text-white">Ferramentas</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Git</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Docker</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">PostgreSQL</li>
                <li className="bg-favo text-gray-300 rounded-full px-3 py-1 text-sm">Linux</li>
              </ul>
            </article>
          </AnimateEntry>

        </div>
      </div>
    </section>
  )
}
