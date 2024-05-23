self.addEventListener("message", async (event: MessageEvent) => {
  const { data } = event;
  console.log(event, data);

  self.postMessage(`${data} received!`);
});
