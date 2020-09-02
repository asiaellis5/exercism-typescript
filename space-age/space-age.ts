const round = (x: number): number => Math.round(100 * x) / 100;

export class SpaceAge {
  public seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarthUnrounded(): number {
    const secondsPerYear = 60 * 60 * 24 * 365.25;
    return this.seconds / secondsPerYear;
  }

  onEarth() {
    return round(this.onEarthUnrounded());
  }

  onMercury() {
    return round(this.onEarthUnrounded() / 0.24085019);
  }

  onVenus() {
    return round(this.onEarthUnrounded() / 0.61519726);
  }

  onMars() {
    return round(this.onEarthUnrounded() / 1.8808158);
  }

  onJupiter() {
    return round(this.onEarthUnrounded() / 11.862615);
  }

  onSaturn() {
    return round(this.onEarthUnrounded() / 29.447498);
  }

  onUranus() {
    return round(this.onEarthUnrounded() / 84.016846);
  }

  onNeptune() {
    return round(this.onEarthUnrounded() / 164.79132);
  }
}
