import axios from "axios"
import { useEffect, useState } from "react"

const AdminIndex = () => {
    const [nama, setNama] = useState("")
    
    useEffect(() => {
        handleNama()
    }, [])

    const handleNama = async () => {
        try {
            const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("authorization="))
            .split("=")[1];

            const response = await axios.get('http://54.225.11.99/admin/', {
                withCredentials: true,
                headers: {
                    Authorization: `${token}`
                }
            })

            setNama(response.data.data.nama)
            console.log(response.data.data.nama);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <style>
                {`
                    h1 {
                        text-align: center;
                        margin-top: 250px;
                        font-size: 50px;
                        font-weight: 700;
                    }
                `}
            </style>
            <h1>Selamat Datang, {`${nama}`}</h1>
        </>
    )
}

export default AdminIndex