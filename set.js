
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);


//union 

function unionSet(set1, set2){
  return new Set([...set1, ...set2])
}

//intersection

function intersection(set1, set2){
  return new Set([...set1].filter((num)=>set2.has(num)))
}

//difference(common)

function difference(set1, set2){
  return new Set([...set1].filter((num)=>set2.has(num)!==true))
}

console.log(difference(setA, setB));
