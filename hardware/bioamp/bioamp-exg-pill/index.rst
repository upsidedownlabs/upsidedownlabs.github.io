.. _bioamp-exg-pill:

BioAmp EXG Pill
##################

:bdg-danger:`v1.0`

Overview
*********

BioAmp EXG Pill is a small, powerful analog-front-end (AFE) biopotential signal-acquisition board that can be paired 
with any microcontroller unit (MCU) or single-board computer (SBC) with an analog-to-digital converter (ADC) such as 
Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, and Raspberry Pi Pico, to name 
just a few. It also works with any dedicated ADC, like the Texas Instruments ADS1115 and ADS131M0x, among others.

.. note:: It is recommended to use Arduino UNO R4 while recording biopotential signals since it has 14-bit ADC and can record the signals much accurately.

.. figure:: ../../../media/bioamp-exg-pill.*
    :align: center

What makes it different?
**************************

1. Record publication-quality biopotential signals like ECG, EMG, EOG, or EEG.
2. Small size (25.4 x 10.0mm) allows easy integration into mobile and space-constrained projects.
3. Powerful noise rejection makes it usable even when the device is close to the AC mains supply.
4. Any 1.5 mm diameter wire can be used as a strain-relieving electrode cable, making it very cost-effective.
5. Pair it with any MCU with an ADC. It is by default compatible with 5V but you can make it compatible with 3.3V as well using a voltage divider.
6. Configure the gain, band pass filter and electrode count according to your requirements.

Features & Specifications
**************************

