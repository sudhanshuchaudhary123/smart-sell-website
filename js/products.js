// Sample Product Database (Will be replaced with Firebase later)
const productsDatabase = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        brand: "Apple",
        price: 129999,
        image: "🍎",
        specs: "6.1\" OLED, A17 Pro",
        rating: 4.8,
        reviews: 245,
        description: "Latest Apple flagship with incredible performance"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        brand: "Samsung",
        price: 79999,
        image: "📱",
        specs: "6.2\" Dynamic AMOLED, Snapdragon 8 Gen 3",
        rating: 4.7,
        reviews: 189,
        description: "Flagship Samsung phone with stunning display"
    },
    {
        id: 3,
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        price: 69999,
        image: "🔴",
        specs: "6.73\" AMOLED, Snapdragon 8 Gen 3",
        rating: 4.6,
        reviews: 156,
        description: "Premium phone with excellent camera"
    },
    {
        id: 4,
        name: "OnePlus 12",
        brand: "OnePlus",
        price: 59999,
        image: "🚀",
        specs: "6.7\" AMOLED, Snapdragon 8 Gen 3",
        rating: 4.7,
        reviews: 132,
        description: "Fast and smooth performance"
    },
    {
        id: 5,
        name: "Samsung Galaxy A55",
        brand: "Samsung",
        price: 34999,
        image: "📱",
        specs: "6.6\" AMOLED, Exynos 1480",
        rating: 4.5,
        reviews: 198,
        description: "Budget-friendly with great features"
    },
    {
        id: 6,
        name: "iPhone 15",
        brand: "Apple",
        price: 79999,
        image: "🍎",
        specs: "6.1\" Liquid Retina, A16 Bionic",
        rating: 4.8,
        reviews: 321,
        description: "Powerful iPhone with excellent battery"
    },
    {
        id: 7,
        name: "Xiaomi 14",
        brand: "Xiaomi",
        price: 49999,
        image: "🔴",
        specs: "6.36\" AMOLED, Snapdragon 8 Gen 3",
        rating: 4.6,
        reviews: 143,
        description: "Great value for money flagship"
    },
    {
        id: 8,
        name: "OnePlus 12R",
        brand: "OnePlus",
        price: 39999,
        image: "🚀",
        specs: "6.7\" AMOLED, Snapdragon 8 Gen 2",
        rating: 4.5,
        reviews: 98,
        description: "Mid-range phone with powerful processor"
    }
];

// Load featured products on homepage
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featured = productsDatabase.slice(0, 4);
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-specs">${product.specs}</div>
                <div class="product-rating">
                    ★ ${product.rating} <span style="color: #999;">(${product.reviews})</span>
                </div>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Add Cart</button>
                    <button class="btn-buy" onclick="quickBuy(${product.id})">Buy Now</button>
                </div>
            </div>
        </div>
    `;
}

// Add to cart function
function addToCart(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Quick buy function
function quickBuy(productId) {
    addToCart(productId);
    window.location.href = 'cart.html';
}

// Update cart count in navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Filter by brand (redirect to shop page)
function filterByBrand(brand) {
    localStorage.setItem('filterBrand', brand);
    window.location.href = 'shop.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    updateCartCount();
});