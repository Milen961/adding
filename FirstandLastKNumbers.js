function firstandLastKNumbers(arr){
    let k = arr.shift();
    console.log(arr.slice(0,k).join(' '));
    console.log(arr.slice(arr.length - k,
        arr.length).join(' '))
  
}
firstandLastKNumbers([2, 
    7, 8, 9])