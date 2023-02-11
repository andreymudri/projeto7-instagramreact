import Sugestao from "./Sugestao"
export default function Sugestoes(){
  const sugestoes = [
    {name:"bad.vibe.memes", imagem:"assets/img/bad.vibes.memes.svg", follow:"Segue você"},
    {name:"chibirdart", imagem:"assets/img/chibirdart.svg", follow:"Segue você"},
    {name:"razoesparaacreditar", imagem:"assets/img/razoesparaacreditar.svg", follow:"Segue você"},
    {name:"bad.trip.menes", imagem:"assets/img/bad.vibes.memes.svg", follow:"Segue você"},
    {name:"smallcutecats", imagem:"assets/img/smallcutecats.svg", follow:"Segue você"}]


    return(   <div className="sugestoes">
    <div className="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
     {sugestoes.map((prop)=>(
         <Sugestao
        key={prop.name}
        username={prop.name}
        imagem={prop.imagem}
        follow={prop.follow}      
      />

     ))}

  </div>
)
}