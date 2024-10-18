const numberInput = document.getElementById('number');
const convertOptions = document.querySelectorAll('.convert-option');
const convertBtn = document.getElementById('convert-btn');
const resultContainer = document.getElementById('result-container');
const convertType = document.getElementById('convert-type');
const resultMsg = document.getElementById('output');


convertBtn.addEventListener('click', () => {
  const numInputValue = numberInput.value;
  if(!numInputValue) {
    resultMsg.innerText = 'Please enter a valid number';
    return;
  } else if(numInputValue <= 0) {
    resultMsg.innerText = 'Please enter a number greater than or equal to 1';
    return;
  } else if(numInputValue >= 4000) {
    resultMsg.innerText = 'Please enter a number less than or equal to 3999';
    return;
  }
  // numberInput.value = '';//delete the curr input

  const optionChecked = getCheckedOption();
  convertType.textContent = optionChecked;

  //uncomment below if using dialog
  // resultContainer.style.border = '3px solid rgb(203, 200, 5)';
  // resultContainer.style.padding = '1rem 1rem 0 1rem';
  // resultContainer.style.width = '40%';
  // resultContainer.showModal();

  // console.log(optionChecked);
  switch (optionChecked) {
    case 'Binary':
      resultMsg.textContent = convertToBinary(numInputValue);
      break;
    case 'Hexadecimal':
      resultMsg.textContent = convertToHexadecimal(numInputValue);
      break;
    case 'Octal':
      resultMsg.textContent = convertToOctal(numInputValue);
      break;
    case 'Roman':
      resultMsg.textContent = convertToRoman(numInputValue);
      break;
    default:
      resultMsg.textContent = convertToRoman(numInputValue);
      break;
  }
})

//uncomment below function if using dialog
// resultContainer.addEventListener('click', (e) => {
//   // console.log(e.target);
//   if(e.target == resultContainer) {
//     resultContainer.close();
//   }
// })

function getCheckedOption() {
  for(option of convertOptions) {
    // console.log(option.nextSibling.textContent.trim()); //get the text inside the radio button
    if(option.checked) {
      const optionChecked = option.nextSibling.textContent.trim();
      return optionChecked;
    }
  }
}

function convertToBinary(num) {
  if(num === 0 || num === 1){
    return String(num);
  } else {
    return convertToBinary(Math.floor(num / 2)) + (num % 2);
  }
}
//test the binary converter function
// let result = '';
// result += convertToBinary(254);
// console.log(result);

function convertToHexadecimal(num) {
  const hexDigits = '0123456789ABCDEF';
  let hexString = '';
  
  // Handle the case where the number is 0
  if (num === 0) {
    return '0';
  }
  
  // Convert the number to hexadecimal
  while (num > 0) {
    let remainder = num % 16;
    hexString = hexDigits[remainder] + hexString;
    num = Math.floor(num / 16);
  }
  
  return hexString;

  // or using built-in function 
  // let hexString = num.toString(16).toUpperCase();
  
  // // Return the result
  // return hexString;
}

function convertToOctal(num) {
  let octalString = '';
  
  // Handle the case where the number is 0
  if (num === 0) {
    return '0';
  }
  
  // Convert the number to octal
  while (num > 0) {
    let remainder = num % 8;
    octalString = remainder + octalString;
    num = Math.floor(num / 8);
  }
  
  return octalString;
}

function convertToRoman(num) {
  // Array of Roman numerals and their corresponding decimal values
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let romanString = '';

  // Loop through the Roman numerals array
  for (let i = 0; i < romanNumerals.length; i++) {
    // While the current decimal value can fit into the number
    while (num >= romanNumerals[i].value) {
      romanString += romanNumerals[i].numeral;  // Append the Roman numeral
      num -= romanNumerals[i].value;            // Subtract the decimal value from the number
    }
  }

  return romanString;
}



