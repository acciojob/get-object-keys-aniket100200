let student = {
  name: "Aniket",
  __proto__: {
    getKeys: function () {
      // Your implementation for getting keys goes here
      console.log("Keys:", Object.keys(this));
    },
  },
};

// Now you can call getKeys on the student object
student.getKeys();
