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
import React, { useRef, useState } from "react";
import {
  AiFillFile,
  AiFillFolderOpen,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import {useUploadFile} from 'react-firebase-hooks/storage'
import { ref,getDownloadURL } from 'firebase/storage';
import { storage } from "../../config/firebase";






export default function FolderStructure({ data, handleInsertNode }) {

  // const [data, setdata] = useState(data);
  const [view, setView] = useState([]);
  // const [selectedFile, setSelectedFile] = useState();
  const [showInput, setShowInput] = useState({
    visible: false,
    type: null,
  });
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const fileInputRef = useRef(null);


  const storageRef = ref(storage);






  const handleDirectory = (e, type) => {
    e.stopPropagation();

    setShowInput({
      visible: true,
      type,
    });
  };






  const handleAddDirectory = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      console.log(data.id)
      handleInsertNode(data.id, e.target.value, showInput.type);

      setShowInput({ ...showInput, visible: false });
    }
  };








  const handleButtonClick = (e) => {
    e.stopPropagation()
    // Trigger the input element's click event
    fileInputRef.current.click();
  };




  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];


    if (selectedFile) {

      // selectedFile.name=selectedFile.name.split('.')[0]+ Math.random().toString().slice(2) +"."+ selectedFile.name.split('.')[1]
      const fileRef = ref(storageRef, selectedFile.name.split('.')[0]+ Math.random().toString().slice(2) +"."+ selectedFile.name.split('.')[1]);

      const result = await uploadFile(fileRef, selectedFile, {
        contentType: selectedFile.type
      });
      console.log(`Result: ` + result);
      const downloadURL = await getDownloadURL(result.ref);
      console.log(downloadURL)
    }

    
    
    
    
    // Do something with the selected file
    console.log('Selected file:', selectedFile);


    fileInputRef.current.value=""

  };


  return (
    <>
      <Accordion allowToggle>
        {/* {data.content?.map((f, i) => ( */}
        <AccordionItem
          // key={i}
          onClick={() => {
            data.type === "folder" && data.content?.length
              ? setView(data.content)
              : setView([]);
          }}
        >
          <h2>
            <AccordionButton _expanded={{ bg: "gray.400", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex gap-2">
                    {" "}
                    {data.type === "folder" ? (
                      <AiFillFolderOpen />
                    ) : (
                      <AiFillFile />
                    )}
                    <h6>{data.name}</h6>
                  </span>
                  {/* {f.type !== "folder" && <small>size: {f.size} bytes</small>} */}
                  {/* <small>{f.type}</small> */}

                  <small>{data.date}</small>

                      {data.type==='folder'&&
                  <div className="">
                    <Button
                      as={"span"}
                      size={"sm"}
                      rightIcon={<AiOutlineFolderAdd />}
                      onClick={(e) => {
                        handleDirectory(e, "folder");
                      }}
                    >
                      Folder
                    </Button>
                    {/* <Input as={'span'} w={'10%'} type="file"
                    onClick={(e) => {
                      handleDirectory(e, "file");
                    }}
                    /> */}
                    <Button
                    
                      as={"span"}
                      size={"sm"}
                      ms={"2px"}
                      rightIcon={<AiOutlineFileAdd />}
                      onClick={(e) => {
                        handleButtonClick(e);
                      }}
                    >
                      <input type="file" style={{display:'none'}} ref={fileInputRef} onChange={handleFileChange}  />
                      File
                    </Button>
                  </div>
                      }



                </div>
              </Box>
              {data.type === "folder" && <AccordionIcon />}
            </AccordionButton>
          </h2>
          {showInput.visible && (
            <div className="d-flex align-items-center gap-2 mb-2">
              {showInput.type === "folder" ? (
                <AiFillFolderOpen size={"25px"} />
              ) : (
                <AiFillFile size={"25px"} />
              )}
              <Input
                type="text"
                size={"sm"}
                w={"94%"}
                autoFocus
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
                onKeyDown={handleAddDirectory}
              />
            </div>
          )}
          <AccordionPanel pb={4}>
            {view[0]?.name &&
              view.map((f, i) => (
                <div className="ms-1 " key={i}>
                  <FolderStructure data={f} handleInsertNode={handleInsertNode} />
                </div>
              ))}
          </AccordionPanel>
        </AccordionItem>
        {/* // ) */}
        {/* )} */}
      </Accordion>
    </>
  );
}
