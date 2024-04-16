const wrapper = document.querySelector('.wrapper')
const pergunta = document.querySelector('.pergunta')
const btnSim = document.querySelector('.btn-sim')
const btnNao = document.querySelector('.btn-nao')

const wrapperRect = wrapper.getBoundingClientRect();
const btnNaoRect = btnNao.getBoundingClientRect();

btnSim.addEventListener('click', () => {
  pergunta.innerHTML = 'Tô Chegando 😈';
});

btnNao.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - btnNaoRect.width)) +1;
  const j = Math.floor(Math.random() * (wrapperRect.height - btnNaoRect.height)) +1;

  btnNao.style.left = i + 'px';
  btnNao.style.top = j + 'px';
});