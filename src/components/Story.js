export default function Story(props){



    return (        
    <div class="story">
    <div class="imagem">
      <img src={props.imagem} alt={props.imagem}/>
    </div>
    <div class="usuario">
    {props.username}
    </div>
  </div>)
}