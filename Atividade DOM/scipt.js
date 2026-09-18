<script>
    function mostrarCidade() {
      let cidade = document.getElementById("cidade").value;
      document.getElementById("mensagem").textContent = "Você escolheu conhecer " + cidade + "!";
    }

    function destacarMensagem() {
      let msg = document.getElementById("mensagem");
      msg.style.color = "blue";
      msg.style.fontSize = "20px";
    }

    let valor = 10;

    function aumentar() {
      valor = valor + 1;
      document.getElementById("contador").textContent = valor;
    }

    function diminuir() {
      valor = valor - 1;
      document.getElementById("contador").textContent = valor;
    }
  </script>
