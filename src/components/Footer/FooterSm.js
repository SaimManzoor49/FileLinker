import React from "react";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Avatar, Box,  Text } from "@chakra-ui/react";
import { AiOutlinePlus,AiOutlineMinus, AiFillTwitterSquare, AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import {AiFillFacebook} from'react-icons/ai';
export default function FooterSm() {
  return (
    <>


      <div className="container-fluid">
        {/* //////////////////// For base screens ////////////////// */}
        <div className="row">
          <div className="col-12 ps-0 pe-0">
          <Accordion allowMultiple>
  <AccordionItem>
  {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'2xl'} fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Products
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
        </AccordionPanel>
      </>
    )}
    
  </AccordionItem>

  
  <AccordionItem>
  {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'2xl'} fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Help
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
        </AccordionPanel>
      </>
    )}
    
  </AccordionItem>

  
  <AccordionItem>
  {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'2xl'} fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Resources
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
        </AccordionPanel>
      </>
    )}
    
  </AccordionItem>

  
  <AccordionItem>
  {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'2xl'} fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Company
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
        </AccordionPanel>
      </>
    )}
    
  </AccordionItem>

  
  <AccordionItem>
  {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'2xl'} fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Platform
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
        </AccordionPanel>
      </>
    )}
    
  </AccordionItem>

  
  <AccordionItem>
  {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box fontSize={'2xl'} fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Legal
            </Box>
            
            {isExpanded ? (
              <AiOutlineMinus fontSize='12px' />
            ) : (
              <AiOutlinePlus fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
        </AccordionPanel>
      </>
    )}
    
  </AccordionItem>

  
</Accordion>
          </div>
          <div className="col-12 ps-0 pe-0 my-5">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex justify-content-center align-items-center mb-2 me-1">

            <Avatar name="M" src="https://mega.io/wp-content/themes/megapages/megalib/images/megaicon.svg" size={'lg'}  />
            <Text as={'span'} fontSize={'3xl'} ml={2} fontWeight={'bold'} >FileLinker</Text>
                </div>
                <h6 className="fw-bold">The Privacy Company.</h6>
                <small className="mb-1"> User-encrypted cloud services</small>
                <small >&copy; FileLinker {new Date().getFullYear()} All rights reserved</small>
                <br /><br />
                <h6 className="fw-bold">Follow Us</h6>
                <div className="d-flex">

                <Link><AiFillFacebook className="logos"   style={{color:'#3b5998'}} fontSize={'38px'} /></Link>
                <Link><AiFillTwitterSquare className="logos"   style={{color:'#00acee'}} fontSize={'38px'} /></Link>
                <Link><AiFillGithub className="logos"   style={{color:'#171515'}} fontSize={'38px'} /></Link>
                <Link><AiFillLinkedin className="logos"   style={{color:'#0072b1'}} fontSize={'38px'} /></Link>
                <Link><AiFillInstagram className="logos"   style={{color:'#3f729b'}} fontSize={'38px'} /></Link>
                <Link><AiFillYoutube className="logos"   style={{color:'#c4302b'}} fontSize={'38px'} /></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
