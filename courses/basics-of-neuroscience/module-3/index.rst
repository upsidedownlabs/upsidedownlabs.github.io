.. _basics-of-neuroscience-module-3:

Module 3: Understanding the resting potential
###############################################

Resting potential of a neuron is the electrical potential difference/voltage at which the neuron is not 
actively transmitting any signal (i.e. neither sending nor receiving any signal). Understanding the 
resting potential is crucial for grasping how neurons remain ready to fire an action potential and how 
they process and transmit information. However, before delving into this topic, it's important to first 
explore the electrical properties of neurons, as electricity is the primary means by which neurons 
communicate with each other.

3.1 Fundamentals of electricity
*********************************

Let’s review some fundamental concepts of electricity that will help us in exploring the electrical properties of neurons.

3.1.1 Current
==============

It is defined as the rate of flow of charge. In neurons, this is the movement of ions like sodium (Na⁺) 
and potassium (K⁺) across the membrane, which is essential for generating electrical signals.

3.1.2 Voltage
==============

It is the electrical potential that drives the flow of charge. But in the context of neurons, voltage 
refers to the electric potential difference across the neuron's membrane, which is critical for 
generating and transmitting electrical signals.

To gain a clearer understanding of electric potential, it's essential to define electrostatic force.

3.1.3 Electrostatic force
==========================

It is the force that arises due to the interaction between charged objects or particles. These forces 
are part of the fundamental forces of nature and are described by Coulomb's law.

3.1.4 Coulomb's law
====================

The electrostatic force (F) between two point charges (q1​ and q2) is given by:

.. math::
   
   F= F1= F2= k\frac{q1q2}{r^2}

Equation 1:

- F = Electrostatic force
- k = Coulomb constant (8.99×10*9 Nm*2/C*2)
- q1,q2 = charges
- r = distance between the centers of the two charges

3.1.5 Law of attraction & repulsion
====================================

**Attractive force:** If the charges are of opposite signs (positive and negative), the force is attractive in nature.
**Repulsive Force:** If the charges are of the same sign (both positive or both negative), the force is repulsive in nature.

3.2 Resting Potential
**********************

Resting potential refers to the electrical potential difference across the neuron's membrane when a 
neuron is at rest. It is primarily determined by the unequal distribution of ions, particularly 
potassium (K⁺) and sodium (Na⁺), across the neuron's membrane.

.. note::

   - Membrane potential is the voltage across the membrane at any given moment whereas resting potential is that membrane potential when a neuron is at rest (i.e. neither sending nor receiving any signal). 
   - Voltage across a membrane is a comparative measurement. Neuroscientists consistently use the outside of the cell as the reference point for measuring the voltage across the membrane. For instance, if the inside of the cell is 70 mV more negative than the outside, we would express the voltage as -70 mV. 
      - Voltage range of membrane potential : -60 mV TO +90 mV
      - Voltage of resting potential: Approx -70 mV

The resting potential of a neuron is primarily influenced by two key factors, diffusion and electrostatic forces. Let's understand each of them one by one.

3.2.1 Diffusion
================

Ion Concentration Gradients
-----------------------------

Neurons maintain specific concentrations of ions, particularly sodium (Na⁺), potassium (K⁺), chloride (Cl⁻), and organic anions (A⁻), across their membrane. Typically, there is a higher concentration of K⁺ inside the neuron and a higher concentration of Na⁺ outside.

Movement of Ions
-----------------

Due to the concentration gradient, ions tend to move from areas of higher concentration to lower concentration through channels in the neuron's membrane. For example, K⁺ ions diffuse out of the neuron, while Na⁺ ions tend to diffuse into the neuron.

3.2.2 Electrostatic forces
===========================

Electrostatic forces are essential in creating the resting potential of neurons. They arise from the movement of ions like potassium and sodium, which are influenced by both concentration gradients and the attractive/repulsive forces between charged particles.  The unequal distribution of these ions across the membrane, combined with electrostatic forces, results in a negative charge inside the neuron relative to the outside leading to a typical resting potential of around -70mV which is crucial for the neuron's ability to generate action potentials and communicate with other neurons.

3.3 Equilibrium potential
***************************

