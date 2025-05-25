import React from "react";
import { Card } from "@/components/ui/card";
import AudioPlayer from "./AudioPlayer";

interface SoundCardProps {
  id: string;
  title: string;
  description: string;
  src: string;
  gradient: string;
  emoji: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const SoundCard: React.FC<SoundCardProps> = ({
  title,
  description,
  src,
  gradient,
  emoji,
  isPlaying,
  onPlayPause,
}) => {
  return (
    <Card
      className={`relative overflow-hidden border-0 ${gradient} group hover:scale-105 transition-transform duration-300`}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-3xl mb-2">{emoji}</div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>

        <div className="mt-4">
          <AudioPlayer
            src={src}
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
          />
        </div>
      </div>
    </Card>
  );
};

export default SoundCard;
