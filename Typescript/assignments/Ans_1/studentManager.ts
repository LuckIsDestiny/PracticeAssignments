interface Student {
  name: string;
  rollNumber: number;
  course: string;
  phoneNumber?: string;
}

function printStudentDetails(student: Student): void {
  console.log("Student Details:");
  console.log(`Name: ${student.name}`);
  console.log(`Roll Number: ${student.rollNumber}`);
  console.log(`Course: ${student.course}`);
  if (student.phoneNumber) {
    console.log(`Phone Number: ${student.phoneNumber}`);
  }
  console.log("-----------------------");
}

const student1: Student = { name: 'Riya', rollNumber: 101, course: 'TypeScript' };
const student2: Student = { name: 'Arjun', rollNumber: 102, course: 'Angular', phoneNumber: '9876543210' };

printStudentDetails(student1);
printStudentDetails(student2);