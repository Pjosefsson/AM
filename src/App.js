import './App.css';
import Header from './Components/Header';
import Team from './Components/Team';
import Process from './Components/Process';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <section className="App">
      <Header />

      <Router>
        <Routes>
          <h2>Vad är Scrum?</h2>
          <p> Att arbeta i ett team är inte alltid det lättaste, och när det blir svår kan effektiviteten påverkas. MEN med Scrum fokuserar vi på beslut som grundas på observation för att minska slöseri samt fokusera på det väsentliga.
            Scrum optimerar förutsättningen att kontrollera risker genom projektet.
            Poängen är att engagera alla medlemmar (ca 5-10 personer) att tillsammans med varandras expertis och färdighet nå målet på ett produktivt sätt.</p>
          <Route path={"Team"} element={<Team />} />

          <h2>Hur arbetar vi?</h2>
          <p> Men hjälp av något som kallas Sprintaktiviteter (sprinter) får man möjligheten att granska och anpassa projektet genom transparens. Man arbetar i ett team utan hierarki eller undergrupper. Tillsammans skapar man ett digitalt schema (exempelvis Kanban som är en förändringsmetod) med uppgifter som går fort att göra vilket i sin tur gör det lättare att utvärdera snabbare, skall vi fortsätta enligt planen eller bör vi tänka annorlunda här?</p>
          <Route path={"Process"} element={<Process />} />
        </Routes>
      </Router>

      <h2>Varför Scrum?</h2>
      <p>Många av oss har arbetat enligt den “gamla skolan” där man har ett projekt, en plan och en budget som skall följas efter en specifik deadline. Genom processen märker man ofta att tidsramen blir stram, budgeten ökar och effektiviteten stannar upp. Det finns inget tillfälle för förändring eller utveckling av projektet.
        Med hjälp av vårt så kallade “Manifest för agil systemutveckling” kom man fram till att man utvecklar bättre programvara genom att själv arbeta samt hjälpa andra arbeta, för att få en effektivare utveckling.
        Processer och verktyg prioriteras efter individer och interaktioner
        Omfattande dokumentation prioriteras efter fungerande programvara
        Kontraktsförhandling prioriteras efter kundsamarbete
        Följa planen prioriteras efter anpassning till förändring. </p>
    </section>
  );
}

export default App;
