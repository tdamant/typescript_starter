import * as assert from "assert";

class Driver {
  private currentRouteIndex: number = 0;
  private accumulatedDriverGossips: Driver[] = [];

  constructor(private route: number[] ) {}

  get currentStop() {
    return this.route[this.currentRouteIndex];
  }

  get gossips() {
    return [
      ...this.accumulatedDriverGossips,
      this
    ];
  }

  driveToNextStop(): number {
    this.currentRouteIndex = (this.currentRouteIndex + 1) % this.route.length;
    return this.route[this.currentRouteIndex];
  }

  speakToDriver(fellowDriver: Driver) {
    this.accumulatedDriverGossips =this.accumulatedDriverGossips.concat(fellowDriver.gossips)
  }
}

function matchMakeDrivers(driver1: Driver, driver2: Driver) {
  driver1.speakToDriver(driver2);
  driver2.speakToDriver(driver1)
}

describe("driver", () => {
  it("keeps track of where they are on their route", () => {
    const route = [3, 1, 2, 3];
    const driver = new Driver(route);
    assert.strictEqual(driver.currentStop, route[0]);
    driver.driveToNextStop();
    assert.strictEqual(driver.currentStop, route[1]);
    driver.driveToNextStop();
    assert.strictEqual(driver.currentStop, route[2]);
    driver.driveToNextStop();
    assert.strictEqual(driver.currentStop, route[3]);
    driver.driveToNextStop();
    assert.strictEqual(driver.currentStop, route[0]);
    driver.driveToNextStop();
  });

  it("keeps track of which gossip the driver knows", () => {
    const driver1 = new Driver([1]);
    const driver2 = new Driver([1]);

    assert.deepEqual(driver1.gossips, [driver1]);
    assert.deepEqual(driver2.gossips, [driver2]);

    matchMakeDrivers(driver1, driver2);
    assert.equal(driver1.gossips, [driver1, driver2])
  });
});
