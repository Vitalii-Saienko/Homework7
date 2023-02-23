/*
Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
*/
function returnMin(num1, num2) {
    if (num1>=num2){
        return num2
    }
        else if (num1<num2){
            return num1;
        }
  }

/*
Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
*/
function showAllEven(num1, num2){
    if (num1 % 2 == 0 && num2 % 2 == 0){
        if (num1 >= num2){
            console.log(num1 + " " + num2);
        }
        else {
            console.log(num2 + " " + num1);
        }
    }
    if (num1 % 2 == 0 && num2 % 2 != 0){
        console.log(num1);
    }
    if (num1 % 2 != 0 && num2 % 2 == 0){
        console.log(num2);
    }
}

/*
Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
*/
function power(num1, num2 = 2){
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
}

/*
Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
*/
function sumFromOneToArgument(num1){
    let sum = 0, i = 1;
    while (i <= num1){
        sum = sum + i;
        i++;
    }
    return sum;
}

/*
Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
*/
function sumEvenAndNotEven (n, m){
    let arr = [];
    for (let index = n; index <= m; index++) {
        arr.push(index)
    }
    let sumEven = 0;
    let sumNotEven = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2==0) {
            sumEven = sumEven + arr[index];
        }
        else {
            sumNotEven = sumNotEven + arr[index]
        }
    }

    console.log(arr);
    console.log("sum of even elements is equal: " + sumEven);
    console.log("sum of not even elements is equal: " + sumNotEven);
}
