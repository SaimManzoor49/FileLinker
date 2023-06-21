import { Avatar, Button, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-2 shadow px-5">
            <div className=" d-flex justify-content-between align-items-center">
              <Link to={"/"}>
                <Avatar
                  name="M"
                  src="https://mega.io/wp-content/themes/megapages/megalib/images/megaicon.svg"
                  size={"sm"}
                />
              </Link>
              <div className="">
                <Tooltip
                  hasArrow
                  label="Switch to Dark Mode"
                  bg="blackAlpha.900"
                >
                  <Button
                    variant={"unstyled"}
                    fontSize={{ base: "md", sm: "2xl" }}
                    mt={1}
                    size={{ base: "sm", sm: "md" }}
                    leftIcon={<FaRegLightbulb />}
                  />
                </Tooltip>
                <Link to={'/auth/login'}>
                <Button
                  px={{ base: "4", sm: "8" }}
                  border={"2px"}
                  _hover={{ color: "white", bg: "black" }}
                  variant={"ghost"}
                  size={{ base: "sm", sm: "md" }}
                >
                  Login
                </Button>
                  </Link>
                <Link to={'/auth/signup'}>
                <Button
                  px={{ base: "4", sm: "8" }}
                  ml={2}
                  variant={"solid"}
                  _hover={{ color: "black", bg: "white" }}
                  color={"white"}
                  bg={"black"}
                  size={{ base: "sm", sm: "md" }}
                >
                  Signup
                </Button>
                   </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
