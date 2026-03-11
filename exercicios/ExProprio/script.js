fetch("dados.json")
  .then(response => response.json())
  .then(dados => {

    const container = document.getElementById("avisos");

    dados.avisos.forEach(aviso => {

      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${aviso.titulo}</h3>
        <p>Data: ${aviso.data}</p>
        <p>${aviso.descricao}</p>
      `;

      container.appendChild(div);
    });

  });