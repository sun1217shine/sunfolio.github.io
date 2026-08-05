function applyCssVariables() {
  const root = document.documentElement;
  const mediaQuery = window.matchMedia('(max-width: 1024px)');

  function setVariables(e) {
    const multiplier = e.matches ? 2 : 4;
    for (let i = 1; i <= 50; i++) {
      root.style.setProperty(`--number-${i}`, `${i * multiplier}px`);
    }
  }

  // 초기 실행
  setVariables(mediaQuery);

  // 1024px 경계를 제어할 때만 이벤트 감지 (성능 향상)
  mediaQuery.addEventListener('change', setVariables);
}

applyCssVariables();