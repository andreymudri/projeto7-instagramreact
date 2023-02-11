export default function Story(props){



    return (        
    <div className="story">
    <div className="imagem">
      <img src={props.imagem} alt={props.imagem}/>
    </div>
    <div className="usuario">
    {props.username}
    </div>
  </div>)
}