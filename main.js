container = document.getElementById("main");

const text = new Blotter.Text("Sophonias", {
  family: "serif",
  size: 300,
  fill: "#fff",
  paddingLeft: 80,
  paddingTop: 80,
  paddingRight: 80,
  paddingBottom: 80
});

  var material = new Blotter.FliesMaterial();

  material.uniforms.uPointCellWidth.value = 0.01;
  material.uniforms.uPointRadius.value = 0.6;
  material.uniforms.uSpeed.value = 2;
  var blotter = new Blotter(material, {
    texts: text
  });

  var scope = blotter.forText(text);

  scope.appendTo(container);
