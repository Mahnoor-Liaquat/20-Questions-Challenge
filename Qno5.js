// Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

const tasks = [
  { id: 1, status: "Pending" },
  { id: 2, status: "in Progress" },
  { id: 3, status :"Completed" },
];
const changeStatus = 2;
const findTask = tasks.find(task => task.id === changeStatus);
if(findTask){
  findTask.status = 'completed';
}
console.log(tasks);