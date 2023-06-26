import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image2 from "../../assets/images/Screenshot_2.png";
import Image3 from "../../assets/images/Screenshot_3.png";
import Image4 from "../../assets/images/Screenshot_4.png";

import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../config/firebase'
import { useAuth } from "../../context/AuthContext";


export default function Signup() {
  const [show, setShow] = useState(false);
  const [state, setstate] = useState({});

  const { setUser} = useAuth()

  const navigator = useNavigate()

  const handleClick = () => setShow(!show);



  const handleChange = (e)=>{
    const {name,value} = e.target
    setstate(s=>({...s,[name]:value}))
console.log(state)

  }

const handleSignup = async()=>{
  // const auth = getAuth()
  const {email,password} = state
  console.log(email,password)
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    setUser(user)
    localStorage.setItem('isAuth' , 'true')
    navigator('/dashboard')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });


  }

  return (
    <>
      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 px-0">
              
              <div className="card p-3 p-sm-4   rounded-5  rounded-bottom-0">
                <div className=" m-1 ms-sm-2 m-md-5">
                  <div className="text-center">
                    <h4>Signup</h4>
                  </div>

                  <div className="d-flex gap-1">
                    <InputGroup as={"span"} size="md" className="mt-5">
                      <Input
                      name="firstName"
                        // w={'50%'}
                        size={{ base: "md", md: "lg" }}
                        pr="4.5rem"
                        type="text"
                        placeholder="First name"
                      />
                    </InputGroup>
                    <InputGroup as={"span"} size="md" className="mt-5">
                      <Input
                      name="lastName"
                        //  w={'50%'}
                        size={{ base: "md", md: "lg" }}
                        pr="4.5rem"
                        type="text"
                        placeholder="Last name"
                      />
                    </InputGroup>
                  </div>
                  <InputGroup size="md" className="mt-4">
                    <Input
                    onChange={handleChange}
                    name="email"
                      size={{ base: "md", md: "lg" }}
                      pr="4.5rem"
                      type="text"
                      placeholder="Email"
                    />
                  </InputGroup>
                  <InputGroup size="md" className="mt-4">
                    <Input
                    onChange={handleChange}
                    name="password"
                      size={{ base: "md", md: "lg" }}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size={{ base: "sm", md: "md" }}
                        mt={{ md: "8px" }}
                        mr={{ md: "4px" }}
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup size="md" className="mt-4">
                    <Input
                    onChange={handleChange}
                    name="confirmPassword"
                      size={{ base: "md", md: "lg" }}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Retype password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size={{ base: "sm", md: "md" }}
                        mt={{ md: "8px" }}
                        mr={{ md: "4px" }}
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Checkbox
                    size={{ base: "sm", sm: "md" }}
                    mt={"14px"}
                    colorScheme="red"
                  >
                    <small className="ms-1">
                      I understand that if I lose my password, I may lose my
                      data.
                    </small>
                  </Checkbox>
                  <div className="text-end mt-4">
                    <Button
                    onClick={handleSignup}
                      className="py-2 py-sm-4  px-3 px-sm-5"
                      variant={"solid"}
                      colorScheme="red"
                    >
                      Signup
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center text-white bg-dark py-3 rounded-5 rounded-top-0 ">
                <small style={{ color: "gray", fontWeight: "bold" }}>
                  Already have an account?
                  <Text
                    as={"span"}
                    borderBottom={"2px"}
                    _hover={{ borderBottom: "0" }}
                  >
                    <Link
                      className="ms-1"
                      style={{ color: "white" }}
                      to={"/auth/login"}
                    >
                      Login now
                    </Link>
                  </Text>
                </small>
              </div>
            </div>
            <div
              className="col-12  col-lg-6 d-none d-lg-flex justify-content-center align-items-center"
              style={{ minHeight: "90vh" }}
            >
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Image2} className="d-block w-100" alt="img2" />
                  </div>
                  <div className="carousel-item">
                    <img src={Image3} className="d-block w-100" alt="img3" />
                  </div>
                  <div className="carousel-item">
                    <img src={Image4} className="d-block w-100" alt="img4" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
