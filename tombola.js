document.addEventListener("DOMContentLoaded"),
  function () {
    const tombolone = document.getElementById("tabella");
    const btnEstrai = document.getElementById("btn");

    for (let i = 1; i <= 76; i++) {
      const containerNumber = document.createElement("div");
      containerNumber.classList.add("numero");
      containerNumber.textContent = numero;
      tombolone.appendChild(containerNumber);
    }
  };
