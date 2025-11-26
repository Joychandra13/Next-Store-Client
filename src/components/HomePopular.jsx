import Link from "next/link";

export default async function HomePopular() {
  const data = await fetch("https://nextstore-six-tau.vercel.app/products", {
    cache: "no-store",
  });
  const items = await data.json();

  const sixItems = items.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center">Popular Products</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {sixItems.map((item) => (
            <div
              key={item._id}
              className="card bg-base-100 w-full shadow-sm hover:shadow-lg"
            >
              <figure>
                <img className="h-60 w-full object-cover" src={item.img} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.desc}</p>

                <div className="card-actions justify-end">
                  <Link href={`/products/${item._id}`}>
                    <button className="btn btn-primary w-full">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/products" className="btn btn-outline mt-12 w-fit">
          View All!
        </Link>
      </div>
    </section>
  );
}
