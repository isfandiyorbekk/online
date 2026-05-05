import products from './main.js';
const DarkBtn = document.querySelector('#dark-btn');
const Div = document.querySelector('.div');
const iOne = document.querySelector(".i-one");
const Input = document.querySelector('#input');
const ElectronicsBtn = document.querySelector('#btn1');
const ClothingBtn = document.querySelector('#btn2');
const LaptopsBtn = document.querySelector('#btn3');
const AccessoriesBtn = document.querySelector('#btn4');
const AllBtn = document.querySelector('#btn5');
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add('dark');
}
DarkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
function updata(product) {
    product.forEach((item) => {
        Div.innerHTML += `
        <div class="product">
            <div class='card'>
                <img class="img" src="${item.image}" alt="${item.name}" />
                <h2>${item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Category: ${item.category}</p>
                <p>Rating: ${item.rating}</p>
                <i class="i fa-solid fa-basket-shopping"></i>
            </div>
        </div>`;
    });
}

updata(products);
Div.addEventListener('click', (e) => {
    if (e.target.classList.contains('i')) {
        iOne.textContent = Number(iOne.textContent) + 1;
    }
});
Input.addEventListener('input', (e) => {
    let filter = products.filter((item) => {
        return item.name.toLowerCase().startsWith(e.target.value.trim().toLowerCase());
    });
    Div.innerHTML = "";
    updata(filter)
});
ElectronicsBtn.addEventListener('click', ()=> {
    let category = products.filter((item) => item.category === 'Electronics');
    Div.innerHTML = ""
    updata(category);
    ElectronicsBtn.classList.add('top');
    ClothingBtn.classList.remove('top');
    LaptopsBtn.classList.remove('top');
    AccessoriesBtn.classList.remove('top');
});
ClothingBtn.addEventListener('click', ()=> {
    let category = products.filter((item) => item.category === 'Clothing');
    Div.innerHTML = ""
    updata(category);
    ElectronicsBtn.classList.remove('top');
    ClothingBtn.classList.add('top');
    LaptopsBtn.classList.remove('top');
    AccessoriesBtn.classList.remove('top');
});
LaptopsBtn.addEventListener('click', ()=> {
    let category = products.filter((item) => item.category === 'Laptops');
    Div.innerHTML = ""
    updata(category);
    ElectronicsBtn.classList.remove('top');
    ClothingBtn.classList.remove('top');
    LaptopsBtn.classList.add('top');
    AccessoriesBtn.classList.remove('top');
});
AccessoriesBtn.addEventListener('click', ()=> {
    let category = products.filter((item) => item.category === 'Accessories');
    Div.innerHTML = ""
    updata(category);
    ElectronicsBtn.classList.remove('top');
    ClothingBtn.classList.remove('top');
    LaptopsBtn.classList.remove('top');
    AccessoriesBtn.classList.add('top');
});
AllBtn.addEventListener('click', ()=> {
    Div.innerHTML = "";
    updata(products);
    ElectronicsBtn.classList.remove('top');
    ClothingBtn.classList.remove('top');
    LaptopsBtn.classList.remove('top');
    AccessoriesBtn.classList.remove('top');
});