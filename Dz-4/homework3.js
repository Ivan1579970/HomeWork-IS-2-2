const companies = 
{
    "Google": 
    {
        people: ["John", "Alice", "Bob"]
    },
    "Microsoft": 
    {
        people: ["Anna", "James", "Peter"]
    },
    "Facebook": 
    {
        people: ["Emma", "Olivia", "Ava"]
    }
};

for (const companyName in companies) 
{
    console.log(`Сотрудники компании ${companyName}:`);
    
    for (const peopleName of companies[companyName].people) 
    {
        console.log(peopleName);
    }
}
