//list all classes
const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

//What the transactions will look like
//const fake/transactions = [
//  {id: 1, text: 'beauty', amount: -45},
//  {id: 2, text: 'flower', amount: -50},
//  {id: 3, text: 'Salary', amount: 4500},
//  {id: 4, text: 'camera', amount: 150}
//];


//for storage
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions')
);
let transactions = localStorage.getItem('transactions') != null ? localStorageTransactions : [];

//Add Transaction
function addTransactions(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amount');

    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        updateLocalStorage();

        text.value = '';
        
        amount.value = '';
    }
}

//To Generate random ID
function generateID() {
    return Math.floor(Math.random() * 1000000000);
}

//Add transcations to DOM list
function addTransactionDOM(transaction) {
    //Get Sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    //Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
        transaction.amount
    )} </span> <button class="delete-btn" onclick="removeTransaction(${
        transaction.id
    })


    

}







/* const balance = document.querySelector('#balance')

balance.addEventListener('click', function(){
    alert('Hello world')
}) */