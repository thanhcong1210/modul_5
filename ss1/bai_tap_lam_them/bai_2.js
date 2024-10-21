// Bài 2	Sử dụng  Destructuring, rest, spread
// Hãy tạo ra 1 đối tượng student gồm các thuộc tính và giá trị lấy từ đối tượng person và hiển thị ra thông tin của student vừa tạo

export const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    gender: 'Male',
    occupation: 'Developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University',
    }
};

const {firstName, gender, education: {degree}, language: [English]} = person;

const student = {firstName, gender, degree, language: 'English'};

console.log(student);