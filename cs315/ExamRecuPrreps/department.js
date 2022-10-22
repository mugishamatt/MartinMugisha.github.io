let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        new1:[{name:'Jean',salary:1000000}],
        innner:{
            inner2:{
            sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
            internals: [{ name: 'Jack', salary: 1300 }],
            computer: [{ name: 'Duyen', salary: 9300 }]
        }
    }
    }
}

function findMax(obj){
    if(Array.isArray(obj)){
        return obj.reduce((prev,current)=>prev+current.salary,0)
    }else{
        let totalSal=0;
        for(let dept in obj){
            let eachSub=obj[dept]
            totalSal=totalSal+findMax(eachSub)

        }
        return totalSal;
    }
}
console.log(findMax(company))