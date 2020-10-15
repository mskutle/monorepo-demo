const slug = require("slug");

exports.slugify = (text) => {
  return slug(text);
};

exports.log = (...args) => {
  console.log(...args);
};
