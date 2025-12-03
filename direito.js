// FAQ accordion
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");
  const icon = item.querySelector(".faq__icon");

  question.addEventListener("click", () => {
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // fecha todos
    faqItems.forEach((other) => {
      const otherAnswer = other.querySelector(".faq__answer");
      const otherIcon = other.querySelector(".faq__icon");
      otherAnswer.style.maxHeight = null;
      otherIcon.textContent = "+";
    });

    // abre o clicado
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    } else {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    }
  });
});

// Animação de "pulso" nos botões ao clicar
const animatedButtons = document.querySelectorAll(".js-animated-button");

animatedButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("btn--pulse");
    // força reflow para reiniciar a animação
    void btn.offsetWidth;
    btn.classList.add("btn--pulse");
  });
});

function enviarWhatsapp(event) {
  event.preventDefault(); // não recarrega a página

  const form = event.target;

  const nome = form.querySelector('input[type="text"]')?.value.trim() || "";
  const telefone = form.querySelector('input[type="tel"]')?.value.trim() || "";
  const select = form.querySelector('select');
  const situacao = select ? select.value : "";
  const descricao = form.querySelector('textarea')?.value.trim() || "";

  let texto = "Olá, gostaria de uma análise do meu caso trabalhista.\n\n";
  if (nome) texto += `Nome: ${nome}\n`;
  if (telefone) texto += `Telefone: ${telefone}\n`;
  if (situacao) texto += `Situação: ${situacao}\n`;
  if (descricao) texto += `Descrição: ${descricao}`;

  const msg = encodeURIComponent(texto);

  window.open(`https://wa.me/5511968606841?text=${msg}`, "_blank");
}

// MENU HAMBÚRGUER
const header = document.querySelector(".header");
const toggle = document.querySelector(".header__toggle");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("header--open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // fechar o menu ao clicar em algum link
  const navLinks = header.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("header--open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
