import Intro from "./components/Intro";
import NavBar from "./components/Navbar";
import logo from "./logo.svg";
import "./style.css";
import NameCard from "./components/NameCard";

const data = [
  { name: "Mark", description: "Hi I am Mark. I am a U3 Neuroscience major with a CS minor.", technology: ["Python", "Java","Flask","Bootstrap"] },
  { name: "Katie", description: "hello everyone! I'm Katie and I am looking for a team as well", technology: ["TensorFlow","Keras","Django","React","Node","Typescript"] },
  { name: "Jeremy", description: "My name is Jeremy and I am searching for someone who has worked with ML before ", technology: ["UI/UX","Java","Kotlin"] },
];

function App() {
  
  const nameCardArray = data.map((nameCard, index) => {
    return <NameCard key={index} nameCard={nameCard} />;
  });

  return (
    <div>
      <NavBar />
      <Intro />
      <div className="namecard-grid">
          {nameCardArray}
      </div>
    </div>
  );
}

export default App;
