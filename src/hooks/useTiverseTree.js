
import dayjs from "dayjs"
import { v4 } from "uuid"
export default function useTiverseTree() {


const  insertNode=(tree,folderId,item,isFolder)=>{
    if(tree.id===folderId && tree.type==='folder'){
      tree.content.unshift({
         id:v4(),
         name:item,
         type:isFolder,
         date: dayjs().format("DD-MM-YYYY"),
         content:[]
     })
    }
    else{

   let node = []
   console.log(tree)
   node = tree.content.map((n)=>(insertNode(n,folderId,item,isFolder)))
   console.log(node)
 }
//  return tree



  console.log(tree)
  return tree

}

  return (
    {insertNode}
  )
}
