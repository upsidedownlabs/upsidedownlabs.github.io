.. _muscle-bioamp-blip:

Muscle BioAmp Blip
###################

A mikroBUS™ compatible ElectroMyography (EMG) sensor for precise recording of muscle signals.

Overview
*********

Muscle BioAmp Blip is single channel mikroBUS™ compatible ElectroMyography (EMG) sensor for precise  muscle signal recording. 
It allows you to add the EMG functionality to your projects at ease. You can either connect it to any mikroBUS port or even 
a breadboard to get started.

.. figure:: media/muscle-bioamp-blip.*
    :width: 800
    :align: center


Features & Specifications
*****************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 5 V                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^12 Ω                                                                                                                                                          |
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
| Dimensions            | 2.54 x 2.86 cm                                                                                                                                                     |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Hardware
**********

Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::

            **PCB Front**
            ^^^^^
            .. figure:: media/muscle-bioamp-blip-front.*

    .. grid-item::
        
        .. card::

            **PCB Back**
            ^^^^^
            .. figure:: media/muscle-bioamp-blip-front.*

.. figure:: media/muscle-bioamp-blip-assembled.*
    :align: center
    :width: 400
.. figure:: media/schematic.*
    :align: center

Connecting with Arduino
****************************

To get started, you can pair Muscle BioAmp Blip with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, 
Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

To measure the EMG signals, connect BioAmp Cable v3 with your muscle sensor as shown in the image below:

.. figure:: media/arduino-connections.*

.. Using the sensor
.. ******************

.. .. youtube:: lPX2TGBcHOA
..     :width: 100%
..     :align: center

Some project ideas
********************

.. We have curated a playlist for you which consists some awesome project ideas for you to get started with your next HCI project.

.. .. youtube:: https://youtube.com/playlist?list=PLtkEloJ7UnkQIoz1HK4IXWujCB8hKdiKU&si=osloTX71TE7AJ3CF
..     :width: 100%
..     :align: center
