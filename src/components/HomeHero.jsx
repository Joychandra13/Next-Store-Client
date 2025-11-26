export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Quality Products at the Best Prices.
          </h1>
          <p className="mb-5">
            Browse a curated selection of premium items with a seamless shopping
            experience.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
