import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/*//////////////////---1----//////////////////////  */}
          <div className="col ">
            <div
              className="d-flex justify-content-center align-items-center text-center flex-column "
              style={{ minHeight: "70vh" }}
            >
              <span className="fw-bolder  " style={{ fontSize: "5vw" }}>
                Online Cloud Storage Services for Everyone
              </span>
              <div className="w-75 w-md-50 my-2 ">
                <h6>
                  Our online cloud storage services offer secure and accessible
                  data storage for everyone, with user-friendly features and
                  flexible plans to meet diverse needs. Experience peace of mind
                  and convenience with our inclusive platform.
                </h6>
                <Button
                  colorScheme="red"
                  size={{ base: "sm", sm: "md", md: "lg" }}
                  mt={1}
                >
                  Try FileLinker for free
                </Button>
              </div>
            </div>
          </div>
        </div>
        <br /><br /> <br /> <br />
        <div className="row mt-5">
          {/*//////////////////---2----//////////////////////  */}
          <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center flex-column">
              <Text
                className="w-75 fw-bold"
                fontSize={{ base: "18px", sm: "22px", md: "38px" }}
              >
                Store files, chat, and meet – all in one place
              </Text>
              <Text fontSize={{ base: "12px", sm: "16px" }}>
                FileLinker brings cloud storage, file and folder sharing, chat,
                meetings, and more — together into one place.
              </Text>
            </div>
          </div>
        </div>
        <br /><br /> <br /> <br />
        <div className="row mt-5 d-flex align-items-center ">
          {/*//////////////////---3----//////////////////////  */}
          <div className="col-12 col-md-6 order-3 order-md-0">
            <div className="">
              <Text
                className="w-75 fw-bold"
                fontSize={{ base: "18px", sm: "22px", md: "38px" }}
              >
                Security that's always on
              </Text>
              <Text fontSize={{ base: "12px", sm: "16px" }}>
                We protect your data with zero-knowledge encryption, the highest
                level of online security and privacy. This means that only the
                sender and the receiver have the keys needed to see, read data
                stored or shared on FileLinker. <br /> <br /> For anyone else,
                including FileLinker, the data would appear as gibberish, and
                they would find it impossible to read or understand.
              </Text>
              <div className="d-flex">
                <Link className=" d-flex ">
                  <Text as={"span"} borderBottom={"2px"} fontWeight={"bold"}>
                    {" "}
                    More about security{" "}
                  </Text>{" "}
                  <BsArrowRightShort className="ms-2" fontSize={"32px"} />{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col   ">
            <video
              className="video light"
              autoPlay
              muted
              loop
              playsInline
              __idm_id__="376833"
            >
              <source
                src="https://mega.io/wp-content/uploads/2023/02/Home-padlock-1-muted.webm"
                type="video/webm"
              />
              <source
                src="https://mega.io/wp-content/uploads/2023/02/Home-padlock-1-muted.webm"
                type="video/quicktime"
              />
            </video>
          </div>
        </div>
        <br /><br /> <br /> <br />
        <div className="row mt-5 d-flex align-items-center ">
          {/*//////////////////---4----//////////////////////  */}
          <div className="col-12 text-center">
            <Text
              className=" fw-bold"
              fontSize={{ base: "18px", sm: "22px", md: "38px" }}
            >
              Why choose FileLinker?
            </Text>
          </div>
          <div className="col-12 col-md-6 order-3 order-md-1">
            <div className="">
              <Text
                className="w-75 fw-bold"
                fontSize={{ base: "18px", sm: "22px", md: "38px" }}
              >
                Never run out of storage space
              </Text>
              <Text pl={2} fontSize={{ base: "12px", sm: "16px" }}>
                Need lots of storage space? No problem. We have a range of
                competitive plans that go up to 16 TB. If you need even more
                space, get a Pro Flexi or Business plan, where you only pay for
                the extra storage space you use.
              </Text>
              <div className="d-flex">
                <Link className=" d-flex ">
                  <Text as={"span"} borderBottom={"2px"} fontWeight={"bold"}>
                    {" "}
                    See our plans{" "}
                  </Text>{" "}
                  <BsArrowRightShort className="ms-2" fontSize={"32px"} />{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col   ">
            <video
              className="video light"
              autoPlay
              muted
              loop
              playsInline
              __idm_id__="376833"
            >
              <source
                src="https://mega.io/wp-content/uploads/Home-files-sharing-1a.webm"
                type="video/webm"
              />
              <source
                src="https://mega.io/wp-content/uploads/2023/01/Home-files-sharing-1.webm"
                type="video/quicktime"
              />
            </video>
          </div>
        </div>
        <br /><br /> <br /> <br />
        <div className="row mt-5 d-flex align-items-center ">
          {/*//////////////////---5----//////////////////////  */}
          <div className="col-12 col-md-6 order-3 order-md-0">
            <div className="">
              <Text
                className="w-75 fw-bold"
                fontSize={{ base: "18px", sm: "22px", md: "38px" }}
              >
                Work seamlessly across all devices
              </Text>
              <Text fontSize={{ base: "12px", sm: "16px" }}>
                Easily access your cloud files through our desktop app, mobile
                apps or the web. And, if you sync or back up data from your
                computer to MEGA, all changes will automatically be replicated
                in real time, so you’ll be able to see the latest files, no
                matter where you are.
              </Text>
              <div className="d-flex"></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col   ">
            <video
              className="video light"
              autoPlay
              muted
              loop
              playsInline
              __idm_id__="376833"
            >
              <source
                src="https://mega.io/wp-content/uploads/Home-devices-1a.webm"
                type="video/webm"
              />
              <source
                src="https://mega.io/wp-content/uploads/2023/01/Home-devices-1.webm"
                type="video/quicktime"
              />
            </video>
          </div>
        </div>

        <br /><br /> <br /> <br />

<div className="row">
  {/* ///////////////////////////---6----////////////////// */}
  <div className="col">
  <SimpleGrid spacing={4} templateColumns={{base:'repeat(auto-fill, minmax( 230px, 1fr))',sm:`repeat(auto-fill, minmax( 400px, 1fr))`}}>
  <Card>
    <CardHeader>
      
    <Avatar name="M" src="https://mega.io/wp-content/themes/megapages/megalib/images/megaicon.svg" size={'md'}  />
    <h4 className="mt-2 fw-bold">Mega</h4>
    </CardHeader>
    <CardBody>
      <h1>$5.00</h1>
      <small>per TB per month</small>
      <div className="text-center bg-light mt-3 p-2">
        <h4> End-to-end encryption</h4>
      </div>
    </CardBody>
    <CardFooter>
      <small>* Price based on Pro III annual payment</small>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
     
    <Avatar name="M" src="https://mega.io/wp-content/themes/megapages/megalib/images/dropbox-icon.svg" size={'md'}  />
    <h4 className="mt-2 fw-bold">Dropbox</h4>
    </CardHeader>
    <CardBody>
      <h1>$6.00</h1>
      <small>per TB per month</small>
      <div className="text-center bg-light mt-3 p-2">
        <h4> End-to-end encryption</h4>
      </div>
    </CardBody>
    <CardFooter>
      <small>* Price based on the Professional annual plan</small>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      
    <Avatar name="M" src="https://mega.io/wp-content/themes/megapages/megalib/images/googledrive-icon.svg" size={'md'}  />
    <h4 className="mt-2 fw-bold">Google Drive</h4>
    </CardHeader>
    <CardBody>
      <h1>$7.00</h1>
      <small>per TB per month</small>
      <div className="text-center bg-light mt-3 p-2" >
        <h4> End-to-end encryption </h4>
      </div>
    </CardBody>
    <CardFooter>
      <small>* Price based on 30 TB annual payment.</small>
    </CardFooter>
  </Card>
</SimpleGrid>
  </div>
</div>
      </div>


      <br /><br /> <br /> <br />



      <div className="container-fluid ">
      <div className="row mt-5 d-flex align-items-center  bg-secondary p-4 " >
          {/*//////////////////---3----//////////////////////  */}
          <div className="col-12 col-md-6 order-3 order-md-0">
            <div className="">
              <Text
                className="text-white "
                fontWeight={'extrabold'}
                fontSize={{ base: "32px", sm: "42px", md: "56px" }}
              >
               Grow your business with FileLinker
              </Text>
            
            </div>
          </div>
          <div className="col-12 col-md-6 col order-3 order-md-0  ">
           <h6 className="text-white">
           Bring your team together online with MEGA for Business. From freelancers to startups and all the way to enterprises, MEGA is the perfect online tool to help you grow your business and your team. Store and protect important documents and transform how your teams collaborate with MEGA.
           </h6>
           <Button mt={3} colorScheme="whiteAlpha" color={'gray'} bg={'white'} _hover={{bg:'gray.200'}}  rightIcon={<BsArrowRightShort  fontSize={'30px'}/>} >Learn more </Button>
          </div>
        </div>

      </div>

      <br /><br /><br /><br /><br /><br />
    </>
  );
}
