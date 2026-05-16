'use client'

import { useState } from 'react'

import {
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
  doc,
  setDoc,
} from 'firebase/firestore'

import {
  auth,
  db,
} from '@/lib/firebase'

import { useRouter } from 'next/navigation'

export default function SignupPage() {

  const router = useRouter()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const signup = async () => {

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      const user = userCredential.user

      await setDoc(
        doc(db, 'users', user.uid),
        {
          email: user.email,
          createdAt: new Date(),
          role: 'client',
          subscription: 'free',
        }
      )

      router.push('/dashboard')

    } catch (error) {

      console.error(error)

      alert('Signup failed')

    }

  }

  return (

    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Create Account
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
            onClick={signup}
            className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>

        </div>

      </div>

    </main>

  )
}