"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      date: e.target.date.value,
      priority: e.target.priority.value,
      img: e.target.img.value,
    };

    const res = await fetch("/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
    setLoading(false);
  }

  return (
    <div className=" mt-30 mb-10 py-4 px-6">
      <div className="max-w-2xl mx-auto p-6 bg-base-100 shadow rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Product Title"
            className="input input-bordered w-full"
            required
          />

        
          <textarea
            name="description"
            placeholder="Full Description"
            className="textarea textarea-bordered w-full"
            rows={5}
            required
          ></textarea>

          <input
            name="price"
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />

          <input
            name="date"
            type="date"
            className="input input-bordered w-full"
            required
          />

          <input
            name="priority"
            type="number"
            placeholder="Priority"
            className="input input-bordered w-full"
            required
          />

          <input
            name="img"
            placeholder="Image URL (optional)"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
