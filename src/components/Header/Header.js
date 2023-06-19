import { CointainerHeader } from "./styled"


function Header(){
    return(
        // <header>
        <CointainerHeader>
          <h1>Meu app</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca"></input>
      </CointainerHeader>
    )
}

export default Header