/**
 * main.js — Portfólio de Kawan Araújo
 * Responsabilidades:
 *   1. Navbar: fundo sólido ao rolar
 *   2. Menu mobile: toggle visibilidade + animação hamburger
 *   3. Animações de entrada via IntersectionObserver
 */

'use strict';

/* ============================================================
   1. NAVBAR — Adiciona fundo sólido ao rolar a página
============================================================ */

const navbar = document.getElementById('navbar');

function atualizarNavbar() {
  if (window.scrollY > 20) {
    // Ao rolar, reforça o fundo sólido (remove transparência)
    navbar.classList.add('bg-colmeia');
    navbar.classList.remove('bg-colmeia/80');
  } else {
    // No topo, volta ao estado com blur/transparência
    navbar.classList.remove('bg-colmeia');
    navbar.classList.add('bg-colmeia/80');
  }
}

window.addEventListener('scroll', atualizarNavbar, { passive: true });

/* ============================================================
   2. MENU MOBILE — Toggle de visibilidade + animação hamburger
============================================================ */

const btnMenu    = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const ham1       = document.getElementById('ham-1');
const ham2       = document.getElementById('ham-2');
const ham3       = document.getElementById('ham-3');

let menuAberto = false;

function abrirMenu() {
  menuAberto = true;
  menuMobile.classList.remove('hidden');
  btnMenu.setAttribute('aria-expanded', 'true');

  // Animação hamburger → X
  ham1.classList.add('rotate-45', 'translate-y-2');
  ham2.classList.add('opacity-0');
  ham3.classList.add('-rotate-45', '-translate-y-2');
}

function fecharMenu() {
  menuAberto = false;
  menuMobile.classList.add('hidden');
  btnMenu.setAttribute('aria-expanded', 'false');

  // Reverte animação hamburger
  ham1.classList.remove('rotate-45', 'translate-y-2');
  ham2.classList.remove('opacity-0');
  ham3.classList.remove('-rotate-45', '-translate-y-2');
}

btnMenu.addEventListener('click', () => {
  if (menuAberto) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

// Fecha menu ao pressionar Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuAberto) {
    fecharMenu();
  }
});

// Fecha menu ao clicar fora da navbar
document.addEventListener('click', (e) => {
  if (menuAberto && !navbar.contains(e.target)) {
    fecharMenu();
  }
});

// Expor fecharMenu globalmente (usado nos links do menu via onclick)
window.fecharMenu = fecharMenu;

/* ============================================================
   3. ANIMAÇÕES DE ENTRADA — IntersectionObserver
   Elementos com classe 'animate-entry' começam como:
     opacity-0 translate-y-4
   e ao entrar na viewport recebem:
     opacity-100 translate-y-0
============================================================ */

const opcoesObservador = {
  threshold: 0.12,   // Dispara quando 12% do elemento está visível
  rootMargin: '0px 0px -40px 0px', // Margem inferior negativa para entrada suave
};

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      const el = entrada.target;

      // Adiciona classes de visibilidade
      el.classList.add('opacity-100', 'translate-y-0');

      // Remove classes de estado inicial
      el.classList.remove('opacity-0', 'translate-y-4');

      // Para de observar após a animação (executa apenas uma vez)
      observador.unobserve(el);
    }
  });
}, opcoesObservador);

// Seleciona todos os elementos marcados para animação
document.querySelectorAll('.animate-entry').forEach((el) => {
  observador.observe(el);
});

/* ============================================================
   4. COPIAR CONTATO — Copia o valor de data-copiar ao clicar
============================================================ */

const toast = document.getElementById('toast-copiado');
let timerToast;

function mostrarToast() {
  clearTimeout(timerToast);
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  timerToast = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2000);
}

document.querySelectorAll('.copiar-contato').forEach((btn) => {
  btn.addEventListener('click', () => {
    const texto = btn.dataset.copiar;
    navigator.clipboard.writeText(texto).then(mostrarToast);
  });
});

/* ============================================================
   5. SCROLL SUAVE — Já ativo via `scroll-smooth` no <html>
   Nenhuma implementação extra necessária.
============================================================ */
