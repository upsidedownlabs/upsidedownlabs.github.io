.. _exday1-nokit:

Exercises Day 1: No Hardware
###############################

.. |Na+| replace:: Na\ :sup:`+`\
.. |Cl-| replace:: Cl\ :sup:`-`\
.. |Ca2+| replace:: Ca\ :sup:`2+`\
.. |K+| replace:: K\ :sup:`+`\
.. |Rs| replace:: R\ :sub:`s`\
.. |Rm| replace:: R\ :sub:`m`\
.. |Re| replace:: R\ :sub:`e`\
.. |Rsh| replace:: R\ :sub:`sh`\
.. |Ce| replace:: C\ :sub:`e`\
.. |Csh| replace:: C\ :sub:`sh`\
.. |Vin| replace:: V\ :sub:`in`\
.. |Vec| replace:: V\ :sub:`ec`\
.. |Vout| replace:: V\ :sub:`out`\
.. |Ve| replace:: V\ :sub:`e`\
.. |Za| replace:: Z\ :sub:`a`\
.. |Ze| replace:: Z\ :sub:`e`\

.. contents:: Table of Contents
    :depth: 2
    :local:


1.	Using a multimeter
**************************

We will be using a circuit simulator to model the different settings on a multimeter. A multimeter can be used to measure voltage, resistance, and current.

.. admonition:: Exercises

    First we will measure resistance of a resistor.

    .. figure:: media/ohmmeter_sim.*
        :align: center
        :target: https://tinyurl.com/y65o842d

    Setup:

    - Add an Ohmmeter to the circuit (Draw/Outputs and Labels/Add Ohmmeter).
    - Connect it to the resistor and Run the simulator.
    - Right-click on the Ohmmeter, select 'View in New Scope'.
    - Set the scope to display resistance values instead of voltage. Right-click on the scope and select 'Properties'. Select 'Show Resistance' instead of 'Show Voltage'.

    1A. Read the value of the resistor in Ohms from the scope.

    Now we will measure the voltage across two batteries.

    .. figure:: media/voltmeter_sim.*
        :align: center
        :target: https://tinyurl.com/y35xq4tr

    Setup:

    - Add a Voltmeter to the circuit, connect it across the batteries, and run the simulator.
    - What voltage do you measure?
    - How can you get the Voltmeter to give a negative voltage measurement?

2. Measuring voltages
**********************

.. admonition:: Exercises

    Take a look at this simulation. A voltage output signal is being generated on the left, which turns an LED on and off at a specific frequency. Our goal is to measure the properties of this voltage output.

    .. figure:: media/squarewave_sim.*
        :align: center
        :target: https://tinyurl.com/y3fugler

    2A. Connect a voltmeter across the LED. This is similar to using a multimeter in the lab. What is the amplitude of the signal in Volts? With what frequency does the signal change amplitude?

    2B. Visualise the voltage across the LED in a new Scope. This is similar to using an oscilloscope in the lab. Is the voltage measured different now? With what frequency does the signal change amplitude, how would you describe the shape of this signal?

    2C. What are the advantages of an oscilloscope over a multimeter?

    2D. Change the voltage signal so that it outputs a 50Hz sinewave.


3. Ohm’s Law
***************

Ohm’s law describes how potential (V), current (I) and resistance (R) are related:

.. math::

    V = IR

When looking at a whole circuit, we can use this to calculate how much current will flow. Here is a simple circuit with a battery and two resistors. Current flows from the positive terminal of the battery to the negative terminal of the battery. The resistors are 'in series' as there is only 1 path for current flow.

.. figure:: media/resistors_series_sim.*
    :align: center
    :target: https://tinyurl.com/y4r8nsnj

.. admonition:: Exercises

    3A. Click on the image to go to the simulator.
    Right-click on the top wire in the circuit, and then select Edit to display the current through that wire. Double-click on either of the resistors to decrease their value. What happens to the current in the circuit?

4.	Resistors
*****************

Here’s another simulation demonstrating Ohm’s law. This time, the current moves from a 5 Volt voltage source (bright green) into ground (grey, earth), across one of two resistors. The resistors are 'in parallel' as current can flow cross over one *or* the other resistor.

.. figure:: media/resistors_parallel_sim.*
    :align: center
    :target: https://www.falstad.com/circuit/e-ohms.html

.. admonition:: Exercises
  
    Setup:
  
    - Click the image open the simulator.
    - Right click on a resistor and select 'View in new scope'.
    - Do the same for the other resistor. You can click 'Reset' to restart the simulation and synchronise the scopes.
   
    4A. What do you predict will happen to the voltage over the left resistor if you double its resistance? What will happen to the current?
  
    4B.	What will happen to the voltage and current over the right-hand resistor when the other doubles in resistance?
  
    Now double the value of the left-hand resistor in the simulator and see if your predictions were correct.
  
5.	Voltage Divider
********************

Voltage is always measured relative to a point that we consider 0V. For a battery, the negative terminal is 0V.

Voltage (potential energy) ‘drops’ over each resistor, as potential energy is converted to another form of energy such as heat or light. In a circuit powered by a 9V battery, all 9V of potential energy from our battery source *must* drop over circuit components, to return to 0V at the negative terminal of the battery.

In each circuit below, the current through R1 must equal the current through R2, as they are resistors in series. Following Ohm's law, given the same current, a higher resistor will have a higher voltage drop (V=IR). The total voltage drop over the circuit must equal the provided voltage.

.. figure:: media/voltage_divider.*
    :align: center

Therefore, in a circuit with multiple resistors in series, the ratio of their resistances determines how much voltage will drop over each. We can therefore split up (divide) the voltage from a source across resistors to produce an output voltage |Vout|:

