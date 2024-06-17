// Autenticação (LOGIN)
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Verificar se o usuário e senha estão corretos
    if (username === 'admin' && password === '123456') {
        // Redirecionar para o painel administrativo
        window.location.href = '#produtos';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Gerenciamento de produtos
const tableProdutos = document.getElementById('table-produtos');
const tbodyProdutos = document.getElementById('tbody-produtos');
const btnAddProduto = document.getElementById('btn-add-produto');

// Adicionar produto
btnAddProduto.addEventListener('click', () => {
    const produto = {
        id: Date.now(),
        nome: prompt('Informe o nome do produto:'),
        preco: parseFloat(prompt('Informe o preço do produto:')),
    };
    addProduto(produto);
});

// Remover produto
tableProdutos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('btn-remove')) {
        const id = e.target.getAttribute('data-id');
        if (confirm('Tem certeza que deseja remover este produto?')) {
            removeProduto(id);
        }
    }
});

tableProdutos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('btn-edit')) {
        const id = e.target.getAttribute('data-id');
        const produto = {
            id: id,
            nome: prompt('Informe o novo nome do produto:'),
            preco: parseFloat(prompt('Informe o novo preço do produto:')),
        };
        editProduto(produto);
    }
});

// Funções
function addProduto(produto) {
    const tr = document.createElement('tr');
    tr.dataset.id = produto.id; // Set the data-id attribute
    tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        <td>
            <button class="btn-edit" data-id="${produto.id}">Editar</button>
            <button class="btn-remove" data-id="${produto.id}">Remover</button>
        </td>
    `;
    tbodyProdutos.appendChild(tr);
}

function removeProduto(id) {
    const trs = tbodyProdutos.getElementsByTagName('tr');
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        if (tr.getAttribute('data-id') === id.toString()) { // Use getAttribute to access the data-id attribute
            tr.remove();
            break;
        }
    }
}

function editProduto(produto) {
    const trs = tbodyProdutos.getElementsByTagName('tr');
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        if (tr.getAttribute('data-id') === produto.id.toString()) {
            tr.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>
                    <button class="btn-edit" data-id="${produto.id}">Editar</button>
                    <button class="btn-remove" data-id="${produto.id}">Remover</button>
                </td>
            `;
            break;
        }
    }
}