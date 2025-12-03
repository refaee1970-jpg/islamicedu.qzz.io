import React from 'react';
import { BilingualRow } from './components/BilingualRow';
import { VerseCard } from './components/VerseCard';
import { AITutor } from './components/AITutor';
import { AudioVocabulary } from './components/AudioVocabulary';
import { LESSON_DATA } from './constants';
import { ScrollText, Moon, Star, CheckCircle2, Brain, Globe, BookOpenCheck, Lightbulb } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-12 px-4 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")',
          backgroundSize: '300px'
        }}></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-4 gap-2 text-emerald-300">
            <Star className="w-6 h-6 fill-current" />
            <Moon className="w-6 h-6" />
            <Star className="w-6 h-6 fill-current" />
          </div>
          <h1 className="text-4xl md:text-6xl font-arabic font-bold mb-4">الكتاب الحق</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">The True Book</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Surah As-Sajdah (Verses 1-12) • Grade 6
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Standard & Outcomes */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 border-l-8 border-emerald-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="order-2 md:order-1">
               <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                 <ScrollText className="w-5 h-5" /> Standard
               </h3>
               <p className="text-slate-600 mb-6">{LESSON_DATA.meta.standardEn}</p>
               
               <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5" /> What will we learn?
               </h3>
               <ul className="space-y-2">
                 {LESSON_DATA.meta.outcomesEn.map((out, i) => (
                   <li key={i} className="flex items-start gap-2 text-slate-600">
                     <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></span>
                     {out}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="order-1 md:order-2 text-right" dir="rtl">
              <h3 className="text-xl font-bold text-emerald-800 font-arabic mb-3">المعيار</h3>
              <p className="text-slate-600 font-arabic text-lg mb-6">{LESSON_DATA.meta.standardAr}</p>

              <h3 className="text-xl font-bold text-emerald-800 font-arabic mb-3">ماذا سنتعلم؟</h3>
              <ul className="space-y-2">
                 {LESSON_DATA.meta.outcomesAr.map((out, i) => (
                   <li key={i} className="flex items-start gap-2 text-slate-600 font-arabic text-lg">
                     <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5"></span>
                     {out}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>

        {/* Introduction Cards */}
        <BilingualRow titleEn={LESSON_DATA.intro.titleEn} titleAr={LESSON_DATA.intro.titleAr}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LESSON_DATA.intro.details.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center hover:bg-emerald-50 transition-colors group">
                <div className="text-xs text-emerald-600 font-bold uppercase mb-1">{item.labelEn}</div>
                <div className="text-sm text-slate-400 font-arabic mb-2">{item.labelAr}</div>
                <div className="font-bold text-slate-800 group-hover:text-emerald-700">{item.valueEn}</div>
                <div className="font-bold font-arabic text-slate-800 group-hover:text-emerald-700 text-lg">{item.valueAr}</div>
              </div>
            ))}
          </div>
        </BilingualRow>

        {/* Themes */}
        <div className="mb-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white">
            <div className="flex flex-col md:flex-row justify-between mb-6">
               <h2 className="text-2xl font-bold">{LESSON_DATA.themes.titleEn}</h2>
               <h2 className="text-2xl font-bold font-arabic">{LESSON_DATA.themes.titleAr}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  {LESSON_DATA.themes.itemsEn.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm">{idx+1}</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 text-right" dir="rtl">
                  {LESSON_DATA.themes.itemsAr.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition font-arabic text-lg">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm ml-2">{idx+1}</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </div>

        {/* Audio Vocabulary (Now under Themes) */}
        <AudioVocabulary words={LESSON_DATA.vocabulary} />

        {/* Main Lesson Sections */}
        {LESSON_DATA.sections.map((section) => (
          <BilingualRow 
            key={section.id} 
            titleEn={section.titleEn} 
            titleAr={section.titleAr}
            imageUrl={section.imageUrl}
            className={section.type === 'text' ? "bg-white p-6 rounded-xl shadow-sm border border-slate-100" : ""}
          >
            {/* Verses Display (Moved to Top) */}
            {section.type === 'verse' && section.verses && (
              <div className="space-y-4 mb-8">
                {section.verses.map((v, idx) => (
                  <VerseCard key={idx} verse={v} />
                ))}
              </div>
            )}

            {/* Explanation Row (Moved to Bottom) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-slate-600 leading-relaxed order-2 md:order-1">
                {Array.isArray(section.contentEn) 
                  ? <ul className="list-disc pl-5 space-y-2">{section.contentEn.map((l,i)=><li key={i}>{l}</li>)}</ul> 
                  : <p>{section.contentEn}</p>
                }
              </div>
              <div className="text-slate-600 leading-relaxed font-arabic text-lg text-right order-1 md:order-2" dir="rtl">
                {Array.isArray(section.contentAr) 
                  ? <ul className="list-disc pr-5 space-y-2">{section.contentAr.map((l,i)=><li key={i}>{l}</li>)}</ul> 
                  : <p>{section.contentAr}</p>
                }
              </div>
            </div>
          </BilingualRow>
        ))}

        {/* Assessment Area */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-100 text-center mb-16">
          <Brain className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-emerald-900 mb-2">Questions & Reflection</h2>
          <p className="text-emerald-700 mb-6">Did you understand the lesson?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
             <div className="bg-white p-6 rounded-xl shadow-sm">
               <h4 className="font-bold text-slate-800 mb-2">Reflection Question</h4>
               <p className="text-slate-600">Why did Allah make hearing before sight in verse 9?</p>
               <div className="mt-4 text-xs text-slate-400 uppercase tracking-wide font-bold">Hint: Think about babies</div>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm text-right" dir="rtl">
               <h4 className="font-bold font-arabic text-slate-800 mb-2">سؤال للتفكير</h4>
               <p className="text-slate-600 font-arabic text-lg">لماذا ذكر الله السمع قبل البصر في الآية 9؟</p>
               <div className="mt-4 text-xs text-slate-400 uppercase tracking-wide font-bold" dir="ltr">تلميح: فكر في الجنين</div>
             </div>
          </div>
        </div>

        {/* Educational Connections (UAE Vision & IB) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
           {/* UAE Vision */}
           <div className="bg-slate-800 text-white rounded-xl p-6 border-t-4 border-emerald-500">
             <div className="flex items-center gap-2 mb-4">
               <Globe className="w-6 h-6 text-emerald-400" />
               <h3 className="font-bold text-lg">{LESSON_DATA.connections.uaeVision.titleEn}</h3>
             </div>
             <ul className="space-y-3 text-sm text-slate-300 mb-4">
               {LESSON_DATA.connections.uaeVision.pointsEn.map((p, i) => <li key={i}>• {p}</li>)}
             </ul>
             <div className="border-t border-slate-700 pt-4 text-right" dir="rtl">
               <h3 className="font-bold font-arabic text-lg mb-2 text-white">{LESSON_DATA.connections.uaeVision.titleAr}</h3>
               <ul className="space-y-3 text-sm font-arabic text-slate-300">
                 {LESSON_DATA.connections.uaeVision.pointsAr.map((p, i) => <li key={i}>• {p}</li>)}
               </ul>
             </div>
           </div>

           {/* IB Learner Profile */}
           <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 border-t-4 border-blue-500">
             <div className="flex items-center gap-2 mb-4">
               <BookOpenCheck className="w-6 h-6 text-blue-500" />
               <h3 className="font-bold text-lg text-slate-800">{LESSON_DATA.connections.ibProfile.titleEn}</h3>
             </div>
             <ul className="space-y-3 text-sm text-slate-600 mb-4">
               {LESSON_DATA.connections.ibProfile.pointsEn.map((p, i) => <li key={i}>• {p}</li>)}
             </ul>
             <div className="border-t border-slate-100 pt-4 text-right" dir="rtl">
               <h3 className="font-bold font-arabic text-lg mb-2 text-slate-800">{LESSON_DATA.connections.ibProfile.titleAr}</h3>
               <ul className="space-y-3 text-sm font-arabic text-slate-600">
                 {LESSON_DATA.connections.ibProfile.pointsAr.map((p, i) => <li key={i}>• {p}</li>)}
               </ul>
             </div>
           </div>

           {/* IB ATL Skills */}
           <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 border-t-4 border-purple-500">
             <div className="flex items-center gap-2 mb-4">
               <Lightbulb className="w-6 h-6 text-purple-500" />
               <h3 className="font-bold text-lg text-slate-800">{LESSON_DATA.connections.ibSkills.titleEn}</h3>
             </div>
             <ul className="space-y-3 text-sm text-slate-600 mb-4">
               {LESSON_DATA.connections.ibSkills.pointsEn.map((p, i) => <li key={i}>• {p}</li>)}
             </ul>
             <div className="border-t border-slate-100 pt-4 text-right" dir="rtl">
               <h3 className="font-bold font-arabic text-lg mb-2 text-slate-800">{LESSON_DATA.connections.ibSkills.titleAr}</h3>
               <ul className="space-y-3 text-sm font-arabic text-slate-600">
                 {LESSON_DATA.connections.ibSkills.pointsAr.map((p, i) => <li key={i}>• {p}</li>)}
               </ul>
             </div>
           </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Islamic Education - Grade 6</p>
      </footer>

      {/* Interactive Bot */}
      <AITutor />
    </div>
  );
};

export default App;