# 🛍️ React E-Commerce App

A modern, fully-featured e-commerce web application built with **React.js**, **Redux**, and **Bootstrap 5.3**.

## 🌐 Live Demo
[View Live](https://github.com/archismandas12/ecommerce-react-app)

---

## ✨ Features

- 🌙 **Dark Mode** — Toggle between light and dark themes with preference saved to localStorage
- 🛒 **Shopping Cart** — Add, remove, and manage cart items with Redux state management
- 🔍 **Product Filtering** — Filter products by category (Men's, Women's, Jewellery, Electronics, Furniture, and more)
- 📦 **35+ Products** — Combines FakeStore API products with a custom local product catalog
- 🎨 **Modern UI** — Glassmorphism navbar, gradient buttons, animated product cards with hover effects
- ⭐ **Floating Rating Badges** — Star ratings shown as floating badges on product cards
- 🔗 **Clickable Cards** — Click anywhere on a product card to navigate to the product detail page
- 💡 **Product Suggestions** — "You may also like" section on product pages showing same-category products
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- 🔐 **Login & Register Pages** — Auth UI pages included

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://reactjs.org/) | UI Framework |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State Management (Cart) |
| [Bootstrap 5.3](https://getbootstrap.com/) | Styling & Dark Mode |
| [React Router v6](https://reactrouter.com/) | Navigation |
| [Fake Store API](https://fakestoreapi.com/) | Product Data Source |
| [React Hot Toast](https://react-hot-toast.com/) | Notifications |
| [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton) | Loading States |

---

## 🚀 Run Locally

**Clone the project**
```bash
git clone https://github.com/archismandas12/ecommerce-react-app.git
```

**Go to the project directory**
```bash
cd ecommerce-react-app
```

**Install dependencies**
```bash
npm install
```

**Start the development server**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── components/       # Navbar, Footer, Products grid
├── pages/            # Home, Cart, Product, About, Contact, Login, Register
├── redux/            # Redux store, actions, reducers
├── data/             # Extra products & image overrides
└── index.css         # Global styles & dark mode
```

---

## 📸 Screenshots

> Product grid with dark mode, floating rating badges, and gradient buttons.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
