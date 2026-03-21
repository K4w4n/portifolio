'use client'

import { useState, FormEvent } from 'react'
import Toast from './Toast'
import AnimateEntry from './AnimateEntry'

interface ToastState {
  visible: boolean
  message: string
  success: boolean
}

export default function Contato() {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    success: true,
  })
  const [enviando, setEnviando] = useState(false)

  function mostrarToast(message: string, success: boolean) {
    setToast({ visible: true, message, success })
  }

  function copiarParaClipboard(texto: string) {
    navigator.clipboard.writeText(texto).then(() => {
      mostrarToast('Copiado!', true)
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    setEnviando(true)

    const dados = new FormData(form)

    try {
      const resposta = await fetch('https://formspree.io/f/mvzwyybl', {
        method: 'POST',
        body: dados,
        headers: { Accept: 'application/json' },
      })

      if (resposta.ok) {
        form.reset()
        mostrarToast('Mensagem enviada com sucesso!', true)
      } else {
        mostrarToast('Erro ao enviar. Tente novamente.', false)
      }
    } catch {
      mostrarToast('Erro de conexão. Tente novamente.', false)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section
      id="contato"
      className="bg-abelha py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateEntry>
          <h2 className="font-titulo text-3xl font-bold mb-12 border-l-4 border-mel pl-4">
            Contato
          </h2>
        </AnimateEntry>

        <AnimateEntry>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Lado esquerdo: CTA + links */}
            <div>
              <p className="text-gray-100 text-2xl sm:text-3xl font-titulo font-bold mb-4">
                Vamos construir algo juntos?
              </p>
              <p className="text-gray-400 text-base mb-10 leading-relaxed">
                Estou disponível para novos projetos, freelas e oportunidades. Me manda uma mensagem ou entre em contato pelos canais abaixo.
              </p>

              <ul className="flex flex-col gap-5" aria-label="Canais de contato">
                <li>
                  <button
                    type="button"
                    onClick={() => copiarParaClipboard('contato@kawan.dev.br')}
                    className="flex items-center gap-3 text-gray-400 hover:text-mel transition-colors duration-200 group cursor-pointer"
                    aria-label="Copiar e-mail de Kawan Araújo"
                  >
                    <i className="fa-solid fa-envelope text-xl group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                    <span className="text-sm sm:text-base">contato@kawan.dev.br</span>
                  </button>
                </li>
                <li>
                  <a
                    target="_blank"
                    href='https://github.com/k4w4n'
                    className="flex items-center gap-3 text-gray-400 hover:text-mel transition-colors duration-200 group cursor-pointer"
                  >
                    <i className="fa-brands fa-github text-xl group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                    <span className="text-sm sm:text-base">github.com/k4w4n</span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href='https://www.linkedin.com/in/k4w4n/'
                    className="flex items-center gap-3 text-gray-400 hover:text-mel transition-colors duration-200 group cursor-pointer"
                    >
                    <i className="fa-brands fa-linkedin text-xl group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                    <span className="text-sm sm:text-base">linkedin.com/in/k4w4n</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Lado direito: formulário */}
            <div className="bg-favo rounded-xl border border-favo p-8">
              <form
                id="form-contato"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-gray-300 text-sm font-titulo font-medium">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    required
                    placeholder="Seu nome completo"
                    className="bg-abelha border border-favo rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-mel transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-gray-300 text-sm font-titulo font-medium">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="voce@exemplo.com"
                    className="bg-abelha border border-favo rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-mel transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefone" className="text-gray-300 text-sm font-titulo font-medium">
                    Telefone <span className="text-gray-600 font-normal">(opcional)</span>
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    className="bg-abelha border border-favo rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-mel transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-gray-300 text-sm font-titulo font-medium">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Olá, gostaria de conversar sobre..."
                    className="bg-abelha border border-favo rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-mel transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={enviando}
                  className="bg-mel text-colmeia font-titulo font-semibold px-6 py-3 rounded-lg hover:bg-polen transition-colors duration-200 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {enviando ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </form>
            </div>

          </div>
        </AnimateEntry>

      </div>

      <Toast
        message={toast.message}
        visible={toast.visible}
        success={toast.success}
        onHide={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </section>
  )
}
