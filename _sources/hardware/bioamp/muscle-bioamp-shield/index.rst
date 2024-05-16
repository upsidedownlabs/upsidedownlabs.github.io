.. _muscle-bioamp-shield:

Muscle BioAmp Shield
######################

:bdg-danger:`v0.3`

Overview
**********

Muscle BioAmp Shield is an all-in-one Arduino Uno ElectroMyography (EMG) shield for learning neuroscience with ease which is inspired from 
BackYard Brains (BYB) `Muscle Spiker shield <https://backyardbrains.com/products/muscleSpikerShield>`_ and provides similar features like hobby servo output, user buttons, LED Bar, Audio output, and 
battery input. It is perfect for beginners as they can easily stack it on top of Arduino Uno to record, visualize and listen to their muscle 
signals to make amazing projects in the domain of Human-Computer Interface (HCI).

.. image:: media/muscle-bioamp-shield.*

Features & Specifications
****************************

Muscle BioAmp Shield comes with various plug-and-play options so you can connect hundreds of extension boards like OLED screens, 
character displays, accelerometers, and servo controllers to name just a few using the STEMMA I2C interface. You also get STEMMA 
digital and STEMMA analog ports. On STEMMA analog port you can connect additional BioAmp EXG Pill or any other sensor with analog 
output. On STEMMA digital port you can connect any digital sensor or actuator of your choice.

.. figure:: media/shield-pamphlet.*
    :align: center

+---------------------+---------------------------------------+
| Input Voltage       | 5V                                    |
+---------------------+---------------------------------------+
| Input Impedance     | 10^11 ohm                             |
+---------------------+---------------------------------------+
| Fixed Gain          | x2420                                 |
+---------------------+---------------------------------------+
| Bandpass filter     | 72 – 720 Hz                           |
+---------------------+---------------------------------------+
| Compatible Hardware | Arduino UNO                           |
+---------------------+---------------------------------------+
| BioPotentials       | EMG (Electromyography)                |
+---------------------+---------------------------------------+
| No. of channels     | 1                                     |
+---------------------+---------------------------------------+
| Electrodes          | 3 (Positive, Negative, and Reference) |
+---------------------+---------------------------------------+
| Dimensions          | 6.0 x 5.3 cm                          |
+---------------------+---------------------------------------+
| Open Source         | Hardware + Software                   |
+---------------------+---------------------------------------+

Hardware
*********

Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::

            **PCB Front**
            ^^^^^
            .. figure:: media/Muscle-BioAmp-Shield-Front.*

    .. grid-item::
        
        .. card::

            **PCB Back**
            ^^^^^
            .. figure:: media/Muscle-BioAmp-Shield-Back.*

.. figure:: media/Assembly/24_Assembled.*
    :align: center
    :width: 80%

    Assembled PCB

.. figure:: media/dimensions.*
    :align: center

    PCB Layout

.. figure:: media/Schematic.*
    :align: center

    Schematic Diagram

Contents of the kit
********************

There are 2 variants available for Muscle BioAmp Shield v0.3 kit - one comes with the shield assembled and the other one contains bare PCB of the sensor and the components separately which you can assemble pretty easily.

.. figure:: media/kit-contents-assembled.*
    :align: center

    Assembled Muscle BioAmp Shield kit content

.. figure:: media/kit-contents-unassembled.*
    :align: center

    Unassembled Muscle BioAmp Shield kit content

.. youtube:: w8yw12SUe6Q
  :width: 100%
  :align: center

Software requirements
**********************

Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches on your development board and visualise the data on your laptop.
    
.. image:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.png

Assembling the Kit
********************

You can get your own Muscle BioAmp Shield bag of parts from our `online stores <https://linktr.ee/Upside_Down_Labs_stores>`_ (shipping worldwide) 
and for assembling your shield you can take a look at `this interactive BOM <https://upsidedownlabs.github.io/DIY-Muscle-BioAmp-
Shield/ibom.html>`_ or the step by step guide below. 

.. note:: Follow the highlighted yellow shapes to assemble your shield!

