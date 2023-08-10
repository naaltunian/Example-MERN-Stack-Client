import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response= await fetch('http://localhost:8081/person/all')
            const data = await response.json()
            // console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    const display = data && data.map(person => {
        return (
            <h1 key={person._id}>
                <Link to={`/person/${person._id}`} >{person.name}</Link>
            </h1>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}