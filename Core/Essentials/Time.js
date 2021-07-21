var Time = (function() {
  class TimeClass {
    
    lastTime = 0.0;
    deltaTime = 0.0;
    
    update() {
      this.deltaTime = (main.millis() - this.lastTime)/1000.0;
      this.lastTime = main.millis();
    }
  }
  var instance;
  return {
    getInstance: function() {
      if (instance == null) {
        instance = new TimeClass();
        instance.constructor = null;
      }
      return instance;
    }
  };
})();