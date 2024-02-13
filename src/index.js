import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza/pizza4.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza/pizza5.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza/pizza2.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza/pizza4.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza/pizza1.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza/pizza3.jpeg",
    soldOut: false,
  },
];
//  the app component
function App() {
  return (
    <div>
      {/* for the header */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
//   header component
function Header() {
  const heeaderStyle = {
    //   color: "red",
    //   fontSize: "48px",
    //   textTrasform: "uppercase",
    //   textAlign: "center",
  };

  return (
    <header className="header">
      <h1 style={heeaderStyle}>Fact React Pizza Co.</h1>;
    </header>
  );
}
//   menu component
function Menu() {
  const allPizzas = pizzaData;
  const numPizza = allPizzas.length;
  // console.log(numPizza);
  return (
    <main className="menu">
      <h2>OUR MENU</h2>;
      {numPizza > 0 ? (
        <>
          <p>
            The easiest way to debug websites built with React is to install the
            React Developer Tools browser extension. It is available for several
            popular browsers:
          </p>
          <ul className="pizzas">
            {allPizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our Menu please come back Later :)</p>
      )}
    </main>
  );
}

// pizza component
function Pizza({ pizzaObject }) {
  // console.log(pizzaObject);
  // if (pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}
//   footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're Currently Open {closeHour}:00 Come visit us or Order online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>we are not availble please come back by {openHour}:00</p>
      )}
    </footer>
  );
}

// creating root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
