module.exports = function bind(parent, key, ...args) {
  return parent[key].bind(parent, ...args);
};
