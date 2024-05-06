.. _muscle-bioamp-patchy:

Muscle BioAmp Patchy
#####################

:bdg-danger:`v0.2`

Overview
**********

Muscle BioAmp Patchy is a wearable ElectroMyoGraphy or EMG sensor that snaps directly to gel electrodes and connects to your 
muscle like a patch. It comes with reverse polarity projection, power indicator, onboard snap connectors, and Upside Down Labs' 
powerful BioAmp sensing technology for precise muscle signal recording. This enables you to easily integrate this sensor in your EMG-
based Human-Computer Interface (HCI) easily.

.. figure:: media/Patchy-All-Colors.*

Features & Specifications
**************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Operating Voltage     | 5 V                                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^12 ohm                                                                                                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | x2420                                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Bandpass filter       | 72 – 720 Hz                                                                                                                                                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Wearable              | Yes                                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware   | Any development board with an ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or a standalone ADC of your choice |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                                             |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                                  |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 4.7 x 1.4 cm                                                                                                                                                                       |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Hardware
*********

Images below shows a quick overview of the hardware design.


.. figure:: media/PCB-Front.*
    :align: center
    :width: 60%

    PCB Front

.. figure:: media/PCB-Back.*
    :align: center
    :width: 60%

    PCB Back

.. figure:: media/Muscle-BioAmp-Patchy-Assembled-Front.*
    :align: center
    :width: 60%

    Assembled PCB

Contents of the kit
********************

.. image:: media/kit-contents.*

We have made a complete unboxing video of the kit. Please find the link below: 

.. youtube:: qRKU_HvapDE
    :align: center
    :width: 100%

Software requirements
**********************

Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches on your development board and visualise the data on your laptop.
    
.. image:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.png

Using the kit
****************

Step 1: Connect reference cable
=================================

Connect the reference cable to the Muscle BioAmp Patchy as shown in the diagram.

.. image:: media/ref-cable-connection.*

Step 2: Connecting sensor to gel electrodes
================================================

Snap the Muscle BioAmp Patchy on the gel electrodes (Don't peel the plastic backing from the electrodes at this moment).

.. image:: media/patchy-electrode-connection.*
    :width: 80%
    :align: center

Step 3: Skin Preparation
=============================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 4: Electrode Placements
==============================

Now peel off the plastic backing from the gel electrodes and place the Muscle BioAmp Patchy on the targeted muscle and the reference on the bony part of your elbow as shown in the diagram.

.. image:: media/patchy-on-hand.*

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Step 5: Connect Arduino UNO R3
=================================

Connect ``VCC`` to ``5V``, ``GND`` to ``GND``, and ``OUT`` to ``Analog pin A0`` of your Arduino UNO via jumper cables provided by us. If you are connecting ``OUT`` to any other analog pin, then you will have to change the INPUT PIN in the arduino sketch accordingly.

.. image:: media/pathcy-arduino-connections.*

.. note:: For demonstration purposes we are showing connections of the sensor with Arduino UNO R3 but you can use any other development board or a standalone ADC of your choice.

Step 6: Upload the code
===========================

Connect your Arduino UNO to your laptop using the USB cable (Type A to Type B). Copy paste any one of the arduino sketches given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
EMG Filter: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino

EMG Envelope: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino

.. image:: media/setup.*

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Step 7: Visualizing the EMG signals
======================================

Now flex your arm to visualize the muscle signals in real-time on your laptop.

.. image:: media/patchy-emg.*

**Video tutorial:**

.. youtube:: 4dnCX3U7LS8
    :align: center
    :width: 100%