document.addEventListener('DOMContentLoaded', function () {
  const span = document.getElementById('descont');
  const divDesconto = document.getElementById('divDesconto');
  const msgDesconto = divDesconto.children[2];
  const precoDesconto = divDesconto.lastElementChild;

  //removendo o display none do input do cupom

  span.addEventListener('click', function () {
    divDesconto.style.display = 'block';
    msgDesconto.style.display = 'none';
    precoDesconto.style.display = 'none';
  });
});
