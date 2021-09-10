import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export default function InitialPage() {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  return (
    <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
      <div className="content text-3xl text-center ml-24">
        <h1 className="text-5xl text-blue-500 font-bold whitespace-nowrap">
          Manage Client Document
        </h1>
        <p className="mt-5">Let's manage your client .</p>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <div className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
          <input
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            required
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            required
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg"
            onClick={() => router.push("/main/top")}
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>

  )
}
