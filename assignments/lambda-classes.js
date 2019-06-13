// CODE here for your Lambda Classes

class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Person {
    constructor(atts) {
        super(atts);
        this.speciality = atts.speacialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Students extends Person {
    constructor(atts) {
        super(atts);
    }
}

class ProjectManagers extends Instructors {
    constructor(atts){
        super(atts);
    }
}