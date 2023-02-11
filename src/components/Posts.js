import Post from "./Post"

const posts =[
    {   
        username : "meowed",
        userimg : "assets/img/meowed.svg",
        likedby : "respondeai",
        postimg : "assets/img/gato-telefone.svg",
        likedbyimg : "assets/img/respondeai.svg",
        likedammount : 101523,   
    },
    {   
        username : "barked",
        userimg : "assets/img/barked.svg",
        likedby : "adorable_animals",
        postimg : "assets/img/dog.svg",
        likedbyimg : "assets/img/adorable_animals.svg",
        likedammount : 101523,   
    },
    {   
        username : "meowed2",
        userimg : "assets/img/meowed.svg",
        likedby : "respondeai",
        postimg : "assets/img/gato-telefone.svg",
        likedbyimg : "assets/img/respondeai.svg",
        likedammount : 551523,   
    },
]

export default function Posts(){
    return(<div className="posts">
        {posts.map((prop) =>(
            <Post   key={prop.username}
                    username={prop.username}
                    userimg={prop.userimg}
                    postimg={prop.postimg}
                    likedby={prop.likedby}
                    likedbyimg={prop.likedbyimg}
                    likedammount={prop.likedammount}  
            />
        ))}
  </div>
)
}