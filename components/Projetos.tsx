import AnimateEntry from './AnimateEntry'

interface Projeto {
  icon: string
  nome: string
  descricao: string
  tecnologias: string[]
  ariaLabel: string
}

const projetos: Projeto[] = [
  {
    icon: 'fa-solid fa-table-columns',
    nome: 'TaskFlow',
    descricao: 'Gerenciador de tarefas com quadros kanban, arrastar e soltar, e controle de sprints em tempo real.',
    tecnologias: ['Next.js', 'NestJS', 'PostgreSQL'],
    ariaLabel: 'Projeto TaskFlow',
  },
  {
    icon: 'fa-solid fa-chart-line',
    nome: 'PyAnalytics',
    descricao: 'Dashboard de análise de dados em tempo real com gráficos interativos e ingestão de dados via streaming.',
    tecnologias: ['Python', 'FastAPI', 'React'],
    ariaLabel: 'Projeto PyAnalytics',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    nome: 'AuthKit',
    descricao: 'Biblioteca de autenticação JWT com suporte a refresh tokens, blacklist por Redis e middleware plug-and-play.',
    tecnologias: ['Node.js', 'TypeScript', 'Redis'],
    ariaLabel: 'Projeto AuthKit',
  },
]

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-abelha py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateEntry>
          <h2 className="font-titulo text-3xl font-bold mb-10 border-l-4 border-mel pl-4">
            Projetos
          </h2>
        </AnimateEntry>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetos.map((projeto) => (
            <AnimateEntry key={projeto.nome}>
              <article
                className="bg-favo rounded-xl border border-favo hover:border-mel hover:shadow-lg hover:shadow-mel/10 transition-all flex flex-col h-full"
                aria-label={projeto.ariaLabel}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <i className={`${projeto.icon} text-mel`} aria-hidden="true"></i>
                    <h3 className="font-titulo text-xl font-semibold text-white">{projeto.nome}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {projeto.descricao}
                  </p>
                  {/* Badges de tecnologia */}
                  <ul className="flex flex-wrap gap-2 mb-5" aria-label="Tecnologias utilizadas">
                    {projeto.tecnologias.map((tech) => (
                      <li
                        key={tech}
                        className="bg-abelha text-mel text-xs rounded-full px-3 py-1 border border-mel/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {/* Botões */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-mel transition-colors border border-favo hover:border-mel rounded-lg px-4 py-2"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-mel transition-colors border border-favo hover:border-mel rounded-lg px-4 py-2"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Demo
                    </a>
                  </div>
                </div>
              </article>
            </AnimateEntry>
          ))}
        </div>

      </div>
    </section>
  )
}
