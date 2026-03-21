import AnimateEntry from './AnimateEntry'

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-colmeia min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Texto */}
          <AnimateEntry className="flex-1 text-center md:text-left">
            <p className="text-gray-400 text-lg mb-2 font-corpo">Me chamo Kawan Araújo,</p>
            <h1 className="font-titulo text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Desenvolvedor <span className="text-mel">Fullstack</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Construindo soluções que fazem a diferença — linha por linha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projetos"
                className="bg-mel text-colmeia font-titulo font-semibold px-6 py-3 rounded-lg hover:bg-polen transition-colors duration-200 text-center"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="border border-mel text-mel font-titulo font-semibold px-6 py-3 rounded-lg hover:bg-mel/10 transition-colors duration-200 text-center"
              >
                Entre em contato
              </a>
            </div>
          </AnimateEntry>

          {/* Foto hexagonal */}
          <AnimateEntry delay="delay-200" className="flex-shrink-0">
            {/* Wrapper externo: borda amarela em hexágono */}
            <div className="hex-wrapper bg-mel p-1 w-52 h-52 sm:w-60 sm:h-60">
              {/* Imagem interna */}
              <div className="hex-clip w-full h-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/200x200/2C2C2C/F5C518?text=KA"
                  alt="Foto de perfil de Kawan Araújo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateEntry>

        </div>
      </div>
    </section>
  )
}
