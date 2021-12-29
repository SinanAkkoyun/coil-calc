// Metric units [mm]
let diameter = 0.268
let pitch_x = 0.55
let pitch_y = 0.55

// Dimension limitations [mm]
let length = 15
let barrel_dia = 5
let outer_dia = 20

let voltage = 11.1 // V
let amps = 123 // A
let resistance = voltage / amps // Ohms

const copper_resistivity = 1.72 * Math.pow(10, -8)
const copper_resistance = (length, diameter) => (length * copper_resistivity)/(Math.PI * Math.pow((diameter*0.001)/2, 2))



console.log(copper_resistance(1, diameter))