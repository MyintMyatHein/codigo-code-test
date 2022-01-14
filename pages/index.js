import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/work")
  }, [])
  return <div style={{ padding: 32, textAlign: "center" }}>Loading...</div>
}
