import React, { useState } from 'react';
import { VocabularyWord } from '../types';

interface Props {
  word: VocabularyWord;
  fullText: string;
}

export const TooltipWord: React.FC<Props> = ({ word, fullText }) => {
  const [show, setShow] = useState(false);

  // Split text to isolate the target word for wrapping
  const parts = fullText.split(word.word);

  if (parts.length < 2) return <span>{fullText}</span>;

  return (
    <span>
      {parts[0]}
      <span 
        className="relative inline-block cursor-help text-emerald-700 border-b-2 border-emerald-300 hover:bg-emerald-50 transition-colors mx-0.5"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
      >
        {word.word}
        {show && (
          <span className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-xs rounded-lg py-2 px-3 shadow-xl pointer-events-none">
            <span className="block font-bold text-emerald-300 mb-1 text-right font-arabic text-sm">{word.meaningAr}</span>
            <span className="block text-left border-t border-slate-600 pt-1 mt-1">{word.meaningEn}</span>
            {/* Arrow */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></span>
          </span>
        )}
      </span>
      {parts.slice(1).join(word.word)}
    </span>
  );
};