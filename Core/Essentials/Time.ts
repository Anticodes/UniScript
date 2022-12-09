class Time {
  lastTime = 0.0;
  deltaTime = 0.0;

  update(currentTime: number) {
    this.deltaTime = (currentTime - this.lastTime) / 1000.0;
    this.lastTime = currentTime;
  }
}

export default new Time();
