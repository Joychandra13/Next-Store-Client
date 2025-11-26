"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 z-50 w-full">
      <div className="navbar container mx-auto">
        
        {/* LEFT */}
        <div className="navbar-start">
          <Link href="/" className="text-xl font-bold text-primary">
            NextSTORE
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">

          {/* If NOT logged in */}
          {!session && (
            <Link href="/login" className="btn btn-primary">Login</Link>
          )}

          {/* If logged in */}
          {session && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="text-primary font-bold">
                <div className="flex items-center gap-2">
                  <img
                    src={session.user.image || "https://ik.imagekit.io/joy1414/avatar.png"}
                    alt="user"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box w-fit mt-5 shadow"
              >
                <li className="menu-title">
                  <span className="text-sm opacity-70">
                    {session.user.email}
                  </span>
                </li>

                <li><Link href="/add-product">Add Product</Link></li>
                <li><Link href="/manage-products">Manage Products</Link></li>

                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </ul>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
