export default function Profile(props){
  let profileImage = props.defaultimg
  let userName = props.username
    function changePic(){
        const newimg = prompt("Digite o link da nova foto de perfil")
      if (newimg !== ""){
        profileImage = newimg;
      }
    }
    function changeName(){
      const newName = prompt("Digite um novo nome")
      if (newName !== "") {
        userName = newName
      }
    }
    return( 
           <div class="usuario">
    <img onClick={changePic} src={profileImage} alt={profileImage} data-test="profile-image"/>
    <div class="texto" data-test="name">
      <span>
        <strong>{userName}</strong>
        <ion-icon name="pencil" data-test="edit-name" onClick={changeName}></ion-icon>
      </span>
    </div>
  </div>)
}