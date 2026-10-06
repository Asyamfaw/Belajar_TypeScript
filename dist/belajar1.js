"use strict";
const student = {
    name: 'Monyed',
    age: 16,
    major: 'Software Developer',
    skill: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Typescript']
};
function introduce() {
    return `Hello my name is ${student.name}. I am ${student.age} years old. I study ${student.major}, My skills are ${student.skill.join(', ')}`;
}
console.log(introduce());
//# sourceMappingURL=belajar1.js.map