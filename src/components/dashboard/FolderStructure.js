import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillFile, AiFillFolderOpen, AiOutlineFileAdd, AiOutlineFolderAdd } from "react-icons/ai";

export default function FolderStructure({ data , handleInsertNode }) {

  const [dataToRender, setDataToRender] = useState(data);
  const [view, setView] = useState([]);
  const [showInput, setShowInput] = useState({
    visible:false,
    type:null
  });



  const handleDirectory = (e,type)=>{
    e.stopPropagation();

    setShowInput({
      visible:true,
      type
    })

  }


  const handleAddDirectory = (e)=>{
    if(e.keyCode===13&& e.target.value){
      console.log('oskdo')

      handleInsertNode(dataToRender.id,e.target.value,showInput.type)

      setShowInput({...showInput,visible:false})
    }

  }

  return (
    <>
      <Accordion  allowToggle>
        {/* {data.content?.map((f, i) => ( */}
          <AccordionItem
            // key={i}
            onClick={() => {
              dataToRender.type === "folder" && dataToRender.content?.length
                ? setView(dataToRender.content)
                : setView([])
            }}
          >
            <h2>
              <AccordionButton  _expanded={{ bg: 'gray.400', color: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="d-flex gap-2">
                      {" "}
                      {dataToRender.type === "folder" ? (
                        <AiFillFolderOpen />
                      ) : (
                        <AiFillFile />
                      )}
                      <h6>{dataToRender.name}</h6>
                    </span>
                    {/* {f.type !== "folder" && <small>size: {f.size} bytes</small>} */}
                    {/* <small>{f.type}</small> */}

                    <small>{dataToRender.date}</small>

                        <div className="">
                          <Button as={'span'} size={'sm'} rightIcon={<AiOutlineFolderAdd/>} onClick={(e)=>{handleDirectory(e,'folder')}} >Folder</Button>
                          <Button as={'span'} size={'sm'} ms={'2px'} rightIcon={<AiOutlineFileAdd/>} onClick={(e)=>{handleDirectory(e,'file')}} >File</Button>
                        </div>

                  </div>
                </Box>
                {dataToRender.type === "folder" && <AccordionIcon />}
              </AccordionButton>
            </h2>
            {showInput.visible&&
            <div className="d-flex align-items-center gap-2 mb-2">
              {showInput.type==='folder'?<AiFillFolderOpen size={'25px'}/>:<AiFillFile  size={'25px'}/>}
            <Input type="text" size={'sm'} w={'94%'} autoFocus onBlur={()=>{setShowInput({...showInput,visible:false})}} onKeyDown={handleAddDirectory} />

            </div>
            
            }
            <AccordionPanel pb={4}>
              {view[0]?.name && (
                
                view.map((f,i)=>(
                  <div  className="ms-5 " key={i+903}>
                  <FolderStructure data={f} />
                </div>
                ))

                
              )}
            </AccordionPanel>
          </AccordionItem>
        {/* // ) */}
        {/* )} */}
      </Accordion>
    </>
  );
}
