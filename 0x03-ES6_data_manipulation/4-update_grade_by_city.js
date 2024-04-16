export default function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrade
        .filter((studentGrade) => studentGrade.studentId === student.id)
        .pop() || { grade: 'N/A' }).grade,
    }));
}
