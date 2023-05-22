import './button.css'

const alertCV = (label) => {
    console.log(`A label desse botão é ${label }`) 
    alert(`A label desse botão é ${label}`)
}

const Button = ({label}) => {
    return(
    <button className="button" onClick= {() => alertCV(label)}>
        {label}
   </button>
    )
}

export default Button 