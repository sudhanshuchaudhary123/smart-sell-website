# 🛍️ SmartSell - E-Commerce Platform for Smartphones

A complete, full-featured e-commerce website for selling smartphones with a powerful admin panel. Built with HTML5, CSS3, JavaScript, and Firebase integration ready.

## ✨ Features

### 🔹 Frontend (Customer Website)
- **Homepage** - Hero banner with featured products and brand categories
- **Shop Page** - Advanced filtering (brand, price), sorting, and search functionality
- **Product Details** - Full product information with ratings and reviews
- **Shopping Cart** - Add/remove items, quantity management with LocalStorage sync
- **Checkout** - Complete checkout flow with address and payment method selection
- **User Authentication** - Login/Signup with persistent user sessions
- **Order Tracking** - View order history and status
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### 🔹 Admin Panel
- **Admin Dashboard** - Overview of orders, products, users, and revenue
- **Product Management** - Add, edit, delete products with full details
- **Order Management** - View and update order status
- **User Management** - Monitor registered users
- **Sales Analytics** - Track revenue and order statistics

### 🔹 Technical Features
- **LocalStorage** - For cart and user session management
- **Sample Database** - Pre-loaded with 8 smartphone products
- **Payment Options** - UPI, Debit/Credit Card, Cash on Delivery
- **Order System** - Complete order creation and tracking
- **Authentication** - Login and user account management
- **Responsive UI** - Mobile-first design

## 📁 Project Structure

```
smart-sell-website/
├── index.html                 # Homepage
├── shop.html                  # Product listing with filters
├── cart.html                  # Shopping cart
├── checkout.html              # Checkout page
├── account.html               # User account & authentication
├── css/
│   └── styles.css             # All styling (responsive)
├── js/
│   ├── main.js                # Core functionality
│   └── products.js            # Product management & cart logic
├── firebase-config.js         # Firebase configuration (ready to setup)
├── admin/
│   ├── login.html             # Admin login page
│   ├── dashboard.html         # Admin dashboard with stats
│   ├── products.html          # Product management
│   ├── orders.html            # Order management
│   └── users.html             # User management
└── README.md                  # This file
```

## 🚀 Getting Started

### Quick Start (No Setup Required)
1. Clone the repository
2. Open `index.html` in your browser
3. Start shopping!

### Admin Panel Access
1. Go to `/admin/login.html`
2. Username: `admin`
3. Password: `admin123`

### Sample Products Included
- iPhone 15 Pro (₹129,999)
- Samsung Galaxy S24 (₹79,999)
- Xiaomi 14 Ultra (₹69,999)
- OnePlus 12 (₹59,999)
- And 4 more phones...

## 🔐 Authentication

### Customer Login
- Create new account from account page
- Login with email and password
- View order history and manage account

### Admin Login
- Default credentials: admin / admin123
- Manage products, orders, and users
- View sales statistics

## 💳 Payment Methods
- **UPI** - Unified Payments Interface
- **Debit/Credit Card** - Coming soon with Stripe integration
- **Cash on Delivery** - Available for all orders

## 🗄️ Data Storage
- **LocalStorage** - Cart items and user sessions
- **LocalStorage (Orders)** - Order history and details
- **Ready for Firebase** - Configuration file included

## 🔄 Firebase Integration (Next Steps)

The project is ready for Firebase integration:

1. Get Firebase credentials from [Firebase Console](https://console.firebase.google.com/)
2. Update `firebase-config.js` with your credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "your-project.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```
3. Add Firebase SDK scripts to HTML files
4. Replace LocalStorage calls with Firestore queries

## 📊 Default Admin Credentials
- **Username:** admin
- **Password:** admin123

*Note: Replace with proper authentication in production*

## 🎯 Key Pages

### Frontend
| Page | Purpose | Features |
|------|---------|----------|
| index.html | Homepage | Hero, featured products, brands, deals |
| shop.html | Product listing | Search, filters, sorting |
| cart.html | Shopping cart | Add/remove, quantity, totals |
| checkout.html | Order creation | Address, payment method |
| account.html | User dashboard | Login, orders, profile |

### Admin
| Page | Purpose | Features |
|------|---------|----------|
| admin/login.html | Admin auth | Credentials login |
| admin/dashboard.html | Analytics | Stats, recent orders |
| admin/products.html | Product CRUD | Add/edit/delete products |
| admin/orders.html | Order management | View & update orders |
| admin/users.html | User management | Manage customers |

## 🎨 Design Features
- **Modern UI** - Clean, professional design
- **Color Scheme** - Blue primary, green success, red danger
- **Responsive** - Works on all screen sizes
- **Smooth Animations** - Hover effects and transitions
- **User-Friendly** - Intuitive navigation

## 💾 How Data Works

### Cart
- Stored in browser LocalStorage
- Updates when adding/removing items
- Calculated totals with tax and shipping

### Orders
- Created after checkout
- Stored in LocalStorage (ready for Firebase)
- Include customer details and items

### Users
- Register on account page
- Password stored (hash in production)
- Login persists across sessions

## 🔍 Search & Filter
- **Search** - By product name or brand
- **Brand Filter** - Apple, Samsung, Xiaomi, OnePlus
- **Price Range** - Adjustable slider
- **Sorting** - Popular, price, rating, newest

## 📱 Mobile Responsive
- Works on mobile (320px+)
- Works on tablet (768px+)
- Works on desktop (1200px+)
- Touch-friendly buttons
- Optimized navigation

## 🚀 Production Checklist
- [ ] Replace admin credentials with Firebase Auth
- [ ] Connect to Firebase Firestore database
- [ ] Setup Firebase Storage for product images
- [ ] Implement payment gateway (Stripe/Razorpay)
- [ ] Add email notifications
- [ ] Setup SSL certificate
- [ ] Deploy to Firebase Hosting or custom server
- [ ] Add analytics tracking
- [ ] Setup customer support chat
- [ ] Add product reviews & ratings

## 📞 Support
For issues or questions, please open an issue on GitHub.

## 📄 License
This project is open source and available under the MIT License.

---

**Built with ❤️ by SmartSell Team**

*Ready to scale with Firebase, Stripe, and cloud infrastructure*