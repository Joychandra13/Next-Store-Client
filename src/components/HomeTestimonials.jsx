export default function HomeTestimonials() {
  const reviews = [
    { name: "Rahim", review: "Amazing quality and fast delivery!" },
    { name: "Karim", review: "Very user-friendly and trustworthy." },
    { name: "Saira", review: "My favorite place for buying products." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer">
              <p className="text-gray-700 mb-3">“{r.review}”</p>
              <p className="font-bold text-primary">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
