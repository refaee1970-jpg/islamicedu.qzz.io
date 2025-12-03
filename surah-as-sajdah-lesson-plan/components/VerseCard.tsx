import React from 'react';
import { VerseSegment } from '../types';
import { TooltipWord } from './TooltipWord';
import { BookOpen } from 'lucide-react';

interface Props {
  verse: VerseSegment;
}

export const VerseCard: React.FC<Props> = ({ verse }) => {
  const renderArabic = () => {
    if (!verse.highlightedWords || verse.highlightedWords.length === 0) {
      return <span className="font-arabic text-3xl leading-[2.5] text-slate-800">{verse.arabic}</span>;
    }

    // Simple replacement strategy.
    // We will match the specific word string found in highlightedWords.
    // Note: In Uthmani script, exact string matching is crucial.
    const firstWord = verse.highlightedWords[0];
    
    if(firstWord) {
       // This is a simplified demo logic. Ideally we would map all words.
       return (
            <span className="font-arabic text-3xl leading-[2.5] text-slate-800">
                <TooltipWord word={firstWord} fullText={verse.arabic} />
            </span>
        );
    }
    
    return <span className="font-arabic text-3xl leading-[2.5] text-slate-800">{verse.arabic}</span>;
  };

  return (
    <div className="bg-white border border-emerald-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow mb-4">
      <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
        <div className="bg-emerald-100 text-emerald-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-inner">
          {verse.number}
        </div>
        <BookOpen className="w-5 h-5 text-emerald-200" />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="text-right" dir="rtl">
          {renderArabic()}
        </div>
        <div className="text-left text-slate-600 font-light italic border-l-4 border-emerald-500 pl-4 text-lg">
          "{verse.english}"
        </div>
      </div>
    </div>
  );
};