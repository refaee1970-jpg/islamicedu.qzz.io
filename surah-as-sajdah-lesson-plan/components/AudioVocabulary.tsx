import React, { useRef, useState } from 'react';
import { VocabularyWord } from '../types';
import { Volume2, Play, Loader2 } from 'lucide-react';

interface Props {
  words: VocabularyWord[];
}

export const AudioVocabulary: React.FC<Props> = ({ words }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingUrl, setPlayingUrl] = useState<string | null>(null);
  const [loadingUrl, setLoadingUrl] = useState<string | null>(null);

  const playAudio = (url?: string) => {
    if (!url) return;

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setLoadingUrl(url);

    // Use oncanplaythrough to attempt playback once enough data is available
    audio.oncanplaythrough = async () => {
      // Prevent double triggering if state changed rapidly
      if (audioRef.current !== audio) return;

      setLoadingUrl(null);
      try {
        await audio.play();
        setPlayingUrl(url);
      } catch (error) {
        // Gracefully handle autoplay blocking (Browser Policy)
        // We reset states so the UI doesn't look stuck loading
        console.warn("Audio playback blocked by browser policy (interaction required).");
        setPlayingUrl(null);
        setLoadingUrl(null);
      }
    };

    audio.onended = () => {
      if (audioRef.current === audio) {
        setPlayingUrl(null);
        setLoadingUrl(null);
      }
    };

    audio.onerror = () => {
       if (audioRef.current === audio) {
        console.error("Error loading audio:", url);
        setPlayingUrl(null);
        setLoadingUrl(null);
      }
    };
  };

  return (
    <div className="bg-emerald-50/50 p-6 rounded-xl border-2 border-emerald-100/50 mb-12">
       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Volume2 className="w-6 h-6 text-emerald-600" />
            Key Vocabulary
            <span className="text-xs font-normal text-slate-500 ml-2 bg-white px-2 py-1 rounded-full border border-slate-200">
              Click to Listen
            </span>
          </h3>
          <h3 className="text-xl font-bold text-emerald-800 font-arabic">الكلمات الأساسية</h3>
       </div>
       
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
         {words.map((item, idx) => {
            const isPlaying = playingUrl === item.audioUrl;
            const isLoading = loadingUrl === item.audioUrl;
            
            return (
               <div 
                 key={idx}
                 // Attempt to play on hover, but fail silently if blocked
                 onMouseEnter={() => !isPlaying && !isLoading && playAudio(item.audioUrl)}
                 onClick={() => playAudio(item.audioUrl)}
                 className={`bg-white p-4 rounded-lg shadow-sm border transition-all cursor-pointer text-center group relative
                    ${isPlaying ? 'border-emerald-400 ring-2 ring-emerald-100' : 'border-emerald-100 hover:border-emerald-400 hover:shadow-md'}
                 `}
               >
                  <div className="absolute top-2 right-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                  </div>

                  <div className={`font-arabic text-2xl mb-2 transition-transform duration-300 ${isPlaying ? 'text-emerald-600 scale-110' : 'text-emerald-800 group-hover:scale-110'}`}>
                    {item.word}
                  </div>
                  <div className="text-sm text-slate-500 mb-1">{item.meaningEn}</div>
                  <div className="text-sm font-arabic text-slate-400">{item.meaningAr}</div>
               </div>
            );
         })}
       </div>
    </div>
  );
};