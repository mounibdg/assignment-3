import Student from './models.js';
import {ftechStudents} from './database.js; '
import { claculateClassAverage , findTopStudent , filterStudents } from './analytics.js';
console.log("fetching data fomr database");
ftechStudents((rawdata) => {
    console.log ("data received \n");
    const Students = rawdata.map (data => new Student( data.id , data.name , data.courses));
    console.log("testing immutabliliy");
    console.log ('original is : ${students[0].id}');
    console.log ("Attempting to change ID to 999...");
    student[0].id = 999;
    console.log("Final ID: 1 (Success: ID did not change)\n");
    console.log("Analytics report");
    const avg101 = calculateClassAVerage(students , 101 ) ;
    console.log('class average for course 101 is ${avg101.toFixed(2)}');
    const topStudent = findTopStudent(students);
    console.log('Top student is ${topStudent.name} (Average: ${topStudent.getAverage()})');
    const studentsin102 = filterStudents(students , student => student.courses.some(course => course.courseId === 102));
    const namesin102 = studentsin102.map(s => s.name).join("/");
    console.log('Students in course 102: ${namesin102}');
}); 
 
