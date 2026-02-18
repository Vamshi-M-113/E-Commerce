const products = [
  { id: 1, name: "Gaming Laptop", price: 70000, category: "Laptop", img: "https://electrogadgetplus.com/wp-content/uploads/2024/12/gaming-laptops.png" },
  { id: 2, name: "Office Laptop", price: 50000, category: "Laptop", img: "https://wallpaperaccess.com/full/11179886.png" },
  { id: 3, name: "Student Laptop", price: 45000, category: "Laptop", img: "https://wallpaperaccess.com/full/191366.jpg" },
  { id: 4, name: "Premium Laptop", price: 90000, category: "Laptop", img: "https://5.imimg.com/data5/DA/KC/UQ/GLADMIN-64752363/selection-018-1000x1000.png" },

  { id: 5, name: "Smartphone", price: 25000, category: "Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lkCo2tYk8snngEXih1sn2qxZnr3i9ICRvA&s" },
  { id: 6, name: "Android Phone", price: 20000, category: "Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mP8SZK8xucHbWXBDb47n_DhhF9SixHWHsw&s" },
  { id: 7, name: "Premium Phone", price: 80000, category: "Mobile", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/best_flagship_phones-sixteen_nine.png?VersionId=pqxw9Nm0AfimmY0BMnNiaxRHUXW4FZ0M&size=690:388" },
  { id: 8, name: "Budget Phone", price: 12000, category: "Mobile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIB0vUDLClgTow56FZR03fipL5AJ_0V4iDWg&s" },

  { id: 9, name: "Wireless Headphones", price: 3000, category: "Accessories", img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495&width=400" },
  { id: 10, name: "Bluetooth Earbuds", price: 2500, category: "Accessories", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/twsearbuds-sixteen_nine.jpg?VersionId=hvjv9GmGhow5xkVh.3J1Yjncnud0rdek&size=690:388" },
  { id: 11, name: "Gaming Mouse", price: 1500, category: "Accessories", img: "https://archertechlab.com/cdn/shop/files/71jufeyyd4L._SL1500_1500x.jpg?v=1742628315" },
  { id: 12, name: "Mechanical Keyboard", price: 4000, category: "Accessories", img: "https://cdn.mos.cms.futurecdn.net/YS333JMytSFjFiRVPaWxWd.jpg" },
  { id: 13, name: "Smart Watch", price: 6000, category: "Accessories", img: "https://m.media-amazon.com/images/I/61QH+Ta0QmL._AC_UF1000,1000_QL80_.jpg" },
  { id: 14, name: "Fitness Band", price: 2500, category: "Accessories", img: "https://in.amazfit.com/cdn/shop/products/Black-1-sw.jpg?v=1701612314" },
  { id: 15, name: "Bluetooth Speaker", price: 3500, category: "Accessories", img: "https://hips.hearstapps.com/hmg-prod/images/reviews-top-portable-bluetooth-speakers-65e883a6d8581.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" },
  { id: 16, name: "Webcam HD", price: 2200, category: "Accessories", img: "https://golchhait.com/cdn/shop/files/MX_Brio_4K_Pale_Gray.jpg?v=1753681694&width=900" },
  { id: 17, name: "24 inch Monitor", price: 12000, category: "Accessories", img: "https://5.imimg.com/data5/SELLER/Default/2024/9/450474379/HI/HS/WM/26424512/dell-24-monitor-p2425h-500x500.png" },
  { id: 18, name: "Gaming Monitor", price: 22000, category: "Accessories", img: "https://sm.pcmag.com/pcmag_uk/photo/l/lg-45-ultr/lg-45-ultragear-oled-45gx950a-b_yy2d.jpg" },
  { id: 19, name: "External Hard Disk", price: 5000, category: "Accessories", img: "https://www.techchef.in/wp-content/uploads/2022/07/External-hard-drive.png" },
  { id: 20, name: "WiFi Router", price: 3000, category: "Accessories", img: "https://backend.intelbras.com/sites/default/files/2023-12/rx-3000-wireless-router-rx-3000.png" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.img}">
                <h3>${product.name}</h3>
                <p>₹ ${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity++;
    } else {
        const product = products.find(p => p.id === id);
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} (x${item.quantity})
                <button onclick="removeItem(${item.id})">X</button>
            </div>
        `;
    });

    cartTotal.innerText = total;
    cartCount.innerText = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function checkout() {
    alert("Order placed successfully!");
    cart = [];
    updateCart();
}

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});

document.getElementById("categoryFilter").addEventListener("change", function() {
    const value = this.value;
    if (value === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === value);
        displayProducts(filtered);
    }
});

displayProducts(products);
updateCart();
