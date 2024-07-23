import "./Team.css"
import Collaborator from "../Collaborator/Collaborator";

const Team = (props) => {

    const css = {backgroundColor: props.secondaryColor}

    return (
        (props.collabs.length > 0) ? <section className="team" style={css}>
            <h3>{props.name}</h3>
            <hr style={{backgroundColor: props.primaryColor }}/>
            <div className="collabs">
                {props.collabs.map( collab => (
                    <Collaborator
                        backgroundColor={props.primaryColor}
                        key={collab.name}
                        name={collab.name}
                        level={collab.level}
                        img={collab.img}
                    />
                ))}
            </div>
        </section>
        : ''
    )
}

export default Team