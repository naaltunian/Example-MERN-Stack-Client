import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Display() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        async function getPerson() {
            const response = await fetch(`http://localhost:8081/person/${id}`)
            const data = await response.json()
            setData(data)
        }
        getPerson()
    }, [])

    const deletePerson = async () => {
        await fetch(`http://localhost:8081/person/${id}`, {
            method: 'DELETE'
        })
       navigate('/', {replace: true })
    }

    const display = data && (
        <div>
            <h1>Name: {data.name}</h1>
            <h3>Age: {data.age}</h3>
            <h3>Location: {data.location}</h3>
            { data.favoriteColor && <h3>Favorite Color: {data.favoriteColor}</h3>}
            <button onClick={deletePerson}>DELETE</button>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}