import './style.css'


const Button = (props) =>{
    return(
        <button onClick={props.onClick} id={props.id} className={`btn ${props.className}`}>{props.title}</button>
    )
}

export default Button