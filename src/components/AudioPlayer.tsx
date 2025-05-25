import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  isPlaying,
  onPlayPause,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState([0.5]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0];
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="flex items-center gap-3">
      <audio ref={audioRef} src={src} loop />

      <Button
        variant="ghost"
        size="icon"
        onClick={onPlayPause}
        className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 text-white" />
        ) : (
          <Play className="h-5 w-5 text-white ml-0.5" />
        )}
      </Button>

      <div className="flex items-center gap-2 flex-1">
        <Volume2 className="h-4 w-4 text-white/80" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={1}
          step={0.1}
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
