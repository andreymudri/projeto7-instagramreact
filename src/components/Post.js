export default function Post(props) {


return (

    <div class="post" data-test="post">
          <div class="topo">
            <div class="usuario">
            <img src={props.userimg} alt={props.username} />
                {props.username}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
    
          <div class="conteudo">
            <img src={props.postimg} alt={props.postimg} data-test="post-image"/>
          </div>
    
          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
              </div>
            </div>
    
            <div class="curtidas">
              <img src={props.likedbyimg} alt={props.likedby}/>
              <div class="texto">
                Curtido por <strong>{props.likedby}</strong> e <strong data-test="likes-number">outras {props.likedammount} pessoas</strong>
              </div>
            </div>
          </div>
        </div>)



}