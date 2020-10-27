export const charToNumber = (value) => {
  const REGEXP = /[0-9]/g;
  const inputValueText = value;
  const validCharsArray = inputValueText.match(REGEXP) || [];
  const inputValueNumber = parseInt(validCharsArray.join(''), 10);
  const inputValue = isNaN(inputValueNumber) === false ? inputValueNumber : '';
  return inputValue;
};
