
class Animal {
    constructor(species, name, size, location, imageUrl) {
        this.species = species;
        this.name = name;
        this.size = size;
        this.location = location;
        this.imageUrl = imageUrl;
    }
}

class AnimalTable {
    constructor(tableId, species) {
        this.tableId = tableId;
        this.species = species;
        this.animals = [];
    }

    addAnimal(name, size, location, imageUrl) {
        if (this.animals.some(animal => animal.name === name)) {
            alert('This animal already exists!');
            return;
        }
        
        const animal = new Animal(this.species, name, size, location, imageUrl);
        this.animals.push(animal);
        this.renderTable();
    }

    editAnimal(index, name, size, location, imageUrl) {
        const animal = this.animals[index];
        animal.name = name;
        animal.size = size;
        animal.location = location;
        animal.imageUrl = imageUrl;
        this.renderTable();
    }

    deleteAnimal(index) {
        this.animals.splice(index, 1);
        this.renderTable();
    }

    renderTable() {
        const table = document.getElementById(this.tableId);
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        this.animals.forEach((animal, index) => {
            let row = tbody.insertRow();
            let className;
            if (animal.species == 'Dog'){
                className = 'bold'
            }
            if (animal.species == 'Big Fish'){
                className = 'italic'
            }
            row.innerHTML = `
                <td>${animal.species}</td>
                <td class=${className}>${animal.name}</td>
                <td>${animal.size}</td>
                <td>${animal.location}</td>
                <img src=${animal.imageUrl} alt="animal image" width="80" height="80">
                <td>
                    <button class="btn btn-warning" onclick="editAnimal(${index}, '${this.tableId}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteAnimal(${index}, '${this.tableId}')">Delete</button>
                </td>
            `;
        });
    }

    sortTableByName() {
        this.animals.sort((a, b) => a.name.localeCompare(b.name));
        this.renderTable();
    }

    sortTableBySize() {
        this.animals.sort((a, b) => parseInt(a.size) - parseInt(b.size));
        this.renderTable();
    }

    sortTableByLocation() {
        this.animals.sort((a, b) => a.location.localeCompare(b.location));
        this.renderTable();
    }
}

const bigCatsTable = new AnimalTable('bigCatsTable', 'Big Cats');
const dogsTable = new AnimalTable('dogsTable', 'Dog');
const bigFishTable = new AnimalTable('bigFishTable', 'Big Fish');

