"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <p className="opacity-70 mt-2">{error.message}</p>
      <button onClick={reset} className="btn btn-primary mt-4">
        Try again
      </button>
    </div>
  );
}
