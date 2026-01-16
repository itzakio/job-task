"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-primary transition">
          Home
        </Link>
      </li>
      <li>
        <Link href="/all-gadgets" className="hover:text-primary transition">
          All Gadgets
        </Link>
      </li>
      <li>
        <Link href="/add-gadget" className="hover:text-primary transition">
          Add Gadget
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-primary transition">
          About
        </Link>
      </li>

      <Link className="btn btn-primary btn-sm" href="/login">
        Login
      </Link>
    </>
  );
  return (
    <>
      {/* Navbar */}
      <nav className="w-full shadow-md bg-base-100 fixed top-0 z-50">
        <div className="max-w-360 mx-auto px-4 xl:px-0 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold tracking-tight">
              Tech<span className="text-primary">Shop</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {links}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
            <HiMenu />
          </button>
        </div>
      </nav>
      <div className="h-18">
        {/* space */}
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-base-100 shadow-xl z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-xl font-bold">
            Tech<span className="text-primary">Shop</span>
          </h2>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 px-6 py-6 font-medium">{links}</ul>
      </aside>
    </>
  );
}
