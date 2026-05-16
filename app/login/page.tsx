'use client'

import { useState } from 'react'

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

import {
  auth,
  googleProvider,
} from '@/lib/firebase'

import { useRouter } from 'next/navigation'

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      router.push('/dashboard')

    } catch (error) {

      alert('Login failed')

    }
  }

  const googleLogin = async () => {

    try {

      await signInWithPopup(
        auth,
        googleProvider
      )

      router.push('/dashboard')

    } catch (error) {

      alert('Google login failed')

    }
  }

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <button
            onClick={login}
            className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-semibold"
          >
            Login
          </button>

          <button
            onClick={googleLogin}
            className="w-full py-4 rounded-2xl border border-white/10 text-white"
          >
            Continue with Google
          </button>

        </div>

      </div>

    </main>
  )
}