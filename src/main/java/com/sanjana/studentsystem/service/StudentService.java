package com.sanjana.studentsystem.service;

import com.sanjana.studentsystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
