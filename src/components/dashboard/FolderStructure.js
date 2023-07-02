import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Tooltip,
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






export default function FolderStructure({ data, handleInsertNode,handleInsertFile }) {

  const [view, setView] = useState([]);
  const [gotURI,setGotURI] = useState(false)
  const [showInput, setShowInput] = useState({
    visible: false,
    type: null,
  });
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const fileInputRef = useRef(null);


  const storageRef = ref(storage);




  const handlePropagation =(e)=>{
    e.stopPropagation();

  }




  const handleDirectory = (e, type) => {
    e.stopPropagation();

    setShowInput({
      visible: true,
      type,
    });
  };






  const handleAddDirectory = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(data.id, e.target.value, showInput.type);

      setShowInput({ ...showInput, visible: false });
    }
  };








  const handleButtonClick = (e) => {
    e.stopPropagation()


    fileInputRef.current.click();
  };




  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];


    if (selectedFile) {

       
      const modifiedName = selectedFile.name.split('.')[0] +'|'+ Math.random().toString().slice(2) + "." + selectedFile.name.split('.')[1];
      const modifiedFile = new File([selectedFile], modifiedName, { type: selectedFile.type });
      
      
      
      const fileRef = ref(storageRef, modifiedFile.name.split('.')[0]+'|'+ Math.random().toString().slice(2) +"."+ modifiedFile.name.split('.')[1]);
      
      const result = await uploadFile(fileRef, modifiedFile, {
        contentType: modifiedFile.type
      });
      console.log(`Result: ` + result);
      const downloadURL = await getDownloadURL(result.ref);
      console.log(downloadURL)
      let ext = '.'+modifiedFile.type.split('/')[1]
      handleInsertFile(data.id,modifiedFile.name.split('|')[0],'file',downloadURL,ext)



    }


    fileInputRef.current.value=""

  };



  const copyURL =()=>{
    let copyURI =data.downloadURI 
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = copyURI;
    
        // Append the textarea to the document
        document.body.appendChild(textarea);
    
        // Select the text inside the textarea
        textarea.select();
    
        // Execute the copy command
        document.execCommand('copy');
    
        // Remove the temporary textarea from the document
        document.body.removeChild(textarea);
    
        // Optionally, show a success message or perform other actions

        setGotURI(true)
  }

  const handleDownload = async(e)=>{
    e.stopPropagation()
    


//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     let url = 
//     // "https://firebasestorage.googleapis.com/v0/b/filelinkerltd.appspot.com/o/checking%7C9261499749584714%7C30354176522817644.txt?alt=media&token=435d816d-2a0d-440c-85bd-0a481c856b9c"
//     "https://firebasestorage.googleapis.com/v0/b/filelinkerltd.appspot.com/o/IMG-20230628-WA0009-removebg-preview%7C8322919052158815%7C06395997959824395.png?alt=media&token=60297e82-5e50-466b-8da3-481400941551"
//     xhr.open('GET', url);
//     xhr.send();
// console.log(url,"<-downloaded")
console.log(data)
const xhr = new XMLHttpRequest();
xhr.responseType = 'blob';
xhr.onload = (event) => {
  const blob = xhr.response;
  // Create a temporary download link
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = data.name+data.extension; // Specify the desired file name here
  downloadLink.click();
};
let url = 
// "https://firebasestorage.googleapis.com/v0/b/filelinkerltd.appspot.com/o/IMG-20230628-WA0009-removebg-preview%7C8322919052158815%7C06395997959824395.png?alt=media&token=60297e82-5e50-466b-8da3-481400941551";
data.downloadURI
xhr.open('GET', url);
xhr.send();
console.log(url, "<-downloaded");   
  }


  return (
    <>
      <Accordion allowToggle>
        <AccordionItem
       
        >
          <h2>
            <AccordionButton _expanded={{ bg: "gray.400", color: "white" }}   onClick={(e)=>{ data.type==='file' && handlePropagation(e)}} >
              <Box as="span" flex="1" textAlign="left">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex gap-2">
                    {" "}
                    {data.type === "folder" ? (
                      <AiFillFolderOpen />
                    ) : (
                      <AiFillFile />
                    )}
                    <h6>{data.name.length>12?<>
                      <Tooltip as={'span'} label={data.name} aria-label='A tooltip'>

                      {
                        data.name.slice(0,12)+'...'
                        
                      }
                      </Tooltip>
                    </>
                      :data.name}
                      </h6>
                  </span>
                  {/* {f.type !== "folder" && <small>size: {f.size} bytes</small>} */}
                  {/* <small>{f.type}</small> */}

                  <small>
                      {data.type==='file'&&
                      <span className="me-1">
                      <Button as={'span'} size={'sm'} colorScheme="yellow" onClick={copyURL} >{!gotURI?"Share file":'Got u 😁'}</Button>
                      <Button as={'span'} size={'sm'}  ms={'1px'} colorScheme="green" onClick={(e)=>{handleDownload(e)}} >Download</Button>
                      </span>
                      }  

                    {data.date}
                    </small>

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
            {
              data.content.map((f, i) => (
                <div className="ms-1 " key={i}>
                  
                  <FolderStructure data={f}  handleInsertNode={handleInsertNode} handleInsertFile={handleInsertFile}/>
                </div>
              ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
