"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Mail, Eye, EyeOff, Brain, Target, Trophy, Sparkles, Router } from "lucide-react";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  
  const handleRouteSignup = () => {
    router.push("/auth/signup");
  }

  const handleRouteSignin = () => {
    router.push("/auth/signin");
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (email && password) {
      console.log("Form submitted");
    }
    
    setIsLoading(false);
  }

  const icons = [
    { icon: Brain, delay: "0s" },
    { icon: Target, delay: "2s" },
    { icon: Trophy, delay: "4s" },
    { icon: Sparkles, delay: "6s" }
  ];

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <ArrowRight className="mr-2 h-6 w-6" /> QuizMaster
        </div>
        
        {/* Floating Icons Animation */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: Icon.delay,
                opacity: 0.2
              }}
            >
              <Icon.icon className="h-12 w-12" />
            </div>
          ))}
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg animate-fade-up">
              &ldquo;This quiz platform has completely transformed how I prepare for my exams. The interface is intuitive and the questions are challenging.&rdquo;
            </p>
            <footer className="text-sm animate-fade-up" style={{ animationDelay: "200ms" }}>Sarah Johnson</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="signin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300" onClick={handleRouteSignin}>Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300" onClick={handleRouteSignup}>Sign Up</TabsTrigger>
            </TabsList>
            <div className="relative">
              <TabsContent value="signin" className="mt-0 animate-in fade-in-50 slide-in-from-left-1/2 duration-300">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                      Choose your preferred sign in method
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground" onClick={() => {}}>
                        <Mail className="mr-2 h-4 w-4" />
                        Continue with Google
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input 
                        id="signin-email" 
                        type="email" 
                        placeholder="m@example.com"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="signin-password">Password</Label>
                        <Button 
                          variant="link" 
                          className="px-0 text-xs text-muted-foreground hover:text-primary"
                          onClick={() => {}}
                        >
                          Forgot Password?
                        </Button>
                      </div>
                      <div className="relative">
                        <Input 
                          id="signin-password" 
                          type={showPassword ? "text" : "password"}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary pr-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full transition-all duration-300 hover:bg-primary/90" 
                      onClick={onSubmit}
                      disabled={isLoading || !email || !password}
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="signup" className="mt-0 animate-in fade-in-50 slide-in-from-right-1/2 duration-300">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>
                      Enter your information to create an account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground" onClick={() => {}}>
                        <Mail className="mr-2 h-4 w-4" />
                        Sign up with Google
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input 
                        id="signup-name" 
                        placeholder="John Doe"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="m@example.com"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="signup-password" 
                          type={showSignupPassword ? "text" : "password"}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary pr-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowSignupPassword(!showSignupPassword)}
                        >
                          {showSignupPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full transition-all duration-300 hover:bg-primary/90" 
                      onClick={onSubmit}
                      disabled={isLoading || !email || !password || !name}
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}