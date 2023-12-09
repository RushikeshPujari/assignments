/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // let obj = { category: String, totalSpent: Number }
  
  let result = [{"category": transactions[0].category , "totalSpent":transactions[0].price}]; 
  transactions.forEach(element => {
    //check then add
    result.forEach(transaction => {
      if(element.category == transaction.category){
        if(element.price > transaction.price)
        {
          result.push({"category": element.category,"totalSpent": element.price});
        }
      } 
  });
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
