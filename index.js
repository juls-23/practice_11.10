//   1) дописать функцию нахождения степени числа для отрицательной степени. Использовать рукурсию.

const negativePow = (num, exp) =>{
  if (exp === 0){
    return 1
  } else if (exp < 0) {
    return  negativePow(num, exp+1)/num
  }
}

console.log(negativePow(2,-2))

// 2) написать функцию, которая принимает число и возвращает вложенные пары круглых скобок, равные этому числу. Использовать рекурсию. Например,  pairBrackets(3), должна вывести:  ((())). Если число меньше 1 - выводим одну пару скобок.

const pairBrackets = (num) =>{
  if (num <=1 ){
    return `()`
    
  } 
  return `(${pairBrackets(num-1)})`; 
 }

 console.log(pairBrackets(5))




// 3) дан массив чисел. используя Math и спред оператор найдите минимальный и максимальный элементы массива.

const  array1 = [2,4,5,6,7,10,3,4]

const max = Math.max(...array1)

const min = Math.min(...array1)

console.log(max)

console.log(min)




// 4) напишите функцию-стрелку, которая принимает неограниченное количество аргументов и возвращает их произведение.


const mult = (...args) => args.reduce((res, n) => res*n);
