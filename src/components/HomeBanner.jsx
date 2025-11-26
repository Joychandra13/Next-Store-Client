export default function HomeBanner() {
  return (
    <div
      className="hero min-h-fit bg-fixed"
      style={{
        backgroundImage:
          "url(https://ik.imagekit.io/joy1414/pexels-fauxels-3183150.jpg)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center my-20">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Upgrade Your Lifestyle
          </h1>
          <p className="mb-5">
            Explore the latest gadgets, accessories, and premium products.
          </p>
          <button className="btn btn-primary">Explore Products</button>
        </div>
      </div>
    </div>
  );
}