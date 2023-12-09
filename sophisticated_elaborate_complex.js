/* sophisticated_elaborate_complex.js */

// This code implements a complex simulation of a traffic control system using object-oriented programming concepts in JavaScript.

// Define the Vehicle class
class Vehicle {
  constructor(licensePlate) {
    this.licensePlate = licensePlate;
    this.velocity = 0;
    this.position = 0;
    this.acceleration = 0;
  }

  accelerate(acceleration) {
    this.acceleration = acceleration;
  }

  updatePosition(time) {
    this.position = this.position + this.velocity * time + (0.5 * this.acceleration * time * time);
    this.velocity = this.velocity + this.acceleration * time;
  }

  displayInfo() {
    console.log(`License Plate: ${this.licensePlate}, Position: ${this.position.toFixed(2)}, Velocity: ${this.velocity.toFixed(2)}, Acceleration: ${this.acceleration.toFixed(2)}`);
  }
}

// Define the TrafficController class
class TrafficController {
  constructor() {
    this.vehicles = [];
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  simulateTraffic(timeInterval, simulationTime) {
    let currentTime = 0;
    while (currentTime < simulationTime) {
      console.log(`Current Time: ${currentTime}`);
      this.updateVehiclesPositions(timeInterval);
      this.displayInfoOfAllVehicles();
      currentTime += timeInterval;
    }
  }

  updateVehiclesPositions(time) {
    for (let i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].updatePosition(time);
    }
  }

  displayInfoOfAllVehicles() {
    console.log("Vehicle Information:");
    for (let i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].displayInfo();
    }
  }
}

// Create vehicle instances
const vehicle1 = new Vehicle("ABC123");
const vehicle2 = new Vehicle("XYZ789");

// Set initial acceleration
vehicle1.accelerate(2);
vehicle2.accelerate(3);

// Create traffic controller instance and add vehicles
const trafficController = new TrafficController();
trafficController.addVehicle(vehicle1);
trafficController.addVehicle(vehicle2);

// Simulate traffic for 10 seconds with a time interval of 1 second
trafficController.simulateTraffic(1, 10);
