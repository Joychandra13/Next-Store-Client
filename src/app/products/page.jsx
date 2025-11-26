import Link from "next/link";

export default async function ProductsPage() {
  const data = await fetch("https://nextstore-six-tau.vercel.app/products", {
    cache: "no-store",
  });
  const items = await data.json();

  return (
    <div className="max-w-6xl mx-auto px-5 py-16 my-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <p className="text-gray-600 mb-10 text-center">
        Browse our latest collection of products. Everyone can view this page.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item._id}
            className="card bg-base-100 w-full shadow-sm hover:shadow-lg transition rounded-lg overflow-hidden"
          >
            <figure>
              <img
                className="h-60 w-full object-cover"
                src={item.img}
                alt={item.title}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-primary font-bold">{item.price}</p>

              <div className="card-actions justify-end mt-4">
                <Link href={`/products/${item._id}`}>
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
