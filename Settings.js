var Settings = (function() {
  class SettingsClass {

    //Only change these values
    width = main.windowWidth;
    height = main.windowHeight;
    isTransformAnchorCenter = true;
    setActiveScene = () => new FarmScene();

    //Do not touch the rest
  }
  var instance;
  return {
    getInstance: function() {
      if (instance == null) {
        instance = new SettingsClass();
        instance.constructor = null;
      }
      return instance;
    }
  };
})();