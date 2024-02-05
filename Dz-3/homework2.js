// Продукт
let product = 
{
    name: "Ноутбук",
    price: 50000,
    inStock: true,
    brand: "Lenovo",
    specifications: 
    {
        screenSize: "15.6 дюйма",
        cameraResolution: "14 МП",
        CPU: "Intel® Core™ i7 11-го поколения",
        operatingSystem: "Windows 10 Pro",
        RAM: "16 ГБ памяти DDR4",
        Battery: "До 12 часов в режиме воспроизведения видео 1080p",
        storage: "512 ГБ",
        videoCard: "NVIDIA® MX450, Встроенная видеокарта Intel® Iris® Xe видеокарта",
        Dimensions: "19,9 × 359,2 × 236,5 мм",
        Weight: "1,7 кг",

    },
    discount: 
    {
        percentage: 15,
        expirationDate: "2024-6-26"
    }
};

// Покупатель
let customer = 
{
    name: "Василий",
    budget: 60000
};

// Проверка бюджета покупателя
if (customer.budget < product.price) 
{
    console.log("У вас недостаточно средств для покупки.");
} 
else 
{
    // Вывод информации о покупке
    console.log(`Покупатель ${customer.name} приобрел ${product.name} ${product.brand}`);

    // Вывод технических характеристик товара
    console.log("Технические характеристики:");
    console.log("Диагональ экрана:", product.specifications.screenSize);
    console.log("Разрешение камеры:", product.specifications.cameraResolution);
    console.log("Процессор:", product.specifications.CPU);
    console.log("Оперционная система", product.specifications.operatingSystem);
    console.log("Оперативная память:", product.specifications.RAM);
    console.log("Аккамулятор:", product.specifications.Battery);
    console.log("Объем памяти:", product.specifications.storage);
    console.log("Видео карта:", product.specifications.videoCard);
    console.log("Габариты:", product.specifications.Dimensions);
    console.log("Вес:", product.specifications.Weight);

    // Проверка наличия скидки и вывод информации о скидке
    if (product.discount) 
    {
        console.log("Скидка:", product.discount.percentage + "% до " + product.discount.expirationDate);
        // Расчет и вывод цены со скидкой
        let discountedPrice = product.price - (product.price * (product.discount.percentage / 100));
        console.log("Цена со скидкой:", discountedPrice);
    } 
    else 
    {
        // Вывод обычной цены, если скидки нет
        console.log("Цена:", product.price);
    }
}