The equilibrium potential (also known as the Nernst potential) for a specific ion is the membrane potential at which the net flow of that ion across the membrane is zero. At this potential, the concentration gradient (diffusive forces) is balanced by the electrical gradient (electrostatic forces). This means that the electrostatic forces pulling the ion into the cell are exactly balanced by the concentration gradient pushing it out (or vice versa).

**Nernst Equation:** The equilibrium potential for a specific ion can be calculated using the Nernst equation:



.. math::

   Eion = \frac{RT}{nF} ln \frac{[Iout]}{[Iins]} 

Where:

- Eion​ is the equilibrium potential for the ion.
- Ris the universal gas constant.
- T is the absolute temperature in Kelvin.
- z is the valence (charge) of the ion.
- F is Faraday's constant.
- [Iout] ​and [Iins]​ are the concentrations of the ion outside and inside the cell, respectively.

Equilibrium Potentials for major ions:

- K⁺: Approximately -90 mV
- Na⁺: Approximately +60 mV
- Cl⁻: Approximately -70 mV (depending on the concentration gradients)

3.4 Goldman Equation
*********************

The Goldman equation, often referred to as the GHK equation, calculates the resting potential of a cell based on the permeability and concentrations of multiple ions. It accounts for the relative contributions of different ions to the resting potential. The equation is as follows:

.. todo:: formula

.. note:: The Nernst potential (or equilibrium potential) indicates the voltage for a specific ion, but since the resting potential is affected by multiple ions, we use the Goldman equation to calculate the overall resting potential of the cell.

3.5 Ion channels
*****************

Ion filters in neurons (also known as ion channels or ion selective channels) are integral membrane proteins that regulate the flow of ions across the neuronal membrane. The function of ion channels is to allow specific inorganic ions—primarily Na+, K+, Ca2+, or Cl-—to diffuse rapidly down their electrochemical gradients across the lipid bilayer.

There are 2 types of ion channels:

- **Leak Channels:** Always open, allow ions to flow passively according to their concentration gradient.
- **Voltage-Gated Channels:** Open and close in response to changes in membrane potential. These are critical in generating and propagating action potentials.

Ion selectivity is crucial, so it’s interesting to explore how nature creates channels that allow potassium ions to pass while blocking sodium ions. While it might seem straightforward to create a channel that repels all positively charged ions by adding a positive charge to the pore, this approach wouldn't work here since both potassium and sodium are positively charged. Instead, we need to differentiate them based on size. Sodium ions have an ionic radius of about 116 picometers, while potassium ions are slightly larger at 152 picometers.

So nature has cleverly built selective ion channels that contain a "selectivity filter" to allow potassium ions to pass through easily, while the spacing is slightly off for sodium, making it energetically unfavorable for sodium ions to enter.

The key lies in how these ions interact with water. When a cation is in solution, it attracts water molecules, forming a "solvation shell" around it.The solvation shell affects how ions move in and out of the neuron by influencing their size and ability to pass through the membrane. It helps potassium ions move out of the neuron, making the inside of the neuron negative, which is essential for maintaining the resting potential.

3.6 Sodium potassium pump
**************************

The sodium-potassium pump (Na⁺/K⁺ ATPase) is a vital membrane protein found in nearly all animal cells. It plays a crucial role in maintaining the resting potential of the membrane.

Ion Transport

- Active Transport: The sodium-potassium pump is an active transporter, meaning it requires energy (in the form of ATP) to move ions against their concentration gradients.
- Ion Movement: For every cycle, the pump transports:
   - 3 sodium ions (Na⁺) out of the cell.
   - 2 potassium ions (K⁺) into the cell.

This results in a net export of one positive charge, contributing to the negative resting membrane potential inside the cell.

.. note:: The pump helps maintain the electrochemical gradient essential for the resting potential, which is typically around -70 mV in neurons. This gradient is crucial for the generation of action potentials (It is a rapid, transient change in the electrical charge across the membrane of a neuron that allows it to transmit signals along its axon. It is the fundamental mechanism by which neurons communicate with one another and with other cells).

.. admonition:: fun fact
   
   The sodium potassium pump nearly consumes 70% of the energy of the brain.
