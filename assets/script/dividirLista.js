const rowsPerPage = 1; // Defina o número de linhas por página
const table = document.getElementById('tabelaMedicamentos'); // Obtenha a tabela
const rows = table.tBodies[0].rows; // Obtenha todas as linhas da tabela
const totalPages = Math.ceil(rows.length / rowsPerPage); // Calcule o número total de páginas


/*------------------------------------*/


for (let i = 1; i < totalPages; i++) {
    // Crie um ID para cada página
    const pageId = `page-${i+1}`;
    
    // Crie uma div para a página e adicione uma classe "page" e o ID
    const pageDiv = document.createElement('div1');
    pageDiv.classList.add('page');
    pageDiv.id = pageId;
    
    // Adicione as linhas da página à div
    for (let j = i * rowsPerPage; j < (i + 1) * rowsPerPage && j < rows.length; j++) {
      pageDiv.appendChild(rows[j]);
    }
    
    // Esconda a página
    pageDiv.style.display = 'none';
    
    // Adicione a div à tabela
    table.parentNode.insertBefore(pageDiv, table.nextSibling);
  }
  
  // Mostre a primeira página
  document.getElementById('page-1').style.display = 'table-row-group';

  
/*------------------------------------*/

  const menu = document.createElement('ul');
menu.classList.add('pagination');

for (let i = 1; i <= totalPages; i++) {
  const menuItem = document.createElement('li');
  const link = document.createElement('a');
  
  link.textContent = i;
  link.href = `#page-${i}`;
  
  menuItem.appendChild(link);
  menu.appendChild(menuItem);
}

table.parentNode.insertBefore(menu, table);

// Adicione um ouvinte de eventos para atualizar a exibição das páginas ao clicar em um link do menu
menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    
    const pageId = event.target.getAttribute('href').substring(1);
    
    // Esconda todas as páginas e mostre a página correspondente
    const pages = document.querySelectorAll('.page');
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].id === pageId) {
        pages[i].style.display = 'table-row-group';
      } else {
        pages[i].style.display = 'none';
      }
    }
  }
});
