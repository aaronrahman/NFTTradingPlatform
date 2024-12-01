import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthTabsProps {
  activeTab?: "login" | "signup";
  onTabChange?: (tab: "login" | "signup") => void;
}

export default function AuthTabs({
  activeTab = "login",
  onTabChange = () => {},
}: AuthTabsProps) {
  return (
    <div className="w-full bg-white/5 backdrop-blur-sm rounded-t-lg border-b border-white/10">
      <Tabs
        defaultValue={activeTab}
        className="w-full"
        onValueChange={(value) => onTabChange(value as "login" | "signup")}
      >
        <TabsList className="w-full h-[50px] bg-transparent grid grid-cols-2">
          <TabsTrigger
            value="login"
            className="data-[state=active]:bg-white/10 rounded-none text-white/90 hover:text-white"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="data-[state=active]:bg-white/10 rounded-none text-white/90 hover:text-white"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
