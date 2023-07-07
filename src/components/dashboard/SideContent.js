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
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import FolderStructure from "./FolderStructure";
import { signOut } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import useTiverseTree from "../../hooks/useTiverseTree";
import { useAuth } from "../../context/AuthContext";

export default function SideContent() {
  const [data, setData] = useState({ content: [] });

  const { insertNode, addFile, deleteFile } = useTiverseTree();

  const navigator = useNavigate();

  const { user, userData, setUserData } = useAuth();

  useEffect(() => {
    setData(userData.root);
  }, [userData]);

  const handleFileUpload = async (updatedData) => {
    const washingtonRef = doc(db, "users", user.email);

    const temp = await setDoc(washingtonRef, {
      ...userData,
      updatedAt: serverTimestamp(),
      root: data,
    });
  };

  //////////////////////////////

  const handleInsertNode = (folderId, item, isFolder) => {
    let newData = insertNode(data, folderId, item, isFolder);
    setData(newData);
    setUserData({ ...userData, root: newData });
    handleFileUpload({ ...userData, root: newData });
  };
  const handleInsertFile = (folderId, item, isFolder, URI, ext) => {
    let newData = addFile(data, folderId, item, isFolder, URI, ext);
    setData({ ...data, content: [...newData.content] });
    const temp = { ...data, content: [...newData.content] };
    setUserData({ ...userData, root: temp });
    handleFileUpload({ ...userData, root: temp });
  };

  const handleDeleteFile = (folderId) => {
    let newData = deleteFile(data, folderId);
    setData({ ...data, content: [...newData.content] });
    const temp = { ...data, content: [...newData.content] };
    setUserData({ ...userData, root: temp });
    handleFileUpload({ ...userData, root: temp });
  };

  const handleSearch = (e) => {
    // setSearch(e.target.value)
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
              onChange={handleSearch}
              placeholder="Search"
            />
          </InputGroup>
          <div className="d-flex justify-content-center align-items-center gap-2 pe-1">
            <Link to={"/"}>
              {" "}
              <Button variant={"outline"} leftIcon={<AiOutlineHome/>} colorScheme="red" size={"sm"}>
                Home
              </Button>{" "}
            </Link>
            <div className="dropdown">
              <Avatar
                size={"sm"}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                name={userData?.firstName + userData?.lastName}
                // textColor={''}
                fontWeight={"bold"}
                bg={"red"}
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

      <h6 className="fw-bold mt-4">Drive</h6>
      <hr />

      {data?.name && (
        <FolderStructure
          key={"12"}
          data={data}
          handleDeleteFile={handleDeleteFile}
          handleInsertNode={handleInsertNode}
          handleInsertFile={handleInsertFile}
        />
      )}
    </>
  );
}
