.. _muscle-bioamp-blip:

Muscle BioAmp Blip
###################

Overview
*********

Muscle BioAmp Blip [#]_ is single channel mikroBUS™ [#]_ compatible ElectroMyography (EMG) sensor for precise  muscle signal recording. 
It allows you to add the EMG functionality to your projects at ease. You can either connect it to any mikroBUS™ port or even 
a breadboard to get started.

.. figure:: media/muscle-bioamp-blip.*
    :width: 800
    :align: center



Features & Specifications
*****************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 5 V                                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^12 ohm                                                                                                                                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | x2420                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Bandpass filter       | 72 – 720 Hz                                                                                                                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware   | Any development board with an ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few)                  |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 2.54 x 2.86 cm                                                                                                                                                   |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Hardware
**********

Images below shows a quick overview of the hardware design.

.. .. only:: html

..     .. grid:: 1 1 2 2
..         :margin: 4 4 0 0 
..         :gutter: 2

..         .. grid-item::

..             .. card::

..                 **PCB Front**
..                 ^^^^^
..                 .. figure:: media/muscle-bioamp-blip-front.*

..         .. grid-item::
            
..             .. card::

..                 **PCB Back**
..                 ^^^^^
..                 .. figure:: media/muscle-bioamp-blip-front.*

.. .. only:: latex

..     .. figure:: media/muscle-bioamp-blip-front.*
..         :align: center

.. figure:: media/muscle-bioamp-blip-assembled.*
    :align: center
    :width: 60%

    Assembled PCB

Contents of the kit
********************

+---------------------+-----+
| Contents of the kit | Qty |
+=====================+=====+
| Muscle BioAmp Blip  | 1   |
+---------------------+-----+
| BioAmp Cable v3     | 1   |
+---------------------+-----+
| Muscle BioAmp Band  | 1   |
+---------------------+-----+
| Boxy gel electrodes | 6   |
+---------------------+-----+

.. figure:: media/blip-kit-contents.*
    :align: center
    :width: 80%

Software requirements
**********************

Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches on your development board and visualise the data on your laptop.
    
.. figure:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*
    :align: center
    :alt: Arduino IDE v1.8.19 (legacy IDE)

    Arduino IDE v1.8.19 (legacy IDE) 


Visit Upside Down Labs `Chords Web <https://chords.upsidedownlabs.tech>`_ to visualize your biosignals directly in the browser.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Chords Web Landing Page 

    Chords Web Landing Page

**Getting started with Chords Web**

.. youtube:: IVIPnk9z75g
    :align: center
    :width: 100%


Using the kit
****************

Step 1: Soldering connector & header pins
============================================

Solder the header pins and JST Ph 2.0mm connector on the Muscle BioAmp Blip as shown below. If you ordered assembled kit then you can skip this step and directly move to step 2.

.. figure:: media/soldering-blip.*
    :width: 80%
    :align: center

Step 2: Connections with the sensor
========================================

There can be various ways of connecting the Muscle BioAmp Blip. Some of the options are given below:

Directly connecting jumper cables
-----------------------------------

You can directly connect the male to female jumper cables on the header pins of Muscle BioAmp Blip at ``5V``, ``GND``, ``AN``.

.. figure:: media/blip-with-jumper-cables.*
    :width: 80%
    :align: center

Connecting on breadboard
---------------------------

If you are thinking to connect more components/sensors and want to integrate Muscle BioAmp Blip in the complete circuit then it will be better to use a breadboard. Snap the Muscle BioAmp Blip on the breadboard and connect the jumper cables (male to male) at ``5V``, ``GND``, ``AN``.

.. figure:: media/blip-with-breadboard.*
    :width: 80%
    :align: center

Connecting via mikroBUS port
-----------------------------

You can also connect the Muscle BioAmp Blip to any hardware that has mikroBUS™ port like mikroBUS™ shuttle, mikroBUS™ Arduino UNO Click Shield to name a few.

.. figure:: media/blip-with-shuttle.*
    :width: 80%
    :align: center

Step 3: Connecting with Arduino UNO R3
=======================================

Connect ``5V`` of the sensor to ``5V`` of your Arduino UNO, ``GND`` to ``GND``, and ``AN`` to ``Analog pin A0`` via other end of the jumper cables. If you are connecting ``AN`` to any other analog pin, then you will have to change the `INPUT PIN` in the example arduino sketch accordingly.

.. figure:: media/blip-arduino-connections.*
    :align: center

.. note:: For demonstration purposes we are showing connections of the sensor with Arduino UNO R3 but you can use any other development board or a standalone ADC of your choice.

Step 4: Connecting electrode cable
========================================

Connect the BioAmp cable to Muscle BioAmp Blip by inserting the cable end in the JST PH connector as shown.

.. figure:: media/blip-bioamp-cable.*
    :align: center

Step 5: Skin Preparation
===============================================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 6: Electrodes placement
===============================================

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

Using gel electrodes
----------------------

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. only:: latex

   .. figure:: media/emg-connections-1.*
       :align: center
       :width: 60%

       Muscle BioAmp Blip with breadboard

.. only:: html

   .. figure:: media/emg-connections-1.*
       :align: center

       Muscle BioAmp Blip with breadboard

Using Muscle BioAmp Band
---------------------------

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

.. tip:: Visit the complete documentation on how to :ref:`assemble and use the BioAmp Bands <using-bioamp-bands>` or follow the youtube video given below.
   **Tutorial on how to use the band:**

   .. youtube:: xYZdw0aesa0
       :align: center
       :width: 100%

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Step 7: Uploading the code
=============================

Connect your Arduino UNO R3 to your laptop using the USB cable (Type A to Type B). Copy paste any one of the arduino sketches given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Step 8: Visualizing the EMG signals
=====================================

For visualizing the EMG signals, use `Chords Web <https://chords.upsidedownlabs.tech/>`_ for quick and hassle free real-time biosignal visualization right from your browser, without installing any software.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Visualizing EMG signals on Chords Web

    Visualizing EMG signals on Chords Web

Now flex your arm to visualize the muscle signals in real time on your laptop.

.. figure:: media/emg-recording.*
    :align: center
    :alt: Visualizing EMG signals on Arduino IDE v1.8.x

    Visualizing EMG signals on Arduino IDE v1.8.x

.. rubric:: Footnotes

.. [#] Please not that click board is a registered trademark of MIKROE thus you might see a white mark on the Muscle BioAmp Blip v0.1 pcbs (since the sensor was named as Muscle BioAmp Click earlier).
.. [#] mikroBUS™ is a socket standard developed by MIKROE which enables hundreds of Click boards™ to be connected to the microcontroller or microprocessor.
