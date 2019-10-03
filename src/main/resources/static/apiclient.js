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
})();    
