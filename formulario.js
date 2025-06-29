document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');

  //validação do campo nome
  function isValidName(string) {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (
        !(
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z') ||
          char === ' '
        )
      ) {
        return false;
      }
    }
    return true;
  }

  //validando cpf
  function isValidCPF(cpf) {
    return cpf.length === 11 && !isNaN(cpf);
  }

  //validadndo telefone
  function isValidPhone(phone) {
    return phone.length === 11 && !isNaN(phone);
  }

  //validando cep
  function isValidCEP(cep) {
    return cep.length === 8 && !isNaN(cep);
  }

  //validando Estado
  function isValidState(state) {
    return (
      state.length === 2 &&
      state[0] >= 'A' &&
      state[0] <= 'Z' &&
      state[1] >= 'A' &&
      state[1] <= 'Z'
    );
  }

  form.addEventListener('submit', function (event) {
    //coleta de dados com formData
    const dados = new FormData(form);
    //validação de campo vazio
    for (const [Campo, valor] of dados.entries()) {
      if (valor.trim() === '') {
        event.preventDefault();
        alert(`O campo ${Campo} está vazio.`);
        return; //para finalizar e n add valores vazios no localStorage
      }
    }

    //validação específicas
    if (!isValidName(dados.get('nome'))) {
      alert('O nome deve conter apenas letras e espaços');
      event.preventDefault();
      return;
    }
    if (!isValidCPF(dados.get('CPF'))) {
      alert('O CPF deve conter 11 digitos numéricos');
      event.preventDefault();
      return;
    }
    if (!isValidPhone(dados.get('telefone'))) {
      alert('O telefone deve conter 11 digitos numéricos');
      event.preventDefault();
      return;
    }
    if (!isValidCEP(dados.get('CEP'))) {
      alert('O CEP deve conter 8 digitos numéricos');
      event.preventDefault();
      return;
    }
    if (!isValidState(dados.get('estado'))) {
      alert('O Estado dever ser uma sigla com 2 letras maiúscula');
      event.preventDefault();
      return;
    }

    //armazenando dados do formulario no localStorage
    for (const [campo, valor] of dados.entries()) {
      localStorage.setItem(campo, valor);
    }
    //limpa os campos do formulário após salvar os dados
    form.reset();
  });
});
