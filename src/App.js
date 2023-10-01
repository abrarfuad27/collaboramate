import Intro from "./components/Intro";
import NavBar from "./components/Navbar";
import logo from "./logo.svg";
import "./style.css";
import NameCard from "./components/NameCard";

const data = [
  { name: "Abrar", description: "I study CS.", technology: ["Python", "Java"] },
  { name: "Abrar", description: "I study CS.", technology: ["Python", "Java"] },
  { name: "Abrar", description: "I study CS.", technology: ["Python", "Java"] },
  { name: "Abrar", description: "I study CS.", technology: ["Python", "Java"] },
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
