export interface VocabularyWord {
  word: string;
  meaningAr: string;
  meaningEn: string;
  audioUrl?: string;
}

export interface VerseSegment {
  arabic: string;
  english: string;
  number?: number;
  highlightedWords?: VocabularyWord[];
}

export interface LessonSection {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string | string[];
  contentEn: string | string[];
  verses?: VerseSegment[];
  type: 'text' | 'list' | 'verse' | 'interactive';
  imageUrl?: string;
}

export interface ConnectionItem {
  titleAr: string;
  titleEn: string;
  pointsAr: string[];
  pointsEn: string[];
}

export interface LessonData {
  meta: {
    standardAr: string;
    standardEn: string;
    outcomesAr: string[];
    outcomesEn: string[];
  };
  intro: {
    titleAr: string;
    titleEn: string;
    details: { labelAr: string; labelEn: string; valueAr: string; valueEn: string }[];
  };
  themes: {
    titleAr: string;
    titleEn: string;
    itemsAr: string[];
    itemsEn: string[];
  };
  vocabulary: VocabularyWord[];
  sections: LessonSection[];
  connections: {
    uaeVision: ConnectionItem;
    ibProfile: ConnectionItem;
    ibSkills: ConnectionItem;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}