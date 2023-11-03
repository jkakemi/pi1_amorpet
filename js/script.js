document.addEventListener("DOMContentLoaded", function () {
  const formularioAdocao = document.getElementById("formulario-adocao");
  const escolhido = document.getElementById("animal");
  const badgeContainer = document.getElementById("badge-container");

  function atualizarBadge() {
    const animalSelecionado = escolhido.value;
    let badgeText = "";
    let badgeStyle = "";

    if (animalSelecionado === "cachorro") {
      badgeText = "Disponível para Adoção (Cachorro)";
      badgeStyle = "background-color: green; color: white;";
    } else if (animalSelecionado === "gato") {
      badgeText = "Indisponível para Adoção (Gato)";
      badgeStyle = "background-color: red; color: white;";
    }

    badgeContainer.textContent = badgeText;
    badgeContainer.style = badgeStyle;
  }

  atualizarBadge();

  escolhido.addEventListener("change", atualizarBadge);

  formularioAdocao.addEventListener("submit", function (event) {
    if (escolhido.value === "gato") {
      alert(
        "Gatos não estão disponíveis para adoção no momento. Por favor, escolha outra opção."
      );
      event.preventDefault();
    }
  });
});

/* VALIDAÇÃO DE FORMULÁRIO */

document.addEventListener("DOMContentLoaded", function () {
  const formContato = document.getElementById("form-contato");
  const visualizacao = document.getElementById("visualizacao");
  const dadosPreenchidos = document.getElementById("dados-preenchidos");

  formContato.onsubmit = function (event) {
      event.preventDefault();
      validarFormulario();
  };

  document.getElementById("verificar").addEventListener("click", function () {
      validarFormulario();
  });

  document.getElementById("limpar").addEventListener("click", function () {
    visualizacao.style.display = "none";
    formContato.style.display = "block";
    formContato.reset();
  });

  document.getElementById("alterar").addEventListener("click", function () {
      visualizacao.style.display = "none";
      formContato.style.display = "block";
  });

  function validarFormulario() {
      let formValido = true;

      const nome = document.getElementById("nome").value;
      const erroNome = document.getElementById("erro-nome");
      const email = document.getElementById("email").value;
      const erroEmail = document.getElementById("erro-email");
      const telefone = document.getElementById("telefone").value;
      const erroTelefone = document.getElementById("erro-telefone");
      const sim = document.getElementById("sim");
      const nao = document.getElementById("nao");

      if (nome === "") {
          erroNome.textContent = "Nome deve ser preenchido!";
          document.getElementById("nome").classList.add("error");
          formValido = false;
      } else {
          erroNome.textContent = "";
          document.getElementById("nome").classList.remove("error");
      }

      if (email === "") {
          erroEmail.textContent = "Email deve ser preenchido!";
          document.getElementById("email").classList.add("error");
          formValido = false;
      } else {
          erroEmail.textContent = "";
          document.getElementById("email").classList.remove("error");
      }

      if (telefone === "") {
          erroTelefone.textContent = "Telefone deve ser preenchido!";
          document.getElementById("telefone").classList.add("error");
          formValido = false;
      } else {
          erroTelefone.textContent = "";
          document.getElementById("telefone").classList.remove("error");
      }

      if (!sim.checked && !nao.checked) {
          alert("Selecione 'Sim' ou 'Não' para receber notificações.");
          formValido = false;
      }

      if (formValido) {
          exibirDadosPreenchidos();
      }
  }

  function exibirDadosPreenchidos() {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const opcoesContato = Array.from(
          document.querySelectorAll("input[name='box']:checked")
      ).map(function (checkbox) {
          return checkbox.nextElementSibling.textContent;
      });
      const opcao =
          document.getElementById("opcao").options[
              document.getElementById("opcao").selectedIndex
          ].textContent;
      const opcao1 = document.getElementById("opcao1").value;
      const radios = document.getElementsByName("receberNotificacoes");

      let opSelect = "";

      for (const radio of radios) {
          if (radio.checked) {
              opSelect = radio.id;
              break;
          }
      }

      document.getElementById("nome-preenchido").textContent = nome;
      document.getElementById("email-preenchido").textContent = email;
      document.getElementById("telefone-preenchido").textContent = telefone;
      document.getElementById("opcoes-contato-preenchido").textContent =
          opcoesContato.join(", ");
      document.getElementById("opcao-preenchida").textContent = opcao;
      document.getElementById("opcao1-preenchida").textContent = opcao1;
      document.getElementById("receber-notificacoes-preenchido").textContent = opSelect;

      visualizacao.style.display = "block";
      formContato.style.display = "none";
      dadosPreenchidos.style.display = "block";
  }
});