'use client'

import { useEffect, useState } from 'react'

import {
  collection,
  getDocs,
  orderBy,
  query,
  updateDoc,
  doc,
} from 'firebase/firestore'

import { db } from '@/lib/firebase'

import {
  Search,
} from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  project: string
  status: string
}

export default function LeadsTable() {

  const [leads, setLeads] = useState<Lead[]>([])

  const [search, setSearch] = useState('')

  useEffect(() => {

    fetchLeads()

  }, [])

  const fetchLeads = async () => {

    try {

      const q = query(
        collection(db, 'leads'),
        orderBy('createdAt', 'desc')
      )

      const querySnapshot = await getDocs(q)

      const leadsData: Lead[] = querySnapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      })) as Lead[]

      setLeads(leadsData)

    } catch (error) {

      console.error(error)

    }

  }

  const updateLeadStatus = async (
    id: string,
    status: string
  ) => {

    try {

      const leadRef = doc(db, 'leads', id)

      await updateDoc(
        leadRef,
        {
          status,
        }
      )

      fetchLeads()

    } catch (error) {

      console.error(error)

    }

  }

  const filteredLeads = leads.filter((lead) =>
    lead.name?.toLowerCase().includes(search.toLowerCase()) ||
    lead.email?.toLowerCase().includes(search.toLowerCase())
  )

  const statusColor = (status: string) => {

    switch (status) {

      case 'New Lead':
        return 'bg-cyan-400/20 text-cyan-400'

      case 'Contacted':
        return 'bg-yellow-400/20 text-yellow-400'

      case 'Proposal Sent':
        return 'bg-purple-400/20 text-purple-400'

      case 'Closed Won':
        return 'bg-green-400/20 text-green-400'

      case 'Closed Lost':
        return 'bg-red-400/20 text-red-400'

      default:
        return 'bg-gray-400/20 text-gray-400'

    }

  }

  return (

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            CRM Leads
          </h2>

          <p className="text-gray-400 mt-2">
            Manage and track your sales pipeline
          </p>

        </div>

        {/* Search */}

        <div className="relative w-full lg:w-[320px]">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10 text-left">

              <th className="pb-5 text-gray-400 font-medium">
                Name
              </th>

              <th className="pb-5 text-gray-400 font-medium">
                Email
              </th>

              <th className="pb-5 text-gray-400 font-medium">
                Project
              </th>

              <th className="pb-5 text-gray-400 font-medium">
                Status
              </th>

              <th className="pb-5 text-gray-400 font-medium">
                Update
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredLeads.map((lead) => (

              <tr
                key={lead.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                <td className="py-6 text-white">
                  {lead.name}
                </td>

                <td className="py-6 text-gray-300">
                  {lead.email}
                </td>

                <td className="py-6 text-gray-300 max-w-[320px]">
                  {lead.project}
                </td>

                <td className="py-6">

                  <span
                    className={`px-4 py-2 rounded-full text-sm ${statusColor(lead.status)}`}
                  >

                    {lead.status}

                  </span>

                </td>

                <td className="py-6">

                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateLeadStatus(
                        lead.id,
                        e.target.value
                      )
                    }
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none"
                  >

                    <option value="New Lead">
                      New Lead
                    </option>

                    <option value="Contacted">
                      Contacted
                    </option>

                    <option value="Proposal Sent">
                      Proposal Sent
                    </option>

                    <option value="Closed Won">
                      Closed Won
                    </option>

                    <option value="Closed Lost">
                      Closed Lost
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )
}