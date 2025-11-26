"use client";

export default function HomeFeatures() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "We deliver your products quickly and safely to your doorstep.",
      icon: "🚀",
    },
    {
      title: "Secure Payments",
      desc: "Your transactions are protected with trusted payment gateways.",
      icon: "🔐",
    },
    {
      title: "Premium Quality",
      desc: "All products are verified to ensure the best quality for you.",
      icon: "🏆",
    },
    {
      title: "24/7 Support",
      desc: "Our team is always available to help you anytime.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose NextStore?</h2>
          <p className="text-gray-600 mt-2">
            Experience a smooth and reliable shopping journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
