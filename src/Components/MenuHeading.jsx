import React from "react";
import { useEffect, useState } from "react";
import categoriesData from "../assets/menu.json";
import defaultImg from "../assets/img/default.jpg";

function MenuHeading() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Set the categories data once the component mounts
    setCategories(categoriesData.categories);

    // Scroll to the category if the URL has a hash
    const categoryId = window.location.hash.substring(1);
    console.log(categoryId);
    if (categoryId) {
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ top: element.offsetTop - 200, behavior: "smooth" });
      }
    }
  }, []);

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
  const handleCategoryClick = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      // Scroll with 200px offset from top
      window.scrollTo({
        top: element.offsetTop - 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
    <div className=" w-full bg-white sticky top-20 z-50">
    <div className="  max-w-6xl mx-auto p-6 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>

        {/* Scrollable Container */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-black flex justify-center items-center text-white p-2 h-8 w-8 rounded-full shadow-md hover:bg-gray-700 text-2xl"
          >
            &#8249;
          </button>
          <div
            ref={scrollRef}
            className="flex  space-x-4 overflow-x-scroll scrollbar-hide"
          >
            {categories.map((category, index) => (
              <a
                href={"#" + category.name}
                key={index}   onClick={() => handleCategoryClick(category.id)}
                className=" max-w-full whitespace-nowrap bg-primary text-white flex flex-col justify-center flex-shrink-0 items-center rounded-md custom-shadow py-4 px-8 text-center  font-semibold hover:bg-red-600 transition"
              >
                 <img
                        className="w-16 h-16 object-cover mb-2 rounded-full border-primary"  
                        src={defaultImg}
                        alt="menu"
                      />
                {category.name}
              </a>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-black flex justify-center items-center text-white p-2 h-8 w-8 rounded-full shadow-md hover:bg-gray-700 text-2xl"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>

      <div className="container mx-auto flex justify-center items-center flex-col gap-8 py-8 w-full">
        {categories.map((category, index) => (
          <section key={index} id={category.id} className="w-full">
            <div className="relative flex justify-center items-center flex-col">
              <h2 className="text-white font-semibold  bg-primary px-8 py-2 rounded-md   text-xl">
                {category.name}
              </h2>

              {/* <h2 className="text-white font-semibold absolute top-1/5 left-1/5 -translate-x-1/5 -translate-y-1/5  text-xl">
                {category.name}
              </h2>
              <img className="" src={bg} alt="bg" /> */}
            </div>
            <div>
              <p className="my-2 text-gray-400 text-center ">
                {category.category_description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-8 w-full">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="custom-shadow px-4 py-6 rounded-xl w-full"
                >
                  <div className="flex  flex-col ">
                    <div className="flex flex-col md:flex-row gap-5 items-center">
                      <img
                        className="w-20 h-20 object-cover rounded-full border-primary"
                        src={defaultImg}
                        alt="menu"
                      />
                      <div className="w-full">
                        <div className="flex lg:flex-row flex-col   lg:gap-4 lg:justify-between   w-full">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <div className="flex gap-4 justify-end">
                            <h2 className="font-semibold text-lg text-black relative flex justify-center">
                              £ {item.prices.small}<span className="  absolute font-semibold -top-5">S</span>
                            </h2>
                            <h2 className="font-semibold text-lg text-primary relative flex justify-center">
                              £ {item.prices.large}
                             <span className="text-primary  absolute font-semibold -top-5">L</span>

                            </h2>
                          </div>
                        </div>
                        <p className="mt-3 text-gray-500 text-sm text-center md:text-start">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default MenuHeading;
