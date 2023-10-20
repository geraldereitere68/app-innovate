/* filename: complexCode.js */

// This code implements a personal finance management system
// that takes user input, performs various calculations,
// and displays the results in a user-friendly manner.

// Import necessary modules
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate total income
function calculateTotalIncome(incomeItems) {
  let totalIncome = 0;
  for (let item of incomeItems) {
    totalIncome += item.amount;
  }
  return totalIncome;
}

// Function to calculate total expenses
function calculateTotalExpenses(expenseItems) {
  let totalExpenses = 0;
  for (let item of expenseItems) {
    totalExpenses += item.amount;
  }
  return totalExpenses;
}

// Function to calculate net cash flow
function calculateNetCashFlow(incomeItems, expenseItems) {
  const totalIncome = calculateTotalIncome(incomeItems);
  const totalExpenses = calculateTotalExpenses(expenseItems);
  return totalIncome - totalExpenses;
}

// Function to categorize expenses
function categorizeExpenses(expenseItems) {
  const categories = {
    'Food': 0,
    'Transportation': 0,
    'Housing': 0,
    'Education': 0,
    'Entertainment': 0
  };
  
  for (let item of expenseItems) {
    if (categories.hasOwnProperty(item.category)) {
      categories[item.category] += item.amount;
    }
  }
  
  return categories;
}

// Function to display financial report
function displayFinancialReport(incomeItems, expenseItems) {
  console.log('-------------------');
  console.log(' Financial Report ');
  console.log('-------------------');
  console.log('\nIncome:');
  
  for (let item of incomeItems) {
    console.log(`${item.description}: $${item.amount}`);
  }
  
  console.log('\nExpenses:');
  
  for (let item of expenseItems) {
    console.log(`${item.description}: $${item.amount}`);
  }
  
  console.log('\n-------------------');
  
  const totalIncome = calculateTotalIncome(incomeItems);
  const totalExpenses = calculateTotalExpenses(expenseItems);
  const netCashFlow = calculateNetCashFlow(incomeItems, expenseItems);
  const expenseCategories = categorizeExpenses(expenseItems);
  
  console.log('Summary:');
  console.log(`Total Income: $${totalIncome}`);
  console.log(`Total Expenses: $${totalExpenses}`);
  console.log(`Net Cash Flow: $${netCashFlow}`);
  console.log('\nExpense Categories:');
  
  for (let category in expenseCategories) {
    console.log(`${category}: $${expenseCategories[category]}`);
  }
  
  console.log('-------------------');
}

// Function to start the program
function startProgram() {
  console.log('Welcome to Personal Finance Management System!');
  console.log('\nPlease provide your income and expenses:');
  
  rl.question('How many income items do you have? ', (incomeCount) => {
    let incomeItems = [];
    let expenseItems = [];
    
    const getIncomeItem = (index) => {
      rl.question(`Income Item ${index + 1} Description: `, (description) => {
        rl.question(`Income Item ${index + 1} Amount: $`, (amount) => {
          incomeItems.push({
            description: description,
            amount: parseFloat(amount)
          });
          
          if (index + 1 < incomeCount) {
            getIncomeItem(index + 1);
          } else {
            rl.question('How many expense items do you have? ', (expenseCount) => {
              const getExpenseItem = (index) => {
                rl.question(`Expense Item ${index + 1} Description: `, (description) => {
                  rl.question(`Expense Item ${index + 1} Amount: $`, (amount) => {
                    rl.question(`Expense Item ${index + 1} Category: `, (category) => {
                      expenseItems.push({
                        description: description,
                        amount: parseFloat(amount),
                        category: category
                      });
                      
                      if (index + 1 < expenseCount) {
                        getExpenseItem(index + 1);
                      } else {
                        rl.close();
                        displayFinancialReport(incomeItems, expenseItems);
                      }
                    });
                  });
                });
              };
              
              getExpenseItem(0);
            });
          }
        });
      });
    };
    
    getIncomeItem(0);
  });
}

// Start the program
startProgram();