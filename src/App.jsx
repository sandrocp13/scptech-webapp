import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    color: #222;
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  h2 {
    color: #FF6600;
    margin-bottom: 0.5rem;
  }
  a {
    color: #FF6600;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;