let amigos = [];

function agregarAmigos () {
        let nombreAmigos = document.getElementById("amigo").value;
      
        
        function agregarAmigos() {
          let nombreAmigo = document.getElementById("amigo").value;
        // valida que el campo no este vacio
          if (nombreAmigo.trim() === "") {
            alert("Por favor, escriba un nombre");
          } else {
            amigos.push(nombreAmigo);
            document.querySelector("#amigo").value = "";
            mostrarListaAmigos();
          }
        }
        
        
         //Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
        
        function mostrarListaAmigos() {
          let listaAmigos = document.querySelector("#listaAmigos");
          listaAmigos.innerHTML = "";
        
          for (let index = 0; index < amigos.length; index++) {
            const element = amigos[index];
        
            let listaHTML = document.createElement("li");
            listaHTML.textContent = element;
            listaAmigos.appendChild(listaHTML);
          }
        }
        
      
       //Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
        //Verifica que la lista no esté vacía antes de realizar el sorteo.
        
        function sortearAmigo() {
          let cantidadAmigos = amigos.length;
          if (cantidadAmigos === 0) {
            alert("Por favor, inserte un nombre antes de sortear");
          } else {
            let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
            let resultadoHTML = document.querySelector("#resultado");
            resultadoHTML.innerHTML = amigos[indiceAmigo];
          }
        }
        
        
        
        if (nombreAmigos.trim() === "") {
          alert("Por favor, inserte un nombre");
        } else {
          amigos.push(nombreAmigos);
          document.querySelector("#amigo").value = "";
          mostrarListaAmigos();
        }

      }
      
       //Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
       
      function mostrarListaAmigos() {
        let listaAmigos = document.querySelector("#listaAmigos");
        listaAmigos.innerHTML = "";
      
        for (let index = 0; index < amigos.length; index++) {
          const element = amigos[index];
      
          let listaHTML = document.createElement("li");
          listaHTML.textContent = element;
          listaAmigos.appendChild(listaHTML);
        }
      }
      
       // Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
       // Verifica que la lista no esté vacía antes de realizar el sorteo.
    
      function sortearAmigos() {
        let cantidadAmigos = amigos.length;
        if (cantidadAmigos === 0) {
          alert("Por favor, inserte un nombre antes de sortear");
        } else {
          let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
          let resultadoHTML = document.querySelector("#resultado");
          resultadoHTML.innerHTML = amigos[indiceAmigo];
        }
      }