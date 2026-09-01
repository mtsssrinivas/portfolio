import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'fraudshield',
    order: '01',
    title: 'FraudShield',
    subtitle: 'Production Real-Time Fraud Detection & Digital Banking Platform',
    badge: 'Featured Engineering Project',
    featured: true,
    description: 'An enterprise-grade distributed digital banking and real-time fraud mitigation platform built around an event-driven microservice architecture.',
    longDescription: 'FraudShield processes high-frequency financial transactions with zero double-debit anomalies, sub-millisecond fraud scoring, and complete event-driven audit observability across 8 decoupled microservices and 7 Kafka partitioned streams.',
    tags: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'Apache Kafka',
      'PostgreSQL 16',
      'Redis 7',
      'React 18',
      'Docker'
    ],
    features: [
      '8 decoupled microservices with 5 isolated PostgreSQL database schemas',
      'Asynchronous Choreography Saga with automated compensation rollback',
      'Transactional Outbox Pattern guaranteeing dual-write database/Kafka consistency',
      '6-Link Chain of Responsibility Fraud Detection Engine with short-circuit speedup',
      'Redis sliding-window velocity tracking with Sorted Sets & 2-tier rate limiting',
      'ACID balance transfers using PostgreSQL SELECT ... FOR UPDATE row-level locking',
      'Resilient Kafka consumers with 100ms -> 200ms -> 400ms retry backoff & DLQ',
      'Financial Security Command Center console with live Kafka event stream telemetry'
    ],
    metrics: [
      { label: 'Peak Throughput', value: '371,788.7 RPS' },
      { label: 'p50 Latency', value: '6.50 ms' },
      { label: 'p95 Latency', value: '7.38 ms' },
      { label: 'p99 Latency', value: '7.43 ms' },
      { label: 'Error Rate', value: '0.00%' },
      { label: 'Fraud Engine Evaluation', value: '0.0015 ms' },
      { label: 'Burst Traffic Deflection', value: '80.00%' },
      { label: 'Automated Test Coverage', value: '77 / 77 Passed' }
    ],
    githubUrl: 'https://github.com/mtsssrinivas/FraudShield',
    liveUrl: 'https://fraud-shield-frontend-opal.vercel.app',
    apiUrl: 'https://fraudshield-gateway.onrender.com',
    architectureDetails: {
      summary: 'Distributed microservices mesh communicating via Apache Kafka event streaming, Redis state tier, and schema-isolated PostgreSQL databases.',
      servicesCount: 8,
      kafkaTopics: 7,
      databaseSchemas: 5,
      patterns: [
        {
          name: 'Distributed Choreography Saga',
          description: 'Asynchronous event choreography propagates balance transfers across services without single points of failure. Rollback compensation executes automatically on failure.'
        },
        {
          name: 'Transactional Outbox Pattern',
          description: 'Guarantees dual-write atomicity between PostgreSQL ACID writes and Kafka message emission by staging events in an outbox table within the same transaction.'
        },
        {
          name: '6-Link Chain of Responsibility',
          description: 'Heuristic risk pipeline evaluating velocity, transfer ceilings, balance drain (>=90%), device fingerprinting, and geographic leap. Bypasses remaining rules upon reaching threshold 81 (1.52x speedup).'
        },
        {
          name: 'Pessimistic Concurrency Locking',
          description: 'Row-level SELECT ... FOR UPDATE database locks prevent race conditions, simultaneous double-spend exploits, and balance drift under high concurrent volume.'
        }
      ]
    }
  },
  {
    id: 'interviewiq',
    order: '02',
    title: 'InterviewIQ',
    subtitle: 'AI-Powered Mock Interview Platform',
    featured: false,
    description: 'An AI-powered mock interview platform featuring resume parsing, AI-generated interview questions, and personalized feedback.',
    longDescription: 'InterviewIQ helps engineers practice realistic technical interviews through AI-driven evaluation. It extracts structured experience from uploaded resumes, produces tailored interview prompts, grades answers contextually, and manages subscription workflows.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Firebase',
      'OpenRouter API',
      'Razorpay',
      'Render'
    ],
    features: [
      'Automated resume parsing and candidate profile extraction',
      'Context-aware AI-generated interview questions and scenario prompts',
      'Personalized actionable feedback with grading metrics',
      'Secure user authentication and session management via Firebase',
      'Subscription workflows and payment checkout integration via Razorpay',
      '10+ production RESTful API endpoints for interview orchestration',
      'MongoDB Atlas cloud persistence for candidate history and feedback logs',
      'Containerized deployment on Render'
    ]
  },
  {
    id: 'nestora',
    order: '03',
    title: 'Nestora',
    subtitle: 'Full-Stack Rental Marketplace',
    featured: false,
    description: 'A full-stack rental marketplace supporting listings, bookings, reviews, wishlists, and user management.',
    longDescription: 'Nestora provides a seamless real-estate rental and booking experience. Hosts can list properties with media uploads, while guests can search with category filters, book accommodations, write verified reviews, and manage wishlists.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'Cloudinary',
      'Tailwind CSS',
      'Render'
    ],
    features: [
      'Dynamic property listing creation with multi-image Cloudinary uploads',
      'Booking reservation system with date validation and conflict prevention',
      'User reviews and rating management with verified tenant validation',
      'Personalized wishlists and saved property collections',
      'JWT-based secure authentication and granular role-based authorization',
      '12+ RESTful API endpoints covering catalog, bookings, and users',
      'Advanced multi-criteria search and category filtering system',
      'Interactive responsive property detail pages'
    ]
  },
  {
    id: 'projectflow',
    order: '04',
    title: 'ProjectFlow',
    subtitle: 'Project Management Platform',
    featured: false,
    description: 'A collaborative project management platform for project planning, task assignment, and progress tracking.',
    longDescription: 'ProjectFlow delivers an efficient workspace for software engineering teams to manage sprints, prioritize tasks, track milestones, and visualize project velocity with strict relational consistency.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'JWT Authentication',
      'Tailwind CSS',
      'Render'
    ],
    features: [
      'Project planning, sprint creation, and milestone tracking workflows',
      'Task assignment with status progression (Backlog, In-Progress, Review, Done)',
      'Task prioritization matrix, deadline management, and overdue alerts',
      'Multi-column search and dynamic tag filtering',
      'Strict relational data schema enforced via PostgreSQL and Prisma ORM',
      'JWT authentication with workspace access controls',
      '10+ RESTful API endpoints for team and task coordination',
      'Responsive dark/light interface optimized for developer workflows'
    ]
  }
];
