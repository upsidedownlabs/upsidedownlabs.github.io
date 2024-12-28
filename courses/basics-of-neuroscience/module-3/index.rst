.. _basics-of-neuroscience-module-3:

Module 3: Understanding the resting potential
###############################################

.. |Na+| replace:: Na\ :sup:`+`\
.. |Cl-| replace:: Cl\ :sup:`-`\
.. |Ca2+| replace:: Ca\ :sup:`2+`\
.. |K+| replace:: K\ :sup:`+`\
.. |Eion| replace:: E\ :sub:`ion`\
.. |Iout| replace:: I\ :sub:`out`\
.. |Iin| replace:: I\ :sub:`in`\
.. |PX| replace:: P\ :sub:`X`\
.. |Xin| replace:: X\ :sub:`in`\
.. |Xout| replace:: X\ :sub:`out`\
.. |Pi| replace:: P\ :sub:`i`\

The resting potential of a neuron is the electrical potential difference/voltage across the plasma 
membrane at which the neuron is in a non-excited state (i.e., neither sending nor receiving any signal). [1]_ 
Understanding the resting potential is crucial for grasping how neurons remain ready to fire an action 
potential and how they process and transmit information. However, before delving into this topic, it is 
important to first explore the electrical properties of neurons, as electricity is the primary means by 
which neurons communicate.

3.1 Fundamentals of electricity
*********************************

Let's review some fundamental concepts of electricity that will help us explore the electrical properties of neurons.

3.1.1 Current
==============

It is defined as the rate of flow of charge. In neurons, it is the movement of ions like sodium (|Na+|), potassium (|K+|), Chloride (|Cl-|), and Calcium (|Ca2+|)  across the membrane, which is essential for generating electrical signals.

.. figure:: ../media/current.*
   :align: center
   :alt: current in neurons

   Current: The movement of ions across the membrane

3.1.2 Voltage
==============

It is the electrical potential that drives the flow of charge which was discovered by Alessandro Volta in 1778. In the context of neurons, voltage refers to the electric potential difference across the neuron's membrane, which is critical for generating and transmitting electrical signals.

.. figure:: ../media/voltage.*
   :align: center
   :alt: voltage in neurons

   Voltage: electric potential difference across the neuron's membrane

To better understand electric potential, it's essential to define electrostatic force.

3.1.3 Electrostatic force
==========================

It is the force that arises due to the interaction between charged objects or particles. These forces 
are part of the fundamental forces of nature and are described by Coulomb's law.

.. figure:: ../media/electrostatic-force.*
   :align: center
   :alt: electrostatic force

   Electrostatic force

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

.. admonition:: Additional info

   Coulomb’s law was first published in 1785 by French physicist Charles-Augustin de Coulomb.

3.1.5 Law of attraction & repulsion
====================================

**Attractive force:** If the charges are of opposite signs (positive and negative), the force is attractive in nature.

.. figure:: ../media/attractive-forces.*
   :align: center
   :alt: Attractive force

   Attractive force

**Repulsive Force:** If the charges are of the same signs (both positive or both negative), the force is repulsive in nature.

.. figure:: ../media/repulsive-forces.*
   :align: center
   :alt: Repulsive force

   Repulsive force

3.2 Resting Potential
**********************

Resting potential refers to the electrical potential difference across the neuron's membrane when a neuron is at rest. It is primarily determined by the unequal distribution of ions, particularly potassium (|K+|) and sodium (|Na+|), across the neuron's membrane. [1]_

.. figure:: ../media/resting-potential.*
   :align: center
   :alt: Resting potential

   Resting potential

.. note::

   - Membrane potential is the voltage across the membrane at any given moment, whereas resting potential is the membrane potential when a neuron is at rest (i.e., neither sending nor receiving any signal).
   - The voltage across a membrane is a comparative measurement. Neuroscientists consistently use the outside of the cell as the reference point for measuring the voltage across the membrane. For instance, if the inside of the cell is 70 mV more negative than the outside, we would express the voltage as -70 mV. [1]_
      - Voltage range of membrane potential : -60 mV TO +90 mV
      - Voltage of resting potential: Approx -70 mV

The resting potential of a neuron is primarily influenced by two key factors: diffusion and electrostatic forces. Let's understand them individually. [1]_

3.2.1 Diffusion [1]_
=====================

Ion Concentration Gradients
-----------------------------

Neurons maintain specific concentrations of ions, particularly sodium (|Na+|), potassium (|K+|), chloride (|Cl-|), and organic anions (A⁻), across their membrane. Typically, there is a higher concentration of |K+| inside the neuron and a higher concentration of |Na+| outside.

Movement of Ions
-----------------

Due to the concentration gradient, ions tend to move from areas of higher concentration to lower concentration through channels in the neuron's membrane. For example, |K+| ions diffuse out of the neuron, while |Na+| ions tend to diffuse into the neuron.

.. figure:: ../media/diffusion.*
   :align: center
   :alt: Diffusion of ions

   Diffusion of ions

3.2.2 Electrostatic forces [1]_
================================

