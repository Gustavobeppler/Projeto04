document.getElementById('combinacoes-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const n = parseInt(document.getElementById('n').value);
  const p = parseInt(document.getElementById('p').value);
  const resultadoDiv = document.getElementById('resultado');

  if (n < 0 || p < 0) {
    resultadoDiv.textContent = 'N e P devem ser números não negativos.';
    resultadoDiv.style.color = 'red';
    return;
  }

  if (p > n) {
    resultadoDiv.textContent = 'P não pode ser maior que N.';
    resultadoDiv.style.color = 'red';
    return;
  }

  const combinacoes = calcularCombinacoes(n, p);
  resultadoDiv.textContent = `C(${n}, ${p}) = ${combinacoes}`;
  resultadoDiv.style.color = 'green';
});

function calcularCombinacoes(n, p) {
  return fatorial(n) / (fatorial(p) * fatorial(n - p));
}

function fatorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * fatorial(num - 1);
}
