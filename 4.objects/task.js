function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let studentFirst = new Student ("Anton", "male", 33);
let studentSecond = new Student ("Oxana", "female", 29);
let studentThird = new Student ("Mariya", "female", 32);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
    this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = mark;
    } else {
    this.marks.push(...mark);
    }
}

// вариант через цикл for вычислить среднее арифметическое:
// Student.prototype.getAverage = function() {
//   let count = 0;
//   for (let i = 0; i < this.marks.length; i++) {
//     count += this.marks[i];
//   }

//   return count / this.marks.length;
// }

// вариант через метод reduce() вычислить среднее арифметическое:
Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    } else {
      return acc;
    }
  })
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}