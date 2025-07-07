import { PALAVRAS_RUINS } from './palavrasRuins.js';

const botao = document.querySelector('#botao-palavrachave');
const resultado = document.querySelector('#resultado-palavrachave');

botao.addEventListener('click', () => {
  const texto = document.querySelector('#entrada-de-texto').value;

  const todasPalavras = texto
    .toLowerCase()
    .split(/[^a-zA-ZÀ-ÿ]+/)
    .filter(p => p.length > 2 && !PALAVRAS_RUINS.has(p));

  const frequencias = {};
  todasPalavras.forEach(p => {
    frequencias[p] = (frequencias[p] || 0) + 1;
  });

  const unicas = [...new Set(todasPalavras)];

  if (unicas.length === 0) {
    resultado.textContent = "Nenhuma palavra válida encontrada.";
    return;
  }

  resultado.innerHTML = "Clique em uma palavra para ver quantas vezes ela apareceu:<br><br>";

  unicas.forEach(palavra => {
    const span = document.createElement('span');
    span.classList.add('palavra');
    span.textContent = palavra;
    span.addEventListener('click', () => {
      alert(`A palavra "${palavra}" apareceu ${frequencias[palavra]} vez(es).`);
    });
    resultado.appendChild(span);
  });
});
