apimock = (function() {
  let mockdata = [];

  mockdata["JhonConnor"] = [
    {
      author: "JhonConnor",
      points: [
        { x: 50, y: 20 },
        { x: 30, y: 100 },
        { x: 100, y: 70 },
        { x: 20, y: 10 }
      ],
      name: "blueprint1"
    },
    {
      author: "JhonConnor",
      points: [
        { x: 80, y: 60 },
        { x: 30, y: 90 },
        { x: 65, y: 70 },
        { x: 80, y: 60 }
      ],
      name: "blueprint2"
    },
    
  ];
  mockdata["Nicolas"] = [
    {
      author: "Nicolas",
      points: [
        { x: 65, y: 23 },
        { x: 30, y: 200 },
        { x: 70, y: 80 },
        { x: 460, y: 100 }
      ],
      name: "blueprint3"
    }
  ];

  mockdata["Andres"] = [
    {
      author: "Andres",
      points: [
        { x: 21, y: 34 },
        { x: 53, y: 78 },
        { x: 567, y: 90 },
        { x: 123, y: 54 },
        { x: 45, y: 62 },
        { x: 678, y: 23 },
        { x: 45, y: 57 }
      ],
      name: "blueprint4"
    }
  ];
  return {
    getBlueprintsByAuthor: function(name, callback) {
      callback(mockdata[name]);
    },
    getBlueprintsByNameAndAuthor: function(author, name, callback) {
      callback(
        mockdata[author].filter(obj => {
          return obj.name === name;
        })[0]
      );
    }
  };
})();
