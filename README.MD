# kawan.dev.br — Portfólio pessoal

Portfólio pessoal de **Kawan Araújo**, desenvolvedor fullstack. Apresenta experiência profissional, habilidades técnicas, projetos e canais de contato.

## Stack

- **HTML5** — estrutura semântica
- **Tailwind CSS** (CDN) — estilização utilitária
- **JavaScript** (vanilla) — interações e envio de formulário
- **Formspree** — backend do formulário de contato
- **Font Awesome** — ícones
- **Google Fonts** — Space Grotesk + Inter

## Estrutura

```
portifolio/
├── index.html              # Página principal
├── tailwind.config.js      # Tokens de design (cores, fontes)
├── identidade-visual.md    # Guia de identidade visual
├── script/
│   └── main.js             # Navbar, menu mobile, animações, formulário
├── style/
│   └── main.css            # Estilos globais
├── img/
│   └── logo.svg            # Logo KA
└── .github/
    └── workflows/
        └── deploy.yml      # Deploy automático via FTP
```

## Deploy

O deploy é feito automaticamente via **GitHub Actions** a cada push na branch `master`. Os arquivos são enviados para o servidor via FTP.

### Secrets necessários no repositório

| Secret | Descrição |
|---|---|
| `FTP_SERVER` | Endereço do servidor FTP (ex: `82.25.72.36`) |
| `FTP_USERNAME` | Usuário FTP |
| `FTP_PASSWORD` | Senha FTP |
| `FTP_SERVER_DIR` | Pasta de destino no servidor (ex: `/public_html/`) |

## Rodando localmente

Não há dependências ou build step. Basta abrir o `index.html` no navegador ou usar uma extensão de servidor local como o **Live Server** (VS Code).

## Contato

- **Email:** kawanaraujocontato@gmail.com
- **GitHub:** [github.com/k4w4n](https://github.com/k4w4n)
- **LinkedIn:** [linkedin.com/in/kawan-araújo-96ba001b1](https://www.linkedin.com/in/kawan-araújo-96ba001b1/)
