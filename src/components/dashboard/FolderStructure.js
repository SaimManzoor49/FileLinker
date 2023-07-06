import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Progress,
  Tooltip,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {
  AiFillFile,
  AiFillFolderOpen,
  AiOutlineCloudDownload,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { useUploadFile } from "react-firebase-hooks/storage";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../config/firebase";
// import {storage} from 'firebase-con'
import { useToast } from "@chakra-ui/react";
import { BiShare } from "react-icons/bi";

export default function FolderStructure({
  data,
  handleInsertNode,
  handleInsertFile,
  handleDeleteFile,
}) {
  const [view, setView] = useState([]);
  const [gotURI, setGotURI] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showInput, setShowInput] = useState({
    visible: false,
    type: null,
  });
  const fileInputRef = useRef(null);

  // const storageRef = ref(storage);

  const toast = useToast();

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

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
    e.stopPropagation();

    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setIsDownloading(true);

    if (selectedFile) {
      const modifiedName =
        selectedFile.name.split(".")[0] +
        "|" +
        Math.random().toString().slice(2) +
        "." +
        selectedFile.name.split(".")[1];
      const modifiedFile = new File([selectedFile], modifiedName, {
        type: selectedFile.type,
      });

      const storageRef = ref(storage, modifiedFile.name);

      const uploadTask = uploadBytesResumable(storageRef, modifiedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          setIsDownloading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const ext = "." + modifiedFile.type.split("/")[1];
            handleInsertFile(
              data.id,
              modifiedFile.name.split("|")[0],
              "file",
              downloadURL,
              ext
            );
            setIsDownloading(false);
          });
        }
      );
    }

    fileInputRef.current.value = "";
  };

  const copyURL = () => {
    let copyURI = data.downloadURI;
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value =
      "http://localhost:3000/file/" +
      copyURI.split("/")[copyURI.split("/").length - 1];

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);

    toast({
      title: "Share link copied to your clipboard!!!",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top-right",
    });

    setGotURI(true);
  };

  const handleDownload = async (e) => {
    setIsDownloading(true);

    e.stopPropagation();

    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setProgress(progress);
      }
    };

    xhr.onload = (event) => {
      if (xhr.status === 200) {
        setProgress(100);
        setIsDownloading(false);

        const blob = xhr.response;
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = data.name + data.extension;
        downloadLink.click();
      } else {
        setProgress(0);
        setIsDownloading(false);
      }
    };

    let url = data.downloadURI;
    xhr.open("GET", url);
    xhr.send();
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if(data.type==='folder'){
      handleDeleteFile(data.id);

    }else{

      const desertRef = ref(storage, data.downloadURI);
      handleDeleteFile(data.id);

    deleteObject(desertRef)
      .then(() => {
      })
      .catch((error) => {
        console.log(error)
      });


    }
    };

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "gray.400", color: "white" }}
              onClick={(e) => {
                data.type === "file" && handlePropagation(e);
              }}
            >
              <Box as="span" flex="1" textAlign="left">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex gap-2">
                    {" "}
                    {data.type === "folder" ? (
                      <AiFillFolderOpen />
                    ) : (
                      <AiFillFile />
                    )}
                    <h6>
                      {data?.name?.length > 12 ? (
                        <>
                          <Tooltip
                            as={"span"}
                            label={data.name}
                            aria-label="A tooltip"
                          >
                            {data.name.slice(0, 12) + "..."}
                          </Tooltip>
                        </>
                      ) : (
                        data.name
                      )}
                    </h6>
                  </span>
                  {/* {f.type !== "folder" && <small>size: {f.size} bytes</small>} */}
                  {/* <small>{f.type}</small> */}

                  <small>
                    {data.type === "file" && (
                      <span className="me-1">
                        <Button
                          as={"span"}
                          size={"sm"}
                          me={"1px"}
                          colorScheme="red"
                          onClick={(e) => {
                            handleDelete(e);
                          }}
                        >
                          <AiOutlineDelete fontSize={"20px"} />
                        </Button>
                        <Button
                          as={"span"}
                          size={"sm"}
                          colorScheme="yellow"
                          onClick={copyURL}
                        >
                          {!gotURI ? <BiShare fontSize={"20px"} /> : "Got u 😁"}
                        </Button>
                        <Button
                          as={"span"}
                          size={"sm"}
                          ms={"1px"}
                          colorScheme="green"
                          onClick={(e) => {
                            handleDownload(e);
                          }}
                        >
                          <AiOutlineDownload fontSize={"20px"} />
                        </Button>
                      </span>
                    )}

                    {data.date}
                  </small>

                  {data.type === "folder" && (
                    <div className="">
                     {
                      data.name!=='root'&&

                       <Button
                       as={"span"}
                       size={"sm"}
                       me={"1px"}
                       colorScheme="red"
                       onClick={(e) => {
                         handleDelete(e);
                        }}
                        >
                          <AiOutlineDelete fontSize={"20px"} />
                        </Button>
                        }
                      <Button
                        as={"span"}
                        size={"sm"}
                        onClick={(e) => {
                          handleDirectory(e, "folder");
                        }}
                      >
                        <AiOutlineFolderAdd fontSize={"20px"}/>
                      </Button>

                      <Button
                        as={"span"}
                        size={"sm"}
                        ms={"2px"}
                        onClick={(e) => {
                          handleButtonClick(e);
                        }}
                      >
                        <input
                          type="file"
                          style={{ display: "none" }}
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <AiOutlineFileAdd fontSize={"20px"}/>
                      </Button>
                    </div>
                  )}
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

          {isDownloading && <Progress hasStripe value={progress} />}
          <AccordionPanel pb={4}>
            {data.content.map((f, i) => (
              <div className="ms-1 " key={i}>
                <FolderStructure
                  data={f}
                  handleInsertNode={handleInsertNode}
                  handleInsertFile={handleInsertFile}
                  handleDeleteFile={handleDeleteFile}
                />
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
