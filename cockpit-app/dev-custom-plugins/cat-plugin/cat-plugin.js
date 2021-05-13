// VANILLA JS PLUGIN

export default {
  id: "Cats Plugin",
  pluginPoint: "cockpit.dashboard",
  priority: 5,
  render: container => {
    container.innerHTML = `<h1>Plugin: Cats!</h1>
      <img src="https://cdn2.thecatapi.com/images/2jPAIyDIJ.png" width="400" />
      `;
  },
};

  // http://thecatapi.com/api/images/get?size=medium
  // https://cdn2.thecatapi.com/images/2jPAIyDIJ.png