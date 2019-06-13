const espree = require("espree");
const { readFile } = require("fs");

const parse = (err, code) => {
  if (err) throw err;
  const ast = espree.parse(code, { ecmaVersion: 6 });
  const print = JSON.stringify(ast, null, 2);
  console.log(print);
};


readFile(process.argv[2], parse);

