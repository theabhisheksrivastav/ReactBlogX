import React, {useEffect, useState} from 'react'

function Test() {
        const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/theabhisheksrivastav")
    .then(response => response.json())
    .then(data => setData(data))
    }, [])
    return (
        <>
        <h1 className="bg-slate-700 text-orange-500">{data.name}</h1>
        </>
    )
}

export default Test