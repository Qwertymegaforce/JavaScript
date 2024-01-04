import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailCategory(){

    const params = useParams()

    let [jsonData, setJsonData] = React.useState()

    React.useEffect(() => {
        async function getRecepies(){
            let data = await fetch(`http://127.0.0.1:8000/api/category${params.slug? `/${params.slug}` : '/'}`)
                .then(data=> data.json())
            setJsonData(prevJsonData => data)
        }

        getRecepies()
    }, [params])

    return(
        <main>
            {jsonData && jsonData.map(item => {
                return (
                
                <Link to={`/recepy/${item.id}`}>
                    <div className="recepy-list--div">
                        <h1>{item.name}</h1>
                        <p>{item.description.slice(0,100) } ...</p>
                    </div>
                </Link>)

            })}
        </main>
    )
}