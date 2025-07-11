import React from 'react';

import cappuccinoImg from '../assets/image/cappuccino.jpeg';
import cafelatteImg from '../assets/image/cafelatte.jpeg';
import darkcoffeeImg from '../assets/image/darkcoffee.jpeg';
import espressoImg from '../assets/image/Espresso.jpeg';
import coldBrewImg from '../assets/image/Cold Brew.jpeg';
import mochaImg from '../assets/image/Mocha.jpeg';
import breveImg from '../assets/image/Breve.jpeg';
import libericaImg from '../assets/image/Liberica.jpeg';
import arabicaImg from '../assets/image/arabica.jpeg';
import robustaImg from '../assets/image/Robusta.jpeg';
import excelsaImg from '../assets/image/Excelsa.jpeg';

const drinks = [
  {
    id: 1,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: cappuccinoImg,
    bgColor: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    id: 2,
    name: 'Cafe Latte',
    price: '$3.15',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: cafelatteImg,
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: cappuccinoImg,
    bgColor: 'bg-stone-900',
    textColor: 'text-white',
  },
  {
    id: 4,
    name: 'Dark Coffee',
    price: '$2.75',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: darkcoffeeImg,
    bgColor: 'bg-sky-950',
    textColor: 'text-white',
  },
  {
    id: 5,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: espressoImg,
    bgColor: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    id: 6,
    name: 'Dark Coffee',
    price: '$2.75',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: coldBrewImg,
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 7,
    name: 'Cafe Latte',
    price: '$3.15',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: mochaImg,
    bgColor: 'bg-stone-900',
    textColor: 'text-white',
  },
  {
    id: 8,
    name: 'Cappuccino',
    price: '$4.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: breveImg,
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
    image: libericaImg,
    bgColor: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    id: 2,
    name: 'Arabica',
    price: '$24.20',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: arabicaImg,
    bgColor: 'bg-stone-800',
    textColor: 'text-white',
  },
  {
    id: 3,
    name: 'Robusta',
    price: '$29.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: robustaImg,
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 4,
    name: 'Excelsa',
    price: '$34.90',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: excelsaImg,
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
