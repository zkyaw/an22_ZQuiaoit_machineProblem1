// CCS0043L Source Code Template for 3T 2022-2023
/*
  Program: Computation of Grades using Function
  Programmer: Zildjian Amos G. Quiaoit
  Section: AN22
  Start Date: June 2, 2023
  End Date: June 3, 2023
*/


// This function calculates the average of a list of grades.
function calculateAverage(grades) {
  // `total` is the sum of all the grades.
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  // `average` is the total divided by the number of grades.
  const average = total / grades.length;
  // Returns the average.
  return average;
}

// This function calculates the letter grade for a score.
function calculateLetterGrade(score) {
  // If the score is 90 or above, return 'A'.
  if (score >= 90) {
    return 'A';
  } 
  // If the score is 80 or above, return 'B'.
  else if (score >= 80) {
    return 'B';
  } 
  // If the score is 70 or above, return 'C'.
  else if (score >= 70) {
    return 'C';
  } 
  // If the score is 60 or above, return 'D'.
  else if (score >= 60) {
    return 'D';
  } 
  // If the score is 90 or above, return 'A'.
  else {
    return 'F';
  }
}

// This function calculates the grade for a student.
function calculateStudentGrade(name, classParticipation, summativeGrades, majorExamGrade) {
  // Calculate the average of the class participation grades.
  const classParticipationAverage = calculateAverage(classParticipation);
  // Calculate the average of the class participation grades.
  const summativeAverage = calculateAverage(summativeGrades);

  // Calculate the final grade by weighting the class participation average, the summative average, and the major exam grade.
  const grade =
    classParticipationAverage * 0.3 +
    summativeAverage * 0.3 +
    majorExamGrade * 0.4;;

  // Calculate the letter grade for the final grade.
  const letterGrade = calculateLetterGrade(grade);

  // Return an array containing the student's name, class participation average, summative average, major exam grade, final grade, and letter grade.
  return [name, classParticipationAverage.toFixed(2), summativeAverage.toFixed(2), majorExamGrade, grade.toFixed(2), letterGrade];
}

// This array stores the students' grades.
const students = [];
// Iterate over the specified number of students and prompt the user for their name, class participation grades, summative grades, and major exam grade.
for (let i = 0; i < 5; i++) {
  // Prompt the user for the student's name.
  const name = prompt("Enter student's name: ");

  // Create an array to store the student's class participation grades.
  const classParticipationGrades = [];
  // Iterate over the specified number of class participation grades and prompt the user for their grade.
  for (let j = 0; j < 5; j++) {
    const grade = parseFloat(prompt(`Enter enabling assessment ${j + 1}: `));
    classParticipationGrades.push(grade);
  }

  // Iterate over the specified number of class participation grades and prompt the user for their grade.
  const summativeGrades = [];
  // Iterate over the specified number of summative grades and prompt the user for their grade.
  for (let j = 0; j < 3; j++) {
    const grade = parseFloat(prompt(`Enter summative grade ${j + 1}: `));
    summativeGrades.push(grade);
  }
  // Prompt the user for the student's major exam grade.
  const majorExamGrade = parseFloat(prompt("Enter major exam grade: "));

  // Prompt the user for the student's major exam grade.
  const studentGrade = calculateStudentGrade(name, classParticipationGrades, summativeGrades, majorExamGrade);
  // Add the student's grade to the `students` array
  students.push(studentGrade);
}

console.log('------------------------------------------------------------------------------------------------------');
console.log('|   Name    |  Class Participation  | Summative Assessment | Exam Grade | Grade Score | Letter Grade |');
console.log('------------------------------------------------------------------------------------------------------');
for (const student of students) {
  const [name, classParticipation, summative, majorExam, grade, letterGrade] = student;
  console.log(`| ${name.padEnd(9)} |         ${classParticipation}         |         ${summative}        |     ${majorExam}     |    ${grade}    |      ${letterGrade}       |`);
}
console.log('------------------------------------------------------------------------------------------------------');
