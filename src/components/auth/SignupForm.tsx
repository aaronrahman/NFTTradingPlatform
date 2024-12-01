import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Coins } from "lucide-react";

interface SignupFormProps {
  onSubmit?: (email: string, password: string, confirmPassword: string) => void;
  onSocialSignup?: (provider: string) => void;
  isLoading?: boolean;
}

export default function SignupForm({
  onSubmit = () => {},
  onSocialSignup = () => {},
  isLoading = false,
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, confirmPassword);
  };

  return (
    <div className="w-full max-w-[400px] p-6 bg-white/5 backdrop-blur-sm">
      <div className="mb-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
        <div className="flex items-center gap-2 text-purple-200">
          <Coins className="w-5 h-5" />
          <span className="font-medium">Signup Bonus!</span>
        </div>
        <p className="mt-1 text-sm text-purple-100/80">
          Get 1000 Purple Coins when you create your account to start trading
          NFTs
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/90">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-white/90">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-white/90">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            disabled={isLoading}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>

        <div className="relative">
          <Separator className="my-4 bg-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-2 text-sm text-white/60 bg-black/50">
              or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => onSocialSignup("github")}
            disabled={isLoading}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => onSocialSignup("google")}
            disabled={isLoading}
          >
            <Mail className="w-4 h-4 mr-2" />
            Google
          </Button>
        </div>
      </form>
    </div>
  );
}