.. math::

    |Vout| = |Vin| \frac{R2}{R1+R2}

.. admonition:: Exercises

    5A.	Using the simulator (here’s an empty full-screen https://tinyurl.com/y477e9qd) build a voltage divider circuit in which you use:
  
    - a 3V battery ('Draw' a 1-terminal voltage source set to 3V)
    - 2 resistors
    - a readout wire (right click and 'Edit' to show the voltage |Vout|)
  
    To provide an 2.1V output voltage |Vout| at the readout wire.
  
    5B. Change the ratios of the resistors until the readout voltage is the size of an action potential measured in the extracellular fluid.

6. Capacitors
***************

There are two types of capacitor. Polarised capacitors must be used in a specific orientation. Usually, ceramic capacitors are not polarised and you can use them in either direction, whereas tube-shaped electrolytic capacitors  **are** polarised. The negative pin is indicated by a ‘-’ marking, and the positive leg is often longer.

:ref:`As discussed in the Theory handout <refcapacitancetheory>`, capacitors occur wherever charge can be separated along two conducting surfaces, separated by an insulating material that prevents the plates from touching. Cell membranes are capacitors, as are electrodes.

.. math::

    Q = C * V

The amount of charge (Q) a capacitor can separate depends on is its capacitance (C, measured in farads) and the voltage (V) across the capacitor.

.. figure:: media/capacitor_membrane.*
    :align: center
    :target: https://tinyurl.com/y5nglnv7

.. admonition:: Exercises

    Setup:

    The simulator shows a simplified 'cell membrane' represented as a capacitor and a resistor. Changing the intracellular voltage supply changes the voltage across the cell membrane. The extracellular fluid is always 0 V.

    6A. The initial voltage over the capacitor should be -72mV. If not, set the Voltage slider to around -70mV. Click 'Reset' to see current move through the circuit until the capacitor is charged to 72mV. Which direction is the current flow? Why does current stop moving?

    6B. Using the 'Voltage' slider, set the voltage supply to 0 mVolts, and then to 20mV. What happens to the current flow in the circuit?

    6C. Can you mimic an action potential by changing the intracellular voltage?

.. admonition:: Exercises

    In this simulation, you can charge and discharge a capacitor and see the current flow through the circuit.

    .. figure:: media/charging_cap_sim.*
        :align: center
        :target: https://tinyurl.com/y6ov8bnn

    6D.	Modify the simulation to power an LED (Draw/Outputs and Labels/Add LED) by the capacitor as it discharges. The simulator will turn the LED red when it is on.

    6E. Visualise the charging and discharging of voltage over the capacitor. How can you make the charging and discharging slower?

    6F. Increase the capacitance value of the capacitor. How long does it take the capacitor to discharge?

7. Alternating signal (AC)
****************************

Batteries provide 'direct current' in a single direction. In contrast, the action potentials and LFPs we measure from neurons can go in both directions; they are **alternating currents**. You produced an alternating current yourself in exercise 6C.

Alternating currents have a frequency, which is the rate at which they alternate direction. Action potentials have a very high frequency, whereas synaptic inputs and their sums are much slower.

Here is a demo where an alternating signal increases and decreases in frequency. At the bottom of the page, you can see the wave visualised.

.. note::

    When you have capacitors in the simulator, it is a good idea to click 'reset' whenever you make changes, as they will otherwise store charge and can create weird effects.

.. admonition:: Exercises

    7A.	Press ‘Play Audio’ to hear how the sound is modulated as the frequency increases.
  
    .. figure:: media/audio_sweep.*
        :align: center
        :target: https://tinyurl.com/yyrvugha


8. Impedance
****************

Alternating currents have a frequency, so we need to use the term 'Impedance' (Z) instead of 'Resistance' to describe how circuit components oppose current flow. See the theory handout for more information.

The impedance magnitude of a capacitor, also called reactance (X\ :sub:`c`), depends on:

.. math::

    Xc = \frac{1}{2 \pi fC}

Where f is the frequency with which the current alternates, and C is the capacitance.

The impedance provided by capacitors varies with frequency. Because we are interested in signals at specific frequencies (e.g. 1000Hz for action potentials), we have to make sure to build our recording circuit so that the frequencies we are interested in experience little opposition.

When you see a capacitor in a circuit, you know you need to think about the frequency of the signal. Steady direct current has no frequency, so X\ :sub:`c` is infinite: capacitors only pass alternating signals.

.. admonition:: Exercises

    .. figure:: media/cap_freq_circuits.*
        :align: center
        :target: https://tinyurl.com/y3sbgfl6

    Setup:

    Here are two circuits with an alternating voltage source of 15 and 40 Hz, respectively. In the oscilloscope at the bottom of the simulator, the voltage trace of the source and the capacitor are plotted.

    8A.	Visualise the current in the circuit (for instance the current flowing through the stretch of wire). You could add a new scope to do this or double-click the wire and 'show current'. Which circuit has higher amplitude current?

    8B.	Add a third circuit, powered by an alternating voltage source of 120 Hz. What happens to the current as the frequency increases?

    (Bonus question: what happens to the voltage drop across the capacitor as frequency increases?)


9. Capacitive voltage divider
**********************************

Because capacitors impede current flow, we can use them to build voltage dividers, just like the resistor divider shown above.

.. admonition:: Exercises

    .. figure:: media/cap_voltage_div.*
        :align: center
        :target: https://tinyurl.com/yxdwvulv
  
    9A.	Change the capacitance values C for the first capacitor to test whether the formula for the resistor voltage divider applies for capacitors.