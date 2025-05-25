import React, { useState } from "react";
import SoundCard from "@/components/SoundCard";

const natureSounds = [
  {
    id: "rain",
    title: "Дождь",
    description: "Успокаивающий звук дождя по крыше",
    src: "https://www.soundjay.com/misc/sounds/rain-01.wav",
    gradient: "bg-gradient-to-br from-slate-600 to-blue-800",
    emoji: "🌧️",
  },
  {
    id: "forest",
    title: "Лес",
    description: "Пение птиц и шелест листвы",
    src: "https://www.soundjay.com/nature/sounds/forest-01.wav",
    gradient: "bg-gradient-to-br from-green-600 to-emerald-800",
    emoji: "🌲",
  },
  {
    id: "ocean",
    title: "Океан",
    description: "Шум морских волн на берегу",
    src: "https://www.soundjay.com/nature/sounds/ocean-01.wav",
    gradient: "bg-gradient-to-br from-blue-500 to-teal-700",
    emoji: "🌊",
  },
  {
    id: "fire",
    title: "Костер",
    description: "Треск дров в камине",
    src: "https://www.soundjay.com/misc/sounds/fire-01.wav",
    gradient: "bg-gradient-to-br from-orange-600 to-red-700",
    emoji: "🔥",
  },
  {
    id: "wind",
    title: "Ветер",
    description: "Легкий ветерок в поле",
    src: "https://www.soundjay.com/nature/sounds/wind-01.wav",
    gradient: "bg-gradient-to-br from-gray-500 to-slate-700",
    emoji: "💨",
  },
  {
    id: "thunder",
    title: "Гроза",
    description: "Раскаты грома вдалеке",
    src: "https://www.soundjay.com/nature/sounds/thunder-01.wav",
    gradient: "bg-gradient-to-br from-purple-600 to-indigo-800",
    emoji: "⛈️",
  },
];

const Index = () => {
  const [playingSound, setPlayingSound] = useState<string | null>(null);

  const handlePlayPause = (soundId: string) => {
    setPlayingSound(playingSound === soundId ? null : soundId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎵 Звуки Природы
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Погрузитесь в атмосферу природы. Выберите свой любимый звук для
            релаксации, медитации или работы.
          </p>
        </div>

        {/* Sound Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {natureSounds.map((sound) => (
            <SoundCard
              key={sound.id}
              {...sound}
              isPlaying={playingSound === sound.id}
              onPlayPause={() => handlePlayPause(sound.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <p className="text-sm">Создано для релаксации и вдохновения 🌿</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
