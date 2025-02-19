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
      thumbnail: 'https://example.com/thumbnail.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript', 'React fundamentals'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up environment'
        },
        {
          week: 2,
          topic: 'Components and Props',
          content: 'Understanding basic components and props'
        }
      ]
    },
    {
        id: 2, 
        name: 'Introduction to JavaScript', 
        instructor: 'Miths',
        description: 'Learn the fundamentals of JavaScript, including syntax, data types, and basic programming concepts.', 
        enrollmentStatus: 'Open',
        thumbnail: 'https://example.com/thumbnail.jpg',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to JavaScript',
            content: 'Overview of JavaScript, setting up environment, and basic syntax'
          },
          {
            week: 2,
            topic: 'Variables and Data Types',
            content: 'Understanding variables, constants, and different data types in JavaScript'
          },
          {
            week: 3,
            topic: 'Functions and Scope',
            content: 'Defining functions, scope, and closures'
          },
          {
            week: 4,
            topic: 'Objects and Arrays',
            content: 'Working with objects, arrays, and array methods'
          },
          {
            week: 5,
            topic: 'DOM Manipulation',
            content: 'Introduction to the Document Object Model and interacting with web pages'
          }],
    }

   
  ];
  
  export const getCourses = async (): Promise<Course[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return DUMMY_COURSES;
  };
  
  export const getCourseById = async (id: number): Promise<Course | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return DUMMY_COURSES.find(course => course.id === id);
  };