Electrostatic forces are essential in creating the resting potential of neurons. It arises from the movement of ions like potassium and sodium, which are influenced by concentration gradients and the attractive/repulsive forces between charged particles. The unequal distribution of these ions across the membrane, combined with electrostatic forces, results in a negative charge inside the neuron relative to the outside, leading to a typical resting potential of around -70mV, which is crucial for the neuron's ability to generate action potentials and communicate with other neurons.

3.3 Equilibrium potential
***************************

The equilibrium potential (also known as the Nernst potential) for a specific ion is the membrane potential at which the net flow of that ion across the membrane is zero. At this potential, the concentration gradient (diffusive forces) is balanced by the electrical gradient (electrostatic forces). This means that the electrostatic forces pulling the ion into the cell are exactly balanced by the concentration gradient pushing it out (or vice versa). [1]_

.. figure:: ../media/equilibrium-potential.*
   :align: center
   :alt: Equilibrium potential

   Equilibrium potential

**Nernst Equation:** The equilibrium potential for a specific ion can be calculated using the Nernst equation: [2]_

.. math::

   E_{ion} = \frac{RT}{zF} ln \frac{I_{out}}{I_{in}} 

Where:

- |Eion| is the equilibrium potential for the ion.
- R is the universal gas constant.
- T is the absolute temperature in Kelvin.
- z is the valence (charge) of the ion.
- F is Faraday's constant.
- |Iout| and |Iin| are the concentrations of the ion outside and inside the cell, respectively.

Equilibrium Potentials for major ions: [1]_

- |K+|: Approximately -90 mV (when |K+| has an intracellular concentration of 120 mM and an extracellular concentration of 4 mM)
- |Na+|: Approximately +60 mV (when |Na+| has an intracellular concentration of 14 mM and an extracellular concentration of 140 mM)

3.4 Goldman Equation [3]_
**************************

The Goldman equation, often referred to as the GHK equation, calculates the resting potential of a cell based on the permeability and concentrations of multiple ions. It accounts for the relative contributions of different ions to the resting potential. The equation is as follows:

.. math::

   V = \frac{RT}{F} \ln \left( \frac{P_{K^+}[K^+]_{out} + P_{Na^+}[Na^+]_{out} + P_{Cl^-}[Cl^-]_{in}}{P_{K^+}[K^+]_{in} + P_{Na^+}[Na^+]_{in} + P_{Cl^-}[Cl^-]_{out}} \right)

where:

- V is the membrane potential
- R is Universal gas constant
- T is absolute temperature in Kelvin
- F is Faraday's constant
- |PX| is permeability of ion X
- |Xin| is concentration of ion X inside the cell
- |Xout| is concentration of ion X outside the cell

.. note:: The Nernst potential (or equilibrium potential) indicates the voltage for a specific ion, but since the resting potential is affected by multiple ions, we use the Goldman equation to calculate the overall resting potential of the cell. [1]_

3.5 Ion channels
*****************

Ion channels (also called ion filters or ion-selective channels) are special proteins in nerve cells (neurons) that control the movement of ions across the cell membrane. [4]_ These channels help certain ions — like sodium (|Na+|), potassium (|K+|), calcium (|Ca2+|), or chloride (|Cl-|) — move quickly across the membrane based on concentration gradient (i.e. from high to low concentration). [5]_

There are majorly two types of ion channels:

Leak Channels
=============

These are mostly open, letting ions flow freely based on their concentration gradient.

Voltage-Gated Channels
======================

These channels open and close in response to changes in the cell membrane potential. They are important for generating and transmitting electrical signals, like action potentials.

.. todo:: Add graphic for both the channels

Ion channels are very selective, which means they only let certain ions pass through while blocking others. For instance, potassium channels allow only potassium ions (|K+|) to pass through while blocking all other ions. Similarly, sodium channels allow only sodium ions to pass through while blocking all other ions.

How does this work?
====================

You might think that an ion channel could block all positive ions by adding a positive charge to its opening, but this wouldn't work because both |K+| and |Na+| are positively charged. Instead, these ion channels select ions based on their size. Sodium ions are smaller (116 picometers), while potassium ions are a bit larger (152 picometers).
Still, sodium can pass through sodium ion channels and not potassium channels.

What could be the reason? Let's see.

In neurons, sodium (|Na+|) and potassium (|K+|) ions are surrounded by a "hydration shell," which refers to the structure of water molecules organized around each ion due to electrostatic interactions. The hydration shell for sodium ions is stronger than potassium ions due to their high charge density (i.e., charge per unit area).

**What happens when both ions try to pass through the sodium ion channel?** [6]_

The arrangement of amino acids in the sodium ion channel favors sodium ions passage but not potassium ions . When both ions come to pass the ion channel along with their hydration shell, the arrangement of amino acids in the sodium ion channel repels and removes the sodium ion from its hydration shell but is unable to remove the potassium ion from its hydration shell. That's why sodium ions only pass through sodium ion channels.

Similarly potassium ions only pass through potassium ion channels.

.. todo:: Add graphic for sodium ion channel

