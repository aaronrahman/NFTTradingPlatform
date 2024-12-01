import { useState } from "react";
import AuthContainer from "./auth/AuthContainer";
import NFTPreview from "./auth/NFTPreview";
import LoadingOverlay from "./auth/LoadingOverlay";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulated login delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleSignup = async (
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    setIsLoading(true);
    // Simulated signup delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleSocialAuth = async (
    provider: string,
    type: "login" | "signup",
  ) => {
    setIsLoading(true);
    // Simulated social auth delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-slate-900 to-black flex flex-col items-center justify-center p-4 gap-8">
      <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Welcome to NFT Trading Platform
        </h1>
        <p className="text-lg text-purple-200 text-center max-w-[600px]">
          Trade, collect, and invest in unique digital assets using Purple Coin
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-8">
        <AuthContainer
          onLogin={handleLogin}
          onSignup={handleSignup}
          onSocialAuth={handleSocialAuth}
          isLoading={isLoading}
        />

        <div className="mt-4">
          <h2 className="text-xl text-white/90 text-center mb-4">
            Featured NFTs
          </h2>
          <NFTPreview />
        </div>
      </div>

      <LoadingOverlay isVisible={isLoading} />
    </div>
  );
}

export default Home;
