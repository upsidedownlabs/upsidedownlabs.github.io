.. _heart-bioamp-candy:

Heart BioAmp Candy
#####################

Overview
*********

Heart BioAmp Candy is a candy-sized sensor for recording ECG signals easily. It is perfect for students and researchers 
as it offers reliable and accurate ECG recordings, making heart monitoring accessible and convenient for educational and 
research purposes.

.. figure:: media/candy-angled.*
    :width: 100%
    :align: center
    :alt: Heart BioAmp Candy

    Heart BioAmp Candy
Features & Specifications
*****************************

+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Voltage       | 2.7 V - 5 V                                                                                                                                                                                        |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain          | x2157                                                                                                                                                                                              |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Bandpass filter     | 0.5 - 34 Hz                                                                                                                                                                                        |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware | Any development board with an ADC (Arduino UNO R3/R4, Arduino Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice. |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials       | ECG                                                                                                                                                                                                |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels     | 1                                                                                                                                                                                                  |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes          | 3 (Positive, Negative, and Reference)                                                                                                                                                              |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions          | 3.5 x 1.5 cm                                                                                                                                                                                       |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source         | Hardware + Software                                                                                                                                                                                |
+---------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Hardware
*************


.. figure:: media/-heart-bioamp-candy-front.*
    :width: 800
    :align: center
    :alt: Heart BioAmp Candy

    Assembled PCB Render - Front
    
.. figure:: media/candy-back.*
    :width: 800
    :align: center
    :alt: Heart BioAmp Candy

    Assembled PCB Render - Back

.. figure:: media/candy-dimensions.*
    :width: 800
    :align: center
    :alt: Heart BioAmp Candy Dimensions

    PCB Layout

.. figure:: media/candy-schematic.*
    :width: 800
    :align: center
    :alt: Heart BioAmp Candy Schematic

    Schematic Diagram

Contents of the kit
********************

+------------------------------+-----+
| Content of the kit           | Qty |
+==============================+=====+
| Heart BioAmp Candy           | 1   |
+------------------------------+-----+
| BioAmp Cable v3 (100cm)      | 1   |
+------------------------------+-----+
| Jumper cables (pack of 3)    | 1   |
+------------------------------+-----+
| Heart BioAmp Band (ECG Band) | 1   |
+------------------------------+-----+
| Gel electrodes               | 12  |
+------------------------------+-----+

.. figure:: media/candy-kit-contents.*
    :align: center
    :alt: kit contents

Software requirements
**********************

1. **Uploading the code:** Before you start using the kit, please download `Arduino IDE <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ on your development board.
2. **Visualizing the signals:** After uploading the firmware, you can use `Chords <https://chords.upsidedownlabs.tech/>`_, an open-source web application developed by us to record and visualize real-time biopotential signals (ECG, EMG, EEG, EOG).

Using the kit
****************

Step 1: Connections with development board
============================================

Connect ``VCC`` to either ``5V`` or ``3.3V``, ``GND`` to ``GND``, and ``OUT`` to ``Analog pin A0`` of your development board via jumper cables provided in the kit.

.. figure:: media/development-board-connections.*
    :align: center
    :width: 100%

.. note:: For demonstration purposes we are showing connections of the sensor with Arduino UNO R3/R4 but you can use any other development board or a standalone ADC of your choice.

.. warning:: Take precautions while connecting to power, if power pins (GND & VCC) are to be swapped, your sensor will be fried and it’ll become unusable (DIE).

Step 2: Connecting electrode cable
========================================

Connect the BioAmp cable to Heart BioAmp Candy by inserting the cable end in the JST PH connector as shown.

.. figure:: media/electrode-cable-connections.*
    :width: 100%
    :align: center

Step 3: Skin Preparation
===============================================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the dirt from skin. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step-by-step :ref:`skin-preparation`.

Step 4: Measuring ECG (ElectroCardioGraphy)
===============================================

Electrodes placement
-----------------------

We have 2 options to measure the ECG signals, either using the gel electrodes or using dry electrode based Heart BioAmp Band. You can try both of them one by one.

Using gel electrodes:
+++++++++++++++++++++++++++

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+,IN- and REF as shown in the connection diagram.

.. figure:: media/ecg-using-gel-electrodes.*
    :align: center
    :alt: Using Heart BioAmp Candy to measure ECG with gel electrodes

Using Heart BioAmp Band:
++++++++++++++++++++++++++

1. Snap the IN- cable on the left side, IN+ in the middle, and REF on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

.. figure:: media/ecg-using-band.*
    :align: center
    :alt: Using Heart BioAmp Candy to measure ECG with Heart BioAmp Band

.. tip:: Visit the complete documentation on how to :ref:`assemble and use the BioAmp Bands <using-bioamp-bands>` or follow the youtube `tutorial video <https://youtu.be/fr5iORsVyUM>`_.

Uploading the firmware
------------------------

Connect the development board to your laptop using a compatible USB cable. Copy paste the :fab:`github;pst-color-primary` `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ in Arduino IDE.

.. figure:: media/chords-arduino-firmware.*
    :align: center
    :alt: Chords Arduino firmware

.. note:: Upload the Arduino firmware according to the development board you are using. If you are using Arduino UNO R3 then you should upload UNO-R3 firmware but if you are using Arduino UNO R4 then make sure to upload the UNO-R4 firmware.


Now go to ``tools`` from the menu bar, select ``board`` option then select the right board name according to the development board you are using. In the same menu, select the COM port on which your board is connected. To find out the right COM port, disconnect your board and reopen the menu. The entry that disappears should be the right COM port. Now upload the code.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the ECG signals using Chords
------------------------------------------- 

1. Visit `Chords application <https://chords.upsidedownlabs.tech/>`_ website.
2. Click on ``visualize now``.
3. Click on ``connect``.
4. Select the correct COM port in the pop-window and click on ``connect`` to connect your development board to Chords.
5. You will be able to see your ECG signals on the screen.
   
   .. figure:: media/ecg-signals-using-candy.*
      :align: center
      :alt: ECG signals using Heart BioAmp Candy

.. note:: For more information, visit the `complete documentation <https://docs.upsidedownlabs.tech/software/chords/index.html>`_ of the Chords application.

