document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimar = document.querySelectorAll(
    ".timeline-content, .sobre-texto, .tech-grid div"
  );

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("animar");
      }
    });
  }, {
    threshold: 0.1
  });

  elementosAnimar.forEach((el) => observer.observe(el));
});
const frases = ["Desenvolvedora Web ", "Criativa por natureza ", "Apaixonada por resolver problemas "];
let i = 0, j = 0, atual = "", apagando = false;

function digitar() {
  if (i < frases.length) {
    if (!apagando && j <= frases[i].length) {
      atual = frases[i].slice(0, j++);
    } else if (apagando && j > 0) {
      atual = frases[i].slice(0, --j);
    }

    document.querySelector(".typed-text").textContent = atual;

    if (!apagando && j === frases[i].length) {
      apagando = true;
      setTimeout(digitar, 1500);
    } else if (apagando && j === 0) {
      apagando = false;
      i = (i + 1) % frases.length;
      setTimeout(digitar, 300);
    } else {
      setTimeout(digitar, 100);
    }
  }
}
digitar();
const btn = document.getElementById("voltar-topo");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("ativo");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("ativo");
    }
  });
});
const blocosJornada = document.querySelectorAll('.bloco-jornada');

function animarJornada() {
  blocosJornada.forEach(bloco => {
    const blocoTop = bloco.getBoundingClientRect().top;
    if (blocoTop < window.innerHeight - 100) {
      bloco.classList.add('visivel');
    }
  });
}

