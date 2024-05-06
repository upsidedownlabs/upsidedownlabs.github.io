.. _muscle_bioamp-biscute:

Muscle BioAmp Biscute
######################

Overview
*********
Muscle BioAmp BisCute is the most affordable DIY ElectroMyography (EMG) sensor in the world that allows you to create a
Human-Computer Interface (HCI) projects with ease. In the process of building your own BisCute, you learn what goes 
into making a functional biopotential amplifier that can be used for amplifying sub mV signals generated by muscles 
inside your body to a level a microcontroller unit (MCU) can understand.

.. figure:: media/Muscle_BioAmp_BisCute.*
    :width: 800
    :align: center


Features & Specifications
***************************

+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 3.3-30 V                                                                                                                                                                                              |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^11 ohm                                                                                                                                                                                             |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | x2420                                                                                                                                                                                                 |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Bandpass filter       | 72 – 720 Hz                                                                                                                                                                                           |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware   | Any development board with an ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice                  |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                                                                |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                                                     |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                                                                 |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 3.0 x 4.5 cm                                                                                                                                                                                          |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                                                                   |
+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

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

    **Assembled PCB**

.. figure:: media/dimensions.*
    :align: center

    **PCB Layout**

.. figure:: media/schematic.*
    :align: center   

    **Schematic Diagram**

Contents of the kit
********************

.. image:: media/kit-contents.*

Software requirements
**********************

- Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches on your development board and visualise the data on your laptop.
    
.. image:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.png

Assembling the kit
********************

You can get Muscle BioAmp BisCute from our `online stores <https://linktr.ee/Upside_Down_Labs_stores>`_ (shipping worldwide) and for assembling the BisCute you can either take a look at `this interactive BOM <https://upsidedownlabs.github.io/Muscle-BioAmp-BisCute/>`_ or the step by step guide given below. 

**Note:** Follow the highlighted yellow shapes to assemble your Muscle BioAmp BisCute!

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


Still can't figure out the assembly? You can watch the video below to assemble your Biscute.

.. youtube:: 2dzW6pVT1L8
    :width: 100%
    :align: center

Using the kit
****************

Step 1: Connect Arduino UNO R3
=================================

.. image:: media/arduino-biscute-connection.*

Connect ``VCC`` to either ``5V`` or ``3.3V``, ``GND`` to ``GND``, and ``OUT`` to ``Analog pin A0`` of your Arduino UNO via jumper cables provided by us. If you are connecting ``OUT`` to any other analog pin, then you will have to change the INPUT PIN in the arduino sketch accordingly.

**Note:** For demonstration purposes we are showing connections of the sensor with Arduino UNO R3 but you can use any other development board or a standalone ADC of your choice.

.. warning:: Take precautions while connecting to power, if power pins (GND & VCC) are to be swapped, your sensor will be fried and it’ll become unusable (DIE).

Step 3: Connecting electrode cable
========================================

.. image:: media/biscute-cable-connection.*

Connect the BioAmp cable to Muscle BioAmp Biscute by inserting the cable end in the JST PH connector as shown above.

Step 4: Skin Preparation
===============================================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 5: Measuring EMG (ElectroMyoGraphy)
===============================================

Electrodes placement
---------------------

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

- **Using gel electrodes:**

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. image:: media/biscute-emg.*

- **Using Muscle BioAmp Band:**

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

   **Tutorial on how to use the band:**

.. youtube:: xYZdw0aesa0
    :align: center
    :width: 100%

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Uploading the code
---------------------

Connect your Arduino UNO to your laptop using the USB cable (Type A to Type B). Copy paste any one of the arduino sketches given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
EMG Filter: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino

EMG Envelope: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the EMG signals
----------------------------

Now flex your arm to visualize the muscle signals in real time on your laptop.

.. image:: media/using-biscute.*
    

**Video tutorial:**

.. youtube:: ujFsAE0E0nk
    :align: center
    :width: 100%