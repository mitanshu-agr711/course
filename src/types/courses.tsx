export interface Student {
    id: number;
    name: string;
    email: string;
  }
  
  export interface SyllabusItem {
    week: number;
    topic: string;
    content: string;
  }
  
  export interface Course {
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
    students: Student[];
    likes: number;
   
  }
  
  export interface UserEnrollment {
    courseId: number;
    progress: number;
    completed: boolean;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    enrolledCourses: UserEnrollment[];
  }