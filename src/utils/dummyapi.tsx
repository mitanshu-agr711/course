interface Course {
    id: number;
    name: string;
    instructor: string;
    description: string;
    enrollmentStatus: 'Open' | 'Closed' | 'In Progress';
    thumbnail: string;
    duration: string;
    schedule: string;
    location: string;
    prerequisites: string[];
    syllabus: SyllabusItem[];
  }
  interface SyllabusItem {
    week: number;
    topic: string;
    content: string;
  }



  const DUMMY_COURSES: Course[] = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John',
        description: 'Learn the basics of React Native development',
        enrollmentStatus: 'Open',
        thumbnail: '/public/react-native.webp',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript', 'React fundamentals'],
        syllabus: [
            { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up environment' },
            { week: 2, topic: 'Components and Props', content: 'Understanding basic components and props' }
        ]
    },
    {
        id: 2,
        name: 'Introduction to JavaScript',
        instructor: 'Miths',
        description: 'Learn the fundamentals of JavaScript, including syntax, data types, and basic programming concepts.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/javascript.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            { week: 1, topic: 'Introduction to JavaScript', content: 'Overview of JavaScript, setting up environment, and basic syntax' },
            { week: 2, topic: 'Variables and Data Types', content: 'Understanding variables, constants, and different data types in JavaScript' }
        ]
    },
    {
        id: 3,
        name: 'Python for Beginners',
        instructor: 'Alice',
        description: 'Learn Python programming from scratch.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/python.webp',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['None'],
        syllabus: [
            { week: 1, topic: 'Introduction to Python', content: 'Setting up Python, basic syntax' },
            { week: 2, topic: 'Data Structures', content: 'Lists, Tuples, Dictionaries, and Sets' }
        ]
    },
    {
        id: 4,
        name: 'Full-Stack Web Development',
        instructor: 'Bob',
        description: 'Master front-end and back-end web development.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/javascript.png',
        duration: '12 weeks',
        schedule: 'Weekends, 10:00 AM-2:00 PM',
        location: 'Online',
        prerequisites: ['HTML, CSS, JavaScript'],
        syllabus: [
            { week: 1, topic: 'HTML & CSS Basics', content: 'Introduction to web development' },
            { week: 2, topic: 'JavaScript Fundamentals', content: 'DOM manipulation, events' }
        ]
    },
    {
        id: 5,
        name: 'Data Science with Python',
        instructor: 'Emma',
        description: 'Learn data analysis, visualization, and machine learning.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/data.jpg',
        duration: '10 weeks',
        schedule: 'Wednesdays and Fridays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python knowledge'],
        syllabus: [
            { week: 1, topic: 'Data Analysis', content: 'Pandas, NumPy' },
            { week: 2, topic: 'Data Visualization', content: 'Matplotlib, Seaborn' }
        ]
    },
    {
        id: 6,
        name: 'Machine Learning Fundamentals',
        instructor: 'Sophia',
        description: 'Introduction to machine learning concepts and algorithms.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/data.jpg',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['Python, Basic Statistics'],
        syllabus: [
            { week: 1, topic: 'Supervised Learning', content: 'Regression, Classification' },
            { week: 2, topic: 'Unsupervised Learning', content: 'Clustering, Dimensionality Reduction' }
        ]
    },
    {
        id: 7,
        name: 'Cybersecurity Basics',
        instructor: 'Ethan',
        description: 'Learn the fundamentals of cybersecurity and ethical hacking.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/R.jfif',
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 8:00 PM-10:00 PM',
        location: 'Online',
        prerequisites: ['Basic networking knowledge'],
        syllabus: [
            { week: 1, topic: 'Introduction to Cybersecurity', content: 'Cyber threats, security principles' },
            { week: 2, topic: 'Network Security', content: 'Firewalls, encryption, penetration testing' }
        ]
    },
    {
        id: 8,
        name: 'Cloud Computing with AWS',
        instructor: 'David',
        description: 'Master AWS cloud services and infrastructure.',
        enrollmentStatus: 'Open',
        thumbnail: '/public/R.jfif',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['Basic IT knowledge'],
        syllabus: [
            { week: 1, topic: 'Introduction to AWS', content: 'AWS services, IAM, S3, EC2' },
            { week: 2, topic: 'Serverless Computing', content: 'AWS Lambda, API Gateway' }
        ]
    },
    {
      id: 9,
      name: 'Blockchain Fundamentals',
      instructor: 'Liam',
      description: 'Understand the basics of blockchain technology and cryptocurrencies.',
      enrollmentStatus: 'Open',
      thumbnail: '/public/R.jfif',
      duration: '8 weeks',
      schedule: 'Wednesdays and Fridays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic computer science knowledge'],
      syllabus: [
          { week: 1, topic: 'Introduction to Blockchain', content: 'History, fundamentals, and use cases' },
          { week: 2, topic: 'Cryptography Basics', content: 'Encryption, hashing, and digital signatures' }
      ]
  },
  {
      id: 10,
      name: 'UI/UX Design Principles',
      instructor: 'Olivia',
      description: 'Learn the principles of user experience and interface design.',
      enrollmentStatus: 'Open',
      thumbnail: '/public/R.jfif',
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic graphic design knowledge'],
      syllabus: [
          { week: 1, topic: 'Introduction to UX/UI', content: 'Understanding user needs and usability principles' },
          { week: 2, topic: 'Wireframing and Prototyping', content: 'Creating low-fidelity and high-fidelity prototypes' }
      ]
  },
  {
      id: 11,
      name: 'Artificial Intelligence for Beginners',
      instructor: 'Noah',
      description: 'A beginner-friendly course on AI concepts and applications.',
      enrollmentStatus: 'Open',
      thumbnail: '/public/R.jfif',
      duration: '10 weeks',
      schedule: 'Tuesdays and Thursdays, 6:30 PM-8:30 PM',
      location: 'Online',
      prerequisites: ['Basic Python knowledge'],
      syllabus: [
          { week: 1, topic: 'Introduction to AI', content: 'AI history, applications, and impact' },
          { week: 2, topic: 'Machine Learning Basics', content: 'Supervised and unsupervised learning' }
      ]
  },
  {
      id: 12,
      name: 'DevOps Essentials',
      instructor: 'Emma',
      description: 'Learn about CI/CD pipelines, containerization, and automation.',
      enrollmentStatus: 'Open',
      thumbnail: '/public/R.jfif',
      duration: '8 weeks',
      schedule: 'Weekends, 10:00 AM-12:00 PM',
      location: 'Online',
      prerequisites: ['Basic knowledge of software development'],
      syllabus: [
          { week: 1, topic: 'Introduction to DevOps', content: 'Understanding DevOps culture and practices' },
          { week: 2, topic: 'CI/CD Pipelines', content: 'Implementing continuous integration and continuous deployment' }
      ]
  },
  {
      id: 13,
      name: 'Game Development with Unity',
      instructor: 'James',
      description: 'Create your own games using the Unity engine.',
      enrollmentStatus: 'Open',
      thumbnail: '/public/R.jfif',
      duration: '12 weeks',
      schedule: 'Tuesdays and Thursdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge'],
      syllabus: [
          { week: 1, topic: 'Getting Started with Unity', content: 'Setting up Unity, understanding the interface' },
          { week: 2, topic: 'Scripting with C#', content: 'Writing scripts for game mechanics' }
      ]
  }
];

export default DUMMY_COURSES;