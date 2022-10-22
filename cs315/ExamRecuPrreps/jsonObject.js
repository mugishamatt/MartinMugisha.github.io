let json = {
    "glossary": {
        "title": "example glossary", "GlossSeeAlso":
            { "title": "S", "GlossList": 
            { "GlossEntry": 
            { "ID": "SGML", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML", "S"] }, "GlossSee": "markup" } } }
    }
}

function countLeaves(obj) {

    let count = 0;
    for (const key in obj) {
        if (typeof obj[key] !== "object" || Array.isArray(obj[key])) {
            count++;
        } else
            count += countLeaves(obj[key])
        }
        return count;
    }
   

console.log(countLeaves(json))

//function reverse