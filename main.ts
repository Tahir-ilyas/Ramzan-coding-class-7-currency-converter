import inquirer from "inquirer"

const Currency: any  =  {
    PKR:1, // base currency
    SAR: 74.13,
    AED:75.75,
    AUD:182.89,
    CAD:204.1,
    INR:3.14,
    KWD:896.77,
    EUR:302.17,
    QAR:76.17,
    USD: 278

};

let user_answer = await inquirer.prompt(
    [
    {
    name:"from",
    message:"Enter from Currency",
    type:"list",
    choices:['PKR','SAR','AED','AUD','CAD','INR','KWD','EUR','QAR','USD'],

    },
    {
        name:"to",
        message:"Enter to Currency",
        type:"list",
        choices:['USD','SAR','AED','AUD','CAD','INR','KWD','EUR','QAR','PKR'],
    
        },
        {
            name:"amount",
            type:"number",
            message:"Enter your amount",
        }, 
]
)
let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)