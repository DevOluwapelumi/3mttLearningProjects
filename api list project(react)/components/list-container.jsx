"use client"

import { useState, useEffect } from "react"
import ListComponent from "./list-component"
import { AlertCircle, Loader2 } from "lucide-react"

export default function ListContainer({ apiUrl, title, renderItem, keyExtractor, emptyMessage }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        setItems(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [apiUrl])

  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-white/50 animate-fadeIn">{title}</h2>
      )}

      {loading && (
        <div className="flex flex-col justify-center items-center py-16 animate-fadeIn">
          <div className="relative">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
            <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full bg-white/30 -z-10"></div>
          </div>
          <span className="mt-4 text-white/90 font-medium tracking-wide">Loading your data...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/50 rounded-lg p-5 flex items-start animate-slideIn">
          <AlertCircle className="h-6 w-6 text-red-100 mt-0.5 mr-3 animate-pulse" />
          <div>
            <h3 className="font-semibold text-white">Error loading data</h3>
            <p className="text-white/80 text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      {!loading && !error && (
        <ListComponent items={items} renderItem={renderItem} keyExtractor={keyExtractor} emptyMessage={emptyMessage} />
      )}
    </div>
  )
}
