// CODE here for your Lambda Classes

class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(atts) {
        super(atts);
        this.speciality = atts.speacialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    changeGrade (student){
        let points = Math.floor(Math.random() * 201) - 100;
        student.updateGrade(points)
        console.log(`${this.name} changed ${student.name}'s grade by ${points} points. ${student.name}'s 
        new grade is ${student.grade}%`);
    }
}

class Student extends Person {
    constructor(atts) {
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
        this.grade = atts.grade;
        if (atts.grade > 100) {this.grade = 100;}
        else if (atts.grade < 0) {this.grade = 0;}
    }
    listsSubjects() {
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade < 70) {
            console.log(`${this.name}'s grade is ${this.grade}%. Back to work!`)
        }
        else {
            console.log(`${this.name}'s grade is ${this.grade}%. ${this.name} graduates!`)
        } 
    }
    updateGrade(points) {
        this.grade += points;
        if (this.grade > 100) {
            this.grade = 100;
        }
        else if (this.grade < 0) {
            this.grade = 0;
        }
    }

}

class ProjectManager extends Instructor {
    constructor(atts){
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standby time!`);
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Create objects for each class
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const megan = new Student({
      name: 'Megan',
      location: 'Boston',
      age: 26,
      previousBackground: 'consulting',
      className: 'web21',
      favSubjects: ['CSS','JavaScript','HTML'],
      grade: 200
  })

  const scooby = new ProjectManager({
      name: 'Scooby',
      location: 'The Mystery Machine',
      age: 5,
      favLanguage: 'Python',
      specialty: 'Solving mysteries',
      catchPhrase: 'Gulp',
      gradClassName: 'web 20',
      favInstructor: 'Shaggy'
  })

//Tests
console.log(fred.location);
console.log(scooby.age);
console.log(megan.grade);
fred.changeGrade(megan);
scooby.speak();
fred.demo('JavaScript');
fred.grade(megan,'CSS');
console.log(megan.favSubjects);
megan.listsSubjects();
megan.PRAssignment('HTML');
megan.sprintChallenge('Advanced CSS');
megan.graduate();
scooby.standUp('channel');
scooby.debugsCode(megan,'CSS');

