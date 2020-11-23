function solve(input) {
  let lastStashIndex = input.lastIndexOf(`\\`);
  let fullName = input.substring(lastStashIndex + 1);

  let extensionIndex = fullName.lastIndexOf(`.`);
  let extension = fullName.substring(extensionIndex + 1);

  let fileName = fullName.substr(0, fullName.lastIndexOf(`.`));

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

solve("C:\\Internal\\training-internal\\Template.pptx");
