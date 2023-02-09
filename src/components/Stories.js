import Story from "./Story"
export default function Stories (){
  const story = [
    {imagem:"assets/img/9gag.svg",username:"9gag0"},
    {imagem:"assets/img/meowed.svg",username:"meowed"},
    {imagem:"assets/img/wawawicomics.svg",username:"wawawicomics"},
    {imagem:"assets/img/respondeai.svg",username:"respondeai"},
    {imagem:"assets/img/9gag.svg",username:"9gag"},
    {imagem:"assets/img/9gag.svg",username:"9gag"},
    {imagem:"assets/img/memeriagourmet.svg",username:"memeriagourmet"},
    {imagem:"assets/img/9gag.svg",username:"9gag"},
    
  ]
    return(
        <div class="stories">
      { story.map((prop)=>
          <Story             
            username={prop.username}
            imagem={prop.imagem}
          />
)}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>)
}