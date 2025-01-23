*Electric current* is the total charge that passes through a cross-sectional area *A* per unit time. This cross-sectional area could represent a disk placed in a gas, plasma, or liquid. However, in electronics, this area is most frequently a slice through a solid material, such as a conductor.

$10^3$

If $\Delta Q$ is the amount of charge passing through an area in a time interval $\Delta t$, then the *average current* $I^{ave}$ is defined as:

&nbsp;

::: columns
${_{I^{ave} =}}^{\dfrac{\Delta Q}{\Delta t}}$

$~~~~~~~~~~~~~~~~~~~~~~$

![Electric Current Diagram](/articles/electric-current.png) $~~~~~~~~$
:::

***Figure 2.1***

If the current changes with time, we define the *instantaneous current* $I$ by taking the limit as $\Delta t \to 0$, so that the current is the instantaneous rate at which charge passes through an area:  

$$
{_{I =}} \lim_{\Delta t \to 0} \frac{\Delta Q}{\Delta t} {_{=}} \frac{dQ}{dt}
$$

&nbsp;

The unit of current is coulombs per second, which is also called the *ampere* (A), named after André-Marie Ampère:  

$$
1 \, \text{A} = 1 \, \text{C}/\text{s}
$$


To sound less nerdy, the term amp can be used in place of ampere. Because the ampere is a rather large unit, current is also expressed in milliamps (1 $mA$ = 1 × 10 − 3 $A$), micro-amps (1 μ$A$ = 1 × 10 − 6 $A$), and nanoamps ( 1 $nA$ = 1 × 10 − 9 $A$).

## Current in Conductors

---

Within conductors such as copper, electrical current is made up of free electrons moving through a lattice of copper ions. Copper has one free electron per copper atom. The charge on a single electron is given by:

$$
{_{Q^{\text{electron}} = (-e) = -1.602 \times 10}}^{-19} {_{\text{C}}}
$$

&nbsp;

This is equal to, but opposite in sign of, the charge of a single copper ion. (The posi- tive charge is a result of the atom donating one electron to the “sea” of free electrons randomly moving about the lattice. The loss of the electron means there is one more proton per atom than electrons.) The charge of a proton is:

$$
{_{Q^{\text{electron}} = (+e) = +1.602 \times 10}}^{-19} {_{\text{C}}}
$$

&nbsp;

The conductor, as a whole, is neutral, since there are equal numbers of electrons and protons. Using Eq. 2.2, we see that if a current of 1 A flows through a copper wire, the number of electrons flowing by a cross section of the wire in 1 s is equal to:

$$
{_{1 \, \text{A} = -6.24 \times 10}}^{18} {_{\text{electrons/s}}}
$$

&nbsp;

Now, there is a problem! How do we get a negative number of electrons flowing per second, as our result indicates? The only two possibilities for this would be to say that either electrons must be flowing in the opposite direction as the defined current, or positive charges must be moving in our wire instead of electrons to account for the sign. The last choice is an incorrect one, since experimental evidence exists to prove electrons are free to move, not positive charges, which are fixed in the lattice network of the conductor. (Note, however, there are media in which positive charge flow is possible, such as positive ion flow in liquids, gases, and plasmas.) It turns out that the first choice—namely, electrons flowing in the opposite direction as the defined current flow—is the correct answer.

Long ago, when Benjamin Franklin (often considered the father of electronics) was doing his pioneering work in early electronics, he had a convention of assigning positive charge signs to the mysterious (at that time) things that were moving and doing work. Sometime later, a physicist by the name of Joseph Thomson performed an experiment that isolated the mysterious moving charges. However, to measure and record his experiments, as well as to do his calculations, Thomson had to stick with using the only laws available to him—those formulated using Franklin’s posi- tive currents. But these moving charges that Thomson found (which he called elec- trons) were moving in the opposite direction of the conventional current I used in the equations, or moving against convention.

What does this mean to us, to those of us not so interested in the detailed phys- ics and such? Well, not too much. We could pretend that there were positive charges moving in the wires and various electrical devices, and everything would work out fine: negative electrons going one way are equivalent to positive charges going in the opposite direction. In fact, all the formulas used in electronics, such as Ohm’s law (V = IR), “pretend” that the current I is made up of positive charge carriers. We will always be stuck with this convention. In a nutshell, it’s convenient to pretend that positive charges are moving. So when you see the term electron flow, make sure you realize that the conventional current flow I is moving in the opposite direction. In a minute, we’ll discuss the microscopic goings-on within a conductor that will clarify things a bit better.

## Examples

---

***Example 1:*** How many electrons pass a given point in 3 s if a conductor is carrying a 2-A current?

&nbsp;

::: columns

![Electric Current Diagram](/articles/electric-current-2.png) $~~~~~~~~$

$$
{_{I^{ave} =}}^{\dfrac{\Delta Q}{\Delta t}} {_{=}} ^{\dfrac{6 \text{C}}{3 \text{s}}} {_{=}}_{2 \text{A}}
$$
:::

&nbsp;

***Answer:*** The charge that passes a given point in 3 s is:

$$
\Delta Q = I \times \Delta t = (2 \, \text{A})(3 \, \text{s}) = 6 \, \text{C}
$$

One electron has a charge of 1.6 × 10−19 C, so 6 C worth of electrons is:

$$
{_{\# \, \text{Electrons} ={6 \text{C}}/{1.602 \times}} {_{10}}^{-19} {_{\text{C}}}} {_{= 3.74 \times }} {_{10}}^{19}
$$

&nbsp;

***Example 2:*** Charge is changing in a circuit with time according to Q(t) = (0.001 C) sin [(1000/s) t]. Calculate the instantaneous current flow.

$$
{_{I =}} \frac{dQ}{dt} {_{=}} \frac{d}{dt} {_{\left[ (0.001 \, \text{C}) \sin \left( {1000}/{\text{s}} \cdot t \right) \right] 
= (0.001 \text{C}) \left( {1000}/{\text{s}} \right) \cos \left( {1000}/{\text{s}} \cdot t \right) 
= (1 \text{A}) \cos \left( {1000}/{\text{s}} \cdot t \right)}}
$$

&nbsp;

***Answer:*** If we plug in a specific time within this equation, we get an instantaneous current for that time. For example, if t = 1, the current would be 0.174 A. At t = 3 s, the current would be − 0.5 A, the negative sign indicating that the current is in the opposite direction—a result of the sinusoidal nature.


> **Note:** The last example involved using calculus—you can read about the basics of calculus in App. C if you’re unfamiliar with it. Fortunately, as we’ll see, rarely do you actually need to work in units of charge when doing electronics. Usually you worry only about current, which can be directly measured using an ammeter, or calculated by applying formulas that usually require no calculus whatsoever.


## Currents in Perspective

---

To understand current magnitudes better, here are some examples:  

- **100-W lightbulb:** ~1 A  
- **Microwave:** 8–13 A  
- **Laptop computer:** 2–3 A  
- **Electric fan:** 1 A  
- **Toaster:** 7–10 A  
- **LED (typical):** 20 mA  
- **Mobile phone (web use):** ~200 mA  
- **Automobile starter:** ~200 A  
- **Lightning strike:** ~1000 A  
- **Fatal current (cardiac/respiratory arrest):** 100 mA–1 A  

By understanding these examples, you can better gauge the significance of current in different contexts.

