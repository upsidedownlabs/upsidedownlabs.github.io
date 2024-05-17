.. _diy-neuroscience-kit-pro:

DIY Neuroscience Kit Pro
#########################

The advanced DIY Neuroscience kit with Muscle BioAmp Shield - an EMG Shield for Arduino UNO!
The shield offers multiple plug-and-play options, and additional data acquisition while the BioAmp EXG Pill 
enhances versatility by enabling the measurement of various biopotential signals, including EEG (brain), EOG (eyes), 
EMG (muscles), and ECG (heart). Embark on a journey of discovery, as you build exciting projects, develop HCI/BCI 
applications, and gain valuable insights.

.. figure:: media/diy-neuroscience-kit-pro.*
    :align: center

Contents of the kit
********************

+--------------------------------------+--------+
| Kit Contents                         | Qty    |
+======================================+========+
| BioAmp EXG Pill                      | 1      |
+--------------------------------------+--------+
| BioAmp Bands                         | 1      |
+--------------------------------------+--------+
| BioAmp Cable                         | 1      |
+--------------------------------------+--------+
| Jumper Cables                        | 1      |
+--------------------------------------+--------+
| Skin Preparation Kit                 | 1      |
+--------------------------------------+--------+
| Electrode Gel                        | 1      |
+--------------------------------------+--------+
| Gel Electrodes                       | 24+100 |
+--------------------------------------+--------+
| Repositionable gel electrodes (3 pc) | 1      |
+--------------------------------------+--------+
| Arduino UNO                          | 1      |
+--------------------------------------+--------+
| Servo Claw                           | 1      |
+--------------------------------------+--------+
| Muscle BioAmp Shield Kit             | 1      |
+--------------------------------------+--------+


.. figure:: media/kit-content.*
    :align: center

.. youtube:: Sn389Q7Izy4
    :width: 100%
    :align: center

Software requirements
**********************

- Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches in your development board and visualise the data on your laptop.
    
.. image:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*

- Download Backyard Brains' `Spike Recorder <https://backyardbrains.com/products/spikerecorder>`_ according to the operating system you are using (Windows, OSX, Linux).

.. image:: ../../../kits/diy-neuroscience/basic/media/byb.*

Using the kit
**************

DIY Neuroscience Kit Pro includes 2 biopotential sensors:

1) BioAmp EXG Pill (Assembled)
2) Muscle BioAmp Shield v0.3 (Assembled)

You can use these sensors either separately or connect them together to create a 2-channel EXG acquisition system wherein 1 channel can be used to record EMG signals and the 2nd channel allows you to record all the biopotential signals from your body (EMG, ECG, EOG, EEG).

Step 1: Using BioAmp EXG Pill
================================

BioAmp EXG Pill is a small, powerful analog-front-end (AFE) biopotential signal-acquisition board that can be paired 
with any microcontroller unit (MCU) or single-board computer (SBC) with an analog-to-digital converter (ADC) such as 
Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, and Raspberry Pi Pico, to name 
just a few. It also works with any dedicated ADC, like the Texas Instruments ADS1115 and ADS131M0x, among others.

.. figure:: ../../../media/bioamp-exg-pill.*

.. note:: Checkout the complete documentation on `BioAmp EXG Pill <https://docs.upsidedownlabs.tech/hardware/bioamp/bioamp-exg-pill/index.html#>`_ which includes how to use the sensor, record various biopotential signals from your body (ECG, EMG, EOG, EEG) and make different HCI/BCI projects using it.

Step 2: Using Muscle BioAmp Shield
=======================================

Muscle BioAmp Shield is an all-in-one Arduino Uno ElectroMyography (EMG) shield for learning neuroscience with ease which is inspired from 
BackYard Brains (BYB) `Muscle Spiker shield <https://backyardbrains.com/products/muscleSpikerShield>`_ and provides similar features like hobby servo output, user buttons, LED Bar, Audio output, and 
battery input. It is perfect for beginners as they can easily stack it on top of Arduino Uno to record, visualize and listen to their muscle 
signals to make amazing projects in the domain of Human-Computer Interface (HCI).

.. figure:: ../../../media/muscle-bioamp-shield.*

.. note:: Checkout the complete documentation on `Muscle BioAmp Shield <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-shield/index.html>`_ which includes how to use the sensor, record/visualise/listen muscle signals and make different HCI projects using it.

Step 3: Using the sensors together
======================================

We believe that you have already gone through the documentation of BioAmp EXG Pill & Muscle BioAmp Shield using the links provided in step 1 and 2 respectively.

You have covered the basic steps till now including connections with the development board, skin preparation, electrodes placements, and recording the signals from your body. Let's move forward to becoming a PRO and creating a 2-channel EXG aquisition system.

a. Connecting Muscle BioAmp Shield to MCU/ADC
---------------------------------------------------

Stack the Muscle BioAmp Shield on top of your Arduino Uno properly.

.. only:: html

    .. figure:: ../../../hardware/bioamp/muscle-bioamp-shield/media/gifs/shield-arduino-connection.gif
        :align: center

.. only:: latex

    .. figure:: ../../../hardware/bioamp/muscle-bioamp-shield/media/images/shield-arduino-connection.*
        :align: center

b. Connecting sensors together
--------------------------------------

Connect the BioAmp EXG Pill to the A2 port of Muscle BioAmp Shield via 3-pin STEMMA cable which has JST PH 2.0mm connector on one end and 3 female jumpers on the other end.

c. Connecting electrode cable
--------------------------------

Connect the BioAmp cable to BioAmp EXG Pill by inserting the cable end in the JST PH connector as shown in the graphic below.

.. todo:: add gif

Now connect another BioAmp cable to Muscle BioAmp Shield by inserting the cable end in the JST PH connector as shown in the graphic below.

.. todo:: add gif

d. Skin Preparation
---------------------------

We'll create a 2-channel EMG acquisition system and to do so, we'll be using both the sensors to record EMG signals from the ulnar nerve of both the hands, Thus, prepare the skin accordingly. 

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step `skin preparation guide <https://docs.upsidedownlabs.tech/guides/usage-guides/skin-preparation/index.html>`_.

e. Electrodes placement
-------------------------

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

Using gel electrodes
++++++++++++++++++++++

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. todo:: add graphics of both hands

Using Muscle BioAmp Band
+++++++++++++++++++++++++

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

   **Tutorial on how to use the band:**

.. youtube:: xYZdw0aesa0
    :align: center
    :width: 100%

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

