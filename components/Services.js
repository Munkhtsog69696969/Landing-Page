import "./css/Product.css"
import { ThemeChange } from "../App"
import { useContext } from "react"

export const Services=()=>{
    const {Clicked,change}=useContext(ThemeChange)
    return(
        <div className={change? "Product-black" : "Product"}>
            <p className={change? "product-text-black " :"product-text"}>Services</p>
        </div>
    )
}