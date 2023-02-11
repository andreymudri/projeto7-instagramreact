export default function Sugestao(props){

return (

    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagem} alt="bad.vibes.memes.svg"/>
        <div className="texto">
          <div className="nome">{props.username}</div>
          <div className="razao">{props.follow}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
)
}