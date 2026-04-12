import AnimateEntry from './AnimateEntry'

interface ExperienciaItem {
  periodo: string
  datetime: string
  cargo: string
  empresa: string
  empresaUrl: string
  descricao: string
}

const experiencias: ExperienciaItem[] = [
  {
    periodo: 'Jul 2022 — Fev 2023',
    datetime: '2022-07',
    cargo: 'Assistente de Desenvolvimento',
    empresa: 'Jobhome',
    empresaUrl: 'https://jobhome.com.br',
    descricao:
      'Automatizei todas as pipelines de dados da empresa, eliminando processos manuais e reduzindo retrabalho. Desenvolvi sistemas internos com JavaScript e MySQL, incluindo um sistema de ponto eletrônico utilizado por toda a equipe.',
  },
  {
    periodo: 'Mar 2023 — Abr 2024',
    datetime: '2023-03',
    cargo: 'Analista de Desenvolvimento',
    empresa: 'Jobhome',
    empresaUrl: 'https://jobhome.com.br',
    descricao:
      'Evolui para sistemas de maior complexidade, mantendo foco em automação de dados e qualidade de entrega. Trabalhei em equipe com autonomia crescente, colaborando na gestão e no desenvolvimento de estagiários.',
  },
  {
    periodo: 'Mai 2024 — hoje',
    datetime: '2024-05',
    cargo: 'Tech Lead',
    empresa: 'Jobhome',
    empresaUrl: 'https://jobhome.com.br',
    descricao:
      'Lidero múltiplas equipes no planejamento e execução de projetos de alto impacto. Reestruturei pipelines de dados legados, mantenho a infraestrutura no Google Cloud e conduzo o desenvolvimento de soluções com inteligência artificial.',
  },
]

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="bg-colmeia py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateEntry>
          <h2 className="font-titulo text-3xl font-bold mb-12 border-l-4 border-mel pl-4">
            Experiência
          </h2>
        </AnimateEntry>

        {/* Timeline vertical */}
        <ol
          className="relative border-l-2 border-mel ml-4 sm:ml-8 space-y-10"
          aria-label="Linha do tempo de experiência"
        >
          {experiencias.map((item) => (
            <AnimateEntry key={item.datetime}>
              <li className="ml-6">
                {/* Marcador circular */}
                <span
                  className="absolute -left-[0.6rem] flex items-center justify-center w-4 h-4 rounded-full bg-mel ring-8 ring-colmeia"
                  aria-hidden="true"
                />
                <article>
                  <time dateTime={item.datetime} className="text-mel text-sm font-titulo font-semibold">
                    {item.periodo}
                  </time>
                  <h3 className="font-titulo text-xl font-semibold text-white mt-1">{item.cargo}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    <a
                      href={item.empresaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-mel transition-colors duration-200"
                    >
                      {item.empresa}
                    </a>
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-2">{item.descricao}</p>
                </article>
              </li>
            </AnimateEntry>
          ))}
        </ol>

      </div>
    </section>
  )
}
