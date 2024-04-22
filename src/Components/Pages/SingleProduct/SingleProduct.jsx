import { useState } from "react"

export default function SingleProduct() {

    const [productName, setProductName] = useState("Makeup")

    return (
        <div>
            <h2 className="main-title my-28">
                {productName}
            </h2>
            <div>
                Single Product
            </div>
        </div>
    )
}
