import React, { useState } from "react";
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
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { v4 } from "uuid";

import useTiverseTree from "../../hooks/useTiverseTree";

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
  const [data, setData] = useState(initialData);
  const [file, setFile] = useState({});
  const [getFolderName, setGetFolderName] = useState(false);
  const [folder, setFolder] = useState(initialFolder);

  const { insertNode } = useTiverseTree();

  const navigator = useNavigate();

  const handleFileUpload = () => {
    console.log(file);
  };

  const handleGetFolderName = () => {
    setGetFolderName(!getFolderName);
  };

  const handleFolderName = (e) => {
    setFolder((s) => ({ ...s, name: e.target.value, date: dayjs().format("DD-MM-YYYY") }));
    // setFolder((s) => ({ ...s, }));
  };
  const handleCreateFolder = (e) => {
    setData((s) => [...s, folder]);

    setGetFolderName(false);
  };

  //////////////////////////////

  const handleInsertNode = (folderId, item, isFolder) => {
    // let newData = { ...data,content: [...insertNode(data, folderId, item, isFolder)]};
    let newData = insertNode(data, folderId, item, isFolder);
    setData(newData);
  };

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
                name="S"
                src="https://avatars.githubusercontent.com/u/118682379?v=4"
              />
              <ul className="dropdown-menu " style={{ width: "260px" }}>
                <li>
                  <div className="p-2 d-flex gap-2">
                    <Image
                      rounded={"2xl"}
                      boxSize={"52px"}
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                    <div className="mt-4">
                      <h6 className="fw-bold mb-0">Saim</h6>
                      <small className="mb-0">saummanzoor49@gmail.com</small>
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
      <Box>
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
      </Box>
      <hr />
      {/* {data.map((d, i) => ( */}
        <FolderStructure  data={data} handleInsertNode={handleInsertNode} />
      {/* ))} */}
    </>
  );
}
