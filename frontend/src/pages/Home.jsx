import NavBar from '../Components/NavBar'; 
import TopicSection from '../Components/TopicSection'; 
import SecondSection from '../Components/SecondSection';
import "../static/home.css"

function Home() { 
  return (
    <div>
     <NavBar />
     <TopicSection />
     <SecondSection />
    </div>
  );
}

export default Home;
