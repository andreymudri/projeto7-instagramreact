import Post from "./Post"
const posts =[
    {   
        username : "meowed",
        userimg : "assets/img/meowed.svg",
        likedby : "respondeai",
        postimg : "assets/img/gato-telefone.svg",
        likedbyimg : "assets/img/respondeai.svg",
        likedammount : 101.523,   
    },
    {   
        username : "barked",
        userimg : "assets/img/barked.svg",
        likedby : "adorable_animals",
        postimg : "assets/img/dog.svg",
        likedbyimg : "assets/img/adorable_animals.svg",
        likedammount : 101.523,   
    },
    {   
        username : "meowed",
        userimg : "assets/img/meowed.svg",
        likedby : "respondeai",
        postimg : "assets/img/gato-telefone.svg",
        likedbyimg : "assets/img/respondeai.svg",
        likedammount : 551.523,   
    },
]

export default function Posts(){
    return(<div class="posts">
        {posts.map((prop) =>(
            <Post
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