.. todo:: Add graphic for potassium ion channel

3.6 Sodium potassium pump
**************************

The sodium-potassium pump (|Na+|/|K+| ATPase) is a crucial membrane protein that helps maintain the proper balance of sodium (|Na+|) and potassium (|K+|) ions across the cell membrane, particularly in neurons. [7]_

It is responsible for the active transport of |Na+| and |K+| ions, which are vital for maintaining the resting potential. This is an energy-dependent process, and the sodium-potassium pump uses energy generated by the hydrolysis of ATP into ADP + Pi to move |Na+| and |K+| ions against their natural concentration gradients (i.e., from high to low concentration). [8]_

.. math::

   \text{ATP} \rightarrow \text{ADP} + P_i

where:

- ATP is Adenosine triphosphate
- ADP is Adenosine diphosphate
- |Pi| is the phosphate ion 

.. note:: Active Transport is a process that involves the movement of molecules from a region of lower concentration to an area of higher concentration against their natural concentration gradient. [9]_

Function of the Sodium-Potassium Pump
======================================

Typically there is a higher concentration of sodium outside the cell and higher concentration of potassium ions inside the cell.

With every cycle, the sodium-potassium pump moves 3 |Na+| ions out of the neuron and 2 |K+| ions into the neuron. This results in a net export of positive charge from the neuron, contributing to the negative resting membrane potential. [7]_

.. figure:: ../media/sodium-potassium-pump.*
   :align: center
   :alt: Sodium-Potassium pump

   Sodium-Potassium Pump

.. note::
   1. The pump helps maintain the electrochemical gradient essential for the resting potential, typically around -70 mV in neurons. This gradient is crucial for the generation of action potentials. [10]_
   2. The action potential is a rapid, transient change in the electrical potential across a neuron's membrane that allows it to transmit signals along its axon. It is the fundamental mechanism by which neurons communicate with one another and other cells.

.. admonition:: Fun fact

   The sodium-potassium pump consumes approximately 70% (2/3rd) energy of the nerve cell. [11]_

.. rubric:: References

.. [1] `Chrysafides SM, Bordes SJ, Sharma S. Physiology, Resting Potential. In: StatPearls. StatPearls Publishing, Treasure Island (FL); 2023. PMID: 30855922 <https://europepmc.org/article/NBK/nbk538338#article-28427.r1>`_
.. [2] `Veech RL, Kashiwaya Y, King MT. The resting membrane potential of cells are measures of electrical work, not of ionic currents. Integr Physiol Behav Sci. 1995 Sep-Dec;30(4):283-307 <https://pubmed.ncbi.nlm.nih.gov/8788226>`_
.. [3] `Hille, Bertil. (2011). Ionic Basis of Resting and Action Potentials <https://www.researchgate.net/publication/229720102_Ionic_Basis_of_Resting_and_Action_Potentials>`_
.. [4] `Mourot, A., Tochitsky, I., & Kramer, R. H. (2013). Light at the end of the channel: Optical manipulation of intrinsic neuronal excitability with chemical photoswitches. <https://doi.org/10.3389/fnmol.2013.00005>`_
.. [5] `Alberts B, Johnson A, Lewis J, et al. Molecular Biology of the Cell. 4th edition. New York: Garland Science; 2002. Ion Channels and the Electrical Properties of Membranes <https://www.ncbi.nlm.nih.gov/books/NBK26910/>`_
.. [6] `Kühlbrandt W. Three in a row-how sodium ions cross the channel. EMBO J. 2016 Apr 15;35(8):793-5. doi: 10.15252/embj.201694094. Epub 2016 Mar 21. PMID: 27002160; PMCID: PMC4972134 <https://pmc.ncbi.nlm.nih.gov/articles/PMC4972134/>`_
.. [7] `Pirahanchi Y, Jessu R, Aeddula NR. Physiology, Sodium Potassium Pump. [Updated 2023 Mar 13]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan <https://www.ncbi.nlm.nih.gov/books/NBK537088/>`_
.. [8] `Glynn, I.M. (1985). The Na+, K+-Transporting Adenosine Triphosphatase. In: Martonosi, A.N. (eds) The Enzymes of Biological Membranes. Springer, Boston, MA <https://doi.org/10.1007/978-1-4684-4601-2_2>`_
.. [9] `Skou, J.C. (1989). Sodium-Potassium Pump. In: Tosteson, D.C. (eds) Membrane Transport. People and Ideas. Springer, New York, NY <https://doi.org/10.1007/978-1-4614-7516-3_5>`_
.. [10] `Morth, J., Pedersen, B., Toustrup-Jensen, M. et al. Crystal structure of the sodium-potassium pump. Nature 450, 1043–1049 (2007) <https://doi.org/10.1038/nature06419>`_
.. [11] `Alberts B, Johnson A, Lewis J, et al. Molecular Biology of the Cell. 4th edition. New York: Garland Science; 2002. Carrier Proteins and Active Membrane Transport <https://www.ncbi.nlm.nih.gov/books/NBK26896/>`_