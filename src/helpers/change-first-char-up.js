export default function changeFirstCharUp(str) {
  if (str.length >= 2) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else if (str === null) {
    return null;
  } else {
    return str.charAt(0).toUpperCase();
  }
}
