import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OneBook() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
  return (
    <div>OneBook</div>
  )
}
