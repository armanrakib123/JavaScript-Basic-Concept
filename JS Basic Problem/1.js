
function calculateTax(income,expense){
    if(income<0){
        return "Invalid Input";
    }
    if(expense<0){
        return "Invalid Input";
    }
    const difference=(income - expense);
    const tax=(difference*0.20);
    return tax;
    
} 
const result=calculateTax(10000,3000);
console.log(result);