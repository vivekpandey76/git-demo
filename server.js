setTimeout(() => {
  console.log("Macrotask (2s)");
}, 0);

Promise.resolve().then(() => {
  const start = Date.now();
  while (Date.now() - start < 10000) {} // 10 sec block
  console.log("Microtask (10s)");
});