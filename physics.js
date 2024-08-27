/*
Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.

He must use the Second Law of Motion that states,
 "when the forces acting on an object are unbalanced, the object will accelerate."

This acceleration is dependent upon the force that acts upon the object and the object's mass.

So he wants to know what the acceleration of that object is, depending on its properties:

mass of xx
Δv of xx
Δt of xx
force of xx
distance xx
time xx
Create a function named getAcceleration that calculates the acceleration of a given object. For example:

{
  f: 10,
  m: 5,
  Δv: 100,
  Δt: 50,
  t:1,
  d: 10
}
If it is not possible to calculate it, it must return the string "impossible".


a = acceleration
m = mass
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time
*/

// const object = { d: 10, f: 2, Δv: 100 }

// const object = { Δv: 100, Δt: 50 }
//  {
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t:1,
//     d: 10
// }
//Formulas
// a = F/m
// a = Δv/Δt
// a = 2d/t^2

const getAcceleration = (obj) => {
    if (obj.f !== undefined && obj.m !== undefined) {
        return obj.f/obj.m;
    }

    if (obj.Δv !== undefined && obj.Δt !== undefined) {
        return obj.Δv/obj.Δt;
    }

    if (obj.d != undefined && obj.t != undefined) {
        return 2*obj.d/ Math.pow(obj.t, 2);
    }

    return "impossible";
}

// console.log(getAcceleration(object))