const categoriesList = document.querySelectorAll("#categories");
const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent;
    const itemsElements = item.querySelectorAll("li");
    console.log(`Categorie: ${itemTitle}`);
    console.log(`Elements: ${itemsElements.length}`);
})