export type CourseStatus = 'not-started' | 'in-progress' | 'completed';

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export type LessonType = 'video' | 'overview' | 'quiz' | 'pdf' | 'exercise';

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  timeLimitFormatted: string; 
  timeLimitMinutes: number;
  totalQuestions: number;
  passingScorePercentage: number;
  questions: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  duration?: string; 
  durationMinutes?: number;
  questionCount?: number; 
  isLocked: boolean;
  isCompleted: boolean;
  isCurrent?: boolean;
  progressPercentage?: number;
  videoUrl?: string;
  pdfUrl?: string;
  pdfTitle?: string;
  exerciseUrl?: string;
  content?: string;
  quiz?: Quiz;
}

export interface CourseSection {
  id: string;
  title: string;
  subtitle?: string; 
  duration?: string;
  lessons: Lesson[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface CourseMaterials {
  instructor: Instructor;
  duration: string; 
  lessonsCount: number; 
  enrolledCount: number; 
  language: string; 
  certificate?: boolean;
}

export interface Comment {
  id: string;
  authorName: string;
  authorAvatar: string;
  date: string; 
  content: string;
  likesCount?: number;
}

export interface LeaderboardStudent {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  points: number;
  progressPercentage: number;
  isCurrentUser?: boolean;
  badge?: string;
}

export interface MotivationalQuote {
  id: string;
  author: string; 
  quote: string;
  emoji: string;
  minProgress: number; 
  maxProgress: number;
}

export interface CourseLeaderboard {
  students: LeaderboardStudent[];
  motivationalQuotes: MotivationalQuote[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  category: string;
  level: CourseLevel;
  status: CourseStatus;
  progressPercentage: number;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  materials: CourseMaterials;
  sections: CourseSection[];
  comments: Comment[];
  leaderboard: CourseLeaderboard;
}

export interface QuestionDraft {
  courseId: string;
  title: string;
  content: string;
  updatedAt: string;
}
