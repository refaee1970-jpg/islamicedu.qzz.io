import React from 'react';

interface Props {
  titleEn: string;
  titleAr: string;
  imageUrl?: string;
  children: React.ReactNode;
  className?: string;
}

export const BilingualRow: React.FC<Props> = ({ titleEn, titleAr, imageUrl, children, className = "" }) => {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b-2 border-slate-200 pb-2">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 order-2 md:order-1 text-left w-full md:w-1/2">{titleEn}</h2>
        <h2 className="text-xl md:text-2xl font-bold text-emerald-800 font-arabic order-1 md:order-2 text-right w-full md:w-1/2">{titleAr}</h2>
      </div>
      
      {imageUrl && (
        <div className="mb-6 rounded-xl overflow-hidden h-48 md:h-64 w-full shadow-sm">
          <img src={imageUrl} alt={titleEn} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
        </div>
      )}

      <div className="w-full">
        {children}
      </div>
    </section>
  );
};