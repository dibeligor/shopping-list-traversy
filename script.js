const itemForm = document.querySelector('#item-form');
const itemInput =  document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  //Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  
  const icon = createIcon("fa-solid fa-xmark")
  const button = createButton("remove-item btn-link text-red")
  
  button.appendChild(icon);
  li.appendChild(button);
  itemList.appendChild(li);

  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = "fa-solid fa-xmark";
  return icon;
}

//Event Listeners
itemForm.addEventListener('submit', addItem);
