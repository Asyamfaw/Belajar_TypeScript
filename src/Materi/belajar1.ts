const student: {
  name: string;
  age: number;
  major: string;
  skill: string[];
} = {
  name: "Monyed",
  age: 16,
  major: "Software Developer",
  skill: ["HTML", "CSS", "JavaScript", "React.js", "Typescript"],
};

function introduce(): string {
  return `Hello my name is ${student.name}. I am ${student.age} years old. I study ${student.major}, My skills are ${student.skill.join(", ")}`;
}

console.log(introduce());