bigCatsTable.addAnimal('Tiger', '10 ft', 'Asia', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf53OPjAvH2Mer3iYwhdBq9h72lpLks5-6EwLWqoRc9jwrVhzmHqpfnVEF9t_zxxmnzQTbpOaUcMvvxQFPllPvxxU7Q4s-73d3NDETehE0WTKOPIXJdqzrMLq3hYMKnaRk7JCypmg?key=diMK_80ckKTiDYYhCkLD1Q');
bigCatsTable.addAnimal('Lion', '8 ft', 'Africa', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3YWTE9qsM8ixtWVa4XL_e79XTR2uTNPxMidJo6NjR_h3dJASy0iSLUZUIddQeEBsNSBNWdW_whoHv6pMNdGL-ap_Xr7w6o_ilDr9CbOE2lX6el124Cckde2_ZxGCKVWS8wN2y5g?key=diMK_80ckKTiDYYhCkLD1Q');
bigCatsTable.addAnimal('Leopard', '5 ft', 'Africa and Asia', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfRlYhPYUadXdjE8ghce8hz1MA-dJcN3kkWMvL5uK4EngylRs90X7OYDVinCTXhuuHdFwOHOjyP2x4x8C8VCNZIJTiyP0bEfhSlVJvRxyazt4EdiimrV7fbk8vT1wxe4lylQkqJ?key=diMK_80ckKTiDYYhCkLD1Q');
bigCatsTable.addAnimal('Cheetah', '5 ft', 'Africa', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfE-rb4NkM4eTg_IIyagP_ENKBuosxLmnNmAMBRIs4J6srH3iJuAXh3DYSFRytRgabtpIA6dBn_QrAmx2-skjb3izzbl7vtJdxEHHYm3WXXPML_lkpt8YR0YntZfloxmzQEWJhQog?key=diMK_80ckKTiDYYhCkLD1Q');
bigCatsTable.addAnimal('Caracal', '3 ft', 'Africa', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeTXOE30Mn8ROlQRLa50n_ffHMJh-_O1nrz4ez_fL4Kf4nJRvSSFMC6rTVIjcHoYFKRP9L7rAfpQcn_Zr-rc8KrtVR0N6JEIlXaY88IZXbez7b0a0t91Q4r-ZB6ISdPBbNWOtgZDg?key=diMK_80ckKTiDYYhCkLD1Q');
bigCatsTable.addAnimal('Jaguar', '5 ft', 'Amazon', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXel0iw4J3wecscMIzU0FIwQraepRGHpr8px7qBrGq9yv2AGNR3szU92dU5WM-wFDQ64z6Ul1bi3uLDyuVfMT6BMtL0qchwFoH1_xCD0VxbDJH13ettkhAjMDAwVvKHUCsOGgWOw4Q?key=diMK_80ckKTiDYYhCkLD1Q');

dogsTable.addAnimal('Rotwailer', '2 ft', 'Germany', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXddsWqJ9xao46kXmGAT1zDDzemlcGqondWCaRASmoWHAXQUeFau7e-xPUkbDtCH_QOrIzEm424Cv71Vv7S_tGqLVpLqnEPLyu9PFlcWkiCeaMgldfDsavM7S4TQckUftVtzQCUY?key=diMK_80ckKTiDYYhCkLD1Q');
dogsTable.addAnimal('German Shepherd', '2 ft', 'Germany', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfZ07-E6cNLRLMNZCPLXIfG4Ys7B9BDzaegwfbQeOVq_6OrpyzwxGZU48QNJnEVp0xmpYUz1CXj5EAe5dhfjDleeYGSsLBD2qf2bJlAhNMki4Uo4Z-GosAKL4SMNAX4fzz0Wv52pA?key=diMK_80ckKTiDYYhCkLD1Q');
dogsTable.addAnimal('Labrodar', '2 ft', 'UK', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXc0a9bop6u__ec0TX8tGERkMDef7Hv3j_ow3aKysKj8ooxeMiPGmSSjEgEWMwkmEt4faQcRWeGcVivFWgZChQsnA-6qe4J701ZLawtl7iVzaidEzjM_0SAlwwWt6bRSqbS3ufo7sw?key=diMK_80ckKTiDYYhCkLD1Q');
dogsTable.addAnimal('Alabai', '4 ft', 'Turkey', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_aw46qieg7pAxf5nEY2NUaXwim7uutOpQQAaxtuqvcvBKyOxpfEVALKHTbn27jnqwfZ53RpglPKUR6NNvvI7_2IZ6lj1PGegsPrDxH2sYDs-qzQFrl2j74c0QuLjF39Qhhap26A?key=diMK_80ckKTiDYYhCkLD1Q');

bigFishTable.addAnimal('Humpback Whale', '15 ft', 'Atlantic Ocean', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyysrrkfUWIf1lK10UBdJb7fjcJJWI9tBxkSrQu4GyVAJrGtGEfC2hjuFEcKivtWtb4-d5f4Se0qmiiaVavBY-Mugh1FbDbOzOjUS_k_fYCwcvHuXHvsk6yLwiUwTsKQRDImJplg?key=diMK_80ckKTiDYYhCkLD1Q');
bigFishTable.addAnimal('Killer Whale', '12 ft', 'Atlantic Ocean', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfpKxeUzFoNF8Eow2uB0PYW1GrB4lFgF8-Tyf8klQnSr32VrHVEF19O_HDliR__Yxxz-2Ak2vSTQ2955EHTAaVgz7Ekaecw4Ll-H-Tef4X_9CRohFN4uYDrDLkagsP9oMpVe5yC?key=diMK_80ckKTiDYYhCkLD1Q');
bigFishTable.addAnimal('Tiger Shark', '8 ft', 'Ocean', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd6sLSi4k7GHTmNtfv_rfZl0L0jofbiVodtATufVdCMUlODDU27KwiyP7WKCmLRyymg4UHs0SqPAGMSGr6jkROXspkuHM1KnCV673RwbV-Vc0Le-m2QQ0O9S8OOaITw8QXq1vWr?key=diMK_80ckKTiDYYhCkLD1Q');
bigFishTable.addAnimal('Hammerhead Shark', '8 ft', 'Ocean', 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdbv_YnQneKgI-vKiFYVWN_yU4gD6XUjrjRCZhve2dH6Ama0kbCYHvpt2XQd7TuD7a8kDtFjrjCJbSLGvlj7rqpRRfVMQElCqrD3ldLGy7n8c1S1mowufVRBY7j9nScBNo_4QG?key=diMK_80ckKTiDYYhCkLD1Q');

function sortTable(tableId, columnIndex) {
    switch (tableId) {
        case 'bigCatsTable':
            bigCatsTable.sortTableByName();
            break;
        case 'dogsTable':
            dogsTable.sortTableByLocation();
            break;
        case 'bigFishTable':
            bigFishTable.sortTableBySize();
            break;
    }
}

function addAnimal(species) {
    const name = prompt("Enter animal name:");
    const size = prompt("Enter animal size:");
    const location = prompt("Enter animal location:");
    const imageUrl = prompt("Enter image URL:");

    switch (species) {
        case 'Big Cats':
            bigCatsTable.addAnimal(name, size, location, imageUrl);
            break;
        case 'Dog':
            dogsTable.addAnimal(name, size, location, imageUrl);
            break;
        case 'Big Fish':
            bigFishTable.addAnimal(name, size, location, imageUrl);
            break;
    }
}

function editAnimal(index, tableId) {
    const name = prompt("Enter new name:");
    const size = prompt("Enter new size:");
    const location = prompt("Enter new location:");
    const imageUrl = prompt("Enter new image URL:"); 

    switch (tableId) {
        case 'bigCatsTable':
            bigCatsTable.editAnimal(index, name, size, location, imageUrl);
            break;
        case 'dogsTable':
            dogsTable.editAnimal(index, name, size, location, imageUrl);
            break;
        case 'bigFishTable':
            bigFishTable.editAnimal(index, name, size, location, imageUrl);
            break;
    }
}

function deleteAnimal(index, tableId) {
    switch (tableId) {
        case 'bigCatsTable':
            bigCatsTable.deleteAnimal(index);
            break;
        case 'dogsTable':
            dogsTable.deleteAnimal(index);
            break;
        case 'bigFishTable':
            bigFishTable.deleteAnimal(index);
            break;
    }
}
