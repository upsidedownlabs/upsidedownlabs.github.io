.. _muscle-bioamp-candy:

Muscle BioAmp Candy
#####################

Candy-size affordable muscle sensor for precise EMG sensing.

Overview
*********

A candy-size single-channel ElectroMyography (EMG) sensor for precise recording of muscle signals 
at an affordable cost. It is an SMD version of Muscle BioAmp BisCute that can be used to make 
amazing Human-Computer Interface (HCI) projects. To record the EMG signals you can use any standalone 
ADC like ADS1115 or any microcontroller development board with an ADC of your choice like Arduino 
UNO/Nano.

.. figure:: media/Muscle-BioAmp-Candy-front.*
    :width: 800
    :align: center


Features & Specifications
*****************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 3.3-30 V                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^11 Ω                                                                                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | x2420                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Bandpass filter       | 72 – 720 Hz                                                                                                                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware   | Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 3.5 x 1.5 cm                                                                                                                                                     |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Hardware
**********

Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. card::

        **PCB Front**
        ^^^^^
        .. figure:: media/PCBfront.*

    .. card::

        **PCB Back**
        ^^^^^
        .. figure:: media/PCBback.*

.. figure:: media/muscle-bioamp-candy-front.*
    :align: center
.. figure:: media/muscle-bioamp-candy-back.*
    :align: center
.. figure:: media/dimensions.*
    :align: center
.. figure:: media/schematic.*
    :align: center

Connecting with Arduino
****************************

To get started, you can pair Muscle BioAmp Candy with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, 
Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

To measure the EMG signals, connect BioAmp Cable v3 with your muscle sensor as shown in the image below:

.. figure:: media/Muscle-BioAmp-Candy-Arduino-EMG-Recording.*

**CAUTION:** Make sure to follow the above diagram while making the connections between your Muscle BioAmp Candy & Arduino (or any other ADC of your choice), especially the GND and VCC else it may damage the muscle sensor.

Using the sensor
******************

.. youtube:: lPX2TGBcHOA
    :width: 100%
    :align: center

Some project ideas
********************

We have curated a playlist for you which consists some awesome project ideas for you to get started with your next HCI project.

.. youtube:: https://youtube.com/playlist?list=PLtkEloJ7UnkQIoz1HK4IXWujCB8hKdiKU&si=osloTX71TE7AJ3CF
    :width: 100%
    :align: center
