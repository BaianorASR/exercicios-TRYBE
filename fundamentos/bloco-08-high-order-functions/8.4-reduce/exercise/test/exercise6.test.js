const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// const studentAverage = () => {
//   return students.map((item, index) => ({
//     nome: item,
//     average: grades[index].reduce((acc, e, i, arr) => acc + (e / arr.length),0)
//   }))
// }

const studentAverage = () => students.map((item, index) => ({
  name: item,
  average: grades[index].reduce((acc, e) => acc + e) / grades[index].length
}))

console.log(studentAverage())
export { studentAverage };