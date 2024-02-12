let users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Carol", age: 22 }];
console.log("Перед изменением:");
  
for (let user of users) 
{
    console.log(user.name);
}
  
for (let user of users) 
{
    user.age += 1;
}
console.log("После изменения:");
  
for (let user of users)
{
    console.log(`${user.name} теперь ${user.age} лет`);
}