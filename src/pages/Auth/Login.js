import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import safeImage from "../../assets/images/Screenshot_1.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [show, setShow] = useState(false);
  const [state, setstate] = useState({ email: "", password: "" });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleClick = () => setShow(!show);

  const { setUser } = useAuth();

  const navigator = useNavigate();

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((s) => ({ ...s, [name]: value }));
  };

  const handleLogin = async () => {
    const { email, password } = state;

    if (email.length < 3 && password.length < 3) {
      toast({
        title: `Enter fields correctly`,
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
      return;
    }

    await signInWithEmailAndPassword(email, password);
    if (user) {
      localStorage.setItem("isAuth", "true");
      setUser(user);
      navigator("/dashboard");
    }
  };

  return (
    <>
      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 px-0">
              <div className="card p-3 p-sm-4  rounded-5 rounded-bottom-0">
                <div className=" m-1 ms-sm-2 m-md-5">
                  <div className="text-center">
                    <h4>Login</h4>
                    {error && (
                      <h6 className="text-danger fw-bold">{error.message}</h6>
                    )}
                  </div>

                  <InputGroup size="md" className="mt-5">
                    <Input
                      name="email"
                      onChange={handleChange}
                      size={{ base: "md", md: "lg" }}
                      pr="4.5rem"
                      type="text"
                      placeholder="Your email"
                    />
                  </InputGroup>
                  <InputGroup size="md" className="mt-4">
                    <Input
                      name="password"
                      onChange={handleChange}
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
                  <div className="text-end mt-3">
                    <small className="border-bottom">
                      <Link style={{ color: "gray" }}>
                        Forgot your password?
                      </Link>
                    </small>
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <Checkbox
                      size={{ base: "sm", sm: "md" }}
                      colorScheme="green"
                      defaultChecked
                    >
                      Remember me
                    </Checkbox>
                    <Button
                      disabled={loading}
                      onClick={handleLogin}
                      className="py-2 py-sm-4  px-3 px-sm-5"
                      variant={"solid"}
                      colorScheme="red"
                    >
                      {loading ? (
                        <div className="spinner-border"></div>
                      ) : (
                        "Log in"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center text-white bg-dark py-3 rounded-5 rounded-top-0 ">
                <small style={{ color: "gray", fontWeight: "bold" }}>
                  Don't have an account?
                  <Text
                    as={"span"}
                    borderBottom={"2px"}
                    _hover={{ borderBottom: "0" }}
                  >
                    <Link
                      className="ms-1"
                      style={{ color: "white" }}
                      to={"/auth/signup"}
                    >
                      Create one now
                    </Link>
                  </Text>
                </small>
              </div>
            </div>
            <div className="col-12  col-lg-6 d-none d-lg-block">
              <img className=" img-fluid mt-5 " src={safeImage} alt="safe" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
