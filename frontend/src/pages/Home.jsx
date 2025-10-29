import NavBar from '../Components/home/NavBar'; 
import TopicSection from '../Components/home/TopicSection'; 
import SecondSection from '../Components/home/SecondSection';
import ThirdSection from '../Components/home/ThirdSection';
import "../static/home.css"

function Home() { 
  return (
    <div>
     <NavBar />
     <TopicSection />
     <SecondSection />
     <ThirdSection />
    </div>
  );
}

export default Home;
