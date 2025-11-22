import NavBar from '../Components/home/NavBar'; 
import TopicSection from '../Components/home/TopicSection'; 
import SecondSection from '../Components/home/SecondSection';
import ThirdSection from '../Components/home/ThirdSection';
import Footer from '../Components/home/Footer';
import "../static/home.css"

function Home() { 
  return (
    <div>
     <NavBar />
     <TopicSection />
     <SecondSection />
     <ThirdSection />
     <Footer />
    </div> 
  );
}

export default Home;
