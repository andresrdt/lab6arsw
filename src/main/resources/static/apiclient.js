const apiUrl = "http://localhost:8080/blueprints/"
var ApiClient = (function() {

    var getBlueprintsByAuthor = function(author, callback) {
        var blueprints = $.get("http://localhost:8080/blueprints/" + author, function(data) {
            return data;
        });
        return callback(null, blueprints);
    }
    var getBlueprintsByNameAndAuthor=function(author,name,callback){
          var blueprints = $.get("http://localhost:8080/blueprints/" + author + "/" + name, function(data) {
            return data;
        });
        return callback(null, blueprints);
    }
    return {
        getBlueprintsByAuthor: getBlueprintsByAuthor,
        getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor
    }
    
})();
