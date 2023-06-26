import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillFile, AiFillFolderOpen } from "react-icons/ai";

export default function FolderStructure({ content }) {
  const [view, setView] = useState({});

  return (
    <>
      <Accordion  allowToggle>
        {content.map((f, i) => (
          <AccordionItem
            key={i}
            onClick={() => {
              f.type === "folder" && f.content?.length
                ? setView(f.content)
                : setView({});
            }}
          >
            <h2>
              <AccordionButton  _expanded={{ bg: 'gray.400', color: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="d-flex gap-2">
                      {" "}
                      {f.type === "folder" ? (
                        <AiFillFolderOpen />
                      ) : (
                        <AiFillFile />
                      )}
                      <h6>{f.name}</h6>
                    </span>
                    {f.type !== "folder" && <small>size: {f.size} bytes</small>}
                    {/* <small>{f.type}</small> */}
                    <small>{f.date}</small>
                  </div>
                </Box>
                {f.type === "folder" && <AccordionIcon />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {view[0]?.name && (
                <div  className="ms-5 ">
                  <FolderStructure content={view} />
                </div>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
