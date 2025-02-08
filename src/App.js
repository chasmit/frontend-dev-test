import { Container } from 'react-bootstrap';
import './App.css';

import Hero from './components/Hero/Hero';
import Sunrise from './components/Sunrise/Sunrise';
import MotherAndChild from './components/MotherAndChild/MotherAndChild';

function App() {
  return (
    <Container className="app-container">
      <Hero/>
      <Sunrise/>
      <MotherAndChild/>
    </Container>
  );
}

export default App;
