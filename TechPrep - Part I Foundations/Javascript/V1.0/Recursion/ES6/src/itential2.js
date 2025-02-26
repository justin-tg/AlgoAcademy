/*
You are tasked with building a device manager for a group of routers in a network. 
  - Devices can be connected together using ports.
  - A device requires an open port to be able to connect to another device
  - A device can be connected to another device more than once
  - A device must be ONLINE in order to connect or disconnect it
  - A device must have an open port in order to connect to it
  - Connections between devices are bi-directional

A stub for a device manager is given below including an initial set of devices. Implement the missing functionality.
*/

const DeviceState = {
  ONLINE: "ONLINE",
  OFFLINE: "OFFLINE",
};

class DeviceManager {
  store = {
    0: {
      name: "mike's device",
      ports: 3,
      state: DeviceState.ONLINE,
      connections: [],
    },
    1: { name: "office", ports: 5, state: DeviceState.ONLINE, connections: [] },
    2: {
      name: "jen's device",
      ports: 3,
      state: DeviceState.OFFLINE,
      connections: [],
    },
    3: { name: "tmp", ports: 2, state: DeviceState.ONLINE, connections: [] },
    4: { name: "r5", ports: 6, state: DeviceState.ONLINE, connections: [] },
  };

  constructor() {}

  /**
   * Retrieve all devices that are ONLINE with an least one open port
   * @returns {list} the names of all available devices
   * 
   * [name1, name2, name3]
   */
  getOpenDevices() {
    // initialize the result array of open devices
    let openDevices = [];
    // iterate over all devices
    for (const [key, value] of Object.entries(store)) {
      // if the device is in an Online state
      if (value.state === DeviceState.ONLINE && value.ports > value.connections.length) {
        // then pass it into the result array
        openDevices.push(key);
      }
    }
    // return the array
    return openDevices;
  }

  /**
   * Establish a connection between two devices. An error is thrown if the connection cannot be made
   * @param {number} device1ID - id of device
   * @param {number} device2ID - id of device
   */
  connect(device1ID, device2ID) {

    // move this error checking logic into helper function(s)
    if (!this.store[device1ID] || !this.store[device2ID]) {
      throw new Error ("Error | Device ID does not exist - Unable to establish connection");
    }

    let openDevices = this.getOpenDevices();
    // validate that both the device ids exist using getOpenDevices function with the input id
    if (!openDevices.includes(device1ID) || !openDevices.includes(device2ID)) {
      throw new Error ("Error | Device ID not Online - Unable to establish connection");
    }

    // connect the devices
    this.store[device1ID].connections.push(device2ID);
    this.store[device2ID].connections.push(device1ID);
  }

  /**
   * Disconnect two devices. If no connection exists between these devices, an error is thrown
   * @param {number} device1ID - id of device
   * @param {number} device2ID - id of device
   */
  disconnect(device1ID, device2ID) {

    // move this error checking logic into helper function(s)
    if (!this.store[device1ID] || !this.store[device2ID]) {
      throw new Error ("Error | Device ID does not exist - Unable to establish connection");
    }

    let openDevices = this.getOpenDevices();
    // validate that both the device ids exist using getOpenDevices function with the input id
    if (!openDevices.includes(device1ID) || !openDevices.includes(device2ID)) {
      throw new Error ("Error | Device ID not Online - Unable to establish connection");
    }

    if (this.isDirectlyConnected(device1ID, device2ID)) {
      // for each device remove the other's device id from it's connections array
      let indexOfDevice2ID = this.store[device1ID].connections.indexOf(device2ID);
      this.store[device1ID].connections.splice(indexOfDevice2ID, 1);

      
      let indexOfDevice1ID = this.store[device2ID].connections.indexOf(device1ID);
      this.store[device2ID].connections.splice(indexOfDevice1ID, 1);

    } else {
      throw new Error ("Error | Devices not connected - Unable to disconnect");
    }

  }

  /**
   * Checks to see if two devices are connected
   * @param {number} sourceId
   * @param {number} destinationId
   * @returns true or false
   */
  isConnected(sourceId, destinationId) {
    // check that both id's for the devices exist
    // move this error checking logic into helper function(s)
    if (!this.store[device1ID] || !this.store[device2ID]) {
      throw new Error ("Error | Device ID does not exist - Unable to establish connection");
    }

    let visited = new Set();

    const dfs = (currentId) => {
      // base case
      // check to see that the currentId is the destinationId -- indicating you've found the id you're looking for
      if (currentId === destinationId) {
        return true;
      }

      visited.add(currentId);

      // iterate through the currentId's connections
      for (const nextDevice of this.store[currentId].connections) {
        // for each element in the connections check if that element has already been visited
        // if the element has been visited skip it -- no need to do it again
        // check if the device id does NOT exist in the set
        if (!visited.has(currentId)) {
          // check the element by recursively calling it into the dfs function
          return dfs(nextDevice);
        }
        return false;
      }
    }

    return dfs(sourceId);
  }


  isDirectlyConnected(sourceId, destinationId) {
    // check that both id's for the devices exist
    // move this error checking logic into helper function(s)
    if (!this.store[device1ID] || !this.store[device2ID]) {
      throw new Error ("Error | Device ID does not exist - Unable to establish connection");
    }
    
    // check that the sourceDevice and the destinationDevice contains the other's id in their connections array
    // Would like the connections array to have constant time lookup instead of linear - switch to Map backing store if time
    if (this.store[sourceId].connections.includes(destinationId) && this.store[destinationId].connections.includes(sourceId)) {
      return true;
    }

    // return a boolean
    return false;
  }

}

// TESTS - FOR AFTER
const manager = new DeviceManager();
test(manager.getOpenDevices().length, 4);

// test standard connection
manager.connect(0, 1);
manager.connect(1, 3);
test(manager.isConnected(0, 1), true);
test(manager.isConnected(0, 3), true);
test(manager.isConnected(3, 0), true);

// retest after disconnect
manager.disconnect(1, 3);
test(manager.isConnected(0, 3), false);

function test(result, expected) {
  if (result === expected) {
    console.log(`SUCCESS`);
  } else {
    console.log(`FAIL: Expected ${result} to equal ${expected}`);
  }
}

