export default class Student{
    constructor(id , name , courses){
        Object.defineProperty(this , 'id', {
            value: id ,
            writable: false, 
            configurable : false});
            this.name = name ; 
            this.courses = courses;
        }
        addCourse(courseId , grade  ){
            this.courses.push({courseId , grade });
        }
        getAverage(){
            if (this.courses.length === 0) return 0 ;
            const total = this.courses.reduce ((sum, currentCourse) => sum + currentCourse.grade, 0);
            /*honestly i had an AI help in this one , it is kinda having a loop through the courses array and get passed by each course which named the current course 
            and adding its grade to the sum which starts at 0 */
            return total / this.courses.length ;
        }
        

    }
