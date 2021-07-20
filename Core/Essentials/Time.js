var Time = (function() {
  class TimeClass {
    
    lastTime;
    deltaTime;
    
    update() {
      deltaTime = (Date.now() - lastTime)/1000;
      lastTime = Date.now();
    }
  }
  var instance;
  return {
    getInstance: function() {
      if (instance == null) {
        instance = new TimeClass();
        // Hide the constructor so the returned object can't be new'd...
        instance.constructor = null;
      }
      return instance;
    }
  };
})();