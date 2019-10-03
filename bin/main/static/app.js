var api = apimock;
var BlueprintFunction = (function () {
  var _author;
  var BlueprintArray = [];


  var Table = function (blueprints) {
    blueprints = BlueprintPoints(blueprints);
    BlueprintArray = blueprints;
    var sum = blueprints.reduce(function (total, currentValue) {
      return total + currentValue.points;
    }, 0);
    $("#Sum > h3").text("Total user points: " + sum);
    $("#blueprintTable > tbody").empty();
    blueprints.map(function (blueprint) {
      $("#blueprintTable > tbody").append(
        `
                <tr>
                    <td>` + blueprint.name + `</td>
                    <td>` + blueprint.points + `</td>
                    <td>
                        <button class='btn btn-primary' onClick= "BlueprintFunction.dibujar( \"" +
                        _author +
                        '" , "' +
                        blueprint.name +
                        "\")"
                        </button> open
                    </td>
                </tr>
                `
      );
    });
    //api.getBlueprintsByNameAndAuthor(author, name);
  };
  var actualizarBusqueda = function (author) {
    _author = author;
  };
  var BlueprintPoints = function (blueprints) {
    return blueprints.map(function (blueprint) {
      return { name: blueprint.name, points: blueprint.points.length };
    });
  };
  var dibujar = function (author, name) {
    api.getBlueprintsByNameAndAuthor(author, name);
    var canvas = document.getElementById('Canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }



  };


  var buscar = function (author) {
    actualizarBusqueda(author);
    $("#AuthorBlueprint > h2").text(author + "'s blueprints: ");
    api.getBlueprintsByAuthor(author, Table);
  };
  return {
    buscar: buscar,
    dibujar: dibujar,
  };

})();
