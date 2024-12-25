import bg from "../assets/img/hero-banner.jpg";
const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Restaurant Background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div> */}
      </div>

      {/* Hero Content */}
      {/* <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Welcome to <span className="text-primary">Tipu Pizza kebab</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Savor the finest culinary experiences crafted with passion and love.
        </p>
        <div className="mt-8">
          <button className="bg-primary text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition">
            Explore Menu
          </button>
          <button className="ml-4 bg-white/20 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-white/30 transition">
            Book a Table
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
