const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const groups = {};
  const dbFields = lines[0].split(',');
  const studentProps = dbFields.slice(0, dbFields.length - 1);

  for (const elem of lines.slice(1)) {
    const studentRecord = elem.split(',');
    const studentValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(groups).includes(field)) {
      groups[field] = [];
    }
    const studentEntries = studentProps
      .map((prop, idx) => [prop, studentValues[idx]]);
    groups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(groups)
    .reduce((prev, cur) => (prev || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(groups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
