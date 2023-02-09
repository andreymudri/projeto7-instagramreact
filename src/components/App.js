import Topo from "./Topo"
import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"



export default function App (){
    return (
        <div>
        <Topo/>
        <div className="corpo">
        <div>
        <Stories/> 
        <Posts/>    
        </div>   
        <Sidebar/>
        </div>
        
        </div>
    )}
    
