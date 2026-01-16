"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiEye, HiEyeOff } from "react-icons/hi";

const LoginForms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "itzakio3@gmail.com" && password === "123456") {
      document.cookie = 'auth=true; path=/'
      toast.success('Successfully Logged in !')
      router.push('/all-gadgets')
    } else {
      toast.error("Email or password is wrong")
    }
  };

  return (
    <form onSubmit={loginHandler} className="p-8 space-y-5">
      {/* Header */}
      <div className="text-center">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          Tech<span className="text-primary">Shop</span>
        </Link>
        <p className="text-sm opacity-70 mt-1">Sign in to your account</p>
      </div>

      {/* Email */}
      <div className="form-control flex flex-col">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="name@gadgetshop.com"
          className="input input-bordered rounded-xl w-full"
          required
        />
      </div>

      {/* Password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="input input-bordered rounded-xl w-full pr-12"
            required
          />

          {/* Toggle Icon */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl opacity-60 hover:opacity-100"
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          Remember me
        </label>
        <a className="link link-hover text-primary">Forgot Password?</a>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="btn btn-primary w-full rounded-xl text-base tracking-wide"
      >
        Login
      </button>

      {/* Divider */}
      <div className="divider">OR</div>

      {/* Social */}
      <button type="button" className="btn btn-outline w-full rounded-xl">
        Continue with Google
      </button>

      {/* Footer */}
      <p className="text-center text-sm opacity-70">
        New here?{" "}
        <a className="link link-primary font-medium">Create an account</a>
      </p>
    </form>
  );
};

export default LoginForms;
