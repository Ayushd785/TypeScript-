function callback(fn: () => void) {
  setTimeout(fn, 1000);
}

callback(() => {
  console.log("hi there");
});
