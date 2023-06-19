// Função para obter os produtos da categoria "eletronics" da API Fake Store
function getData() {
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then(response => response.json())
    .then(products => {
      const productListElement = document.getElementById("product-list");

      products.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("product-item");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        const h3 = document.createElement("h3");
        h3.textContent = product.title;

        const p = document.createElement("p");
        p.textContent = `Price: $${product.price}`;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);

        // Adicione um link para a página de detalhes com o ID do produto como parâmetro na URL
        const link = document.createElement("a");
        link.href = `detalhes.html?id=${product.id}`;
        link.textContent = "Detalhes";
        li.appendChild(link);

        productListElement.appendChild(li);
      });
    })
    .catch(error => {
      console.log("Ocorreu um erro ao obter os produtos:", error);
    });
}

// Obtenha os produtos de eletrônicos na página inicial
document.addEventListener("DOMContentLoaded", () => {
  getElectronicsProducts();
});
function pesquisar() {
  var entrada = document.getElementById("barra-pesquisa").value;
  var resultadosDiv = document.getElementById("resultados");

  // Limpa os resultados anteriores
  resultadosDiv.innerHTML = "";

  // Faz a chamada à API usando fetch
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then(response => response.json())
    .then(produtos => {
      // Filtra os produtos com base na entrada do usuário
      var resultadosFiltrados = produtos.filter(produto => {
        return produto.title.toLowerCase().includes(entrada.toLowerCase());
      });

      // Exibe os resultados na página
      resultadosFiltrados.forEach(produto => {
        var resultadoDiv = document.createElement("div");
        resultadoDiv.innerHTML =
          "<h3>" + produto.title + "</h3>" +
          "<p>" + produto.description + "</p>";
        resultadosDiv.appendChild(resultadoDiv);
      });
    })
    .catch(error => {
      console.log("Ocorreu um erro: ", error);
    });
}
function pesquisar() {
    var entrada = document.getElementById("barra-pesquisa").value;

    // Faz a chamada à API usando fetch
    fetch("https://fakestoreapi.com/products/category/electronics")
        .then(response => response.json())
        .then(produtos => {
            // Filtra os produtos com base na entrada do usuário
            var resultadosFiltrados = produtos.filter(produto => {
                return produto.title.toLowerCase().includes(entrada.toLowerCase());
            });

            // Monta a URL para a nova página com os resultados como parâmetros
            var url = window.location +"detalhes.html?query=" + encodeURIComponent(entrada) + "&results=" + encodeURIComponent(JSON.stringify(resultadosFiltrados));

            // Abre uma nova janela ou guia com a URL dos resultados
            window.open(url, "_blank");
        })
        .catch(error => {
            console.log("Ocorreu um erro: ", error);
        });
}
// Faz uma solicitação à API Fakestore
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    // Obtém o elemento do carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    // Percorre os dados dos produtos
    data.forEach((product, index) => {
      // Cria o elemento do slide
      const slide = document.createElement('div');
      slide.classList.add('item');
      if (index === 0) {
        slide.classList.add('active');
      }

      // Cria a imagem do produto
      const image = document.createElement('img');
      image.src = product.image;

      // Adiciona a imagem ao slide
      slide.appendChild(image);

      // Adiciona o slide ao carousel
      carouselInner.appendChild(slide);

      // Cria o indicador do slide
      const indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#myCarousel');
      indicator.setAttribute('data-slide-to', index);
      if (index === 0) {
        indicator.classList.add('active');
      }

      // Adiciona o indicador ao carousel
      carouselIndicators.appendChild(indicator);
    });
  });

  function getProductsByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(products => {
        const productListElement = document.getElementById("product-list");
        productListElement.innerHTML = "";
  
        products.forEach(product => {
          const li = document.createElement("li");
          li.classList.add("product-item");
  
          const img = document.createElement("img");
          img.src = product.image;
          img.alt = product.title;
  
          const h3 = document.createElement("h3");
          h3.textContent = product.title;
  
          const p = document.createElement("p");
          p.textContent = `Price: $${product.price}`;
  
          const link = document.createElement("a");
          link.href = `detalhes.html?id=${product.id}`;
          link.textContent = "Detalhes";
  
          li.appendChild(img);
          li.appendChild(h3);
          li.appendChild(p);
          li.appendChild(link);
  
          productListElement.appendChild(li);
        });
      })
      .catch(error => {
        console.log("Ocorreu um erro ao obter os produtos:", error);
      });
  }
  document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("categorySelect");
    categorySelect.addEventListener("change", () => {
      const selectedCategory = categorySelect.value;
      if (selectedCategory) {
        getProductsByCategory(selectedCategory);
      } else {
        const productListElement = document.getElementById("product-list");
        productListElement.innerHTML = "Nenhum produto encontrado.";
      }
    });
  
  });

  