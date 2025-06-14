import { useEffect, useState } from "react"

export default function Details() {
    const [details, setdetails] = useState(false)
    useEffect(() => {
        setTimeout(() => setdetails(true), 100)
    },[])
  return (
    <div>

      
    </div>
  )
}
