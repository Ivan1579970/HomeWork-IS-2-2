let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Двумерный массив:");
for (let i of array) 
{
    for (let item of i)
    {
      console.log(item);
    }
  }
  
  let sum = 0;
  for (let a of array) 
  {
    for (let item of a) 
    {
      sum += item;
    }
  }
  console.log("Сумма всех элементов:", sum);
  
  
  console.log("Количество элементов в каждом вложенном массиве:");
  for (let b of array) 
  {
    console.log(b.length);
  }