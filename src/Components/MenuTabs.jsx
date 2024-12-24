import React from "react";

const categories = [
  "Kebabs",
  "Sizzler Kebabs",
  "Pizza",
  "Burgers",
  "Extras",
  "Main Course",
  "Desi Karahi & Balties",
  "Milk Shakes",
  "Cold Drinks",
  "Rice / Biryani",
  "Gelato Ice Cream",
];

const CategoryCarousel = () => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>

      {/* Scrollable Container */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black flex justify-center items-center text-white p-2 h-8 w-8 rounded-full shadow-md hover:bg-gray-700 text-2xl"
        >
          &#8249;
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        >
          {categories.map((category, index) => (
            <a
              href={"#" + category}
              key={index}
              className=" max-w-full whitespace-nowrap bg-primary text-white  rounded-md custom-shadow p-4 text-center  font-semibold hover:bg-red-600 transition"
            >
              {category}
            </a>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black flex justify-center items-center text-white p-2 h-8 w-8 rounded-full shadow-md hover:bg-gray-700 text-2xl"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
