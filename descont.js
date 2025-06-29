document.addEventListener('DOMContentLoaded', function () {
  const span = document.getElementById('descont');
  const divDesconto = document.getElementById('divDesconto');
  const msgDesconto = divDesconto.children[2];
  const precoDesconto = divDesconto.lastElementChild;

  //expandindo e rotacionando o toggle

  span.addEventListener('click', function () {
    const toggle = document.getElementById('toggle-icon');
    if (divDesconto.style.display !== 'block') {
      divDesconto.style.display = 'block';
      msgDesconto.style.display = 'none';
      precoDesconto.style.display = 'none';
      toggle.style.transform = 'rotate(180deg)';
    } else {
      //recolhendo e rotacionando o toggle
      divDesconto.style.display = 'none';
      toggle.style.transform = 'rotate(0deg)';
    }
  });

  //Aplicando evento de desconto
  const btnAplicar = document.getElementById('aplicarBtn');
  btnAplicar.addEventListener('click', function () {
    const valorOriginal = 1200;
    const valorInput = document.getElementById('discountCode').value;
    const mensagemNovoValor = divDesconto.lastElementChild;

    //verificando valor do campo de desconto e aplicando o desconto
    if (valorInput === 'DESCONTO10') {
      let novoValor = valorOriginal - (valorOriginal * 10) / 100;
      msgDesconto.style.display = 'block';
      msgDesconto.style.color = 'green';
      mensagemNovoValor.textContent = `Preço Total: R$ ${novoValor.toFixed(2)}`;
      mensagemNovoValor.style.display = 'block';

      //armazenando o cupom no localSotrage
      localStorage.setItem('Discount', valorInput);

      //limpar o campo input
      document.getElementById('discountCode').value = '';
    } else {
      //verificação se o cupom for inválido
      msgDesconto.textContent = 'Cupom Inválido';
      msgDesconto.style.color = 'red';
      msgDesconto.style.display = 'block';
      mensagemNovoValor.style.display = 'none ';
    }
  });
});
