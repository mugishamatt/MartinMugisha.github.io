

let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
    internals: [{ name: 'Jack', salary: 1300 }]
    }
   }
//map
//    let compName=company.development.sites.map(sales=>{
//     return sales.name
//    })
//    console.log(compName)
//    //reduce
// let total=company.sales.reduce((prev,cur)=>prev+cur.salary,0)
// console.log(total)
let obj = {a:1,b:2}
for(let prop in obj){
    console.log(prop,obj[prop])
}
//total salary


// let totalSalary=0;
// for(let dep in company){
//     let eachDep=company[dep]
//     if(Array.isArray(eachDep)){
//         for(let person of eachDep){
//             totalSalary+=person.salary
//         }
//     }else{
//         for(let subdept in eachDep){
//             let eachSub=eachDep[subdept]
//             for(let person of eachSub){
//                 totalSalary+=person.salary
//             }
         
//         }
//     }
// }
// console.log(totalSalary)
// let total=0;
function findMax(department){
    if(Array.isArray(department)){
      return  department.reduce((prev,cur)=>prev+cur.salary,0)
    }else{
        let total=0;
        for(let subdept in department){
            eachSub=department[subdept]
            total=total+findMax(eachSub)
        }
        return total

    }
   
}
console.log(findMax(company))


// array of names objects
//[
//     { name: 'John' },
//     { name: 'Alice' },
//     { name: 'Peter' },
//     { name: 'Alex' },
//     { name: 'Jack' }
//   ]

function findNameObject(department){
    if(Array.isArray(department)){
        return department.map(item=>{
            return {name:item.name}
        })
    }else{
        let names=[];
        for(let dept of Object.values(department)){

            let nameDept=findNameObject(dept)
            names=names.concat(nameDept)
        }
        return names
    }
}

console.log(findNameObject(company))

//
function namesInArray(department){
    if(Array.isArray(department)){
        return department.map(item=>item.name)
    }else{
        let namez=[];
        for(let subDep of Object.values(department)){
            let nameDept=namesInArray(subDep)
            namez=namez.concat(nameDept)
        }
        return namez
    }
}
console.log(namesInArray(company))
   