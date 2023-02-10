import React, { useState } from 'react';
export default function Post(props) {
  const [Heartion, setHeartion] = useState("heart-outline")
  const [Savedion, setSavedion] = useState("bookmark-outline")
  const [Likeammount, setLikeammount] = useState(props.likedammount)

function handleLike (){
    if (Heartion === "heart-outline") {
      setHeartion("heart") 
      setLikeammount(Likeammount + 1)
      
    } else {
      setHeartion("heart-outline")
      setLikeammount(Likeammount - 1)
      
    }
}
function handleSave(){
  if (Savedion === "bookmark-outline") {
    setSavedion("bookmark")

  } else {
    setSavedion("bookmark-outline")

  }

}

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
                <ion-icon onClick={handleLike} name={Heartion} class={Heartion} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={handleSave} name={Savedion} class ={Savedion} data-test="save-post"></ion-icon>
              </div>
            </div>
    
            <div class="curtidas">
              <img src={props.likedbyimg} alt={props.likedby}/>
              <div class="texto">
                Curtido por <strong>{props.likedby}</strong> e <strong data-test="likes-number">outras {Likeammount} pessoas</strong>
              </div>
            </div>
          </div>
        </div>)



}