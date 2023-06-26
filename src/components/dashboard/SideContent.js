import React from "react";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload, AiOutlineSearch } from "react-icons/ai";
import FolderStructure from "./FolderStructure";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const structure = {
  name: "folder",
  size: "1283913",
  type: "folder",
  date: "23 oct ",
};

const data = [
  {
    name: "folder",
    size: "1283913",
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
  },
];

export default function SideContent() {
  const navigator = useNavigate();

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
          <Button
            leftIcon={<AiOutlineCloudUpload size={"25px"} />}
            variant={"ghost"}
          >
            Upload
          </Button>
        </div>
      </Box>
      <hr />
      <FolderStructure content={data} />
    </>
  );
}
