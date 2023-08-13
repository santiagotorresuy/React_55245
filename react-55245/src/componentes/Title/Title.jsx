import { Link } from "react-router-dom"

export const Title = () =>{
    return(
        <div className="title">
            <Link to="/"><img src="/tech_lion.png" alt="" className="title__img"/></Link>
        </div>
    )
}