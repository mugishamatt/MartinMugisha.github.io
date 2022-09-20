const tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];

  // normal for loop to create an array of names

const task_names=[]
  for(let i=0;i<tasks.length;i++){
    task_names.push(tasks[i].name)

  }
  console.log(task_names)
  //using map

  const mapName=tasks.map(function(task,index,array){
   
    return task.name
  })
  console.log(mapName)
  //using Arrow function

  const MapNamesArrow=tasks.map(task=>task.name)
  console.log(MapNamesArrow)

  //
  //forEach

  const names_forEach = [];
  
tasks.forEach(function (task) {
    names_forEach .push(task.name);    
});
 
console.log(names_forEach )

//2 filter

//using forEach

const difficult_tasks = [];
  
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});
 
console.log(difficult_tasks)

// with Filter 

const filtered_tasks=tasks.filter(task=>task.duration>=120)

console.log(filtered_tasks)

//3. reduce
const total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    const val = previous + current;
    console.log("The previous value is " + previous + 
                "; the current value is " + current +
                ", and the current iteration is " + (index + 1));
    return val;
}, 0);
  
console.log("The loop is done, and the final value is " + total + ".");

//using forEach it would be
let total_time = 0;
       
tasks.forEach(function (task) {
    // The plus sign just coerces 
    // task.duration from a String to a Number
    total_time += (+task.duration);
});
  
console.log(total_time)
  
//expected result is 420

// using Reduce

const total_duration=tasks.reduce((prev,current)=>prev+current.duration,0)

console.log(total_duration)