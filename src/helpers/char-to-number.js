export const charToNumber = (value) => {
  const REGEXP = /[0-9]/g;
  const inputValueText = value;
  const validCharsArray = inputValueText.match(REGEXP) || [];
  const inputValueNumber = parseInt(validCharsArray.join(''), 10);
  return isNaN(inputValueNumber) === false ? inputValueNumber : '';
};
