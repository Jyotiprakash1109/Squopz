'use client'

import { signOut } from 'firebase/auth'

import { auth } from '@/lib/firebase'

import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

export default function Topbar() {

  const router = useRouter()

  const [email, setEmail] = useState('')

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {

        if (user?.email) {

          setEmail(user.email)

        }

      }
    )

    return () => unsubscribe()

  }, [])

  const logout = async () => {

    await signOut(auth)

    router.push('/login')

  }

  return (

    <div className="flex items-center justify-between mb-10">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Squopz Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          AI Automation Intelligence Platform
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="text-right">

          <p className="text-sm text-gray-400">
            Logged in as
          </p>

          <p className="text-white font-medium">
            {email}
          </p>

        </div>

        <button
          onClick={logout}
          className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
        >
          Logout
        </button>

      </div>

    </div>

  )
}