.. grid:: 1 1 2 2
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::
        
        .. figure:: media/Assembly/01_Bare_Board.*

            **Step 1 - Bare Board**

    .. grid-item::

        .. figure:: media/Assembly/02_1M_Resistors.jpg
            
            **Step 2 - 1M Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/03_330R_Resistors.jpg

            **Step 3 - 330R Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/04_10K_Resistors.jpg

            **Step 4 - 10K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/05_22K_Resistors.jpg

            **Step 5 - 22K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/06_1K_Resistors.jpg

            **Step 6 - 1K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/07_220K_Resistors.jpg

            **Step 7 - 220K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/08_1nF_Capacitors.jpg

            **Step 8 - 1nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/09_100nF_Capacitors.jpg

            **Step 9 - 100nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/10_100pF_Capacitors.jpg

            **Step 10 - 100pF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/11_Angled_Header_Pins.jpg

            **Step 11 - Angled Header Pins** 

    .. grid-item::

        .. figure:: media/Assembly/12_5x5mm_Buttons.jpg

            **Step 12 - 5x5mm Buttons** 

    .. grid-item::

        .. figure:: media/Assembly/13_OptoIsolator.jpg

            **Step 13 - OptoIsolator** 

    .. grid-item::

        .. figure:: media/Assembly/14_JST_PH_Angled_Connectors.jpg

            **Step 14 - JST PH Angled Connectors** 

    .. grid-item::

        .. figure:: media/Assembly/15_JST_PH_Straight_Connectors.jpg

            **Step 15 - JST PH Straight Connectors** 

    .. grid-item::

        .. figure:: media/Assembly/16_IC_Socket.jpg

            **Step 16 - IC Socket** 

    .. grid-item::

        .. figure:: media/Assembly/17_IC.jpg

            **Step 17 - IC** 

    .. grid-item::

        .. figure:: media/Assembly/18_LEDs.jpg

            **Step 18 - LEDs** 

    .. grid-item::

        .. figure:: media/Assembly/19_3.5mm_Headphone_Jack.jpg

            **Step 19 - 3.5mm Headphone Jack** 

    .. grid-item::

        .. figure:: media/Assembly/20_2.2uF_Capacitor.jpg

            **Step 20 - 2.2uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/21_1uF_Capacitor.jpg

            **Step 21 - 1uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/22_470uF_Capacitor.jpg

            **Step 22 - 470uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/23_Header_Pins.jpg

            **Step 23 - Header Pins** 

    .. grid-item::

        .. figure:: media/Assembly/24_Assembled.jpg

            **Step 24 - Assembled Shield** 


Still can't figure out the assembly? You can follow the video provided below to assemble your Shield.

.. youtube:: dcuCihh3yn4
     :width: 100%

Using the Sensor
******************

Step 1: Stack on Arduino Uno
=================================

Stack the Muscle BioAmp Shield on top of Arduino Uno properly.

.. only:: html

    .. figure:: media/gifs/shield-arduino-connection.gif
        :align: center

.. only:: latex

    .. figure:: media/images/shield-arduino-connection.*
        :align: center

Step 2: Connecting Electrode Cable
=======================================

Connect the BioAmp Cable to Muscle BioAmp Shield as shown.

.. only:: html

    .. figure:: media/gifs/electrode-cable-connection.gif
        :align: center

.. only:: latex

    .. figure:: media/images/electrode-cable-connection.*
        :align: center

Step 3: Skin Preparation
=============================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 4: Electrode Placements
=================================

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

Using gel electrodes
-----------------------

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. only:: html

    .. figure:: media/gifs/electrode-placement.gif
        :align: center

.. only:: latex

    .. figure:: media/images/electrode-placement-1.*
        :align: center

    .. figure:: media/images/electrode-placement-2.*
        :align: center

Using Muscle BioAmp Band
---------------------------

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

   **Tutorial on how to use the band:**

.. youtube:: xYZdw0aesa0
    :align: center
    :width: 100%

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Step 5: Connect Arduino UNO to your laptop
=============================================

Connect your Arduino UNO R3 to your laptop using the USB cable (Type A to Type B).

.. only:: html

    .. figure:: media/gifs/arduino-laptop-connection.gif
        :align: center
 
.. only:: latex

    .. figure:: media/images/arduino-laptop-connection-1.*
        :align: center

    .. figure:: media/images/arduino-laptop-connection-2.*
        :align: center        

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Step 6: Visualise EMG signals on laptop
==========================================

