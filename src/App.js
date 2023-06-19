import Header from './components/Header/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import Card from './components/Card/Card'; /* !!!!!!!!! */
import './style.css';
import StyledGlobal, { TelaInteira} from './styledGlobal';

function App() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (

      <>
      <StyledGlobal/>
      {/* <div class="tela-inteira"> */}
      <TelaInteira>

        <Header/>       
        
        <main>
          <Nav/>
          <Home/>
        </main>

        <Footer />


        </TelaInteira>
      {/* </div> */}
      </>







  );
}

export default App;
