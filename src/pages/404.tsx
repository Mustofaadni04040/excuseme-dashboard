import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <img
        src="/assets/404.png"
        alt="Not Found Illustration"
        className="w-80 opacity-90"
      />

      <p className="text-2xl font-semibold">Oops! Page not found.</p>

      <p className="text-gray-500 max-w-md">
        Halaman yang kamu cari tidak tersedia.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
