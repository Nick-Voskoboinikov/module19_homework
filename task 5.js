class HouseholdAppliance {
    constructor() {
        this.description = 'device';
    }
}

class ElectricalAppliance extends HouseholdAppliance {
    constructor(name, type, electricCurrentIntensity, pluggedIn, turnedOn) {
        super();
        this.name=name;
        this.deviceClass='electrical '+this.description;
        this.type=type;
        this.voltage=220;
        this.electricCurrentIntensity=electricCurrentIntensity;
        this.pluggedIn = pluggedIn ? pluggedIn : false;
        this.turnedOn = turnedOn ? turnedOn : false;
    }
    
    plugDeviceIntoSocket() {
        this.pluggedIn=true;
    }
    turnDeviceOn(electricCurrentIntensity) {
        this.turnedOn=true;
    }
    calcPowerIntake() {
        let actualVoltage = this.pluggedIn && this.turnedOn ? this.voltage : 0;
        return actualVoltage*this.electricCurrentIntensity + ' W';
    }
    pollDeviceInfo() {
        return this.name+ ' is an ' + this.deviceClass + ' ' + this.type +'. It is currently' + (!this.pluggedIn?' not ':' ') + 'plugged in and switched ' + (this.turnedOn ? 'on' : 'off') +'. At the moment it consumes ' + this.calcPowerIntake() +'.';
    }
}

const deskLamp= new ElectricalAppliance('Desktop Lamp', 'with energy saving bulb', 1.6, true);
const desktopPC= new ElectricalAppliance('Desktop workstation', 'with some wires, USB ports and other staff', 15, true);


// action

console.log(deskLamp.pollDeviceInfo()); // expected 0 power consumption as switched off.
deskLamp.turnDeviceOn();
console.log(deskLamp.pollDeviceInfo());
console.log(desktopPC.pollDeviceInfo());
