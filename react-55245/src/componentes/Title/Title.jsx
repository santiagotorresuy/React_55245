import "./Title.scss"

export const Title = () =>{
    return(
        <div className="title__container">
            <img className="title__img" src="./RobStore.png" alt="" />
            <p className="mb-0 ms-3 fs-2">Robot</p>
            <p className="mb-0 fs-2" >Store</p>
        </div>
    )
}