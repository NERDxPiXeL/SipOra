import React from 'react';

const drinks = [
  {
    id: 1,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/cappuccino.jpeg', // Replace with actual image path
    bgColor: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    id: 2,
    name: 'Cafe Latte',
    price: '$3.15',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/cafelatte.jpeg',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/cappuccino.jpeg',
    bgColor: 'bg-stone-900',
    textColor: 'text-white',
  },
  {
    id: 4,
    name: 'Dark Coffee',
    price: '$2.75',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/darkcoffee.jpeg',
    bgColor: 'bg-sky-950',
    textColor: 'text-white',
  },
  {
    id: 5,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/Espresso.jpeg',
    bgColor: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    id: 6,
    name: 'Dark Coffee',
    price: '$2.75',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/Cold Brew.jpeg',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 7,
    name: 'Cafe Latte',
    price: '$3.15',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/Mocha.jpeg',
    bgColor: 'bg-stone-900',
    textColor: 'text-white',
  },
  {
    id: 8,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/Breve.jpeg',
    bgColor: 'bg-sky-950',
    textColor: 'text-white',
  },
];

const coffeeForHome = [
  {
    id: 1,
    name: 'Liberica',
    price: '$19.90',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/liberica.jpeg',
    bgColor: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    id: 2,
    name: 'Arabica',
    price: '$24.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/arabica.jpeg',
    bgColor: 'bg-stone-800',
    textColor: 'text-white',
  },
  {
    id: 3,
    name: 'Robusta',
    price: '$29.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/robusta.jpeg',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 4,
    name: 'Excelsa',
    price: '$34.90',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: '/src/assets/image/excelsa.jpeg',
    bgColor: 'bg-sky-950',
    textColor: 'text-white',
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-[#8B5E3C] py-16 px-6 text-[#f5e6d7] font-serif min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-16">Our Menu</h1>

      {/* Drinks Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold mb-4 underline text-center">Drinks</h2>
        <p className="text-center max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className={`${drink.bgColor} rounded-lg p-6 flex flex-col items-center text-center shadow-lg`}
            >
              <img src={drink.image} alt={drink.name} className="mb-4 w-24 h-24 object-contain" />
              <div className={`text-lg font-semibold mb-2 ${drink.textColor}`}>{drink.price}</div>
              <h3 className="text-xl font-bold mb-2">{drink.name}</h3>
              <p className="text-sm">{drink.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coffee For Home Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 underline text-center">Coffee For Home</h2>
        <p className="text-center max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coffeeForHome.map((coffee) => (
            <div
              key={coffee.id}
              className={`${coffee.bgColor} rounded-lg p-6 flex flex-col items-center text-center shadow-lg`}
            >
              <img src={coffee.image} alt={coffee.name} className="mb-4 w-24 h-24 object-contain" />
              <div className={`text-lg font-semibold mb-2 ${coffee.textColor}`}>{coffee.price}</div>
              <h3 className="text-xl font-bold mb-2">{coffee.name}</h3>
              <p className="text-sm">{coffee.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
