// CODE here for your Lambda Classes

class Person {
    constructor(atts) {

    }
}

class Instructors extends Person {
    constructor(atts) {
        super(atts);
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