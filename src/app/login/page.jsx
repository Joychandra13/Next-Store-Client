"use client";

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { signIn } from "next-auth/react"; // <-- Add this
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      router.push("/"); // login success
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 p-10 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Login to NextStore</h1>
          <p className="text-gray-600">
            Access your account using email or Google
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>

          <button className="btn btn-primary w-full mt-4">Login</button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-primary font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
