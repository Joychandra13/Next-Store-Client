export default function AboutPage() {
  return (
    <div className="bg-white ">
      <div className=" ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/joy1414/pexels-sora-shimazaki-5926397.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl font-bold">About NextStore</h1>
              <p className="mb-5">
                At NextStore, we believe online shopping should be simple,
                secure, and enjoyable. That’s why we offer a curated selection
                of reliable products, transparent pricing, and a seamless user
                experience — all built to serve you better.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-5">
          {" "}
          {/* Section 1 – Who We Are */}
          <div className=" grid md:grid-cols-2 gap-12 items-center my-20 ">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Who We Are
              </h2>
              <p className="text-gray-600 mt-4 ">
                NextStore started with a simple mission — to make online
                shopping easier, faster, and more trustworthy for everyone. We
                bring together premium products, reliable service, and modern
                design to create a platform customers love using.
              </p>
            </div>

            <div
              className="h-64 rounded-xl bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/joy1414/pexels-fauxels-3184291.jpg)",
              }}
            ></div>
          </div>
          {/* Section 2 – Our Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div
              className="h-64 bg-gray-200 rounded-xl md:order-1 order-2 bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/joy1414/pexels-diva-plavalaguna-6147381.jpg)",
              }}
            ></div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-4">
                We focus on delivering quality products, secured payments, fast
                delivery, and amazing support. Everything we do is centered
                around creating convenience without compromising quality.
              </p>
            </div>
          </div>
          {/* Section 3 – Why Choose Us */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We stand out because we prioritize customer satisfaction, modern
              UI, and smooth user experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: "💎", title: "High Quality" },
              { icon: "⚡", title: "Fast Delivery" },
              { icon: "🔐", title: "Secure Payments" },
              { icon: "🤝", title: "Reliable Service" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}

        <div
          className="hero min-h-fit bg-fixed"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/joy1414/pexels-oliver-halls-1858500-3455931.jpg)",
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-neutral-content text-center my-20">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl font-bold">Join Our Journey</h1>
              <p className="mb-5">
                We’re constantly improving and expanding. Stay with us as we
                build a better shopping experience.
              </p>
              <button className="btn btn-primary">Explore Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
