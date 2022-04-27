import './App.css';
import Header from './Components/Header';


function App() {
  return (
    <section className="App">
      <Header />


      <h2>Vad är Scrum?</h2>
      <p> Att arbeta i ett team är inte alltid det lättaste, och när det blir svår kan effektiviteten påverkas. MEN med Scrum fokuserar vi på beslut som grundas på observation för att minska slöseri samt fokusera på det väsentliga.
        Scrum optimerar förutsättningen att kontrollera risker genom projektet.
        Poängen är att engagera alla medlemmar (ca 5-10 personer) att tillsammans med varandras expertis och färdighet nå målet på ett produktivt sätt.</p>
      <section className="team">
        <h2>Vilka ingår i Scrum Teamet?</h2>
        <p>Produktägare- Kund/Den som beställer produkten.</p>
        <p>Scrum Master- Team leader för ett Scrumteam, denna personen är certifierad.</p>
        <p>Scrum Team- Teamet av utvecklare som utför och implementerar projektet. Detta brukar vara 3-6 personer men max 10 personer. </p>
      </section>


      <h2>Hur arbetar vi?</h2>
      <p> Men hjälp av något som kallas Sprintaktiviteter (sprinter) får man möjligheten att granska och anpassa projektet genom transparens. Man arbetar i ett team utan hierarki eller undergrupper. Tillsammans skapar man ett digitalt schema (exempelvis Kanban som är en förändringsmetod) med uppgifter som går fort att göra vilket i sin tur gör det lättare att utvärdera snabbare, skall vi fortsätta enligt planen eller bör vi tänka annorlunda här?</p>

      <section className='process'>
        <h2>Hur kan Scrum-processen se ut?</h2>
        <p>Backlog- En kortare att-göra-lista som alla kan redigera (lägga till/ta bort/ändra), välja “uppdrag” för att sedan placera ut som “to do”, “in progress” eller “done”</p>
        <p>Sprint- En begränsad tid att utföra utvalda user stories/uppgiter.</p>
        <p>Sprint Planning- Ett möte där man uppskattar tiden för varje user story som kan vara “to do”, “in progress” eller “done”. Bestämma hur lång sprinten skall vara (1-3 veckor). Här bestämmer Scrum Master och Scrum Team vad som skall göras kommande sprint, vilket blir en sprint-backlog.</p>
        <p>Scrum artefacts- Består av en produkt backlog, sprint backlog och burndown charts (vilket är ett verktyg teamet använder för att stämma av hur långt man kommit, samt hur långt man har kvar på projektet under en specifik tid).</p>
        <p>Sprint review- Ett informellt möte i slutet av varje sprint. Alla är inbjudna men det är endast Produktägare, Scrum Master och Scrum Team som får prata, visa demo osv samt presentera vad man åstadkommit.</p>
        <p>Sprint retrospective- Ett kort möte (15-30 minuter) som kan ta form på olika sätt men, där man fokuserar på vad som fungerar och inte. Alla i teamet får svara på frågorna:
          vad skall jag börja med?
          vad skall jag fortsätta med?
          Vad skall jag sluta med?
        </p>
        <p>Agil estemetering- Förtydligar ordningen av olika user stories, hur viktiga de är. Exempelvis hur lång tid arbetet tar under ideala arbetsförhållanden. När det inte är idealt kan det finnas andra arbeten som tar upp tid från projektet, man kanske saknar information eller kunskap inom vissa områden under projektet samt att det kan finnas saker som stör arbetsprocessen på vägen. Detta kan kallas Ideal days. Sedan finns det value points som förklarar hur viktiga dina uppgifter/sprinter är, detta gör projektägaren. Man använder också story points som förklarar hur svåra dina uppgifter/sprinter är, man försöker även uppskatta hur mycket ideell tid det går åt för att realisera projektet. Det gör scrum teamet.</p>
      </section>

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
