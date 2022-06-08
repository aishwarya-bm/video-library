import { useState, useEffect } from "react";
import { Header, Signin, Signup } from "../../components";

export function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  useEffect(() => {
    const title = isSignUp ? "Signup" : "Login"
    document.title = `${title} | BehindTheScenes`;
  }, []);
  return (
    <div className="signup-body">
      <Header showSearchBox={false} />

      <main className="signup-container children-center">
        {isSignUp ? (
          <Signup setIsSignUp={setIsSignUp} />
        ) : (
          <Signin setIsSignUp={setIsSignUp} />
        )}
      </main>
    </div>
  );
}