+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Operating Voltage                   | 5 V                                                                                                                                                                                                   |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance                     | 10^12 ohm                                                                                                                                                                                             |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware                 | Any development board with an ADC (Arduino UNO & Nano, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice                  |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials                       | EMG, ECG, EOG, EEG (configurable band-pass, by default configured for EEG & EOG)                                                                                                                      |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels                     | 1                                                                                                                                                                                                     |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes                          | 2 or 3 (By default configured for 3 electrodes)                                                                                                                                                       |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions                          | 25.4 x 10 mm                                                                                                                                                                                          |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source                         | Hardware + Software                                                                                                                                                                                   |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Board layout
*************

BioAmp EXG Pill’s elegant design allows it to be used in 3 ways:

1. Pin-header holes allow you to solder (berg strip) pin headers for easy use with a breadboard.
2. Castellated holes allow you to solder BioAmp EXG Pill directly onto a custom PCB that requires biopotential-amplification capabilities.
3. Electrode holes allow you to use any 1.5 mm diameter wire as an electrode cable with minimal strain.

.. figure:: media/Front_Specifications.*
    :align: center

.. figure:: media/Back_Specifications.*
    :align: center

BioAmp EXG Pill is fully configurable
=============================================

1. Increase the gain of the instrumentation amplifier by using a 0603 resistor at ``R6``. Decrease gain and configure the bandpass filter by using 0603 parts at ``R12`` and ``C5``. Band limiting is very useful for EOG and EEG recording. Also, the signal sometimes clips while recording an ECG with electrodes very close to the heart. Creating a solder jumper for a band-pass filter helps with that. By default, BioAmp EXG Pill is configured to record EEG and EOG but you can bridge the pads (below bandpass) with solder to make it configurable for EMG and ECG.
2. The normal method of operation for best-quality signal amplification is to use 3 electrodes by default but you can bridge the pads (below electrodes) to make it configurable for 2 electrodes. The 2-electrode mode is specifically included for projects like heart (ECG) patches for HRV. It’s only supposed to be used with a battery-operated setup and is quite prone to high interference noise due to a lack of proper reference on the body (This option is not recommended for most operations)

Software requirements
**********************

- Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches in your development board and visualise the data on your laptop.
    
.. figure:: ../../../kits/diy-neuroscience/basic/media/arduino-ide.*

- Visit Upside Down Labs `Chords Web <https://chords.upsidedownlabs.tech>`_ to visualize your biosignals directly in the browser.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*

.. grid:: 1 1 1 1
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::
            
            **Getting started with Chords Web**

            .. youtube:: IVIPnk9z75g
                :align: center
                :width: 100%

.. tip:: To know more about Chords Web :ref:`click here<chords>`.

Using the Hardware
*********************

If you have received the assembled BioAmp EXG Pill then you can skip the step 1 and move on to step 2.

Step 1: Solder Connectors
===========================

Insert the provided BioAmp cable's JST PH connector and header pins from top as shown in the image and solder them from below.

.. figure:: media/assembly-step1.*
    :align: center

    Soldering the connector & header pins on BioAmp EXG Pill

.. figure:: media/bioamp-exg-pill-soldered.*
    :align: center

    After soldering, BioAmp EXG Pill should look like this

Step 2 (optional): Configure for ECG/EMG
==========================================

BioAmp EXG Pill is by default configured for recording EEG or EOG but if you want to record good quality ECG or EMG, then it is recommended to configure it by making a solder joint as shown in the image.

.. figure:: media/assembly-step2.*
    :align: center

.. note:: Even without making the solder joint the BioAmp EXG Pill is capable of recording ECG or EMG but the signals would be more accurate if you configure it.

Step 3: Connect MCU/ADC
=========================

Connect your BioAmp EXG Pill to your MCU/ADC as per the connection table shown below:

.. table:: BioAmp to MCU/ADC connection

    +--------+-----------+
    | BioAmp | MCU/ADC   |
    +========+===========+
    | VCC    | 5V        |
    +--------+-----------+
    | GND    | GND       |
    +--------+-----------+
    | OUT    | ADC Input |
    +--------+-----------+

For all the examples provided, we are using the A0 pin of Arduino UNO R3. Connect your BioAmp to your MCU/ADC via jumper cables provided in the kit. If you are connecting ``OUT`` pin of BioAmp to any other analog pin (A0-A5) of Arduino UNO board, then you will have to change the INPUT PIN in the Arduino sketch accordingly.

.. figure:: media/connections-with-arduino.*
    :align: center

    Connections with Arduino UNO R3

.. warning:: Take precautions while connecting to power, if power pins are to be swapped, your BioAmp EXG Pill will be fried and it’ll become unusable (DIE).

Step 4: Connecting electrode cable
====================================

Connect the BioAmp cable to BioAmp EXG Pill by inserting the cable end in the JST PH connector as shown in the graphic below.

.. figure:: media/connection-with-cable.*
    :align: center

    Connections with BioAmp Cable v3

Step 5: Skin Preparation
===========================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 6: Measuring ElectroMyoGraphy (EMG)
=========================================

.. note::

   Electromyography (EMG) is a technique for evaluating and recording the electrical activity produced by skeletal muscles. 
   EMG is also used as a diagnostic procedure to assess the health of muscles and the nerve cells that control them (motor 
   neurons). EMG results can reveal nerve dysfunction, muscle dysfunction, or problems with nerve-to-muscle signal transmission. 

..    .. figure:: media/EMGEnvelop.*
..        :align: center

..    .. figure:: media/EMG.*
..        :align: center

Electrodes placement
----------------------

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

- **Using gel electrodes:**

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. figure:: media/emg.*

- **Using Muscle BioAmp Band:**

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.

2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

.. tip:: Visit the complete documentation on how to :ref:`assemble and use the BioAmp Bands <using-bioamp-bands>` or follow the youtube video given below.

   **Tutorial on how to use the band:**

   .. youtube:: xYZdw0aesa0
       :align: center
       :width: 100%

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Uploading the code
---------------------------

Connect the Arduino Uno to your laptop using the USB cable (Type A to Type B). Copy paste any one of the Arduino Sketches given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
:fab:`github;pst-color-primary` `EMG Filter <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino>`_

:fab:`github;pst-color-primary` `EMG Envelope <https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino>`_

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the tools menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. tip:: Visit the complete documentation on how to :ref:`How to upload the code <muscle-bioamp-arduino-firmware-code-upload>`.

.. important:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the EMG signals
----------------------------

For visualizing the EMG signals, use `Chords Web <https://chords.upsidedownlabs.tech/>`_ for quick and hassle-free real-time biosignal visualization—right from your browser, without installing any software.

.. figure:: ../../../software/chords/chords-web/media/chords_emg_signal.*
    :align: center

    Visualizing EMG signals on Chords Web

Now flex your arm to visualize the muscle signals in real time on your laptop.

.. figure:: media/EMGEnvelop.*
    :align: center

    Visualizing EMG signals on Arduino IDE v1.8.x

Step 6: Measuring ElectroCardioGraphy (ECG)
=============================================

.. note::

   Electrocardiography (ECG) is the process of producing an electrocardiogram (ECG or EKG). It is a graph of voltage versus time 
   of the electrical activity of the heart using electrodes placed on the skin. These electrodes detect the small electrical changes 
   that are a consequence of cardiac muscle depolarization followed by repolarization during each cardiac cycle (heartbeat).

Electrodes placement
----------------------

We have 2 options to measure the ECG signals, either using the gel electrodes or using dry electrode based Heart BioAmp Band. You can try both of them one by one.

- **Using gel electrodes:**

1. Connect the BioAmp cable to gel electrodes
2. Peel the plastic backing from electrodes
3. Place the IN- cable on the left side, IN+ in the middle and REF (reference) on the far right side as shown in the diagram.

.. figure:: media/ecg.*
    :align: center

- **Using Heart BioAmp Band:**

1. Wear the band as depicted in the video tutorial given below
2. Place the IN- cable on the left side, IN+ in the middle and REF (reference) on the far right side.
3. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

.. tip:: Visit the complete documentation on how to :ref:`assemble and use the BioAmp Bands <using-bioamp-bands>` or follow the youtube video given below.

   **Tutorial on how to use the band:**

   .. youtube:: fr5iORsVyUM
       :align: center
       :width: 100%

Uploading the code
---------------------

Connect Arduino Uno to your laptop using the USB cable (Type A to Type B). Copy paste the Arduino Sketch given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
:fab:`github;pst-color-primary` `ECG Filter <https://github.com/upsidedownlabs/Heart-BioAmp-Arduino-Firmware/blob/main/2_ECGFilter/2_ECGFilter.ino>`_

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the tools menu to visualize 
the signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. tip:: Visit the complete documentation on how to :ref:`How to upload the code <heart-bioamp-arduino-firmware-code-upload>`.

.. important:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the ECG signals
-----------------------------

For visualizing the ECG signals, use `Chords Web <https://chords.upsidedownlabs.tech/>`_ for quick and hassle-free real-time biosignal visualization—right from your browser, without installing any software.

.. figure:: ../../../software/chords/chords-web/media/chords_ecg_signal.*
    :align: center

    Visualizing ECG signals on Chords Web


Sit back, relax and see your ECG signals in real time on your laptop.

.. figure:: media/bioamp-Exg-Pill-ECG.*
    :align: center

    Visualizing ECG signals on Arduino IDE v1.8.x

Step 7: Measuring Electrooculography (EOG)
================================================

.. note::

   Electrooculography (EOG) is a technique for measuring the corneo-retinal standing potential that exists between the front and 
   the back of the human eye. The resulting signal is called EOG. To measure eye movement, pairs of electrodes are typically placed 
   either above and below the eye or to the left and right of the eye. If the eye moves from the center position toward one of the two 
   electrodes, this electrode "sees" the positive side of the retina, and the opposite electrode "sees" the negative side of the retina. 
   Consequently, a potential difference occurs between the electrodes. Assuming the resting potential is constant, the recorded potential 
   is a measure of the eye’s position.

Electrodes placement
----------------------

We have 2 ways to measure the EOG signals, either record the horizontal eye movement or the vertical eye movement. You can one by one record both the signals.

- **Horizontal EOG recording:**

.. figure:: media/eog-horizontal.*
    :align: center

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from electrodes.
3. Place the IN- cable on the right side of the eye, IN+ on the left side of the eye and REF (reference) at the bony part, on the back side of your earlobe as shown in the diagram above.

- **Vertical EOG recording:**

.. figure:: media/eog-vertical.*
    :align: center

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from electrodes.
3. Place the IN- & IN+ cables above and below the eye respectively and REF (reference) at the bony part, on the back side of your earlobe as shown in the diagram above.

Uploading the code
---------------------

Connect Arduino Uno to your laptop using the USB cable (Type A to Type B). Copy paste the Arduino Sketch given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
:fab:`github;pst-color-primary` `EOG Filter <https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware/blob/main/2_EOGFilter/2_EOGFilter.ino>`_

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Arduino Uno is connected. To find out the right COM port, 
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the tools menu to visualize 
the signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. tip:: Visit the complete documentation on how to :ref:`How to upload the code <eye-bioamp-arduino-firmware-code-upload>`.

.. important:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the EOG signals
------------------------------

For visualizing the EOG signals, use `Chords Web <https://chords.upsidedownlabs.tech/>`_ for quick and hassle-free real-time biosignal visualization—right from your browser, without installing any software.

.. figure:: ../../../software/chords/chords-web/media/chords_eog_signal.*
    :align: center

    Visualizing EOG signals on Chords Web


Move your eyes up-down or left-right to see your EOG signals in real time on your laptop.

.. figure:: media/bioamp-exg-pill-eog.*
    :align: center

    Visualizing EOG signals on Arduino IDE v1.8.x

Step 8: Measuring Electroencephalography (EEG)
===================================================

.. note::

   Electroencephalography (EEG) is an electrophysiological monitoring method to record electrical activity on the scalp. During 
   the procedure, electrodes consisting of small metal discs with thin wires are pasted onto your scalp. The electrodes detect tiny 
   electrical charges that result from the activity of your brain cells which are then amplified to appear on the computer screen. 
   It is typically non-invasive, with the electrodes placed along the scalp.

For recording EEG from different parts of the brain, you have to place the electrodes according to the `International 10-20 system for recording EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_.

.. figure:: ../../../kits/diy-neuroscience/basic/media/10-20-system.*
    :align: center

Electrodes placement
----------------------

We have 2 options to measure the EEG signals, either using the gel electrodes or using dry electrode based Brain BioAmp Band. You can try both of them one by one.

- **Using gel electrodes to record from prefrontal cortex part of brain:**

.. figure:: media/eeg.*
    :align: center

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from electrodes.
3. Place the IN+ and IN- cables on Fp1 and Fp2 as per the International 10-20 system & REF (reference) at the bony part, on the back side of your earlobe as shown above.

- **Using Brain BioAmp Band to record from prefrontal cortex part of brain:**

1. Connect the BioAmp cable to Brain BioAmp Band in a way such that IN+ and IN- are placed on Fp1 and Fp2 as per the International 10-20 system.
2. In this case, the REF (reference) should be connected using gel electrode. So connect the reference of BioAmp cable to the gel electrode, peel the plastic backing and place it at the bony part, on the back side of your earlobe.
3. Now put a small drop of electrode gel on the dry electrodes (IN+ and IN-) between the skin and metallic part of BioAmp cable to get the best results.

.. tip:: Visit the complete documentation on how to :ref:`assemble and use the BioAmp Bands <using-bioamp-bands>` or follow the youtube video given below.

   **Tutorial on how to use the band:**

   .. youtube:: O6qp7teT-sM
       :align: center
       :width: 100%

.. note:: Similarly you can use the band to record EEG signals from the visual cortex part of brain by placing the dry electrodes on O1 and O2 instead of Fp1 and Fp2. Everything else will remain the same.

Uploading the code
-----------------------

Connect Arduino Uno to your laptop using the USB cable (Type A to Type B). Copy paste the Arduino Sketch given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
:fab:`github;pst-color-primary` `EEG Filter Code <https://github.com/upsidedownlabs/Brain-BioAmp-Arduino-Firmware/blob/main/02-eeg-filter/02-eeg-filter.ino>`_

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your development board is connected. To find out the right COM port, screen
disconnect your board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code.

.. tip:: Visit the complete documentation on how to :ref:`How to upload the code <brain-bioamp-arduino-firmware-code-upload>`.

.. important:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.
 
Visualizing the EEG signals
-------------------------------

For visualizing the EEG signals, use `Chords Web <https://chords.upsidedownlabs.tech/>`_ for quick and hassle-free real-time biosignal visualization—right from your browser, without installing any software.

.. figure:: ../../../software/chords/chords-web/media/chords_eeg_signal.*
    :align: center

    Visualizing EEG signals on Chords Web

The signals that you can see on the screen right now are originating from prefrontal cortex part of your brain and propagating through all the layers to the surface of your skin.

You have placed the electrodes on the forehead (Fp1 & Fp2), the BioAmp EXG Pill is amplifying those signals so that we can detect it and finally sending it to the ADC (Analog to Digital Convertor) of your Arduino Uno and the signals are being visualized in Chords Web.

We hope everything is clear now and you understand how the signals are propagating from your brain to the screen of the laptop.

Glimpses of previous versions
*******************************

The BioAmp EXG Pill can be used in a variety of ways, the YouTube video below shows a potential way of using ``v0.7`` of 
BioAmp EXG Pill.

.. youtube:: -G3z9fvQnuw
    :align: center
    :width: 100%

A lot has improved in terms of interference rejection and flexibility from ``v0.7`` to ``v1.0`` of the BioAmp EXG Pill. The YouTube video 
below shows the ECG, EMG, EOG, and EEG recording using ``v1.0b`` of device.

.. youtube:: z9-B9bHWuhg
    :align: center
    :width: 100%

Real-world Applications
************************

BioAmp EXG Pill is perfect for researchers, makers, and hobbyists looking for novel ways to sample biopotential data. It can 
be used for a wide variety of interesting biosensing projects, including:

- AI-assisted detection of congestive heart failure using CNN (ECG)
- Heart-rate variability calculation to detect heart ailments (ECG)
- Prosthetic arm (servo) control (EMG)
- Controlling a 3DOF robotic arm (EMG)
- Real-time game controllers (EOG)
- Blink detection (EOG)
- Capturing photos with a blink of an eye (EOG) and many more examples. 

Project ideas & tutorials
********************************

.. only:: html

    .. article-info::
      :avatar: ../../../kits/diy-neuroscience/basic/media/instructables.svg
      :avatar-link: https://www.instructables.com/member/Upside+Down+Labs/
      :avatar-outline: muted
      :author: Projects on Instructables
      :class-container: sd-p-2 sd-rounded-1

    Below are some projects made by students using the BioAmp EXG Pill.

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item-card:: Controlling video game using brainwaves (EEG)
            :text-align: center
            :link: https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/

        .. grid-item-card:: Visualising electrical impulses from eyes (EOG)
            :text-align: center
            :link: https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/

        .. grid-item-card:: Recording EEG from visual cortex
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/

        .. grid-item-card:: Recording EEG from prefrontal cortex
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/

        .. grid-item-card:: Eye blink detection
            :text-align: center
            :link: https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/

        .. grid-item-card:: Creating a drowsiness detector
            :text-align: center
            :link: https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/

        .. grid-item-card:: Record publication-grade ECG
            :text-align: center
            :link: https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/

        .. grid-item-card:: Measuring heart rate
            :text-align: center
            :link: https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Detecting heart beats
            :text-align: center
            :link: https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Record publication-grade EMG
            :text-align: center
            :link: https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/

        .. grid-item-card:: Detecting up and down movement of eyes
            :text-align: center
            :link: https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/

    These are some of the project ideas but the possibilities are endless. So create your own Human Computer Interface (HCI) and 
    Brain Computer Interface (BCI) projects and share them with us at contact@upsidedownlabs.tech.

.. only:: latex

    You can find step-by-step tutorials for various HCI/BCI projects on our `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_.

    Below are some project ideas that you can try making at your home.

    1. `Controlling video game using brainwaves (EEG) <https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/>`_
    2. `Visualising electrical impulses from eyes (EOG) <https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/>`_
    3. `Recording EEG from visual cortex part of brain <https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/>`_
    4. `Recording EEG from prefrontal cortex part of brain <https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/>`_
    5. `Eye blink detection <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_
    6. `Creating a drowsiness detector <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
    7. `Record publication-grade ECG <https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/>`_
    8. `Measuring heart rate <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_
    9. `Detecting heart beats <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_
    10. `Record publication-grade EMG <https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/>`_
    11. `Detecting up and down movement of eyes <https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/>`_

    These are some of the project ideas but the possibilities are endless. So create your own Human Computer Interface (HCI) and 
    Brain Computer Interface (BCI) projects and share them with us at contact@upsidedownlabs.tech
