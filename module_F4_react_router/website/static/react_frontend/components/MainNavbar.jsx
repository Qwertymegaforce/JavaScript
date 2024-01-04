import React from "react";
import { Outlet, Link } from "react-router-dom";


export default function MainNavbar(){

    let [categories, setCategories] = React.useState()
    

    React.useEffect(() => {
        async function getData(){
            let categories_data = await fetch('http://127.0.0.1:8000/api/getcategory').then(data => data.json()).then(data => data)
            setCategories(prevCategories => categories_data)
        }

        getData()
    }, [])

    return(
        <>
            <header>
                <nav>
                    <Link to={``}><h1>#КУХНЯ</h1></Link>
                    <div className="nav--div-category_buttons">
                        {categories? categories.map(item => <Link to={item.slug}>{item.name}</Link>) : null}
                    </div>
                </nav>
            </header>
            
            <Outlet />
        </>
    )
}