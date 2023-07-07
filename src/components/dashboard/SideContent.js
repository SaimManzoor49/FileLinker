import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  AiOutlineCloudUpload,
  AiOutlineFolderAdd,
  AiOutlineSearch,
  AiOutlineSmile,
} from "react-icons/ai";
import FolderStructure from "./FolderStructure";
import { signOut } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { v4 } from "uuid";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

import useTiverseTree from "../../hooks/useTiverseTree";
import { useAuth } from "../../context/AuthContext";

const structure = {
  id: v4(),
  name: "folder",
  size: "1283913",
  type: "folder",
  date: "23 oct ",
  content:[]
};

const initialData = 
  {
    id: v4(),
    name: "Root",
    type: "folder",
    date: "20 oct ",
    content: [
      { ...structure, type: "file", name: "filee" },
      {
        ...structure,
        name: "folder2",
        content: [{ ...structure, type: "file", name: "filee" }],
      },
    ],
  }


const initialFolder = {
  name: "NewFolder",
  type: "folder",
  date: "00-00-00",
};

export default function SideContent() {
  const [data, setData] = useState({content:[]});
  const [file, setFile] = useState({});
  const [getFolderName, setGetFolderName] = useState(false);
  const [folder, setFolder] = useState(initialFolder);
  const [search, setSearch] = useState('');


  const { insertNode,addFile,deleteFile } = useTiverseTree();

  const navigator = useNavigate();

  const {user,userData,setUserData} = useAuth()
  
  
 useEffect(()=>{
setData(userData.root)
// console.log(data)
  


},[userData])




  const handleFileUpload = async(updatedData) => {
    // console.log(file);
    const washingtonRef = doc(db, "users", user.email);

// Set the "capital" field of the city 'DC'
console.log(updatedData)

const temp = 
await setDoc(washingtonRef,{...userData, updatedAt: serverTimestamp(),root:data});
  };




  const handleGetFolderName = () => {
    setGetFolderName(!getFolderName);
  };

  const handleFolderName = (e) => {
    setFolder((s) => ({ ...s, name: e.target.value, date: dayjs().format("DD-MM-YYYY") }));
  };
  const handleCreateFolder = (e) => {
    setData((s) => [...s, folder]);

    setGetFolderName(false);
  };

  //////////////////////////////

  const handleInsertNode = (folderId, item, isFolder) => {
    let newData = insertNode(data, folderId, item, isFolder);
    setData(newData);
    setUserData({...userData,root:newData})
    handleFileUpload({...userData,root:newData})

  };
  const handleInsertFile = (folderId, item, isFolder,URI,ext) => {
    let newData = addFile(data, folderId, item, isFolder,URI,ext);
    setData({...data,content:[...newData.content]});
    const temp =  {...data,content:[...newData.content]}
    setUserData({...userData, root:temp})
    handleFileUpload({...userData, root:temp})
  };
  
  const handleDeleteFile = (folderId) => {
    let newData = deleteFile(data, folderId);
    setData({...data,content:[...newData.content]});
    const temp =  {...data,content:[...newData.content]}
    setUserData({...userData, root:temp})
    handleFileUpload({...userData, root:temp})
  };


  const handleSearch =(e)=>{

    setSearch(e.target.value)




  }
  
  

  return (
    <>
      <Box>
        <div className="d-flex justify-content-between  align-items-center mt-4">
          <InputGroup w={{ base: "60vw", sm: "45vw", md: "40vw" }} ml={"2vw"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input
              rounded={"full"}
              bg={"gray.100"}
              type="text"
              onChange={handleSearch}
              placeholder="Search"
            />
          </InputGroup>
          <div className="">
            <div className="dropdown">
              <Avatar
                size={"sm"}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                name={userData?.firstName+userData?.lastName}
                // textColor={''}
                fontWeight={'bold'}
                bg={'red'}
                src={userData?.pic}
                alt={userData?.firstName}
              />
              <ul className="dropdown-menu " style={{ width: "260px" }}>
                <li>
                  <div className="p-2 d-flex gap-2">
                    <Image
                      rounded={"2xl"}
                      boxSize={"52px"}
                      objectFit="cover"
                      src={userData?.pic}
                      alt={userData?.firstName}
                    />
                    <div className="mt-4">
                      <h6 className="fw-bold mb-0">{userData?.firstName}</h6>
                      <small className="mb-0">{userData?.email}</small>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="ms-2">
                    <Button
                      onClick={() => {
                        signOut(auth);
                        localStorage.setItem("isAuth", "false");
                        navigator("/");
                      }}
                    >
                      Log out
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
      {/* <Box>
        <div className="d-flex justify-content-between align-items-center mt-2 px-2">
          <p className="mb-0">Drive</p>

          <div className="d-flex align-items-center">
            <Input
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              py={"2px"}
              size="sm"
              type="file"
            />
            <Button
              onClick={handleFileUpload}
              leftIcon={<AiOutlineCloudUpload size={"25px"} />}
              variant={"ghost"}
            >
              Upload
            </Button>
          </div>
        </div>
        <Box className="d-flex gap-2 justify-content-start align-items-center">
          <Button
            size={"sm"}
            px={"30px"}
            mt={"5px"}
            onClick={handleGetFolderName}
            leftIcon={<AiOutlineFolderAdd size={"25px"} />}
          >
            Create Folder
          </Button>
          {getFolderName && (
            <Input
              w={"250px"}
              size={"sm"}
              mt={"6px"}
              type="text"
              placeholder="Enter folder name first!!"
              onChange={handleFolderName}
            />
          )}
          {getFolderName && (
            <Button
              size={"sm"}
              px={"30px"}
              mt={"5px"}
              onClick={handleCreateFolder}
              leftIcon={<AiOutlineSmile size={"25px"} />}
            >
              Here we go
            </Button>
          )}
        </Box>
      </Box> */}

      <h6 className="fw-bold mt-4">Drive</h6>
      <hr />

      {data?.name && <FolderStructure key={'12'}  data={data}   handleDeleteFile={handleDeleteFile}  handleInsertNode={handleInsertNode} handleInsertFile={handleInsertFile}/> }  
    </>
  );
}
