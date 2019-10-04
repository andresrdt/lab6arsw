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
        "<tr> <td>" +
          blueprint.name +
          "</td>" +
          "<td>" +
          blueprint.points +
          "</td>" +
          "<td><form><button type='button' class='btn btn-primary' onclick='BlueprintFunction.dibujar( \"" +
          _author +
          '" , "' +
          blueprint.name +
          "\")' >Open</button></form></td>" +
          "</tr>"
      );
    });
    
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
    return ApiClient.getBlueprintsByNameAndAuthor(author, name, function(err, blueprint) {
            if (err) {
                return new Error('Error getting blueprint by name and author.')
            }
      
            var canvas = $('#Canvas');
            var context = canvas[0].getContext('2d');
            context.clearRect(0, 0, canvas[0].width, canvas[0].height);
            context.beginPath();
            blueprint.points.forEach(function(point, index) {
                if (index < blueprint.points.length - 1) {
                    context.moveTo(point.x, point.y);
                    context.lineTo(blueprint.points[index + 1].x, blueprint.points[index + 1].y);
                    context.stroke();
                }
            })
        })
    }
   
  var buscar = function (author) {
    actualizarBusqueda(author);
    $("#AuthorBlueprint > h2").text(author + "'s blueprints: ");
    api.getBlueprintsByAuthor(author, Table);
  };
  var buscar2 = function (author , name){
    api.getBlueprintsByNameAndAuthor(author,name);
  };
  return {
    buscar: buscar,
    buscar2: buscar2,
    dibujar: dibujar,
  };

})();
