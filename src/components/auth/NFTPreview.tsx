import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NFTCard from "./NFTCard";

interface NFTPreviewProps {
  nfts?: Array<{
    imageUrl: string;
    name: string;
    price: number;
    rarity: "common" | "rare" | "epic" | "legendary";
  }>;
}

export default function NFTPreview({
  nfts = [
    {
      imageUrl: "https://dummyimage.com/180x180/6b21a8/ffffff&text=NFT+1",
      name: "Cosmic Dragon",
      price: 500,
      rarity: "legendary",
    },
    {
      imageUrl: "https://dummyimage.com/180x180/1d4ed8/ffffff&text=NFT+2",
      name: "Digital Phoenix",
      price: 300,
      rarity: "rare",
    },
    {
      imageUrl: "https://dummyimage.com/180x180/7e22ce/ffffff&text=NFT+3",
      name: "Cyber Unicorn",
      price: 400,
      rarity: "epic",
    },
    {
      imageUrl: "https://dummyimage.com/180x180/475569/ffffff&text=NFT+4",
      name: "Tech Golem",
      price: 200,
      rarity: "common",
    },
  ],
}: NFTPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleNFTs = 4;

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + visibleNFTs < nfts.length;

  const handlePrevious = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Card className="w-[800px] h-[200px] bg-black/40 backdrop-blur-xl border-white/10 p-2">
      <div className="relative h-full flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10 h-full rounded-none px-2 hover:bg-black/20 disabled:opacity-0"
          onClick={handlePrevious}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6 text-white/80" />
        </Button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-2 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (180 + 8)}px)` }}
          >
            {nfts.map((nft, index) => (
              <NFTCard
                key={index}
                imageUrl={nft.imageUrl}
                name={nft.name}
                price={nft.price}
                rarity={nft.rarity}
              />
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10 h-full rounded-none px-2 hover:bg-black/20 disabled:opacity-0"
          onClick={handleNext}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6 text-white/80" />
        </Button>
      </div>
    </Card>
  );
}
