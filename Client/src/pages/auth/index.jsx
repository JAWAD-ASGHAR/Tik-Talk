import background from "@/assets/login2.png";
import victory from "@/assets/victory.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleLogin = async () => {
      console.log("Login");
    };
  
    const handleSignup = async () => {
      console.log("Sign Up");
    };
  
    return (
      <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid grid-cols-1 xl:grid-cols-2">
          {/* Form Section */}
          <div className="flex flex-col gap-10 items-center justify-center px-5">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold lg:text-6xl">Welcome</h1>
                <img src={victory} alt="victory emoji" className="h-[100px]" />
              </div>
              <p className="font-medium text-center">
                Fill in the details to get started with the best chat app!
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <Tabs defaultValue="login" className="w-3/4">
                <TabsList className="flex justify-center items-center bg-transparent w-full rounded-none">
                  <TabsTrigger
                    className="data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 text-black text-opacity-90 border-b-2 rounded-none w-full"
                    value="login"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 text-black text-opacity-90 border-b-2 rounded-none w-full"
                    value="signup"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
                <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleLogin}>
                    Login
                  </Button>
                </TabsContent>
                <TabsContent className="flex flex-col gap-5" value="signup">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-full p-6"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleSignup}>
                    Sign Up
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
  
          {/* Background Image Section */}
          <div className="hidden xl:flex items-center justify-center bg-gray-100 rounded-r-3xl">
            <img
              src={background}
              alt="background"
              className="h-[80%] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Auth;
  