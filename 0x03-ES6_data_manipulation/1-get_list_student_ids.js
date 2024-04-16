export default function getListStudentIds(studentList) {
  if (studentList instanceof Array) {
    return studentList.map((student) => student.id);
  }
  return [];
}
