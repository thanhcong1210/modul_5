// Yêu cầu 2: Sử dụng cú pháp ES6 để xuất ra màn hình danh sách các bài đăng có rating < 4
// với yêu cầu giá trị các phần tử của mảng mới có định dạng:
//  <id> - <title> - <rating>

import {courses} from "./yc1.js";

const list = courses.filter(course => course.rating < 4).map(course => `${course.id} --- ${course.title} --- ${course.rating}`);

list.forEach(course => console.log(course));