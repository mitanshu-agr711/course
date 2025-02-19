// src/components/CourseList.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCourses from './courseinfo';
import { RootState } from '../store';
import styled from 'styled-components';


export const CourseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CourseGrid>
        {filteredCourses.map(course => (
          <CourseCard key={course.id}>
            <CourseImage src={course.thumbnail} alt={course.name} />
            <CourseInfo>
              <h3>{course.name}</h3>
              <p>{course.instructor}</p>
              <StatusBadge status={course.enrollmentStatus}>
                {course.enrollmentStatus}
              </StatusBadge>
            </CourseInfo>
          </CourseCard>
        ))}
      </CourseGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
const CourseCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CourseInfo = styled.div`
  padding: 15px;
`;
`;
