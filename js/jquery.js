$(document).ready(function () {
  var selectOp = $("#opcao");
  var textarea = $("#opcao1").hide();

  selectOp.on("change", function () {
    var op = selectOp.val();

    switch (op) {
      case "D":
        textarea.attr("placeholder", "Escreva a sua dúvida");
        break;
      case "S":
        textarea.attr("placeholder", "Escreva a sua sugestão");
        break;
      case "R":
        textarea.attr("placeholder", "Escreva a sua reclamação");
        break;
      default:
        textarea.attr("placeholder", "");
        break;
    }

    if (op !== "") {
      textarea.show();
    } else {
      textarea.hide();
    }
  });
});