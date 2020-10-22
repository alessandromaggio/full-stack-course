function createProductSelector(n) {
  let select = document.createElement('select');
  select.name = 'item-' + n;
  let options = [
    { value: 'None', label: 'Please select...' },
    { value: 'baguette', label: 'Baguette' },
    { value: 'croissant-empty', label: 'Croissant (no fill)' },
    { value: 'croissant-choco', label: 'Croissant Chocolate' },
    { value: 'croissant-berry', label: 'Croissant Strawberry' },
    { value: 'pizza', label: 'Handmade pizza' }
  ]
  for(let i = 0; i < options.length; i++) {
    let option = document.createElement('option');
    option.value = options[i].value;
    option.innerHTML = options[i].label;
    select.appendChild(option);
  }
  return select;
}

function createQtyInput(n) {
  let qty = document.createElement('input');
  qty.name = 'qty-' + n;
  qty.id = 'qty-' + n;
  qty.type = 'number';
  return qty;
}

function removeElement(n) {
  document.querySelector('#order-table > tbody')
    .removeChild(document.getElementById('row-' + n));
}

function createRemoveButton(n) {
  let btn = document.createElement('button');
  btn.type = 'button';
  btn.innerHTML = '-';
  btn.addEventListener('click', function () {
    removeElement(n);
  });
  return btn;
}

function createOrderItem(n) {
  let tr = document.createElement('tr');
  tr.id = 'row-' + n;
  let td1 = document.createElement('td');
  td1.innerHTML = 'Item #' + n;
  let td2 = document.createElement('td');
  td2.appendChild(createProductSelector(n));
  let qty = createQtyInput(n);
  let td3 = document.createElement('td');
  td3.appendChild(qty);
  let label = document.createElement('label');
  label.setAttribute('for', qty.id);
  label.innerHTML = 'g';
  td3.appendChild(label);
  let td4 = document.createElement('td');
  td4.appendChild(createRemoveButton(n));
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  return tr;
}

function addOrderItem(n) {
  document.getElementById('order-table')
    .querySelector('tbody')
    .appendChild(createOrderItem(n));
}

function getOrderItemsCount() {
  return document.querySelectorAll('#order-table tbody > tr').length;
}

document.getElementById('additem').addEventListener('click', function() {
  addOrderItem(getOrderItemsCount() + 1);
})

if (window.localStorage.getItem('notes')) {
  document.getElementById('notes').value = window.localStorage.getItem('notes');
}

document.getElementById('notes').addEventListener('input', function(e) {
  window.localStorage.setItem('notes', e.target.value);
});
