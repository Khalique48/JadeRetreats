// components/HeroParallaxDemo.tsx
import React from "react";
import CardHolder from "./ui/card-holder";

export function HeroParallax() {
  const cards = [
    {
      bgUrl: "https://jadehospitainment.com/wp-content/uploads/slider/cache/3f96a285dd0fc0d2af35bc61fa38fdef/21-4.jpg",
      brand: "Jade 735",
      logoUrl: '/logo.png',
      stay: 10,
      event: 20
    },
    {
      bgUrl: "https://jadehospitainment.com/wp-content/uploads/slider/cache/21bc91a2a993b0176714b75d0a6c3698/1-6.jpg",
      brand: "Dome Villa",
      logoUrl: '/DomeVilla.webp',
      stay: 14,
      event: 50
    },
    {
      bgUrl: "https://jadehospitainment.com/wp-content/uploads/slider/cache/7c5533549928b845bc9ac54f62c71885/5-6.jpg",
      brand: "Magnolia",
      logoUrl: '/Magnolia.png',
      stay: 10,
      event: 800
    },
    {
      bgUrl: "https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg",
      brand: "Tranquil Woods",
      logoUrl: '/TranquilWoods.png',
      stay: 8,
      event: 600
    }
  ]
  return (
    <div className="w-full">
      {cards.map((card) => (<CardHolder key={card.brand} bgUrl={card.bgUrl} brand={card.brand} logoUrl={card.logoUrl} event={card.event} stay={card.stay}/>))}
      <div className="flex flex-col items-left items-start bg-black text-white top-5 py-10">
        <p className="text-3xl text-left px-0">
          Goa's Uncharted Wonders: Explore places untouched by the tides.
        </p>
        <h2 className="text-3xl text-borderColor items-left justify-left mt-4 mb-4">
          Click more to know about the chorao Islands.
        </h2>
      </div>
      <CardHolder bgUrl="https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg" brand="
      Mae Terra" logoUrl={'/MaeTerra.png'} stay={14} event={30}/>
      {/* Repeat this structure for other images */}
    </div>
  );
}
