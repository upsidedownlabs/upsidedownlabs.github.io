.. _module-4:

Module 4 : Passive Membrane Properties
########################################

Studying passive membrane properties before understanding action potential is necessary as they influence how signals 
propagate and decay along neurons, determining how far signals can travel before requiring regeneration. 

4.1 Resistance and Capacitance in membrane  
*******************************************

There are two significant electrical properties of neurons that significantly influence how neurons generate and 
transmit signals. Let us understand each of them one by one.

4.1.1 Resistance
=================

Resistance is the measure of how much a material opposes the flow of electric current. In the context of neurons, 
it refers to how difficult it is for ions to flow across the membrane.

Types of Resistance in Neurons :
--------------------------------

1. Membrane Resistance (Rm)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Membrane resistance refers to resistance to the flow of ions across the neuronal membrane. It determines how easily ions can cross the membrane when ion channels open.

**Factors affecting membrane resistance:**

- Ion Channels: The presence and density of ion channels directly affect membrane resistance. More channels result in lower resistance because they provide additional pathways for ions to flow.
- Membrane Composition: The lipid bilayer structure and the types of proteins embedded in the membrane influence its overall resistance. A thicker membrane will have higher resistance.

.. todo:: Add Membrane Resistance (Rm) graphic here.

.. note:: A high membrane resistance helps maintain the membrane's resting potential by minimizing the flow of ions across it. 

2. Axial Resistance (Ri)
~~~~~~~~~~~~~~~~~~~~~~~~

Axial resistance refers to resistance to the flow of electrical current along the length of the neuron's axon or dendrites. It is influenced by the internal properties of the cytoplasm and the dimensions of the neuron’s axon or dendrites.

**Factors affecting axial resistance:**

- Cytoplasmic Conductivity: The concentration of ions and other conductive materials in the cytoplasm affects axial resistance. A higher concentration of conductive ions leads to low axial resistance.
- Diameter of the Neuron: Larger diameter axons have lower axial resistance because a greater cross-sectional area allows for easier ion flow. This is why larger axons can conduct signals more rapidly.

.. todo:: Add Axial Resistance (Ri) graphic here

.. note:: Axial resistance affects how far a signal can travel along an axon without significant potential loss. Lower axial resistance allows signals to travel farther and faster.

.. todo:: ADD RESISTANCE FORMULA

.. admonition:: CONDUCTANCE: (Additional info section)
   It is the ease with which electric current can flow through a membrane. In the context of neurons, it refers to the ease with which ions can move across the neuronal membrane, meaning a higher conductance indicates a lower resistance, allowing for easier passage of electrical signals through the neuron. 

.. todo:: ADD CONDUCTANCE FORMULA

4.1.2 Capacitance:
==================

Capacitance is the ability of a system to store electric charge. [1]_

In neurons, the Membrane capacitance (Cm) can be described as the capacity of a neuronal membrane to store charge, which is crucial for 
creating and maintaining the membrane potential.

Factors Affecting Membrane Capacitance:
----------------------------------------

- Surface Area: A larger surface area increases capacitance, allowing the membrane to store more charge.
- Thickness of the Membrane: Thinner membranes generally have higher capacitance because the distance between charges is less.

.. todo:: CAPACITOR FORMULA

Role in Membrane Potential
---------------------------

Capacitance affects how quickly a neuron can respond to changes in voltage. When a current is applied, the membrane capacitance 
determines how quickly the membrane potential changes. A high capacitance means the membrane can hold more charge, resulting in a 
slower rate of potential change, while a low capacitance allows for rapid changes.

4.2 Length and Time constant
*****************************

The interplay between resistance and capacitance significantly impacts how neurons process and transmit signals. 

Time Constant (Tau: τ)
=========================

The time constant is defined as the product of resistance and capacitance. It indicates 
how quickly the membrane potential can change in response to a stimulus. A longer time constant means the neuron 
takes longer to respond, while a shorter time constant allows for rapid changes.

.. todo:: ADD TIME CONSTANT FORMULA

Length Constant (Lambda: λ)
============================

This measures how far an electrical signal can travel along the axon before it decays significantly. It is influenced by both axial resistance and membrane resistance. A higher length constant allows the signal to travel farther.

.. todo:: ADD LENGTH CONSTANT FORMULA

.. rubric:: References

.. [1] `Bretschneider, F., & De Weille, J. R. (2006). Electricity. In Elsevier eBooks (pp. 1–33). <https://doi.org/10.1016/b978-012370588-4/50060-9>`_
