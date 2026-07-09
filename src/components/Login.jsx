import { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Login submitted for ${formData.email}`);
  };

  return (
    <main className="flex min-h-screen bg-[url('./assets/wmsuBackground.svg')] bg-fixed items-center justify-center">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-2xl bg-white/90 p-6 shadow-2xl shadow-rose-200/60 backdrop-blur md:grid-cols-2 md:p-10 lg:p-12">
        <div className="grid space-y-6 items-center justify-center">
          <img src="./public/wmsuLogo.svg" alt="WMSU Logo" className="mx-auto h-20 w-20" />
          <h1 className="text-center text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Smart Attendance System
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Sign in to manage attendance sessions, view records, and support QR-based check-ins for classes and events.
          </p>
          <span className="text-center inline-block rounded-full bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-500">
            Secure Access
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100 sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-500">
            Access your attendance dashboard securely.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="ty202523234@wmsu.edu.ph"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 mb-3 w-full rounded-xl bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-600"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-sm text-gray-500 gap-2">
            Doesn't have an account? <a href="/register" className="text-rose-500 hover:underline">Register here</a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;