Copy paste any one of the arduino sketches given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
   EMG Filter: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino

   EMG Envelope: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

Now flex your arm to visualize the muscle signals in real time on your laptop.

.. only:: html

    .. figure:: media/gifs/visualise-emg.gif
        :align: center

.. only:: latex
    
    .. figure:: media/images/visualise-emg.*
        :align: center

Step 7: Visualise EMG signals on LEDs
==========================================

Copy paste the Arduino Sketch given below in Arduino IDE:

      LED Bar Graph: https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/LEDBarGraph/LEDBarGraph.ino

Make sure you have selected the right board and COM port. Now upload the code, and flex your arm. You'll see the LED bar going up. More strength you apply, more the LED bar goes up.

.. only:: html

    .. figure:: media/gifs/led-graph.gif
        :align: center

.. only:: latex

    .. figure:: media/images/led-graph.*
        :align: center

Step 8: Listen to your EMG signals
====================================

You can either listen to the muscle signals (EMG) on a speaker or wired earphones/headphones. Let's try both of them.

Listening EMG on speakers
-----------------------------

1. Connect the BioAmp AUX cable on a bluetooth speaker that have 3.5mm jack support.
2. Switch on the speaker and turn the volume to maximum.
3. Flex and listen to your muscles.

.. only:: html

    .. figure:: media/gifs/listening-emg-speakers.gif
        :align: center

.. only:: latex

    .. figure:: media/images/listening-emg-speakers.*
        :align: center

Listening EMG on a wired earphones/headphones
----------------------------------------------

1. Plug your wired earphones or headphones on the 3.5mm jack of BioAmp v1.5.
2. Plug it in your ears.
3. Flex and listen to your muscles.

.. only:: html

    .. figure:: media/gifs/listening-emg-earphones.gif
        :align: center

.. only:: latex

     .. figure:: media/images/listening-emg-earphones.*
        :align: center

Step 9: Controlling a servo motor
===================================

Connect the servo claw to Muscle BioAmp Shield.

Copy paste the Arduino Sketch given below in Arduino IDE:

   Servo Controller: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/5_ServoControl/5_ServoControl.ino

Make sure you have selected the right board and COM port. Now upload the code, and flex your arm to control the servo claw in real time.

.. only:: html
    
    .. figure:: media/gifs/servo-control.gif
        :align: center

Step 10: Controlling a servo claw
====================================

Connect the servo claw to Muscle BioAmp Shield.

Copy paste the Arduino Sketch given below in Arduino IDE:

   Claw Controller: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/tree/main/4_ClawController

Make sure you have selected the right board and COM port. Now upload the code, and flex your arm to control the servo claw in real time.

.. only:: html
    
    .. figure:: media/gifs/claw-control.gif
        :align: center

.. only:: latex

    .. figure:: media/images/claw-control.*
        :align: center

Step 11: Connecting 9V battery
====================================

Till now, the power for the EMG system was coming from the laptop via USB cable of Arduino Uno but there can be 2 ways in which you can make the system portable:

- **Using 9V battery:** Directly connect a 9V battery to Muscle BioAmp Shield using a 9V snap cable.
- **Using Power Bank:** Instead of connecting the USB cable of Arduino Uno to laptop, you can directly connect it to power bank.

.. only:: html

    .. figure:: media/gifs/9v-battery.gif
        :align: center

.. note:: Do not use 9V battery while controlling a servo claw using Muscle BioAmp Shield. Instead connect the Arduino UNO to a power bank or directly to your laptop.

Step 12: Other functionalities you can explore
====================================================

Using I2C ports
-----------------

There are 2 I2C ports available on Muscle BioAmp Shield and you can connect hundreds of devices having I2C compatibility using the 4-pin JST PH 2.0 mm STEMMA cables provided.

Some of the examples are: ``OLED screens``, ``character displays``, ``temperature sensors``, ``accelerometers``, ``gyroscopes``, ``light sensors``, ``BioAmp Hardware``, etc.

Using STEMMA Digital port
---------------------------

Connect Arduino Uno's D6 digital I/O pins using STEMMA digital connectors.

Using STEMMA Analog port
--------------------------

Connect Arduino Uno's A2 analog input pins using STEMMA analog connectors.

Using user buttons
---------------------

Program the 2 user buttons according to your project requirements.