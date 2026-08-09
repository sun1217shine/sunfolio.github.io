// 정의
const mediaQuery = window.matchMedia('(max-width: 1024px)');


// root --number 숫자 설정
function applyCssVariables() {
  const root = document.documentElement;
  function setVariables(e) {
    const multiplier = e.matches ? 2 : 4;
    for (let i = 1; i <= 50; i++) {
      root.style.setProperty(`--number-${i}`, `${i * multiplier}px`);
    }
  }
  setVariables(mediaQuery);
  mediaQuery.addEventListener('change', setVariables);
}
applyCssVariables();
