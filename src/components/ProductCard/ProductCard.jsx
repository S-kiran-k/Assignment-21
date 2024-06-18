
import { useState } from "react";
import { mockData } from "../../../public/API/Api";
function ProductCard(props) {

    const img = "https://ik.imagekit.io/4z8covdo9/MERN%20BATCH%203/Card-Image.avif?updatedAt=1711983526664"
    const[filterdata,setFilterdata] = useState([]);
    return (
        <>
            <div>
                <img className="h-60" src={img} alt="image" />
                <div>
                    <p>{props.data.name}</p>
                    <div className="flex gap-2">
                        <p>{props.data.rating}</p>
                        <div>
                            <p> {props.data.timing}</p>
                        </div>
                    </div>
                    <p>{props.data.address}</p>
                </div>
            </div>

        </>
    )
}

export default ProductCard



