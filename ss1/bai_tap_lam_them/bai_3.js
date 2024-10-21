//Viết một function có tham số là một đối tượng bất kỳ .
// Function sẽ hiển thi ra 2 thuộc tính firstName và degree
//   + Nếu đối tượng truyền vào không có thuộc tính firstName thì firstName có giá trị mặc định là "Quân", tương tự với degree là "NA"
import {person} from "./bai_2.js";

function main({firstName = "Quân", education: {degree = "NA"} = {}}) {
    console.log(`First name: ${firstName}`);
    console.log(`Degrees: ${degree}`);
}

const person1 = {
    firstName: 'Join',
    education: {degree: 'Bachelor'}
};
main(person1);

const person2 = {
    education: {degree: 'Bachelor'}
}
main(person2);

const person3 = {
    firstName: 'John',
}
main(person3);

const person4 = {
}
main(person4);