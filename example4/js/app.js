function helloWorld() {
  return "Hello, World!";
}

if (require.main === module) {
  console.log(helloWorld());
}

module.exports = helloWorld;
