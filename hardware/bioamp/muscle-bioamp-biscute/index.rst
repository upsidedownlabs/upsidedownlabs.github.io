.. _muscle_bioamp-biscute:

Muscle BioAmp Biscute
######################

Most affordable DIY Electromyography (EMG) sensor

Overview
*********
Muscle BioAmp BisCute is an ultra-affordable DIY ElectroMyography (EMG) sensor that allows you to create a
Human-Computer Interface (HCI) with ease and in the process of building your own BisCute, you learn what goes 
into making a functional biopotential amplifier that can be used for amplifying sub mV signals created by muscles 
inside your body to a level a microcontroller unit (MCU) can understand. To record the EMG signals you can use any 
standalone ADC like ADS1115 or any microcontroller development board with an ADC of your choice like Arduino UNO/Nano.

.. figure:: media/Muscle_BioAmp_BisCute.*
    :width: 800
    :align: center


Features & Specifications
***************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 3.3-30 V                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^11 ohm                                                                                                                                                        |
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
| Dimensions            | 3.0 x 4.5 cm                                                                                                                                                     |
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
            .. figure:: media/front.*

    .. grid-item::
        
        .. card::

            **PCB Back**
            ^^^^^
            .. figure:: media/back.*            

.. figure:: media/assembled.*
    :align: center

.. figure:: media/dimensions.*
    :align: center

.. figure:: media/schematic.*
    :align: center   

Assemblying the kit
********************

You can get your own Muscle BioAmp BisCute bag of parts from `our store <https://store.upsidedownlabs.tech/product/muscle-bioamp-biscute-diy/>`_ or `Tindie <https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-biscute-diy-muscle-sensor/>`_ and for assembling your Biscute you can either take a look at `this interactive BOM <https://upsidedownlabs.github.io/Muscle-BioAmp-BisCute/>`_ or the step by step guide below. 

.. grid:: 1 1 3 3
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::
        
        .. figure:: media/Assembly/001_Board.*

            **Step 1 - Bare Board**

    .. grid-item::

        .. figure:: media/Assembly/002_100K_Resistor.*
            
            **Step 2 - 100K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/003_10K_Resistors.*

            **Step 3 - 10K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/004_1M_Resistors.*

            **Step 4 - 1M Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/005_330R_Resistors.*

            **Step 5 - 330R Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/006_220K_Resistor.*

            **Step 6 - 220K Resistor** 

    .. grid-item::

        .. figure:: media/Assembly/007_4.7nF_Capacitor.*

            **Step 7 - 4.7nF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/008_2.2uF_Capacitor.*

            **Step 8 - 2.2uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/009_470uF_Capacitor.*

            **Step 9 - 470uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/010_100nF_Capacitors.*

            **Step 10 - 100nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/011_1nF_Capacitors.*

            **Step 11 - 1nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/012_1K_Resistor.*

            **Step 12 - 1K Resistor** 

    .. grid-item::

        .. figure:: media/Assembly/013_Connector.*

            **Step 13 - BioAmp Connector** 

    .. grid-item::

        .. figure:: media/Assembly/014_HeaderPin.*

            **Step 14 - Header Pins** 

    .. grid-item::

        .. figure:: media/Assembly/015_IC.*

            **Step 15 - IC** 


Still can't figure out the assembly? You can follow `this video <https://www.youtube.com/embed/2dzW6pVT1L8>`_ to assemble your BisCute.

Connecting with Arduino
*************************

After assembling the kit, you can pair it with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, 
Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

To measure the EMG signals, just connect BioAmp Cable v3 with the Muscle BioAmp BisCute as shown in the image below, and get started.

.. figure:: media/Electrode_Placement_Example.*

Using the Sensor
*******************

.. youtube:: ujFsAE0E0nk
    :align: center
    :width: 100%

Some project ideas
************************

We have curated a playlist for you which consists some awesome project ideas for you to get started with your next HCI project.

.. .. youtube:: https://youtube.com/playlist?list=PLtkEloJ7UnkQIoz1HK4IXWujCB8hKdiKU&si=osloTX71TE7AJ3CF
..     :width: 100%
..     :align: center
