let items = [];

function displayItems() {
    console.log("--- Current Items ---");
    if (items.length === 0) {
        console.log("The list is empty.");
    } else {
        items.forEach((item, index) => {
            console.log(`Index ${index}: ${item}`);
        });
    }
    console.log("---------------------");
}

function createItem(newItem) {
    items.push(newItem);
    console.log(`'${newItem}' has been added.`);
    displayItems();
}

function readItems() {
    console.log("--- Reading all items ---");
    displayItems();
}

function updateItem(index, newValue) {
    if (index >= 0 && index < items.length) {
        const oldValue = items[index];
        items[index] = newValue;
        console.log(`Item at index ${index} updated from '${oldValue}' to '${newValue}'.`);
        displayItems();
    } else {
        console.log(`Error: Invalid index ${index}.`);
    }
}

function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        const deletedItem = items.splice(index, 1);
        console.log(`'${deletedItem}' at index ${index} has been deleted.`);
        displayItems();
    } else {
        console.log(`Error: Invalid index ${index}.`);
    }
}


createItem("Hend");
createItem("Amira");
createItem("Jana");

readItems();

updateItem(1, "Ahmed");

deleteItem(0);


deleteItem(5);
