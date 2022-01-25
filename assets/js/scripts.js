// consultas api
const m = (el) => document.querySelector(el);
const consulta = () => {
    fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products/?page=1')
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (json) {
            let result = json.products;
            listarProdutos(result);
            // console.log(result);
        })
        .catch(function (error) {
            console.log("Deu problema!");
        });
}

const listarProdutos = (lista) => {
    lista.map((item, index) => {
        produtoItem = m('.div_item_produto').cloneNode(true);

        produtoItem.setAttribute('data-key', index);
        produtoItem.querySelector('.div_image_produto_item img').src = item.image;
        produtoItem.querySelector('.div_item_produto h3').innerHTML = item.name;
        produtoItem.querySelector('.div_item_produto p').innerHTML = item.description;
        produtoItem.querySelector('.div_oldpreco').innerHTML = `R$ ${item.oldPrice.toFixed(2)}`;
        produtoItem.querySelector('.div_preco').innerHTML = `R$ ${item.price.toFixed(2)}`;
        produtoItem.querySelector('.div_preco_por2').innerHTML = `Ou ${item.installments.count}x R$ ${item.installments.value.toFixed(2)}`;
        produtoItem.querySelector('.btn_comprar_produto_item').innerHTML = `Comprar`;



        m('.div_produto_lista').append(produtoItem);

    });
}
setTimeout(consulta, 0);


const consultaPlus = () => {
    var page = 2;
    fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products/?page=${page}`)
        .then(function (resultadoPlus) {
            return resultadoPlus.json();
        })
        .then(function (jsonPlus) {
            let resultPlus = jsonPlus.products;
            listarProdutosPlus(resultPlus);
            var page = page++;
            // console.log(resultPlus);
        })
        .catch(function (error) {
            console.log("Deu problema!");
            console.log(error);
        });
}

const listarProdutosPlus = (lista) => {
    lista.map((item, index) => {
        produtoItem = m('.div_item_produto').cloneNode(true);

        produtoItem.setAttribute('data-key', index);
        produtoItem.querySelector('.div_image_produto_item img').src = item.image;
        produtoItem.querySelector('.div_item_produto h3').innerHTML = item.name;
        produtoItem.querySelector('.div_item_produto p').innerHTML = item.description;
        produtoItem.querySelector('.div_oldpreco').innerHTML = `R$ ${item.oldPrice.toFixed(2)}`;
        produtoItem.querySelector('.div_preco').innerHTML = `R$ ${item.price.toFixed(2)}`;
        produtoItem.querySelector('.div_preco_por2').innerHTML = `Ou ${item.installments.count}x R$ ${item.installments.value.toFixed(2)}`;
        produtoItem.querySelector('.btn_comprar_produto_item').innerHTML = `Comprar`;



        m('.div_produtos_plus').append(produtoItem);

    });
}


// scroll suave menu topo
const menuItens = document.querySelectorAll('.lista_btn_topo a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(elementoClicado) {
    const id = elementoClicado.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
}

function scrollToPosition(to) {
    // window.scroll({
    //     top: to,
    //     behavior: 'smooth'
    // });

    smoothScrollTo(0, to, 900);
}


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
//   Smooth scroll animation
//   @param {int} endX: destination x coordinate
//   @param {int) endY: destination y coordinate
//   @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};
