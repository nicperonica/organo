import './TextCamp.css'

const TextCamp = (props) => {

    const onType = (evento) => {
        props.onChanged(evento.target.value)
    }

    return (
        <div className="text-camp">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onType} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextCamp;