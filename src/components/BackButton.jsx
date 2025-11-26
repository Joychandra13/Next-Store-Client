"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="btn btn-primary w-full mt-4"
    >
      Back
    </button>
  );
}
