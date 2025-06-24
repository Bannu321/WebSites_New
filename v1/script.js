let obj = {
  name: "harry",
  age: 23,
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}
