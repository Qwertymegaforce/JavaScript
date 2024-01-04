import React from "react";
import { useParams } from "react-router-dom";

export default function DetailRecepy(){

    const params = useParams()

    let [data, setData] = React.useState()

    React.useEffect(() => {

        async function getData(){
            let json_data = await fetch(`http://127.0.0.1:8000/api/recepy/${params.id}`).then(data => data.json())
            setData(prevData => json_data)
        }

        getData()
    }, [])

    return(
        <>
        {data &&
            <main>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </main>
        }
        </>
    )
}