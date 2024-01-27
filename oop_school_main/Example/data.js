const Person = require('../assets/classes/Person').Person
const Student = require('../assets/classes/Student').Student
const Course = require('../assets/classes/Course').Course
const School = require('../assets/classes/School').School

const school = new School("hell School")
const student1 = new Student("ants jaanus")
student1.setDateOfBirth(1995)
const student2 = new Student("Megan mega")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

school.addStudent(student1)

const course1 = new Course("English")
const course2 = new Course("PE")

school.addCourse(course1)
school.addCourse(course2)

school.addCourse(course1)

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 4)

const student3 = new Student("sassu lassu")
student3.setDateOfBirth(2000)

school.addStudentGrade(student3, course1, 2)

school.addStudent(student3)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 3)

module.exports = {
    school
}