export default function Sugestao(props){

return (

    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} alt="bad.vibes.memes.svg"/>
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">{props.follow}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
)
}