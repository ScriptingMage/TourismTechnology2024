import Image from "next/image";
import { HikingTrail } from "../database/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HikingTrailsCardProps {
  hikingTrail: HikingTrail;
}

const Thumbnails = [
  "https://www.tirol.at/images/91rrjee59ns-/adlerweg.jpg",
  "https://www.tirol.at/images/uwwx1tqjt_s-/vorbei-an-der-salmhuette-auf-etappe-4.webp",
  "https://www.tirol.at/images/lcuu!wmd798-/kals-matreier-toerl-haus-im-virgental.webp",
  "https://www.tirol.at/images/eiczj3avovi-/kalser-tauernhaus-nationalpark-hohe-tauern.webp",
];

export const HikingTrailCard = ({ hikingTrail }: HikingTrailsCardProps) => {
  return (
    <div className="border border-gray-500 p-4">
      <div className="flex gap-4">
        <div className="w-[400px] flex-shrink-0 relative">
          <div className="aspect-w-16 aspect-h-9 bg-gray-300">
            <Image
              src={Thumbnails[hikingTrail.id % 5]}
              alt=""
              className="w-full h-full object-cover"
              fill={true}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{hikingTrail.name}</h2>
          <p className="text-base">{hikingTrail.description}</p>
          <div className="mt-auto flex justify-end gap-4">
            <Link
              href={`/hiking-trails/book/${hikingTrail.id}`}
              prefetch={true}
            >
              <Button>Book</Button>
            </Link>
            <Button>More Info</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
