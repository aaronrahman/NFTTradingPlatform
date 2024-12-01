import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  isVisible?: boolean;
  message?: string;
}

export default function LoadingOverlay({
  isVisible = true,
  message = "Loading...",
}: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4 p-6 bg-black/40 rounded-lg border border-white/10">
        <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
        <p className="text-white/90 text-sm">{message}</p>
      </div>
    </div>
  );
}
