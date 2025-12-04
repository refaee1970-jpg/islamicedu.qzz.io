import { LessonData } from './types';

export const LESSON_DATA: LessonData = {
  meta: {
    standardAr: "تلاوة الآيات (13-22) من سورة السجدة تلاوة مجودة، وتفسير مفرداتها، واستنتاج صفات المؤمنين وجزائهم.",
    standardEn: "Recite Verses (13-22) of Surah As-Sajdah with Tajweed, explain vocabulary, and infer the attributes of believers and their reward.",
    outcomesAr: [
      "أن يسمع الطالب الآيات من 13-22 تلاوة سليمة.",
      "أن يفسر معاني المفردات: (تتجافى، المضاجع، قرة أعين، المأوى، نُزلًا).",
      "أن يقارن بين حال المؤمنين وحال الفاسقين في الدنيا والآخرة.",
      "أن يحرص على قيام الليل والإكثار من السجود."
    ],
    outcomesEn: [
      "Recite verses 13-22 correctly.",
      "Explain the meanings of vocabulary: (Forsake their beds, Comfort of eyes, Refuge, Hospitality).",
      "Compare the state of Believers vs. Disobedient in this life and the Hereafter.",
      "Demonstrate eagerness to perform night prayers (Tahajjud)."
    ]
  },
  intro: {
    titleAr: "بطاقة الآيات",
    titleEn: "Verses Profile",
    details: [
      { labelAr: "السورة", valueAr: "السجدة", labelEn: "Surah", valueEn: "As-Sajdah" },
      { labelAr: "عدد الآيات", valueAr: "من 13 إلى 22", labelEn: "Verses", valueEn: "13 to 22" },
      { labelAr: "الموضوع الرئيسي", valueAr: "جزاء المؤمنين والفاسقين", labelEn: "Main Theme", valueEn: "Reward of Believers vs Disobedient" },
      { labelAr: "نوع السورة", valueAr: "مكية", labelEn: "Type", valueEn: "Makki" },
    ]
  },
  vocabulary: [
    { 
      word: "تَتَجَافَىٰ", 
      meaningAr: "ترتفع وتبتعد (عن الفراش للعبادة)", 
      meaningEn: "They forsake (rise from)",
      audioUrl: "https://audio.qurancdn.com/wbw/032_016_001.mp3"
    },
    { 
      word: "ٱلۡمَضَاجِعِ", 
      meaningAr: "أماكن النوم (الفرش)", 
      meaningEn: "The Beds / Sleeping places",
      audioUrl: "https://audio.qurancdn.com/wbw/032_016_003.mp3"
    },
    { 
      word: "قُرَّةِ أَعۡيُنٖ", 
      meaningAr: "ما يسعدهم ويفرحهم في الجنة", 
      meaningEn: "Comfort of the eyes (Joy)",
      audioUrl: "https://audio.qurancdn.com/wbw/032_017_006.mp3"
    },
    { 
      word: "ٱلۡفَاسِقُ", 
      meaningAr: "الخارج عن طاعة الله", 
      meaningEn: "The Defiantly Disobedient",
      audioUrl: "https://audio.qurancdn.com/wbw/032_018_006.mp3"
    },
    { 
      word: "ٱلۡمَأۡوَىٰ", 
      meaningAr: "المسكن والمستقر", 
      meaningEn: "The Refuge / Home",
      audioUrl: "https://audio.qurancdn.com/wbw/032_019_007.mp3"
    },
    { 
      word: "نُزُلَۢا", 
      meaningAr: "ما يُعد للضيف من تكريم", 
      meaningEn: "Hospitality / Gift",
      audioUrl: "https://audio.qurancdn.com/wbw/032_019_009.mp3"
    }
  ],
  themes: {
    titleAr: "محاور الآيات",
    titleEn: "Verses Themes",
    itemsAr: [
      "عدل الله المطلق في الجزاء.",
      "صفات المؤمنين: الخشوع، قيام الليل، والإنفاق.",
      "الجزاء العظيم المخفي للمؤمنين (الجنة).",
      "المقارنة بين مصير المؤمن ومصير الفاسق."
    ],
    itemsEn: [
      "Allah's absolute justice in judgment.",
      "Attributes of Believers: Khushoo, Night Prayer, Charity.",
      "The Hidden Reward for Believers (Paradise).",
      "Comparison between the Believer and the Corrupt."
    ]
  },
  sections: [
    {
      id: "warning",
      titleAr: "تهديد الغافلين",
      titleEn: "Warning to the Heedless",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "تتحدث الآيات عن مشيئة الله في هداية البشر، ولكن من يختار الضلال وينسى لقاء الله، فإن مصيره العذاب.",
        "النسيان هنا ليس فقدان الذاكرة، بل هو (الترك والإهمال) المتعمد لأوامر الله في الدنيا."
      ],
      contentEn: [
        "The verses speak of Allah's Will. While He could have guided everyone forcibly, He gave humans choice. Those who choose to forget the meeting with Him face consequences.",
        "Forgetting here does not mean memory loss, but rather deliberate neglect of Allah's commands."
      ],
      verses: [
        {
          arabic: "وَلَوۡ شِئۡنَا لَأَتَيۡنَا كُلَّ نَفۡسٍ هُدَىٰهَا وَلَٰكِنۡ حَقَّ ٱلۡقَوۡلُ مِنِّي لَأَمۡلَأَنَّ جَهَنَّمَ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ أَجۡمَعِينَ ۝١٣",
          english: "And if We had willed, We could have given every soul its guidance, but the word from Me will come into effect: 'I will surely fill Hell with jinn and people all together.'",
          number: 13
        },
        {
          arabic: "فَذُوقُواْ بِمَا نَسِيتُمۡ لِقَآءَ يَوۡمِكُمۡ هَٰذَآ إِنَّا نَسِينَاكُمۡۖ وَذُوقُواْ عَذَابَ ٱلۡخُلۡدِ بِمَا كُنتُمۡ تَعۡمَلُونَ ۝١٤",
          english: "So taste [punishment] because you forgot the meeting of this Day of yours. Indeed, We have [accordingly] forgotten you. And taste the punishment of eternity for what you used to do.",
          number: 14
        }
      ]
    },
    {
      id: "believers",
      titleAr: "صفات المؤمنين الصادقين",
      titleEn: "Attributes of True Believers",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "السجود والخشوع: إذا ذُكروا بآيات الله لا يتكبرون، بل يخرون سجداً ويسبحون بحمد ربهم.",
        "قيام الليل (تتجافى جنوبهم): يتركون فرشهم المريحة في الليل ليقفوا بين يدي الله يدعونه خوفاً من عقابه وطمعاً في رحمته.",
        "الإنفاق: ينفقون مما رزقهم الله في وجوه الخير."
      ],
      contentEn: [
        "Prostration (Sajdah): When reminded of Allah's verses, they do not act arrogantly. They immediately fall in prostration and glorify their Lord.",
        "Night Prayer (Tahajjud): They forsake their comfortable beds at night to stand before Allah, calling upon Him with both fear of His punishment and hope for His mercy.",
        "Charity: They spend from what Allah has provided them on good causes."
      ],
      verses: [
        {
          arabic: "إِنَّمَا يُؤۡمِنُ بِـَٔايَٰتِنَا ٱلَّذِينَ إِذَا ذُكِّرُواْ بِهَا خَرُّواْ سُجَّدٗا وَسَبَّحُواْ بِحَمۡدِ رَبِّهِمۡ وَهُمۡ لَا يَسۡتَكۡبِرُونَ ۝١٥",
          english: "Only those believe in Our verses who, when they are reminded by them, fall down in prostration and exalt [Allah] with praise of their Lord, and they are not arrogant.",
          number: 15,
          highlightedWords: [
            { word: "خَرُّواْ سُجَّدٗا", meaningAr: "سقطوا ساجدين", meaningEn: "Fell in prostration" }
          ]
        },
        {
          arabic: "تَتَجَافَىٰ جُنُوبُهُمۡ عَنِ ٱلۡمَضَاجِعِ يَدۡعُونَ رَبَّهُمۡ خَوۡفٗا وَطَمَعٗا وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ۝١٦",
          english: "Their sides part [i.e., they arise] from [their] beds; they supplicate their Lord in fear and aspiration, and from what We have provided them, they spend.",
          number: 16,
          highlightedWords: [
            { word: "تَتَجَافَىٰ", meaningAr: "تبتعد وترتفع", meaningEn: "Part / Rise from" }
          ]
        }
      ]
    },
    {
      id: "reward",
      titleAr: "الجزاء العظيم (قرة أعين)",
      titleEn: "The Hidden Reward (Joy of Eyes)",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "المفاجأة الإلهية: أخفى الله للمؤمنين في الجنة نعيماً لا تتخيله العقول ولا تراه العيون، جزاءً لهم على أعمالهم الصالحة التي كانوا يخفونها (مثل قيام الليل).",
        "الجزاء من جنس العمل: كما أخفوا عبادتهم في ليل الدنيا، أخفى الله لهم جزاءهم في الآخرة."
      ],
      contentEn: [
        "The Divine Surprise: Allah has kept hidden for the believers rewards in Paradise that no mind can imagine and no eye has seen.",
        "Fitting Reward: Just as they hid their worship (like night prayers) in this world, Allah hid their reward in the Hereafter as a delightful surprise."
      ],
      verses: [
        {
          arabic: "فَلَا تَعۡلَمُ نَفۡسٞ مَّآ أُخۡفِيَ لَهُم مِّن قُرَّةِ أَعۡيُنٖ جَزَآءَۢ بِمَا كَانُواْ يَعۡمَلُونَ ۝١٧",
          english: "And no soul knows what has been hidden for them of comfort for eyes as reward for what they used to do.",
          number: 17,
          highlightedWords: [
            { word: "قُرَّةِ أَعۡيُنٖ", meaningAr: "سرور وفرح", meaningEn: "Comfort of eyes" }
          ]
        }
      ]
    },
    {
      id: "comparison",
      titleAr: "المقارنة: المؤمن والفاسق",
      titleEn: "Comparison: Believer vs Corrupt",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "لا يستوون: يقرر الله حقيقة مطلقة وهي أنه لا يتساوى المؤمن المطيع مع الفاسق العاصي.",
        "مصير المؤمنين: جنات المأوى (مكان آمن ومستقر) وضيافة وتكريم (نُزلاً).",
        "مصير الفاسقين: النار، كلما حاولوا الخروج منها أعيدوا فيها، ويذوقون العذاب الأدنى (مصائب الدنيا) لعلهم يرجعون، ثم العذاب الأكبر في الآخرة."
      ],
      contentEn: [
        "Not Equal: Allah establishes an absolute truth: The obedient believer is not equal to the corrupt disobedient.",
        "Fate of Believers: Gardens of Refuge (safe homes) and hospitality (Nuzulan) from Allah.",
        "Fate of Disobedient: The Fire. Whenever they try to escape, they are returned to it. They will taste the 'nearer punishment' (worldly calamities) hoping they might repent, before the greater punishment."
      ],
      verses: [
        {
          arabic: "أَفَمَن كَانَ مُؤۡمِنٗا كَمَن كَانَ فَاسِقٗاۚ لَّا يَسۡتَوُۥنَ ۝١٨",
          english: "Then is one who was a believer like one who was defiantly disobedient? They are not equal.",
          number: 18
        },
        {
          arabic: "أَمَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ فَلَهُمۡ جَنَّٰتُ ٱلۡمَأۡوَىٰ نُزُلَۢا بِمَا كَانُواْ يَعۡمَلُونَ ۝١٩",
          english: "As for those who believed and did righteous deeds, for them are the gardens of refuge as accommodation for what they used to do.",
          number: 19
        },
        {
          arabic: "وَلَنُذِيقَنَّهُم مِّنَ ٱلۡعَذَابِ ٱلۡأَدۡنَىٰ دُونَ ٱلۡعَذَابِ ٱلۡأَكۡبَرِ لَعَلَّهُمۡ يَرۡجِعُونَ ۝٢١",
          english: "And we will surely let them taste the nearer punishment short of the greater punishment that perhaps they will repent.",
          number: 21
        }
      ]
    }
  ],
  connections: {
    uaeVision: {
      titleEn: "Good Citizenship",
      titleAr: "المواطنة الصالحة",
      pointsEn: [
        "Responsibility: A believer is responsible for their actions and contributes positively to society (Charity).",
        "Respecting Law: Just as a believer obeys Allah, a good citizen respects the laws of their country."
      ],
      pointsAr: [
        "المسؤولية: المؤمن مسؤول عن تصرفاته ويساهم بإيجابية في مجتمعه (الإنفاق).",
        "احترام القانون: كما يطيع المؤمن ربه، يحترم المواطن الصالح قوانين وطنه."
      ]
    },
    ibProfile: {
      titleEn: "IB Learner Profile",
      titleAr: "ملامح متعلم البكالوريا الدولية",
      pointsEn: [
        "Principled: Acting with integrity and honesty (contrasted with the Fasiq).",
        "Reflective: Thinking about the consequences of actions (Reward vs Punishment)."
      ],
      pointsAr: [
        "ذو مبادئ: التصرف بنزاهة وصدق (عكس الفاسق).",
        "متأمل: التفكير في عواقب الأفعال (مقارنة الجزاء)."
      ]
    },
    ibSkills: {
      titleEn: "ATL Skills",
      titleAr: "مهارات أساليب التعلم",
      pointsEn: [
        "Self-Management: Discipline in waking up for prayer (Tahajjud).",
        "Critical Thinking: Comparing the outcomes of different life choices."
      ],
      pointsAr: [
        "إدارة الذات: الانضباط في الاستيقاظ للصلاة (قيام الليل).",
        "التفكير الناقد: المقارنة بين نتائج خيارات الحياة المختلفة."
      ]
    }
  }
};