import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

export default function SideNav({ setFileSelected }) {
  const { userData } = useAuth();

  return (
    <>
      <h4>My files</h4>

      <div className="d-flex justify-content-between align-items-center mb-1">
        <h6>FILE MANAGER</h6>
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
              w={"100%"}
              onClick={() => {
                setFileSelected({ name: "saim" });
              }}
            >
              {userData.root?.name}
            </Button>
            <br />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
