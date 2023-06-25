import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";

export default function SideNav({
  show,
  setShow,
  fileSelected,
  setFileSelected,
}) {
  return (
    <>
      <h4>My files</h4>

      <div className="d-flex justify-content-between align-items-center mb-1">
        <h6>FILE MANAGER</h6>
        {/* <Box display={{base:'none',sm:'block'}}><Button onClick={()=>{setShow(!show)}}><AiOutlineMenuUnfold  /></Button></Box> */}
      </div>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton borderTop={"0px"}>
              <Box as="span" flex="1" textAlign="left">
                Drive
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {/* folder structure */}
            <Button
              className=" d-flex justify-content-start"
              // pr={"16vw"}
              w={'100%'}
              onClick={() => {
                setFileSelected({ name: "saim" });
              }}
            >
                Folder
            </Button>
            <br />
            <Button
              className=" d-flex justify-content-start"
              // pr={"16vw"}
              w={'100%'}
              onClick={() => {
                setFileSelected({ name: "saim" });
              }}
            >
                Folder
            </Button>
            <br />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
