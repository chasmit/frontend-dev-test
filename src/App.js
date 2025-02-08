import { Container } from 'react-bootstrap';
import './App.css';

import Hero from './components/Hero/Hero';
import Sunrise from './components/Sunrise/Sunrise';

function App() {
  return (
    <Container className="app-container">
      <Hero/>
      <Sunrise/>
    </Container>
  );
}

export default App;
