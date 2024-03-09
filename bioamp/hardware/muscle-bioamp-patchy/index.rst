.. _muscle-bioamp-patchy:

Muscle BioAmp Patchy
#####################

Wearable ElectroMyoGraphy (EMG) sensor

Overview
**********

Muscle BioAmp Patchy is a wearable ElectroMyoGraphy or EMG sensor that snaps directly to gel electrodes and connects to your 
muscle like a patch. It comes with reverse polarity projection, power indicator, onboard snap connectors, and Upside Down Labs'power
ful BioAmp sensing technology for precise muscle signal recording. This enables you to easily integrate this sensor in your EMG-
based Human-Computer Interface (HCI).

.. figure:: media/Patchy-All-Colors.*

Features & Specifications
**************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 4.5 V                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^12 Ω                                                                                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | x2420                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Bandpass filter       | 72 – 720 Hz                                                                                                                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Wearable              | Yes                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware   | Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 47 x 14 mm                                                                                                                                                       |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. youtube:: qRKU_HvapDE
    :align: center
    :width: 100%

Hardware
*********

Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. card::

        **PCB Front**
        ^^^^^
        .. figure:: media/PCB-Front.*

    .. card::

        **PCB Back**
        ^^^^^
        .. figure:: media/PCB-Back.*

.. figure:: media/Muscle-BioAmp-Patchy-Assembled-Front.*
    :align: center
.. figure:: media/Muscle-BioAmp-Patchy-Assembled-Back.*
    :align: center

Connecting with Arduino
************************

To get started, you can pair Muscle BioAmp Patchy with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, 
Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

For the connections and electrode placements, you can follow the diagram given below:

.. figure:: media/Patchy-Arduino-Connections.*
    :width: 100%
    :align: center

Demonstration
****************

After snapping the Patchy onto gel electrodes(placed on our targeted muscle), you can connect your patchy to the arduino via 
jumper cables, arduino to your battery operated laptop, and start recording your EMG easily. Follow the steps shown in the video 
below for the demonstration.

.. youtube:: 4dnCX3U7LS8
    :width: 100%
    :align: center

Some project ideas
*********************

.. grid:: 1 1 1 1 
    :margin: 2 2 0 0
    :gutter: 2

    .. grid-item::

        .. card::
            
            Recording and Visualizing Muscle Signals (EMG) Using Muscle BioAmp Patchy (wearable Muscle Sensor)
            ^^^^

            .. youtube:: 4dnCX3U7LS8
                :align: center
                :width: 100%