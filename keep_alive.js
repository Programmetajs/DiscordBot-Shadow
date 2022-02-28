const http = require("express");
const run = http();
(async () => {
  try {
    run.get("/", async (req, res) => {
      res.send("keep_alive")
    });
    const ch = require("chalk");
    run.listen(3000, async () => {
      console.log(ch.cyan(".. || Successfully Executed Keep_alive file || .."))
    });
  } catch (error) {
    if (error) return;
  }
})();
