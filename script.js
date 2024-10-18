const numberInput = document.getElementById('number-input');
const convertOptions = document.querySelectorAll('.convert-option');
const convertBtn = document.getElementById('convert-btn');
const resultMsg = document.getElementById('result-message');


convertBtn.addEventListener('click', () => {
  const numInputValue = numberInput.value;
  if(!numInputValue) {
    alert('You must input a number');
    return;
  }
  // numberInput.value = '';//delete the curr input

  const optionChecked = getCheckedOption();
  // console.log(optionChecked);
  switch (optionChecked) {
    case 'Binary':
      convertToBinary(numInputValue);
      break;
    case 'Hexadecimal':
      convertToHexadecimal(numInputValue);
      break;
    case 'Octal':
      convertToOctal(numInputValue);
      break;
    case 'Roman':
      convertToRoman(numInputValue);
      break;
    default:
      convertToBinary(numInputValue);
      break;
  }
})

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
  if(num === 0){
    return '0';
  } else if(num === 1) {
    return '1'
  } else {
    return convertToBinary(num / 2) + (num % 2);
  }
}
let result = '';
result += convertToBinary(10);
console.log(result);

function convertToHexadecimal(num) {
  console.log('hexadecimal');
}

function convertToOctal(num) {
  console.log('octal');
}

function convertToRoman(num) {
  console.log('roman');
}



