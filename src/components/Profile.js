import React, { useState } from 'react';
export default function Profile(props){
  const [profileImage, setProfileImage] = useState(props.defaultimg);
  const [userName, setUserName] = useState(props.username);
  function changePic() {
    const newimg = prompt("Digite o link da nova foto de perfil");
    if (newimg !== "") {
      setProfileImage(newimg);
    }
  }

  function changeName() {
    const newName = prompt("Digite um novo nome");
    if (newName !== "") {
      setUserName(newName);
    }
  }
    
    return( 
           <div className="usuario">
    <img onClick={changePic} src={profileImage} alt={profileImage} data-test="profile-image"/>
    <div className="texto" data-test="name">
      <span>
        <strong>{userName}</strong>
        <ion-icon name="pencil" data-test="edit-name" onClick={changeName}></ion-icon>
      </span>
    </div>
  </div>)
}