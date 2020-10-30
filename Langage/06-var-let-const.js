function hello() {
  {
    const constVar = 'constVar'; // portée de bloc (if)
    let letVar = 'letVar'; // portée de bloc (if)
    var varVar = 'varVar'; // portée de fonction (hello)
  }
  console.log('constVar', typeof constVar);
  console.log('letVar', typeof letVar);
  console.log('varVar', typeof varVar);
}

hello()
