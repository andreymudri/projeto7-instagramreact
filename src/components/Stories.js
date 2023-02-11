import Story from "./Story"
export default function Stories (){
  const story = [
    {imagem:"assets/img/9gag.svg",username:"9gag0"},
    {imagem:"assets/img/meowed.svg",username:"meowed"},
    {imagem:"assets/img/wawawicomics.svg",username:"wawawicomics"},
    {imagem:"assets/img/respondeai.svg",username:"respondeai"},
    {imagem:"assets/img/9gag.svg",username:"5gag"},
    {imagem:"assets/img/9gag.svg",username:"7gag"},
    {imagem:"assets/img/memeriagourmet.svg",username:"memeriagourmet"},
    {imagem:"assets/img/9gag.svg",username:"8gag"},
    
  ]
    return(
        <div className="stories">
      { story.map((prop)=>
        <Story
           key={prop.username}
            username={prop.username}
            imagem={prop.imagem}
          />
)}
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>)
}