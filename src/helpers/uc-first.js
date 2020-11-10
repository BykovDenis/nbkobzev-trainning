export default function ucFirst(str) {
  if (str === null) {
    return null;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
