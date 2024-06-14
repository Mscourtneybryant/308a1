function flattenArray(arr) {
    let flattened = [];
 
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattened.push(...flattenArray(item));
        } else {
            flattened.push(item);
        }
    });
 
    return flattened;
 }
 
 const trampoline = fn => (...args) => {
    let result = fn(...args);
    while (typeof result === 'function'){
       result = result()
    }
    return result;
 }
 
 const tflattenArray = trampoline(flattenArray)
 
 let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
 let flatArray = tflattenArray(nestedArray);
 console.log(flatArray);