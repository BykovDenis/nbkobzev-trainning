export default function changeFirstCharUp(str) {
  return str === null ? null : str.charAt(0).toUpperCase() + str.slice(1);
}
