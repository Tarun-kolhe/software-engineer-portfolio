import './App.css';
import { HomePage } from './Components/Home/home';
import { AboutMeSection } from './Components/About/about';
import { ProjectSection } from './Components/Project/project';
import { ContactSection } from './Components/Contact/contact';
import { Footersection } from './Components/footer/footer';
import { HeaderSection } from './Components/header/header';
import { ROUTEPROJECT, ROUTEHOME, ROUTEABOUT, ROUTECONTACT } from './constants/routes';
import { ProjectPage } from './Components/projectspage/projectpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <section id={ROUTEHOME}><HomePage /></section>
        <section id={ROUTEABOUT}><AboutMeSection /></section>
        <section id={ROUTEPROJECT}><ProjectSection /></section>
        <section id={ROUTECONTACT}><ContactSection /></section>
      </main>
      <Footersection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projectpage" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
