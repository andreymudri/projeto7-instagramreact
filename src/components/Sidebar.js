import Profile from "./Profile"
import Sugestoes from "./Sugestoes"
export default function Sidebar(){
    return(<div className="sidebar">
            <Profile 
              defaultimg = "assets/img/catanacomics.svg"
              username = "catanacomics"/>

            <Sugestoes/>


    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
      Hashtags • Idioma
    </div>

    <div className="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>)
}