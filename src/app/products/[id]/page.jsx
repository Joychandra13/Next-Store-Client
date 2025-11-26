import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BackButton from "@/components/BackButton";

export default async function Page({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { id } = params;

  try {
    const res = await fetch(
      `https://nextstore-six-tau.vercel.app/products/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return (
        <div className="text-center mt-20 text-red-600 text-xl">
          Product not found.
        </div>
      );
    }

    const data = await res.json();

    return (
      <div className="md:min-h-[60vh] flex items-center justify-center my-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <p className="text-gray-600 text-lg">{data.description}</p>

              <div className="space-y-2">
                <p className="text-gray-800 font-semibold">Price: {data.price}</p>
                <p className="text-gray-800 font-semibold">Priority: {data.priority}</p>
                <p className="text-gray-800 font-semibold">Date Added: {data.date}</p>
              </div>

              <BackButton />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        Server Error Occurred.
      </div>
    );
  }
}
