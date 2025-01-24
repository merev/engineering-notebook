<div>
<img src="/articles/electronics/theory/electric-current/main-image.png" alt="File Icon" style="width: 100%; border-radius: 10px; margin-bottom: 20px"/>
</div>

<h1 style="font-size: 50px; font-weight: bold">Electric Current</h1>

---

*Electric current* refers to the amount of charge that flows through a cross-sectional area *A* over a given period of time. This cross-sectional area might represent a disk within a gas, plasma, or liquid. In electronics, however, it is typically a section cut through a solid material, such as a conductor.

If $\Delta Q$ is the amount of charge passing through an area in a time interval $\Delta t$, then the *average current* $I$<sub>ave</sub> is defined as:

&nbsp;

::: columns
${_{I^{ave} =}}^{\dfrac{\Delta Q}{\Delta t}}$

$~~~~~~~~~~~~~~~~~~~~~~$

![Electric Current Diagram](/articles/electronics/theory/electric-current/figure-one.png) $~~~~~~~~$
:::

***Figure 1***

When the current varies with time, the *instantaneous current* $I$ is defined by taking the limit as $\Delta t \to 0$. In this case, the current represents the instantaneous rate at which charge flows through a given area:  

$$
{_{I =}} \lim_{\Delta t \to 0} \frac{\Delta Q}{\Delta t} {_{=}} \frac{dQ}{dt}
$$

&nbsp;

The unit of current is measured in coulombs per second, commonly known as the *ampere* ($A$), named in honor of André-Marie Ampère:  

$$
1 \, \text{A} = 1 \, \text{C}/\text{s}
$$


The term *amp* can be used instead of *ampere*. Since the ampere is a relatively large unit, current is often measured in smaller units like *milliamps* (1 $mA$ = 1 × 10<sup>−3</sup> $A$), *microamps* (1 $\mu A$ = 1 × 10<sup>−6</sup> $A$), and *nanoamps* ( 1 $nA$ = 1 × 10<sup>−9</sup> $A$).

&nbsp;

## Current in Conductors

---

In conductors like copper, electrical current consists of free electrons moving through a lattice of copper ions. Each copper atom contributes one free electron. The charge of a single electron is expressed as:

::: columns
$Q$ <sub>$\text{electron}$</sub> $=$$(-e) = -1.602 \times 10$<sup>$-19$</sup> $\text{C}$
:::

This is equal to, but opposite in sign of, the charge of a single copper ion. (The positive charge arises because the atom donates one electron to the "sea" of free electrons that move randomly within the lattice. Losing an electron leaves each atom with one more proton than electrons.) The charge of a proton is:

::: columns
$Q$ <sub>$\text{proton}$</sub> $=$$(+e) = +1.602 \times 10$<sup>$-19$</sup> $\text{C}$
:::

The conductor, as a whole, is neutral, since there are equal numbers of electrons and protons. We see that if a current of $1 \text{A}$ flows through a copper wire, the number of electrons flowing by a cross section of the wire in 1s is equal to:

::: columns
$1 \text{A} = -6.24 \times 10$<sup>$18$</sup> $\text{electrons/s}$
:::

There’s an issue: how can we have a negative number of electrons flowing per second? The answer lies in understanding that electrons move opposite to the direction of the defined current. Positive charges do not move within the conductor since they are fixed in the lattice; only electrons are free to flow.

This convention dates back to Benjamin Franklin, who assigned positive charge to what he believed were the moving entities. Later, J.J. Thomson discovered that the actual moving charges were electrons, which flow opposite to the defined current. Despite this, we continue using Franklin's convention, assuming positive charges move, as it simplifies calculations and formulas like Ohm’s law $(V = IR)$.

In summary, while conventional current assumes positive charge flow, in reality, it’s electrons moving in the opposite direction.

&nbsp;

## Examples

---

***Example 1:*** How many electrons pass a given point in 3 s if a conductor is carrying a 2-A current?

&nbsp;

::: columns

![Electric Current Diagram](/articles/electronics/theory/electric-current/figure-two.png) $~~~~~~~~$

$$
{_{I^{ave} =}}^{\dfrac{\Delta Q}{\Delta t}} {_{=}} ^{\dfrac{6 \text{C}}{3 \text{s}}} {_{=}}_{2 \text{A}}
$$
:::

&nbsp;

***Answer:*** The charge that passes a given point in 3 s is:

$$
\Delta Q = I \times \Delta t = (2 \, \text{A})(3 \, \text{s}) = 6 \, \text{C}
$$

One electron has a charge of $1.6 \times 10$<sup>$−19$</sup> $\text{C}$, so $6 \text{C}$ worth of electrons is:

::: columns
\# $\text{Electrons} = 6 \text{C}/{1.602 \times 10}$<sup>$-19$</sup> $\text{C} = 3.74 \times 10$<sup>$19$</sup>
:::

&nbsp;

***Example 2:*** Charge is changing in a circuit with time according to $Q(t) = (0.001 C) sin [(1000/s) t]$. Calculate the instantaneous current flow.

$$
{_{I =}} \frac{dQ}{dt} {_{=}} \frac{d}{dt} {_{\left[ (0.001 \, \text{C}) \sin \left( {1000}/{\text{s}} \cdot t \right) \right] 
= (0.001 \text{C}) \left( {1000}/{\text{s}} \right) \cos \left( {1000}/{\text{s}} \cdot t \right) 
= (1 \text{A}) \cos \left( {1000}/{\text{s}} \cdot t \right)}}
$$

&nbsp;

***Answer:*** If we plug in a specific time within this equation, we get an instantaneous current for that time. For example, if $t = 1$, the current would be $0.174 \text{A}$. At $t = 3\text{s}$, the current would be − $0.5 \text{A}$, the negative sign indicating that the current is in the opposite direction — a result of the sinusoidal nature.

&nbsp;

## Currents in Perspective

---

To understand current magnitudes better, here are some examples:  

- **100-W lightbulb:** ~$1 \text{A}$  
- **Microwave:** $8-13 \text{A}$   
- **Laptop computer:** $2-3 \text{A}$  
- **Electric fan:** $1 \text{A}$   
- **Toaster:** $7-10 \text{A}$   
- **LED (typical):** $20 \text{mA}$   
- **Mobile phone (web use):** ~$200 \text{mA}$ 
- **Automobile starter:** ~$200 \text{A}$  
- **Lightning strike:** ~$1000 \text{A}$ 
- **Fatal current (cardiac/respiratory arrest):** $100 \text{mA} - 1 \text{A}$  

By understanding these examples, you can better gauge the significance of current in different contexts.

