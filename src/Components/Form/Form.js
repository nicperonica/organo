import './Formulario.css'
import TextCamp from "../TextCamp/TextCamp";

const Formulario = () => {
    return(
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextCamp label="Nome" placeholder="Digite seu nome"/>
                <TextCamp label="Cargo" placeholder="Digite seu cargo"/>
                <TextCamp label="Imagem" placeholder="Informe o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario