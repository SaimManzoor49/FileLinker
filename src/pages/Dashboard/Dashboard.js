import React, { useState } from "react";
import SideNav from "../../components/dashboard/SideNav";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {
  Box,
  Button
} from "@chakra-ui/react";
import SideContent from "../../components/dashboard/SideContent";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const [fileSelected, setFileSelected] = useState({});

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col ">
            <Box display={{ sm: "none" }}>
              {!fileSelected.name ? (
                <>
                  <Box className=""> 
                    <SideNav
                      fileSelected={fileSelected}
                      setFileSelected={setFileSelected}
                      show={show}
                      setShow={setShow}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Box>
                    <Button
                      className="mt-1 mb-3"
                      onClick={() => {
                        setFileSelected({});
                      }}
                    >
                      <AiOutlineMenuUnfold />
                    </Button>
                    <br />
                    <Box >
                      <SideContent />
                    </Box>
                  </Box>
                </>
              )}
            </Box>

            <Box display={{ base: "none", sm: "block" }}>
              <div className="row">
                <div className="col-4 col-md-3 bg-light" style={{ minHeight: "100vh" }}>
                  <SideNav
                    fileSelected={fileSelected}
                    setFileSelected={setFileSelected}
                    show={show}
                    setShow={setShow}
                  />
                </div>
                <div className="col-8 col-md-9 ">
                <SideContent />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
