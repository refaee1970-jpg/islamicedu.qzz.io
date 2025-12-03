import { LessonData } from './types';

export const LESSON_DATA: LessonData = {
  meta: {
    standardAr: "تلاوة آيات القرآن بتجويد صحيح وفهم معانيها العامة والتفصيلية.",
    standardEn: "Recite Quran verses correctly and understand their general and specific meanings.",
    outcomesAr: [
      "أن يشرح الطالب معاني الكلمات في الآيات (1-12) من سورة السجدة.",
      "أن يفهم قدرة الله في خلق الكون وتنظيمه.",
      "أن يصف مراحل خلق الإنسان كما ذكرها الله.",
      "أن يوضح حال الكافرين وندمهم يوم القيامة."
    ],
    outcomesEn: [
      "Explain the meanings of words in verses (1-12) of Surah As-Sajdah.",
      "Understand Allah's power in creating and organizing the universe.",
      "Describe the stages of human creation mentioned in the verses.",
      "Explain the regret of disbelievers on Judgment Day."
    ]
  },
  intro: {
    titleAr: "التعريف بالسورة",
    titleEn: "About the Surah",
    details: [
      { labelAr: "اسم السورة", valueAr: "السجدة (من الآية 15)", labelEn: "Name", valueEn: "As-Sajdah (From V.15)" },
      { labelAr: "نوعها", valueAr: "مكية", labelEn: "Type", valueEn: "Makki (Makkah)" },
      { labelAr: "عدد الآيات", valueAr: "30 آية", labelEn: "Verses", valueEn: "30 Verses" },
      { labelAr: "الموضوع", valueAr: "اليقين بالله واليوم الآخر", labelEn: "Theme", valueEn: "Belief in Allah & Hereafter" },
    ]
  },
  vocabulary: [
    { 
      word: "لَا رَيۡبَ", 
      meaningAr: "لا شك فيه أبداً", 
      meaningEn: "No doubt whatsoever",
      // Surah 32, Verse 2, Word 4 (Rayb)
      audioUrl: "https://audio.qurancdn.com/wbw/032_002_004.mp3" 
    },
    { 
      word: "ٱفۡتَرَىٰهُ", 
      meaningAr: "اختلقه وكذب نسبته لله", 
      meaningEn: "Fabricated / Invented it",
      // Surah 32, Verse 3, Word 3
      audioUrl: "https://audio.qurancdn.com/wbw/032_003_003.mp3"
    },
    { 
      word: "يُدَبِّرُ", 
      meaningAr: "يقضي الأمور وينظمها", 
      meaningEn: "Arranges / Governs / Manages",
      // Surah 32, Verse 5, Word 1
      audioUrl: "https://audio.qurancdn.com/wbw/032_005_001.mp3"
    },
    { 
      word: "يَعۡرُجُ", 
      meaningAr: "يصعد إليه", 
      meaningEn: "Ascends / Goes up",
      // Surah 32, Verse 5, Word 8
      audioUrl: "https://audio.qurancdn.com/wbw/032_005_008.mp3"
    },
    { 
      word: "سُلَٰلَةٖ", 
      meaningAr: "خلاصة صافية", 
      meaningEn: "Extract / Essence",
      // Surah 32, Verse 8, Word 5
      audioUrl: "https://audio.qurancdn.com/wbw/032_008_005.mp3"
    },
    { 
      word: "مُوقِنُونَ", 
      meaningAr: "مصدقون تصديقاً جازماً", 
      meaningEn: "Certain / Convinced with certainty",
      // Surah 32, Verse 12, Word 17
      audioUrl: "https://audio.qurancdn.com/wbw/032_012_017.mp3"
    }
  ],
  themes: {
    titleAr: "موضوعات السورة",
    titleEn: "Main Topics",
    itemsAr: [
      "إثبات أن القرآن وحي من الله.",
      "مظاهر قدرة الله في الكون.",
      "بداية خلق الإنسان وتكريمه.",
      "حسرة وندامة الكافرين يوم القيامة."
    ],
    itemsEn: [
      "Proof that Quran is revelation from Allah.",
      "Signs of Allah's power in the Universe.",
      "The creation and honoring of humans.",
      "The regret of disbelievers on Judgment Day."
    ]
  },
  sections: [
    {
      id: "verses-1-3",
      titleAr: "القرآن كتاب حق (الآيات 1-3)",
      titleEn: "The True Book (Verses 1-3)",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "الحروف المقطعة (الـم): بدأت السورة بهذه الحروف لتحدي العرب؛ فالقرآن مكون من حروف لغتهم، ومع ذلك عجزوا أن يأتوا بمثله، مما يدل على أنه معجزة.",
        "نفي الشك: تؤكد الآيات أن هذا الكتاب منزل من رب العالمين، وليس فيه أي مجال للشك، فهو الحق المطلق.",
        "الرد على المشركين: كان كفار قريش يدّعون أن النبي ﷺ هو من ألف القرآن (افتراه). الله يرد عليهم بقوة: بل هو الحق من ربك، والهدف منه إنذار قوم لم يأتهم نذير من قبل لعلهم يهتدون إلى طريق الصواب."
      ],
      contentEn: [
        "The Disconnected Letters (Alif, Lam, Meem): The Surah begins with these letters to challenge the eloquent Arabs. It shows that while the Quran uses their alphabet, they cannot produce anything like it. It is a miracle.",
        "Removing Doubt: The verses confirm strictly that this Book is sent down by the Lord of all worlds. It is the absolute Truth.",
        "Answering the Skeptics: The disbelievers of Makkah claimed the Prophet (ﷺ) invented the Quran ('He fabricated it'). Allah answers firmly: 'Nay, it is the Truth from your Lord.' Its purpose is to warn people who had not received guidance for a long time, so they might find the right path."
      ],
      verses: [
        {
          arabic: "الٓمٓ ۝١",
          english: "Alif, Lam, Meem.",
          number: 1
        },
        {
          arabic: "تَنزِيلُ ٱلۡكِتَٰبِ لَا رَيۡبَ فِيهِ مِن رَّبِّ ٱلۡعَٰلَمِينَ ۝٢",
          english: "The revelation of the Book—there is no doubt about it—is from the Lord of the worlds.",
          number: 2,
          highlightedWords: [
            { word: "تَنزِيلُ", meaningAr: "نزل من الله", meaningEn: "Sent down" },
            { word: "لَا رَيۡبَ", meaningAr: "لا شك فيه أبداً", meaningEn: "No doubt whatsoever" }
          ]
        },
        {
          arabic: "أَمۡ يَقُولُونَ ٱفۡتَرَىٰهُۚ بَلۡ هُوَ ٱلۡحَقُّ مِن رَّبِّكَ لِتُنذِرَ قَوۡمٗا مَّآ أَتَىٰهُم مِّن نَّذِيرٖ مِّن قَبۡلِكَ لَعَلَّهُمۡ يَهۡتَدُونَ ۝٣",
          english: "Do they say, 'He made it up'? No, it is the Truth from your Lord, to warn people so they may be guided.",
          number: 3,
          highlightedWords: [
            { word: "ٱفۡتَرَىٰهُ", meaningAr: "ألفه واختلقه", meaningEn: "Fabricated it / Made it up" },
            { word: "لِتُنذِرَ", meaningAr: "لتحذر من العذاب", meaningEn: "To warn" }
          ]
        }
      ]
    },
    {
      id: "verse-4",
      titleAr: "خلق الكون (الآية 4)",
      titleEn: "Creation of the Universe (Verse 4)",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "الخلق العظيم: تذكر الآية قدرة الله الهائلة في خلق السماوات السبع والأرض في ستة أيام (أو مراحل زمنية يعلمها الله)، وهذا يدل على النظام والتدرج وليس العجز.",
        "الاستواء على العرش: (ثم استوى على العرش) تعني علا وارتفع استواءً يليق بجلاله وعظمته، فهو يدبر ملكوت السموات والأرض.",
        "التوحيد: تختم الآية بتذكيرنا أنه يوم القيامة لن يكون لنا ناصر ولا شفيع إلا الله. فلا تتعلقوا بالأصنام أو البشر، بل الجؤوا إلى الخالق وحده."
      ],
      contentEn: [
        "The Grand Creation: Allah created the vast heavens and the earth in six days (phases or periods defined by Him). This shows divine order and planning, not that He needed time.",
        "Establishing on the Throne: 'Istawa' means He rose over the Throne in a manner that suits His Majesty. It signifies His absolute authority and control over the entire universe.",
        "Monotheism (Tawhid): The verse ends with a powerful reminder: on Judgment Day, you have no protector or intercessor except Allah. Do not rely on idols or other humans; turn only to your Creator."
      ],
      verses: [
        {
          arabic: "ٱللَّهُ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَا فِي سِتَّةِ أَيَّامٖ ثُمَّ ٱسۡتَوَىٰ عَلَى ٱلۡعَرۡشِۖ مَا لَكُم مِّن دُونِهِۦ مِن وَلِيّٖ وَلَا شَفِيعٍۚ أَفَلَا تَتَذَكَّرُونَ ۝٤",
          english: "It is Allah who created the heavens and the earth in six days; then He established Himself above the Throne. You have no protector besides Him; will you not remember?",
          number: 4,
          highlightedWords: [
            { word: "ٱسۡتَوَىٰ", meaningAr: "علا وارتفع بقدرته", meaningEn: "Rose over / Established" },
            { word: "شَفِيعٍۚ", meaningAr: "واسطة للدفاع عنكم", meaningEn: "Helper / Intercessor" }
          ]
        }
      ]
    },
    {
      id: "verses-5-6",
      titleAr: "الله ينظم الكون (الآيات 5-6)",
      titleEn: "Allah Controls Everything (Verses 5-6)",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "التدبير الإلهي: الله لا يغفل عن شيء. الأوامر تنزل من السماء لتدبير شؤون الأرض، ثم تصعد الأعمال والأخبار إليه.",
        "الزمن النسبي: هذا الصعود والتدبير يحدث في يوم مقداره عند الله (ألف سنة) مما نعد نحن البشر، مما يدل على عظمة الله واختلاف مقاييس الدنيا عن الآخرة.",
        "عالم الغيب والشهادة: الله يعلم ما غاب عن حواسنا (السرائر، المستقبل، ما في القلوب) وما نشاهده. وهو يجمع بين القوة (العزيز) والرحمة (الرحيم)."
      ],
      contentEn: [
        "Divine Management: Allah never sleeps nor ignores a detail. His commands descend from the heavens to manage the earth, and the reports of our deeds ascend back to Him.",
        "Relative Time: This management happens in a 'Day' that equates to 1,000 years of human calculation. This highlights Allah's greatness and how Divine time differs from our limited earthly time.",
        "Knower of All: Allah knows the 'Unseen' (secrets, future, thoughts) and the 'Witnessed' (what we see). He combines ultimate Power (Al-Aziz) with ultimate Mercy (Al-Rahim)."
      ],
      verses: [
        {
          arabic: "يُدَبِّرُ ٱلۡأَمۡرَ مِنَ ٱلسَّمَآءِ إِلَى ٱلۡأَرۡضِ ثُمَّ يَعۡرُجُ إِلَيۡهِ فِي يَوۡمٖ كَانَ مِقۡدَارُهُۥٓ أَلۡفَ سَنَةٖ مِّمَّا تَعُدُّونَ ۝٥",
          english: "He arranges every matter from the heaven to the earth; then it ascends to Him in a Day equal to a thousand years of your counting.",
          number: 5,
          highlightedWords: [
            { word: "يُدَبِّرُ", meaningAr: "ينظم ويصرف الأمور", meaningEn: "Arranges / Governs" },
            { word: "يَعۡرُجُ", meaningAr: "يصعد إليه", meaningEn: "Ascends / Goes up" }
          ]
        },
        {
          arabic: "ذَٰلِكَ عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ ٱلۡعَزِيزُ ٱلرَّحِيمُ ۝٦",
          english: "That is the Knower of the unseen and the witnessed, the Mighty, the Merciful.",
          number: 6
        }
      ]
    },
    {
      id: "verses-7-9",
      titleAr: "كيف خُلق الإنسان؟ (الآيات 7-9)",
      titleEn: "How Humans were Created (Verses 7-9)",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "إتقان الخلق: الله (أحسن كل شيء خلقه)، أي أتقن صنع كل شيء.",
        "تسلسل الخلق: بدأ خلق الإنسان الأول (آدم) من طين. ثم جعل استمرار البشرية عن طريق (سلالة) وهي الخلاصة من ماء مهين (بسيط وضعيف).",
        "نفخ الروح والحواس: بعد تشكيل الجسم، نفخ الله فيه الروح، ومنحه أدوات العلم: السمع (للتلقي)، والبصر (للرؤية)، والأفئدة (العقول للفهم). ومع كل هذه النعم العظيمة، يشكو الله من قلة شكر الناس."
      ],
      contentEn: [
        "Perfection of Creation: Allah 'perfected everything He created.' There are no flaws in His design.",
        "Stages of Life: He began the creation of the first human (Adam) from clay. Then, He designed the continuation of the human race through an 'extract' of a simple fluid (biological creation).",
        "The Soul & Senses: After shaping the body, He breathed the soul into it. He gave us tools for learning: Hearing (to listen to truth), Sight (to observe signs), and Hearts (minds to understand). Despite these huge gifts, 'Little are you grateful.'"
      ],
      verses: [
        {
          arabic: "ٱلَّذِيٓ أَحۡسَنَ كُلَّ شَيۡءٍ خَلَقَهُۥۖ وَبَدَأَ خَلۡقَ ٱلۡإِنسَٰنِ مِن طِينٖ ۝٧",
          english: "Who perfected everything He created and began the creation of man from clay.",
          number: 7
        },
        {
          arabic: "ثُمَّ جَعَلَ نَسۡلَهُۥ مِن سُلَٰلَةٖ مِّن مَّآءٖ مَّهِينٖ ۝٨",
          english: "Then He made his descendants from an extract of a simple fluid.",
          number: 8,
          highlightedWords: [
            { word: "سُلَٰلَةٖ", meaningAr: "خلاصة", meaningEn: "Extract" },
            { word: "مَّهِينٖ", meaningAr: "ضعيف وبسيط", meaningEn: "Weak / Simple" }
          ]
        },
        {
          arabic: "ثُمَّ سَوَّىٰهُ وَنَفَخَ فِيهِ مِن رُّوحِهِۦۖ وَجَعَلَ لَكُمُ ٱلسَّمۡعَ وَٱلۡأَبۡصَٰرَ وَٱلۡأَفۡـِٔدَةَۚ قَلِيلٗا مَّا تَشۡكُرُونَ ۝٩",
          english: "Then He shaped him and breathed into him from His soul and made for you hearing, vision, and hearts; little are you grateful.",
          number: 9,
          highlightedWords: [
            { word: "سَوَّىٰهُ", meaningAr: "عدل خلقه وصوره", meaningEn: "Shaped / Fashioned him" },
            { word: "ٱلۡأَفۡـِٔدَةَۚ", meaningAr: "القلوب والعقول", meaningEn: "Hearts / Minds" }
          ]
        }
      ]
    },
    {
      id: "verses-10-12",
      titleAr: "البعث والحساب (الآيات 10-12)",
      titleEn: "Resurrection & Judgment (Verses 10-12)",
      type: 'verse',
      imageUrl: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "إنكار الكفار: يستبعد الكفار أن يعودوا للحياة بعد أن تتحلل أجسامهم وتختلط بالتراب. مشكلتهم ليست في القدرة، بل في (كفرهم بلقاء ربهم).",
        "الرد الحاسم: الرد يأتي بأن الوفاة ليست نهاية، بل هي انتقال. ملك الموت الموكل بكم سيقبض الأرواح كاملة، ثم ترجعون إلى الله للحساب.",
        "مشهد الندم: تصور الآية 12 مشهداً مرعباً: المجرمون يطأطئون رؤوسهم ذلاً أمام الله. يعترفون: (أبصرنا الحق وسمعنا)، ويطلبون فرصة ثانية (ارجعنا نعمل صالحاً). ولكن، انتهى وقت العمل وجاء وقت الحساب."
      ],
      contentEn: [
        "Denial of Resurrection: Disbelievers ask logically: 'If we decompose and become lost in the soil, how can we be recreated?' Their real issue is that they refuse to believe they will meet God.",
        "The Decisive Answer: Death is not the end; it is a transition. The Angel of Death will take your souls fully, and you will be returned to your Lord for judgment.",
        "Scene of Regret: Verse 12 paints a vivid picture. The criminals hang their heads low in shame before Allah. They admit: 'We now see and hear the truth.' They beg for a second chance: 'Send us back to do good.' But alas, the time for action is over; it is now time for accounting."
      ],
      verses: [
        {
          arabic: "وَقَالُوٓاْ أَءِذَا ضَلَلۡنَا فِي ٱلۡأَرۡضِ أَءِنَّا لَفِي خَلۡقٖ جَدِيدِۭۚ بَلۡ هُم بِلِقَآءِ رَبِّهِمۡ كَٰفِرُونَ ۝١٠",
          english: "And they say, 'When we are lost in the earth, will we be created again?' Indeed, they deny the meeting with their Lord.",
          number: 10,
          highlightedWords: [
            { word: "ضَلَلۡنَا", meaningAr: "ضعنا وتحللت أجسامنا", meaningEn: "Lost / Become dust" }
          ]
        },
        {
          arabic: "۞ قُلۡ يَتَوَفَّىٰكُم مَّلَكُ ٱلۡمَوۡتِ ٱلَّذِي وُكِّلَ بِكُمۡ ثُمَّ إِلَىٰ رَبِّكُمۡ تُرۡجَعُونَ ۝١١",
          english: "Say, 'The angel of death who is assigned to you will take your souls. Then to your Lord you will be returned.'",
          number: 11
        },
        {
          arabic: "وَلَوۡ تَرَىٰٓ إِذِ ٱلۡمُجۡرِمُونَ نَاكِسُواْ رُءُوسِهِمۡ عِندَ رَبِّهِمۡ رَبَّنَآ أَبۡصَرۡنَا وَسَمِعۡنَا فَٱرۡجِعۡنَا نَعۡمَلۡ صَٰلِحًا إِنَّا مُوقِنُونَ ۝١٢",
          english: "If you could see the criminals hanging their heads before their Lord, saying, 'Our Lord, we have seen and heard, so send us back; we will do good. We are now certain.'",
          number: 12,
          highlightedWords: [
            { word: "نَاكِسُواْ", meaningAr: "مطأطئو (خافضو) رؤوسهم ذلاً", meaningEn: "Hanging / Lowering in shame" },
            { word: "مُوقِنُونَ", meaningAr: "متأكدون لا شك عندنا", meaningEn: "Certain / Sure" }
          ]
        }
      ]
    },
    {
      id: "miracles",
      titleAr: "العلم والقرآن: دقة مذهلة",
      titleEn: "Science & Quran: Amazing Accuracy",
      type: 'text',
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "أطوار الجنين: قبل اكتشاف المجهر بقرون، ذكر القرآن أن الإنسان يُخلق من (سلالة) أي جزء دقيق مستخلص، وهو ما يطابق اكتشاف الحيوان المنوي والبويضة.",
        "السمع قبل البصر: العلم الحديث أثبت أن حاسة السمع عند الجنين تكتمل في الشهر الخامس ويبدأ بسماع صوت أمه، بينما البصر لا يكتمل إلا بعد الولادة. القرآن ذكر (السمع) قبل (الأبصار) في الآية 9، وهذا ترتيب علمي دقيق يشهد بأن القرآن من عند الله."
      ],
      contentEn: [
        "Embryonic Stages: Centuries before microscopes, the Quran stated humans are created from a 'Sulalah' (extract). This perfectly matches modern genetics describing the microscopic sperm and egg.",
        "Hearing Before Sight: Modern science confirms that a fetus develops the ability to hear inside the womb (around the 5th month) before the ability to see. In Verse 9, Allah says 'Hearing and Sight', maintaining the correct biological order. This accuracy proves the Quran is Divine."
      ]
    },
    {
      id: "gratitude",
      titleAr: "قليلاً ما تشكرون: وقفة تربوية",
      titleEn: "Be Grateful: A Moral Lesson",
      type: 'text',
      imageUrl: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1200&auto=format&fit=crop",
      contentAr: [
        "العتاب اللطيف: جملة (قليلاً ما تشكرون) هي عتاب من الله. هو أعطانا أعظم النعم (السمع، البصر، العقل)، ومع ذلك نستخدمها في غير طاعته.",
        "كيف أكون شاكراً؟",
        "1. بقلبي: أعترف أن كل نجاحي وصحتي هي من الله.",
        "2. بلساني: أكرر (الحمد لله) في السراء والضراء.",
        "3. بجوارحي: لا أنظر للحرام، لا أسمع الكلام السيء، وأستخدم ذكائي في العلم النافع.",
        "قاعدة ذهبية: (لئن شكرتم لأزيدنكم). الشكر هو مفتاح زيادة النعم."
      ],
      contentEn: [
        "A Gentle Scolding: The phrase 'Little are you grateful' is a reminder. Allah gave us the best tools (Hearing, Sight, Intellect), yet we often forget to thank Him or use them purely.",
        "How to practice Gratitude (Shukr)?",
        "1. With Heart: Acknowledge that your success and health come from Allah.",
        "2. With Tongue: Say 'Alhamdulillah' frequently.",
        "3. With Action: Do not look at bad things, do not listen to gossip, and use your intelligence to learn good things.",
        "Golden Rule: Gratitude acts like a magnet for more blessings."
      ]
    }
  ],
  connections: {
    uaeVision: {
      titleEn: "UAE National Vision",
      titleAr: "رؤية الإمارات",
      pointsEn: [
        "Cohesive Society: Strengthening family and community values through Islamic principles.",
        "Competitive Knowledge Economy: Encouraging scientific thinking and reflection on creation (as seen in the Surah)."
      ],
      pointsAr: [
        "مجتمع متلاحم: تعزيز القيم الأسرية والمجتمعية من خلال المبادئ الإسلامية.",
        "اقتصاد معرفي تنافسي: تشجيع التفكير العلمي والتأمل في الخلق (كما في السورة)."
      ]
    },
    ibProfile: {
      titleEn: "IB Learner Profile",
      titleAr: "ملامح متعلم البكالوريا الدولية",
      pointsEn: [
        "Thinkers: Reflecting on the complexity of the universe and human creation.",
        "Reflective: Thinking about our own actions and showing gratitude (Shukr)."
      ],
      pointsAr: [
        "مفكرون: التأمل في تعقيد الكون وخلق الإنسان.",
        "متأملون: التفكير في أفعالنا وإظهار الشكر لله."
      ]
    },
    ibSkills: {
      titleEn: "ATL Skills",
      titleAr: "مهارات أساليب التعلم",
      pointsEn: [
        "Thinking Skills: Critical thinking about the proofs of Allah's power.",
        "Communication Skills: Explaining the verses and meanings to others."
      ],
      pointsAr: [
        "مهارات التفكير: التفكير الناقد في أدلة قدرة الله.",
        "مهارات التواصل: شرح الآيات والمعاني للآخرين."
      ]
    }
  }
};