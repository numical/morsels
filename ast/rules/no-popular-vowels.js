module.exports = {
  create: context => ({
    'VariableDeclarator > Identifier': node => {
      const { name } = node;
      if (name.includes('e')) {
        context.report({
          node,
          message: `variable '${name}' has an 'e'`
        })
      }
    }
  })
};
