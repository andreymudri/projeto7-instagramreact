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
  function clickFoto() {
    if (Heartion === "heart-outline") {
      setHeartion("heart") 
      setLikeammount(Likeammount + 1)      
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

    <div className="post" data-test="post">
          <div className="topo">
            <div className="usuario">
            <img src={props.userimg} alt={props.username} />
                {props.username}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
    
          <div className="conteudo">
            <img src={props.postimg} alt={props.postimg} onClick={clickFoto} data-test="post-image"/>
          </div>
    
          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon onClick={handleLike} name={Heartion} class={Heartion} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={handleSave} name={Savedion} className ={Savedion} data-test="save-post"></ion-icon>
              </div>
            </div>
    
            <div className="curtidas">
              <img src={props.likedbyimg} alt={props.likedby}/>
              <div className="texto">
                Curtido por <strong>{props.likedby}</strong> e <strong data-test="likes-number">outras {Likeammount} pessoas</strong>
              </div>
            </div>
          </div>
        </div>)



}