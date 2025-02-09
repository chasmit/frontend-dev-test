import { Container } from 'react-bootstrap';
import './App.css';

import Hero from './components/Hero/Hero';
import Sunrise from './components/Sunrise/Sunrise';
import MotherAndChild from './components/MotherAndChild/MotherAndChild';
import IconDetail from './components/IconDetail/IconDetail';
import HappyChild from './components/HappyChild/HappyChild';

function App() {
  return (
    <Container className="app-container">
      <Hero/>
      <Sunrise/>
      <MotherAndChild/>
      <IconDetail/>
      <HappyChild/>
    </Container>
  );
}

export default App;
