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
    :align: center

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

.. figure:: media/kit-contents.*
    :align: center

We have made a complete unboxing video of the kit. Please find the link below: 

.. youtube:: qRKU_HvapDE
    :align: center
    :width: 100%

Software requirements
**********************

1. **Arduino IDE**
   
   - Latest Version (v2.3.8+): `Arduino IDE Latest Version Download <https://www.arduino.cc/en/software>`_ `(Recommended for faster compilation and enhanced support for the latest Arduino UNO Development Boards)`
   
   - Legacy Version (v1.8.19): `Arduino IDE v1.8.19 (legacy IDE) Download <https://www.arduino.cc/en/software>`_  `(For Real-time signal visualization using a better built-in Serial Plotter)`

.. figure:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*
    :align: center
    :alt: Arduino IDE v1.8.19 (legacy IDE)

2. **Chords Web Visualizer**
   
   Use `Chords Web <https://chords.upsidedownlabs.tech>`_, our custom web interface designed to visualize biopotential signals data directly in your browser. `(Plug-and-play signal visualization directly in any modern web browser.)`
   
   .. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Chords Web Landing Page

    Chords Web Landing Page

   .. note:: For detailed instructions and visualization tips, check the :ref:`Chords Web Documentation <chords>`.

    .. youtube:: IVIPnk9z75g
        :align: center
        :width: 90%

Using the kit
****************

Step 1: Connect reference cable
=================================

Connect the reference cable to the Muscle BioAmp Patchy as shown in the diagram.

.. figure:: media/ref-cable-connection.*
    :align: center

Step 2: Connecting sensor to gel electrodes
================================================

Snap the Muscle BioAmp Patchy on the gel electrodes (Don't peel the plastic backing from the electrodes at this moment).

.. figure:: media/patchy-electrode-connection.*
    :width: 80%
    :align: center

Step 3: Skin Preparation
=============================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 4: Electrode Placements
==============================

Now peel off the plastic backing from the gel electrodes and place the Muscle BioAmp Patchy on the targeted muscle and the reference on the bony part of your elbow as shown in the diagram.

.. figure:: media/patchy-on-hand.*
    :align: center

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Step 5: Connect Arduino UNO R3
=================================

Connect ``VCC`` to ``5V``, ``GND`` to ``GND``, and ``OUT`` to ``Analog pin A0`` of your Arduino UNO via jumper cables provided by us. If you are connecting ``OUT`` to any other analog pin, then you will have to change the INPUT PIN in the arduino sketch accordingly.

.. figure:: media/pathcy-arduino-connections.*
    :align: center

    Connections with Arduino UNO R3

.. note:: For demonstration purposes we are showing connections of the sensor with Arduino UNO R3 but you can use any other development board or a standalone ADC of your choice.

Step 6: Upload the code
===========================

- Connect your **Arduino UNO Development Board** to your laptop using the USB cable. 

- Copy paste any one of the arduino sketches given below in ``Arduino IDE latest version (v2.3.8+)``:
    
:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/02_EMG_Filter/02_EMG_Filter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/03_EMG_Envelope/03_EMG_Envelope.ino>`_

.. figure:: media/setup.*
    :align: center

- Go to ``Tools`` menu, navigate to ``Board``, and select **Arduino UNO Development Board** (UNO R3/ R4/ Minima/ WiFi or any other board). 
- In the same menu, select the ``Port`` to which your Arduino Uno is connected. 
- **Tip:** To find the correct **COM Port**, disconnect your board and reopen the menu. The entry that disappears should be the right COM port. 
- ``Upload`` the code.

.. warning:: For the best signal acquisition, ensure your laptop is not connected to a charger and maintain a distance of at least 5m from any AC appliances, read more about :ref:`Tips for better signal acquisition <tips-for-best-signal-acquisition>`.

Step 7: Visualizing the EMG signals
======================================

1. **Using Chords Web**
   
   For visualizing the EMG signals, use `Chords Web <https://chords.upsidedownlabs.tech/>`__ for quick and hassle-free real-time bio-potential signals visualization right from your browser, without installing any software.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center
    :alt: Visualizing EMG signals on Chords Web

    Visualizing EMG signals on Chords Web

Now flex your arm to visualize the muscle signals in real-time on your laptop.

2. **Using Arduino legacy v1.8.19** 
   
   To visualize the signal on Arduino v1.8.19 we will use inbuilt Serial Plotter:

- Navigate to (``Tools`` > ``Board``) and select your Development board or Arduino UNO Board (if not detected automatically).
- Open the Serial Plotter (``Tools`` > ``Serial Plotter`` or ``Ctrl+Shift+L``) to visualize the EMG signals.
- Once the Serial Plotter is open, ensure the baud rate is set to ``115200``.
- Now flex your arm to visualize the muscle signals in real time on your laptop.

.. figure:: media/patchy-emg.*
    :align: center
    :alt: Visualizing EMG signals on Arduino IDE v1.8.x

    Visualizing EMG signals on Arduino IDE v1.8.x

Video Tutorial
===============

If you prefer a visual walkthrough, check out our video tutorial:

.. youtube:: 4dnCX3U7LS8
    :align: center
    :width: 100%