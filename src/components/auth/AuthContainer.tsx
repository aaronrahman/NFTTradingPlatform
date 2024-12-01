import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TabsContent, Tabs } from "@/components/ui/tabs";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthContainerProps {
  onLogin?: (email: string, password: string) => void;
  onSignup?: (email: string, password: string, confirmPassword: string) => void;
  onSocialAuth?: (provider: string, type: "login" | "signup") => void;
  isLoading?: boolean;
}

export default function AuthContainer({
  onLogin = () => {},
  onSignup = () => {},
  onSocialAuth = () => {},
  isLoading = false,
}: AuthContainerProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <Card className="w-[480px] bg-black/40 backdrop-blur-xl border-white/10 rounded-lg overflow-hidden">
      <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <Tabs value={activeTab} className="w-full">
        <TabsContent value="login" className="m-0">
          <LoginForm
            onSubmit={onLogin}
            onSocialLogin={(provider) => onSocialAuth(provider, "login")}
            isLoading={isLoading}
          />
        </TabsContent>

        <TabsContent value="signup" className="m-0">
          <SignupForm
            onSubmit={onSignup}
            onSocialSignup={(provider) => onSocialAuth(provider, "signup")}
            isLoading={isLoading}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
