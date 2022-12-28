function ElectricalAppliance(name, type, electricCurrentIntensity, pluggedIn=false, turnedOn=false) {
   this.name=name,
   this.deviceClass='Electrical appliance',
   this.type=type,
   this.voltage=220,
   this.electricCurrentIntensity=electricCurrentIntensity,
   this.pluggedIn=pluggedIn,
   this.turnedOn=turnedOn
}

ElectricalAppliance.prototype.plugDeviceIntoSocket=function(){
    this.pluggedIn=true;
}

ElectricalAppliance.prototype.turnDeviceOn=function(){
    this.turnedOn=true;
}

ElectricalAppliance.prototype.outputPowerIntake=function(electricCurrentIntensity){
    let actualVoltage = this.pluggedIn && this.turnedOn ? this.voltage : 0;
    console.log(`${this.name} consumes ${actualVoltage*this.electricCurrentIntensity} W <}{> ${this.name} потребляет  ${actualVoltage*this.electricCurrentIntensity} W`);
}

const deskLamp= new ElectricalAppliance('Desktop Lamp', 'with energy saving bulb', 1.6, true);
const desktopPC= new ElectricalAppliance('Desktop workstation', 'with some wires, USB ports and other staff', 15, true);


// action

deskLamp.turnDeviceOn();
console.log(deskLamp);
console.log(desktopPC);
deskLamp.outputPowerIntake();
desktopPC.outputPowerIntake(); // expected 0 as switched off.
