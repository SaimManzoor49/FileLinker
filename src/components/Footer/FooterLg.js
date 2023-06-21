import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FooterLg() {
  return (
    <>
      <div className="container">
        {/* //////////////////// For md screens ////////////////// */}

        <div className="row my-5 ">
          <div className=" col-md-4">
            <Avatar src="https://mega.io/wp-content/themes/megapages/megalib/images/megaicon.svg" />
            <Text as={"span"} fontSize={"3xl"} ml={2} fontWeight={"bold"}>
              FileLinker
            </Text>
            <h6 className="fw-bold mt-3">The Privacy Company.</h6>
            <Box>
              <Text mb={0}>
                <small>User-encrypted cloud services</small>
              </Text>
              <Text>
                <small>
                  &copy; FileLinker {new Date().getFullYear()} All rights
                  reserved
                </small>
              </Text>
            </Box>
            <h6 className="fw-bold">Follow MEGA</h6>

            <Box className="d-flex ">
              <Link>
                <AiFillFacebook
                  className="logos"
                  style={{ color: "#3b5998" }}
                  fontSize={"38px"}
                />
              </Link>
              <Link>
                <AiFillTwitterSquare
                  className="logos"
                  style={{ color: "#00acee" }}
                  fontSize={"38px"}
                />
              </Link>
              <Link>
                <AiFillGithub
                  className="logos"
                  style={{ color: "#171515" }}
                  fontSize={"38px"}
                />
              </Link>
              <Link>
                <AiFillLinkedin
                  className="logos"
                  style={{ color: "#0072b1" }}
                  fontSize={"38px"}
                />
              </Link>
              <Link>
                <AiFillInstagram
                  className="logos"
                  style={{ color: "#3f729b" }}
                  fontSize={"38px"}
                />
              </Link>
              <Link>
                <AiFillYoutube
                  className="logos"
                  style={{ color: "#c4302b" }}
                  fontSize={"38px"}
                />
              </Link>
            </Box>
          </div>
          <div className="d-none d-md-block col-md-2">
          <Box fontSize={'2xl'} className="" fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Products
            </Box>

          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
          </div>
          <div className="d-none d-md-block col-md-2">
          <Box fontSize={'2xl'} className="" fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Help
            </Box>

          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
          </div>
          <div className="d-none d-md-block col-md-2">
          <Box fontSize={'2xl'} className="" fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Company
            </Box>

          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
          </div>
          <div className="d-none d-md-block col-md-2">
          <Box fontSize={'2xl'} className="" fontWeight={'bold'} as="span" flex='1' textAlign='left'>
              Legal
            </Box>

          <div className="mb-2"><small> <Link>Cloud Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Object Storage</Link></small></div>
          <div className="mb-2"><small> <Link>Sync</Link></small></div>
          <div className="mb-2"><small> <Link>Backup</Link></small></div>
          <div className="mb-2"><small> <Link>Share</Link></small></div>
          <div className="mb-2"><small> <Link>Business</Link></small></div>
          <div className="mb-2"><small> <Link>Pricing</Link></small></div>
          </div>
         
        </div>
      </div>
    </>
  );
}
