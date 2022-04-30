import './App.css';
import AboutContainer from './components/aboutcontainer/aboutcontainer';
import ContactContainer from './components/contact/contact';
import Header from './components/header/header';
import ProjectContainer from './components/projectscontainer/projectcontainer';
import TopContainer from './components/TopContainer/TopContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <AboutContainer />
      <ProjectContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
