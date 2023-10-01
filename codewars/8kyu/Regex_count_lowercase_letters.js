/*Your task is simply to count the total number of lowercase letters in a string.
 */

{
  function lowercaseCount(str) {
    return str.split("").reduce((result, char) => {
      if (char.match(/[a-z]/)) result++;
      return result;
    }, 0);
  }

  console.log(lowercaseCount("abc"));
}

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

{
  const lowercaseCount = (str) => (str.match(/[a-z]/g) || []).length;
  console.log(lowercaseCount("abc"));
}

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

{
  const lowercaseCount = (str) => str.replace(/[^a-z]/g, "").length;
  console.log(lowercaseCount("abc"));
}
