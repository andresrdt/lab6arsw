const apiUrl = "http://localhost:8080/blueprints/"
var ApiClient = (function() {

    getBlueprintsByAuthor = function(author, callback) {
        var blueprints = $.get("http://localhost:8080/blueprints/" + author, function(data) {
            return data;
        });
        return callback(null, blueprints);
    
    getBlueprintsByNameAndAuthor: function(author, name, callback) {
      jQuery.ajax({
        url: apiUrl + author + "/" + name,
        success: function(result) {
          callback(result);
        },
        async: true
      });
    }
<<<<<<< HEAD
})();    
=======
    var getBlueprintsByNameAndAuthor=function(author,name,callback){
          var blueprint = $.get("http://localhost:8080/blueprints/" + author+"/"+name, function(data) {
                return data;
            }); 
          return callback(null, blueprint);
        }
    return {
        getBlueprintsByAuthor: getBlueprintsByNameAndAuthor
    }
    
})();
>>>>>>> 7aee609ebca22fea6189f1eaa627610abc378502
