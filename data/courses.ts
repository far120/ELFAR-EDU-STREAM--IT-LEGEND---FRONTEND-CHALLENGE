import { Course } from '../types/courses';

export const COURSES: Course[] = [
  {
    id: '1',
    slug: 'starting-seo-as-your-home-based-business',
    title: 'Starting SEO as your Home Based Business',
    shortDescription: 'Master modern Search Engine Optimization techniques to launch and scale a profitable home-based digital agency.',
    description: 'Learn step-by-step how to launch an SEO business from home. Covering keyword research, on-page and off-page optimization, technical SEO, client acquisition, and storytelling frameworks.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    category: 'Digital Marketing & Business',
    level: 'Beginner',
    status: 'in-progress',
    progressPercentage: 63,
    rating: 4.8,
    reviewsCount: 142,
    featured: true,
    materials: {
      instructor: {
        id: 'inst-1',
        name: 'Edward Norton',
        role: 'SEO Strategist & Entrepreneur',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
        bio: 'Over 12 years helping digital entrepreneurs build profitable consulting businesses from scratch.'
      },
      duration: '3 weeks',
      lessonsCount: 8,
      enrolledCount: 65,
      language: 'English',
      certificate: true
    },
    sections: [
      {
        id: 'sec-intro',
        title: 'Course Introduction',
        subtitle: 'Foundational concepts and getting started',
        duration: '45 mins',
        lessons: [
          {
            id: 'les-1',
            title: 'Introduction',
            type: 'video',
            duration: '10 MINUTES',
            durationMinutes: 10,
            isLocked: false,
            isCompleted: true,
            isCurrent: true,
            progressPercentage: 63,
            videoUrl: 'https://youtu.be/A2cQuWZFa3M?si=a3_jQ3J5yebgDzzo',
            content: 'Welcome to Starting SEO as your Home Based Business! In this introductory lesson, Edward walks you through what to expect, how to navigate the materials, and how to set up your workflow.'
          },
          {
            id: 'les-2',
            title: 'Course Overview',
            type: 'overview',
            duration: '10 MINUTES',
            durationMinutes: 10,
            isLocked: false,
            isCompleted: true,
            content: 'A comprehensive roadmap covering the 3-week curriculum, milestones, assignments, and certification requirements.'
          },
          {
            id: 'les-3',
            title: 'Course Overview Quiz',
            type: 'quiz',
            duration: '10 MINUTES',
            durationMinutes: 10,
            questionCount: 5,
            isLocked: false,
            isCompleted: false,
            quiz: {
              id: 'quiz-seo-overview',
              title: 'Course Overview Assessment',
              timeLimitFormatted: '02:59:32',
              timeLimitMinutes: 180,
              totalQuestions: 5,
              passingScorePercentage: 70,
              questions: [
                {
                  id: 'q-1',
                  questionNumber: 1,
                  question: 'Among the following status of India, which one has the oldest rock formations in the country?',
                  options: [
                    { id: 'opt-a', text: 'Assam' },
                    { id: 'opt-b', text: 'Bihar' },
                    { id: 'opt-c', text: 'Karnataka' },
                    { id: 'opt-d', text: 'Uttar Pradesh' }
                  ],
                  correctOptionId: 'opt-c',
                  explanation: 'Karnataka features the Dharwar Craton, one of the oldest rock formations dating back more than 3 billion years.'
                },
                {
                  id: 'q-2',
                  questionNumber: 2,
                  question: 'Which of the following is considered a core On-Page SEO signal by search engines?',
                  options: [
                    { id: 'opt-2a', text: 'Server IP geolocation' },
                    { id: 'opt-2b', text: 'Title tag and H1 semantic structure' },
                    { id: 'opt-2c', text: 'Domain registrar age only' },
                    { id: 'opt-2d', text: 'Number of social media retweets' }
                  ],
                  correctOptionId: 'opt-2b',
                  explanation: 'Title tags and clean heading hierarchy give search bots direct semantic context about page content.'
                },
                {
                  id: 'q-3',
                  questionNumber: 3,
                  question: 'What does "Search Intent" refer to in modern organic search strategy?',
                  options: [
                    { id: 'opt-3a', text: 'The browser user-agent string' },
                    { id: 'opt-3b', text: 'The underlying goal a user has when typing a query' },
                    { id: 'opt-3c', text: 'The advertising budget for paid ads' },
                    { id: 'opt-3d', text: 'The DNS lookup latency' }
                  ],
                  correctOptionId: 'opt-3b',
                  explanation: 'Search intent is the primary motive (informational, navigational, commercial, or transactional) behind a user search query.'
                },
                {
                  id: 'q-4',
                  questionNumber: 4,
                  question: 'Which HTTP status code communicates a permanent redirect to web crawlers?',
                  options: [
                    { id: 'opt-4a', text: '200 OK' },
                    { id: 'opt-4b', text: '301 Moved Permanently' },
                    { id: 'opt-4c', text: '302 Found' },
                    { id: 'opt-4d', text: '404 Not Found' }
                  ],
                  correctOptionId: 'opt-4b',
                  explanation: '301 tells search engines the resource has permanently moved and transfers link equity.'
                },
                {
                  id: 'q-5',
                  questionNumber: 5,
                  question: 'Why are internal links crucial for high-performing SEO architecture?',
                  options: [
                    { id: 'opt-5a', text: 'They distribute link equity and establish information hierarchy' },
                    { id: 'opt-5b', text: 'They guarantee page 1 ranking automatically' },
                    { id: 'opt-5c', text: 'They bypass robots.txt restrictions' },
                    { id: 'opt-5d', text: 'They eliminate the need for schema markup' }
                  ],
                  correctOptionId: 'opt-5a',
                  explanation: 'Internal linking enables search bots to discover content easily and distribute authority across pages.'
                }
              ]
            }
          },
          {
            id: 'les-4',
            title: 'Course Exercise / Reference Files',
            type: 'pdf',
            duration: '15 MINUTES',
            isLocked: false,
            isCompleted: false,
            pdfUrl: 'https://drive.google.com/file/d/10Zh5kkMhva7sV69K7AD4GCRx-Jk1174d/view?usp=sharing',
            pdfTitle: 'Home-Based SEO Agency Blueprint & Reference Materials'
          },
          {
            id: 'les-5',
            title: 'Code Editor Installation (Optional if you have one)',
            type: 'exercise',
            duration: '20 MINUTES',
            isLocked: true,
            isCompleted: false,
            exerciseUrl: 'https://code.visualstudio.com/'
          },
          {
            id: 'les-6',
            title: 'Embedding PHP in HTML',
            type: 'video',
            duration: '25 MINUTES',
            durationMinutes: 25,
            isLocked: true,
            isCompleted: false,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }
        ]
      },
      {
        id: 'sec-week-1-4',
        title: 'Week 1-4',
        subtitle: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        duration: '3 hours',
        lessons: [
          {
            id: 'les-w1-1',
            title: 'Introduction to Client Personas',
            type: 'video',
            duration: '15 MINUTES',
            durationMinutes: 15,
            isLocked: true,
            isCompleted: false,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          },
          {
            id: 'les-w1-2',
            title: 'Course Overview: Market Research',
            type: 'overview',
            duration: '10 MINUTES',
            durationMinutes: 10,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w1-3',
            title: 'Course Overview Assessment',
            type: 'quiz',
            duration: '10 MINUTES',
            questionCount: 0,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w1-4',
            title: 'Course Exercise / Reference Files',
            type: 'pdf',
            duration: '20 MINUTES',
            isLocked: true,
            isCompleted: false,
            pdfUrl: '/materials/seo-starter-guide.pdf',
            pdfTitle: 'Audience Personas & Keyword Matrix'
          },
          {
            id: 'les-w1-5',
            title: 'Code Editor Installation (Optional if you have one)',
            type: 'exercise',
            duration: '15 MINUTES',
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w1-6',
            title: 'Embedding PHP in HTML',
            type: 'video',
            duration: '30 MINUTES',
            durationMinutes: 30,
            isLocked: true,
            isCompleted: false,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
          }
        ]
      },
      {
        id: 'sec-week-5-8',
        title: 'Week 5-8',
        subtitle: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
        duration: '4 hours',
        lessons: [
          {
            id: 'les-w5-1',
            title: 'Defining Functions',
            type: 'video',
            duration: '20 MINUTES',
            durationMinutes: 20,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w5-2',
            title: 'Function Parameters',
            type: 'video',
            duration: '18 MINUTES',
            durationMinutes: 18,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w5-3',
            title: 'Return Values from Functions',
            type: 'quiz',
            duration: '15 MINUTES',
            questionCount: 2,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w5-4',
            title: 'Global Variable and Scope',
            type: 'overview',
            duration: '12 MINUTES',
            durationMinutes: 12,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w5-5',
            title: 'Newer Way of creating a Constant',
            type: 'video',
            duration: '25 MINUTES',
            durationMinutes: 25,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-w5-6',
            title: 'Constants',
            type: 'exercise',
            duration: '15 MINUTES',
            durationMinutes: 15,
            isLocked: true,
            isCompleted: false
          }
        ]
      },
      {
        id: 'sec-js-basics',
        title: 'JavaScript Language Basics',
        subtitle: 'Essential DOM manipulation for technical audits',
        duration: '2.5 hours',
        lessons: [
          {
            id: 'les-js-1',
            title: 'Understanding the Client-Side Rendering Lifecycle',
            type: 'video',
            duration: '20 MINUTES',
            durationMinutes: 20,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-js-2',
            title: 'Inspecting Hydration and Crawlability',
            type: 'overview',
            duration: '15 MINUTES',
            durationMinutes: 15,
            isLocked: true,
            isCompleted: false
          }
        ]
      },
      {
        id: 'sec-components-databinding',
        title: 'Components & Databinding',
        subtitle: 'Dynamic content loading and structured meta-tags',
        duration: '3 hours',
        lessons: [
          {
            id: 'les-cd-1',
            title: 'Automating JSON-LD Structured Data in Components',
            type: 'video',
            duration: '25 MINUTES',
            durationMinutes: 25,
            isLocked: true,
            isCompleted: false
          },
          {
            id: 'les-cd-2',
            title: 'OpenGraph and Twitter Card Generators',
            type: 'exercise',
            duration: '20 MINUTES',
            durationMinutes: 20,
            isLocked: true,
            isCompleted: false
          }
        ]
      }
    ],
    comments: [
      {
        id: 'comm-1',
        authorName: 'Student Name Goes Here',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
        date: 'Oct 10, 2021',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        likesCount: 14
      },
      {
        id: 'comm-2',
        authorName: 'Student Name Goes Here',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
        date: 'Oct 15, 2021',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        likesCount: 8
      },
      {
        id: 'comm-3',
        authorName: 'Student Name Goes Here',
        authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80',
        date: 'Oct 19, 2021',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        likesCount: 21
      }
    ],
    leaderboard: {
      motivationalQuotes: [
        {
          id: 'quote-high',
          author: 'Eng. Ali Shahin',
          quote: 'Great job, champion! Exceptional performance and very close to the top. Keep up the same determination—nothing is impossible! 🔥💪',
          emoji: '🔥',
          minProgress: 80,
          maxProgress: 100
        },
        {
          id: 'quote-mid',
          author: 'Eng. Ali Shaheen',
          quote: 'Great job, champion! You\'ve made significant progress and are now entering the core of the course. Stay consistent, and you\'ll be amazed by the results! 🚀👏',
          emoji: '🚀',
          minProgress: 40,
          maxProgress: 79
        },
        {
          id: 'quote-low',
          author: 'Eng. Ali Shaheen',
          quote: 'A great start, champion! The most important thing is consistency, and step by step, you will reach your goal. Focus and trust in God! ✨🎯',
          emoji: '✨',
          minProgress: 0,
          maxProgress: 39
        }
      ],
      students: [
        {
          id: 'st-1',
          rank: 1,
          name: 'Ahmed Mostafa',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
          points: 1950,
          progressPercentage: 100,
          badge: 'Top Performer 🏆'
        },
        {
          id: 'st-2',
          rank: 2,
          name: 'Nour El-Din',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
          points: 1820,
          progressPercentage: 92,
          badge: 'Consistent Learner ⭐'
        },
        {
          id: 'st-3',
          rank: 3,
          name: 'Sarah Connor',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
          points: 1640,
          progressPercentage: 85
        },
        {
          id: 'st-4',
          rank: 4,
          name: 'You (Current Student)',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
          points: 1280,
          progressPercentage: 63,
          isCurrentUser: true,
          badge: 'Rising Star 🚀'
        },
        {
          id: 'st-5',
          rank: 5,
          name: 'Karim Zaki',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
          points: 1100,
          progressPercentage: 55
        },
        {
          id: 'st-6',
          rank: 6,
          name: 'Layla Mahmoud',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
          points: 890,
          progressPercentage: 42
        }
      ]
    }
  },
  {
    id: '2',
    slug: 'modern-nextjs-fullstack-architecture',
    title: 'Modern Next.js 15 & Full-Stack React Architecture',
    shortDescription: 'Build enterprise-grade web applications using React Server Components, Server Actions, and Turbopack.',
    description: 'Deep dive into production-ready web development. Master App Router, streaming SSR, caching strategies, optimistic UI, authentication with NextAuth/Auth.js, and Prisma ORM integration.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    category: 'Web Development',
    level: 'Advanced',
    status: 'in-progress',
    progressPercentage: 45,
    rating: 4.9,
    reviewsCount: 310,
    featured: true,
    materials: {
      instructor: {
        id: 'inst-2',
        name: 'Sarah Jenkins',
        role: 'Principal Frontend Architect',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
        bio: 'React core enthusiast and open-source author with 10+ years engineering modern web systems.'
      },
      duration: '6 weeks',
      lessonsCount: 24,
      enrolledCount: 1420,
      language: 'English',
      certificate: true
    },
    sections: [
      {
        id: 'sec-next-1',
        title: 'App Router Fundamentals',
        subtitle: 'Server components, layouts, and data streaming',
        duration: '1.5 hours',
        lessons: [
          {
            id: 'les-next-101',
            title: 'Server vs Client Components in Depth',
            type: 'video',
            duration: '22 MINUTES',
            durationMinutes: 22,
            isLocked: false,
            isCompleted: true,
            isCurrent: true,
            progressPercentage: 100,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          },
          {
            id: 'les-next-102',
            title: 'Server Actions & Mutations',
            type: 'video',
            duration: '35 MINUTES',
            durationMinutes: 35,
            isLocked: false,
            isCompleted: false,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }
        ]
      }
    ],
    comments: [
      {
        id: 'comm-201',
        authorName: 'Khaled Hassan',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
        date: 'Nov 02, 2023',
        content: 'The section on Server Actions and optimistic updates is the clearest explanation I have ever seen!',
        likesCount: 32
      }
    ],
    leaderboard: {
      motivationalQuotes: [
        {
          id: 'quote-sarah-high',
          author: 'Eng. Ali Shahin',
          quote: 'Great job, champion! The code speaks for itself—keep going until the end and be proud of what you do! 🔥💻',
          emoji: '💻',
          minProgress: 80,
          maxProgress: 100
        },
        {
          id: 'quote-sarah-mid',
          author: 'Eng. Ali Shahin',
          quote: 'Great job, champion! Every concept you master brings you closer to advanced architectural understanding. Keep the momentum going! 🚀👏',
          emoji: '🚀',
          minProgress: 40,
          maxProgress: 79
        },
        {
          id: 'quote-sarah-low',
          author: 'Eng. Ali Shahin',
          quote: 'The start always requires patience! Focus on the fundamentals and the results will surely please you soon. 🌟🎯',
          emoji: '🌟',
          minProgress: 0,
          maxProgress: 39
        }
      ],
      students: [
        {
          id: 'st-21',
          rank: 1,
          name: 'Ziad Mansour',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
          points: 2400,
          progressPercentage: 98,
          badge: 'Code Ninja ⚡'
        },
        {
          id: 'st-22',
          rank: 2,
          name: 'You (Current Student)',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
          points: 1450,
          progressPercentage: 45,
          isCurrentUser: true
        }
      ]
    }
  },
  {
    id: '3',
    slug: 'ui-ux-design-systems-figma',
    title: 'UI/UX Design Systems & Micro-Interactions in Figma',
    shortDescription: 'Create scalable token-based design systems, auto-layouts, variables, and high-fidelity interactive prototypes.',
    description: 'From wireframes to production-ready design systems. Learn Figma variables, token management, accessibility standards (WCAG), interactive components, and developer handoff best practices.',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    category: 'Design & UX',
    level: 'Intermediate',
    status: 'not-started',
    progressPercentage: 0,
    rating: 4.95,
    reviewsCount: 88,
    featured: false,
    materials: {
      instructor: {
        id: 'inst-3',
        name: 'Alex Rivera',
        role: 'Staff Product Designer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
        bio: 'Leading design systems at multinational tech hubs, passionate about polished micro-interactions.'
      },
      duration: '4 weeks',
      lessonsCount: 16,
      enrolledCount: 780,
      language: 'English',
      certificate: true
    },
    sections: [
      {
        id: 'sec-fig-1',
        title: 'Design Tokens & Typography',
        subtitle: 'Establishing scale, spacing rhythm, and color variables',
        duration: '1 hour',
        lessons: [
          {
            id: 'les-fig-1',
            title: 'Foundations of Design Tokens',
            type: 'video',
            duration: '18 MINUTES',
            durationMinutes: 18,
            isLocked: false,
            isCompleted: false,
            isCurrent: true,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        ]
      }
    ],
    comments: [],
    leaderboard: {
      motivationalQuotes: [
        {
          id: 'quote-fig-low',
          author: 'Eng. Ali Shahin',
          quote: 'Start the journey, creative! Design is passion and detail, and every screen you design will bring you closer to professionalism. 🎨✨',
          emoji: '🎨',
          minProgress: 0,
          maxProgress: 100
        }
      ],
      students: [
        {
          id: 'st-31',
          rank: 1,
          name: 'Mariam Adel',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
          points: 1900,
          progressPercentage: 100,
          badge: 'Design Guru 💎'
        }
      ]
    }
  },
  {
    id: '4',
    slug: 'python-data-science-machine-learning',
    title: 'Python for Data Science, Analytics & Machine Learning',
    shortDescription: 'Master NumPy, Pandas, Scikit-Learn, and build predictive machine learning models with real-world datasets.',
    description: 'Transform raw data into actionable insights and deploy machine learning models. Covers exploratory data analysis, data wrangling, model evaluation, and regression/classification pipelines.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    category: 'Data Science & AI',
    level: 'Intermediate',
    status: 'completed',
    progressPercentage: 100,
    rating: 4.75,
    reviewsCount: 520,
    featured: false,
    materials: {
      instructor: {
        id: 'inst-4',
        name: 'Dr. Omar Farooq',
        role: 'AI Researcher & Data Scientist',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
        bio: 'PhD in Machine Learning with over 15 published research papers and extensive industry consulting.'
      },
      duration: '8 weeks',
      lessonsCount: 32,
      enrolledCount: 2900,
      language: 'English',
      certificate: true
    },
    sections: [
      {
        id: 'sec-py-1',
        title: 'Exploratory Data Analysis',
        subtitle: 'Data cleaning and statistical summarization',
        duration: '2 hours',
        lessons: [
          {
            id: 'les-py-1',
            title: 'Vectorized Operations in NumPy & Pandas',
            type: 'video',
            duration: '35 MINUTES',
            durationMinutes: 35,
            isLocked: false,
            isCompleted: true,
            isCurrent: true,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        ]
      }
    ],
    comments: [],
    leaderboard: {
      motivationalQuotes: [
        {
          id: 'quote-py-high',
          author: 'Eng. Ali Shahin',
          quote: 'Congratulations on graduating, genius! You have successfully completed the course with brilliant results—a major achievement you deserve to celebrate! 🎓🎉',
          emoji: '🎓',
          minProgress: 100,
          maxProgress: 100
        }
      ],
      students: [
        {
          id: 'st-41',
          rank: 1,
          name: 'You (Current Student)',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
          points: 3200,
          progressPercentage: 100,
          isCurrentUser: true,
          badge: 'Graduate Champion 🏅'
        }
      ]
    }
  },
  {
    id: '5',
    slug: 'cross-platform-mobile-react-native',
    title: 'Cross-Platform Mobile Apps with React Native & Expo',
    shortDescription: 'Build native iOS and Android apps with a single React codebase, animations, and offline-first persistence.',
    description: 'Learn modern React Native with Expo SDK. Build slick mobile navigation, push notifications, offline SQLite persistence, biometric authentication, and publish to App Store and Google Play.',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    category: 'Mobile Development',
    level: 'Intermediate',
    status: 'in-progress',
    progressPercentage: 75,
    rating: 4.88,
    reviewsCount: 198,
    featured: false,
    materials: {
      instructor: {
        id: 'inst-5',
        name: 'Emily Chen',
        role: 'Mobile Engineering Lead',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
        bio: 'Ex-Silicon Valley mobile lead who has shipped apps with over 10M active monthly users.'
      },
      duration: '5 weeks',
      lessonsCount: 20,
      enrolledCount: 940,
      language: 'English',
      certificate: true
    },
    sections: [
      {
        id: 'sec-rn-1',
        title: 'Expo Router and Navigation',
        subtitle: 'File-based native routing and smooth modal transitions',
        duration: '1.5 hours',
        lessons: [
          {
            id: 'les-rn-1',
            title: 'Native Gesture Handlers & Reanimated 3',
            type: 'video',
            duration: '28 MINUTES',
            durationMinutes: 28,
            isLocked: false,
            isCompleted: true,
            isCurrent: true,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        ]
      }
    ],
    comments: [],
    leaderboard: {
      motivationalQuotes: [
        {
          id: 'quote-rn-mid',
          author: 'Eng. Ali Shahin',
          quote: 'Great job, mobile champion! You\'ve completed 75%—only a few steps left to launch your real app! 📱🔥',
          emoji: '📱',
          minProgress: 70,
          maxProgress: 99
        }
      ],
      students: [
        {
          id: 'st-51',
          rank: 1,
          name: 'Tarek Fathy',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
          points: 2100,
          progressPercentage: 88
        },
        {
          id: 'st-52',
          rank: 2,
          name: 'You (Current Student)',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
          points: 1750,
          progressPercentage: 75,
          isCurrentUser: true
        }
      ]
    }
  },
  {
    id: '6',
    slug: 'cloud-devops-kubernetes-ci-cd',
    title: 'Cloud Architecture, Docker, Kubernetes & CI/CD Pipelines',
    shortDescription: 'Master container orchestration, Terraform infrastructure as code, and automated GitHub Actions deployments.',
    description: 'Learn modern DevOps practices from ground up. Containerize microservices, orchestrate with Kubernetes clusters, implement monitoring with Prometheus & Grafana, and build robust automated CI/CD.',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=80',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    status: 'not-started',
    progressPercentage: 0,
    rating: 4.82,
    reviewsCount: 165,
    featured: false,
    materials: {
      instructor: {
        id: 'inst-6',
        name: 'Marcus Vance',
        role: 'Cloud Architect & SRE Director',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
        bio: 'SRE veteran specializing in high-availability distributed systems and multi-cloud resilience.'
      },
      duration: '7 weeks',
      lessonsCount: 28,
      enrolledCount: 1150,
      language: 'English',
      certificate: true
    },
    sections: [
      {
        id: 'sec-dev-1',
        title: 'Containerization with Docker',
        subtitle: 'Multi-stage builds and security hardening',
        duration: '2 hours',
        lessons: [
          {
            id: 'les-dev-1',
            title: 'Optimizing Docker Images for Production',
            type: 'video',
            duration: '25 MINUTES',
            durationMinutes: 25,
            isLocked: false,
            isCompleted: false,
            isCurrent: true,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        ]
      }
    ],
    comments: [],
    leaderboard: {
      motivationalQuotes: [
        {
          id: 'quote-dev-low',
          author: 'Eng. Ali Shahin',
          quote: 'The world of DevOps is full of exciting challenges! Start the journey with focus and consistency, and the result will be very strong. ☁️🚀',
          emoji: '☁️',
          minProgress: 0,
          maxProgress: 100
        }
      ],
      students: [
        {
          id: 'st-61',
          rank: 1,
          name: 'Hassan Refaat',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
          points: 2500,
          progressPercentage: 100,
          badge: 'DevOps Master 🛠️'
        }
      ]
    }
  }
];

export function getAllCourses(): Course[] {
  return COURSES;
}

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((course) => course.id === id);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function getCourseByIdOrSlug(identifier: string): Course | undefined {
  return COURSES.find((c) => c.id === identifier || c.slug === identifier);
}
