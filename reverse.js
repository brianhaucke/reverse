function reverse(arr) {

  var reversedArray = []

  for (i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[(arr.length - 1) - i];
  }
  //console.log(reversedArray);
  return(reversedArray);

}

var helloWorld = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

reverse(helloWorld);
