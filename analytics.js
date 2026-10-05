export function claculateClassAverage(students , courseId){
    let totalscore = 0 ; 
    let count = 0 ; 
    students.forEach(student => {
        student.courses.forEach(course => {
            if(course.coueseId === courseId){
                totalscore = totalscore + course.grade ;
                count = count+1;
            }
        });
    });
    return totalscore / count ;
}
export function findTopStudent(students){
    return students.reduce((top , current)=> {
        return current.getAverage() > top.getAverage() ? current : top ;
    });
}

/*export function findTopStudentTwo (students){
    let TopStudent =  ""; 
    let TopGrade = 0 ;
    students.forEach(student => {
        student.grade.forEach(grade => {
            if (student.grade > TopGrade){
                TopStudent =  student ; 
                TopGrade = stud ent.grade;
            }
        });
    });
    return TopStudent;
}*/
export function filterStudents(students , criteriafunction){
    return students.filter(criteriafunction);
}