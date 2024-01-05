import "./style.css"

const Button = ({label,handleClickButton}) => {
    return (
        <button onClick={()=> handleClickButton(label)}>{label}</button>
    )
}

export default Button;