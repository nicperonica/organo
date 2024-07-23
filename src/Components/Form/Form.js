import './Form.css'
import TextCamp from "../TextCamp/TextCamp";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import {useState} from "react";

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (evento) => {
        evento.preventDefault(); // Prevenir o comportamento padrão.
        props.onCollabRegistered({
            name: nome, // Renomeando 'nome' para 'name'
            level: cargo, // Renomeando 'cargo' para 'level'
            img: imagem, // Renomeando 'imagem' para 'img'
            team: time // Renomeando 'time' para 'team'
        })
        // Limpar o formulário depois do submit
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    // Não devemos usar onClick pois precisamos fazer uma validação antes de finalizar o processo.
    return(
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextCamp
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    onChanged={valor => setNome(valor)}
                />
                <TextCamp
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    onChanged={valor => setCargo(valor)}
                />
                <TextCamp
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    onChanged={valor => setImagem(valor)}
                />
                <Dropdown
                    obrigatorio={true}
                    label="Time"
                    itens={props.teams}
                    valor={time}
                    onChanged={valor => setTime(valor)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form