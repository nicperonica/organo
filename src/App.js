import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";
import {useState} from "react";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";

function App() {

    // Colocando o time a página principal
    const teams = [
        {
            name: 'Programação',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9'
        },
        {
            name: 'Front-end',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF'
        },
        {
            name: 'Data Science',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2'
        },
        {
            name: 'Devops',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8'
        },{
            name: 'UX e Design',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            name: 'Mobile',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9'
        },
        {
            name: 'Inovação e Gestão',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF'
        }
    ]

    const [collabs, setCollabs] = useState([])

    const onNewCollabAdded = (collab) => {
        setCollabs([...collabs, collab])
    }
  return (
    <div className="App">
        <Banner/>
        <Form teams={teams.map(team => team.name)} onCollabRegistered={collab => onNewCollabAdded(collab)}/>
        {teams.map(team =>
            <Team
                key={team.name}
                name={team.name}
                primaryColor={team.primaryColor}
                secondaryColor={team.secondaryColor}
                collabs={collabs.filter(collab => collab.team === team.name)}
            />)
        }
        <Footer/>
    </div>
  );
}

export default App;
