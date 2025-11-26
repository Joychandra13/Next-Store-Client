"use client";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function ManageProductsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load user session + products
  useEffect(() => {
    async function loadData() {
      const session = await getSession();

      if (!session) {
        window.location.href = "/login";
        return;
      }

      // Load all products
      const res = await fetch("https://nextstore-six-tau.vercel.app/products");
      const allItems = await res.json();

      // Filter only user's products
      const myItems = allItems.filter(
        (p) => p.userEmail === session.user.email
      );

      setItems(myItems);
      setLoading(false);
    }

    loadData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    const res = await fetch(`https://nextstore-six-tau.vercel.app/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      alert("Deleted successfully!");
      setItems(items.filter((item) => item._id !== id)); // remove from UI
    } else {
      alert("Failed to delete");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-5 py-16 my-10">
      <h1 className="text-3xl font-bold text-center mb-10">My Products</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((p) => (
              <tr key={p._id}>
                <td>
                  <img
                    src={p.img}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td>
                  <a
                    href={`/products/${p._id}`}
                    className="btn btn-sm btn-primary mr-2"
                  >
                    View
                  </a>

                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {items.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No products added yet.
          </p>
        )}
      </div>
    </div>
  );
}
