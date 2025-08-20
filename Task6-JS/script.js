let items = [];
let editIndex = -1;

const form = document.getElementById('item-form');
const nameInput = document.getElementById('name');
const descInput = document.getElementById('desc');
const catInput = document.getElementById('cat');
const tableBody = document.getElementById('table-body');
const formButton = form.querySelector('button');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newItem = {
        name: nameInput.value,
        desc: descInput.value,
        cat: catInput.value
    };

    if (editIndex === -1) {
        items.push(newItem);
    } else {
        items[editIndex] = newItem;
        formButton.textContent = 'Add';
        editIndex = -1;
    }

    clearInputs();
    renderTable();
});

function renderTable() {
    tableBody.innerHTML = '';
    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>${item.cat}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editItem(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function clearInputs() {
    nameInput.value = '';
    descInput.value = '';
    catInput.value = '';
}

function deleteItem(index) {
    items.splice(index, 1);
    renderTable();
}

function editItem(index) {
    const itemToEdit = items[index];
    nameInput.value = itemToEdit.name;
    descInput.value = itemToEdit.desc;
    catInput.value = itemToEdit.cat;

    formButton.textContent = 'Update';
    editIndex = index;
}
