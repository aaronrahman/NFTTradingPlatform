import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";

interface NFTCardProps {
  imageUrl?: string;
  name?: string;
  price?: number;
  rarity?: "common" | "rare" | "epic" | "legendary";
}

export default function NFTCard({
  imageUrl = "https://dummyimage.com/180x180/6b21a8/ffffff&text=NFT",
  name = "Sample NFT",
  price = 100,
  rarity = "common",
}: NFTCardProps) {
  const rarityColors = {
    common: "bg-slate-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-amber-500",
  };

  return (
    <Card className="w-[180px] h-[180px] bg-black/40 backdrop-blur-sm border-white/10 relative group overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-3 space-y-1">
          <h3 className="text-sm font-medium text-white truncate">{name}</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-200">
                {price}
              </span>
            </div>

            <Badge
              variant="secondary"
              className={`${rarityColors[rarity]} text-white border-none text-xs`}
            >
              {rarity}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
