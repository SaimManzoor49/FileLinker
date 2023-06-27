import React from 'react'

export default function useTiverseTree() {

function insertNode(tree,folderId,item,isFolder){

    // if(tree.id===folderId && tree.isFolder==='folder'){
         tree.unshift({
            id:new Date().getTime(),
            name:item,
            isFolder,
            content:[]
        })
    // }

    return tree
}

  return (
    {insertNode}
  )
}
