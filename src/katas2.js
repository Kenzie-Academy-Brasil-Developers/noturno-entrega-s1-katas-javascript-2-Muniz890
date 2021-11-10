// comece a criar a sua função add na linha abaixo

function add(a,b){
    let resultadoAdd = a + b;
    return resultadoAdd;
  }
  add(3,4)
  
  // descomente a linha seguinte para testar sua função
  
  //console.assert(add(3, 5) === 8;
  
  
  // comece a criar a sua função multiply na linha abaixo
  
  function multiply(a,b){
    let resultadotMult = 0
    for(let i = 0; i<b; i++)
       resultadotMult += add(a, 0);
    return resultadotMult;
  }
  multiply(8,12)
  
  // descomente a linha seguinte para testar sua função
  //console.assert(multiply(4, 6) === 24;
  
  
  // comece a criar a sua função power na linha abaixo
  
  function pow(x,n){
    let resultadoPow = 1;
    for(let i = 1; i<=n; i++)
      resultadoPow *= multiply(x,x)/x;
    return  resultadoPow
  }
  pow(3,4)
  
  // descomente a linha seguinte para testar sua função
  //console.assert(power(3, 4) === 81;
  
  
  // comece a criar a sua função factorial na linha abaixo
  
  function factorial(a){
    let resultadoFact = 1;
    for(let i = 1; i<=a; i++)
      resultadoFact *= multiply(i, 1);
    return resultadoFact;  
  }
  factorial(6)
  
  // descomente a linha seguinte para testar sua função
  // console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
  
  
  /**
   * BONUS (aviso: o grau de dificuldade é bem maior !!!)
   */
  
  // crie a função fibonacci
  
  function fibonacci(n){
    let arr = [];
    for(let i = 0; i<=n; i++){
      if(i === 0){
        arr.push(0);
      } else if (i === 1) {
        arr.push(1);
      } else {
        arr.push(add(arr[i-1],arr[i-2]))
      }
    }
    return arr[n-1];
  }
  
  // descomente a linha seguinte para testar sua função
  // console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
  