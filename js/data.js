const people = [
  { name: 'Ziad', age: 20, city: 'Cairo' },
  { name: 'Sarah', age: 22, city: 'Alexandria' },
  { name: 'Omar', age: 19, city: 'Giza' },
  { name: 'Mona', age: 24, city: 'Mansoura' },
  { name: 'Ahmed', age: 21, city: 'Tanta' },
  { name: 'Youssef', age: 23, city: 'Aswan' },
  { name: 'Mariam', age: 20, city: 'Luxor' },
  { name: 'Khaled', age: 25, city: 'Port Said' }

];

let currentData = [...people];

const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const sortNameBtn = document.getElementById('sortNameBtn');
const sortAgeBtn = document.getElementById('sortAgeBtn');

function renderTable(data) {
  tableBody.innerHTML = '';
  
  if (data.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="3">No results found</td></tr>';
    return;
  }

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.city}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Search
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = currentData.filter(person => 
    person.name.toLowerCase().includes(query) ||
    person.city.toLowerCase().includes(query) ||
    person.age.toString().includes(query)
  );
  renderTable(filtered);
});

// Sort Name
sortNameBtn.addEventListener('click', function () {
  currentData.sort((a, b) => a.name.localeCompare(b.name));
  renderTable(currentData);
});

// Sort Age
sortAgeBtn.addEventListener('click', function () {
  currentData.sort((a, b) => a.age - b.age);
  renderTable(currentData);
});

renderTable(currentData);