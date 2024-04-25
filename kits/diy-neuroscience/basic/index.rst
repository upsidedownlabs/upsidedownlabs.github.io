.. _diy-neuroscience-kit-basic:

DIY Neuroscience Kit Basic
###########################

Overview
**********

This kit is perfect for ``students``, ``researchers`` and ``hobbyists`` alike who want to start exploring neuroscience. 
Whether it's studying brain waves, monitoring heart rhythms, analyzing muscle movements, or tracking eye movements, 
this DIY kit provides an accessible and educational platform for understanding the complexities of human physiology and 
developing practical applications in the fields of human-computer interaction, and beyond.

.. figure:: media/diy-neuroscience-kit-basic.*
    :align: center

Contents of the kit
********************

From development board (Maker UNO), BioAmp EXG Pill, BioAmp cable v3, jumper cables, gel electrodes,
dry electrode-based BioAmp bands to skin preparation kit, this includes everything that you need to get started with your awesome HCI/BCI project. 

.. figure:: media/kit-contents.*
    :align: center

**Unboxing the kit:**

.. youtube:: 7O9Bw8y5fQs
    :width: 100%
    :align: center

Software requirements
**********************

- Before you start using the kit, please download `Arduino IDE v1.8.19 (legacy IDE) <https://www.arduino.cc/en/software>`_. Using this you'll be able to upload the arduino sketches in Maker UNO and visualise the data on your laptop.
    
.. image:: media/arduino-ide.*

- Download Backyard Brains' `Spike Recorder <https://backyardbrains.com/products/spikerecorder>`_ according to the operating system you are using (Windows, OSX, Linux).

.. image:: media/byb.*

Using the kit
**************

This kit is made in a way so that even beginners can use it and get started with recording biopotential signals from their body to explore the field of neuroscience by making HCI/BCI projects.

Step 1 (optional): Configure for EMG/ECG
=========================================

.. image:: media/configuration-emg-ecg.*

BioAmp EXG Pill is by default configured for recording EEG or EOG, so if you are recording any of the two signals 
you can skip this step. But if you want to record good quality ECG or EMG, then it is recommended to configure it 
by making a solder joint as shown in the image above.

.. note:: Even without making the solder joint the BioAmp EXG Pill is capable of recording ECG or EMG as well but the signals would be more accurate if you configure it.

Step 2: Connect Maker UNO
==========================

.. image:: media/connection-with-maker-uno.*

Connect ``VCC`` to ``5V``, ``GND`` to ``GND``, and ``OUT`` to ``Analog pin A0`` of your Maker UNO via jumper cables provided by us. If you are connecting OUT to any other analog pin, then you will have to change the INPUT PIN in the arduino sketch accordingly.

.. warning:: Take precautions while connecting to power, if power pins (GND & VCC) are to be swapped, your BioAmp EXG Pill will be fried and it’ll become unusable (DIE).

Step 3: Connecting electrode cable
===============================================

.. image:: media/bioamp-cable.*

Connect the BioAmp cable to BioAmp EXG Pill by inserting the cable end in the JST PH connector as shown above.

Step 4: Skin Preparation
===============================================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 5: Measuring EMG (ElectroMyoGraphy)
===============================================

Electrodes placement
----------------------

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

- **Using gel electrodes:**

1. Connect the BioAmp cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. image:: media/emg.*

- **Using Muscle BioAmp Band:**

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

   **Tutorial on how to use the band:**

.. youtube:: xYZdw0aesa0
    :align: center
    :width: 100%

.. note:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Uploading the code
---------------------------

Connect the Maker Uno to your laptop using the USB cable (Type A to Type B). Copy paste any one of the Arduino Sketches given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
EMG Filter: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/2_EMGFilter/2_EMGFilter.ino

EMG Envelope: https://github.com/upsidedownlabs/Muscle-BioAmp-Arduino-Firmware/blob/main/3_EMGEnvelope/3_EMGEnvelope.ino

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Maker Uno is connected. To find out the right COM port, 
disconnect your Maker UNO board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the EMG signals
----------------------------

Now flex your arm to visualize the muscle signals in real time on your laptop.

.. image:: media/EMGEnvelop.*

Step 6: Measuring ECG (ElectroCardioGraphy)
===============================================

Electrodes placement
----------------------

We have 2 options to measure the ECG signals, either using the gel electrodes or using dry electrode based Heart BioAmp Band. You can try both of them one by one.

- **Using gel electrodes:**

1. Connect the BioAmp cable to gel electrodes
2. Peel the plastic backing from electrodes
3. Place the IN- cable on the left side, IN+ in the middle and REF (reference) on the far right side as shown in the diagram.

.. image:: media/ecg.*

- **Using Heart BioAmp Band:**

1. Wear the band as depicted in the video tutorial given below
2. Place the IN- cable on the left side, IN+ in the middle and REF (reference) on the far right side.
3. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

**Tutorial on how to use the band:**

.. youtube:: fr5iORsVyUM
    :align: center
    :width: 100%

Uploading the code
---------------------

Connect the Maker Uno to your laptop using the USB cable (Type A to Type B). Copy paste the Arduino Sketch given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
ECG Filter: https://github.com/upsidedownlabs/Heart-BioAmp-Arduino-Firmware/blob/main/2_ECGFilter/2_ECGFilter.ino

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Maker Uno is connected. To find out the right COM port, 
disconnect your Maker UNO board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals.  

After opening the serial plotter make sure to select the baud rate to 115200.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the ECG signals
-----------------------------

.. image:: media/bioamp-Exg-Pill-ECG.*

Step 7: Measuring EOG (ElectroOculoGraphy)
=============================================

Electrodes placement
----------------------

We have 2 ways to measure the EOG signals, either record the horizontal eye movement or the vertical eye movement. You can one by one record both the signals.

- **Horizontal EOG recording:**

.. image:: media/eog-horizontal.*

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from electrodes.
3. Place the IN- cable on the right side of the eye, IN+ on the left side of the eye and REF (reference) at the bony part, on the back side of your earlobe as shown in the diagram above.

- **Vertical EOG recording:**

.. image:: media/eog-vertical.*

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from electrodes.
3. Place the IN- & IN+ cables above and below the eye respectively and REF (reference) at the bony part, on the back side of your earlobe as shown in the diagram above.

Uploading the code
---------------------

Connect the Maker Uno to your laptop using the USB cable (Type A to Type B). Copy paste the Arduino Sketch given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
EOG Filter: https://github.com/upsidedownlabs/Eye-BioAmp-Arduino-Firmware/blob/main/2_EOGFilter/2_EOGFilter.ino

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Maker Uno is connected. To find out the right COM port, 
disconnect your Maker UNO board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code, & open the serial plotter from the ``tools`` menu to visualize 
the EMG signals. 

After opening the serial plotter make sure to select the baud rate to 115200.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the EOG signals
------------------------------

.. image:: media/bioamp-exg-pill-eog.*

Step 8: Measuring EEG (ElectroEncephaloGraphy)
===============================================

Let's understand the electrode placements before moving forward in this project. For recording EEG from 
different parts of the brain, you have to place the electrodes according to the `International 10-20 system for recording EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_.

.. image:: media/10-20-system.*
    :width: 80%

Electrodes placement
----------------------

We have 2 options to measure the EEG signals, either using the gel electrodes or using dry electrode based Brain BioAmp Band. You can try both of them one by one.

- **Using gel electrodes to record from prefrontal cortex part of brain:**

.. image:: media/eeg.*

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from electrodes.
3. Place the IN+ and IN- cables on Fp1 and Fp2 as per the International 10-20 system & REF (reference) at the bony part, on the back side of your earlobe as shown above.

- **Using Brain BioAmp Band to record from prefrontal cortex part of brain:**

1. Connect the BioAmp cable to Brain BioAmp Band in a way such that IN+ and IN- are placed on Fp1 and Fp2 as per the International 10-20 system.
2. In this case, the REF (reference) should be connected using gel electrode. So connect the reference of BioAmp cable to the gel electrode, peel the plastic backing and place it at the bony part, on the back side of your earlobe.
3. Now put a small drop of electrode gel on the dry electrodes (IN+ and IN-) between the skin and metallic part of BioAmp cable to get the best results.

.. note:: Similarly you can use the band to record EEG signals from the visual cortex part of brain by placing the dry electrodes on O1 and O2 instead of Fp1 and Fp2. Everything else will remain the same.

**Tutorial on how to use the band:**

.. youtube:: O6qp7teT-sM
    :align: center
    :width: 100%

Uploading the code
-----------------------

Connect the Maker Uno to your laptop using the USB cable (Type A to Type B). Copy paste the Arduino Sketch given below in Arduino IDE v1.8.19 that you downloaded earlier:
    
`Spike recorder arduino code <https://raw.githubusercontent.com/BackyardBrains/SpikerShield/master/Muscle/Arduino%20Code/SpikeRecorder/SpikeRecorderSpikerShield_V1_1.ino>`_

Go to ``tools`` from the menu bar, select ``board`` option then select Arduino UNO. In the same menu, 
select the COM port on which your Maker Uno is connected. To find out the right COM port, 
disconnect your Maker UNO board and reopen the menu. The entry that disappears should be the 
right COM port. Now upload the code.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Visualizing the EEG signals
-------------------------------

Open the Spike Recorder software. When the Spike Recorder starts, it will start recording from your microphone. To change that, go to the settings by clicking 
the first icon on the top left corner of the screen, select the COM port on which the Maker UNO is connected and click on connect. 

.. figure:: media/spike-recorder-configurations.*

Mute the speakers and apply the 50Hz notch filter by clicking on the checkbox as shown in the screenshot above. You should 
set the low band pass filter to 1Hz and high bandpass filter to 40Hz as we are only recording the EEG signals which range between 
these frequencies.

Now everything is configured and connected. So close the settings window and start recording EEG signals.

.. figure:: media/bioamp-exg-pill-eeg.*

The signals that you can see on the screen right now are originating from prefrontal cortex part of your brain and propagating through all the layers to the surface of your skin.

To record these EEG signals, you have placed the electrodes on the forehead (Fp1 & Fp2), then BioAmp EXG Pill is amplifying those signals so that we can detect it and finally sending it to the ADC (Analog to Digital Convertor) of your Maker Uno. Ultimately the signals are being visualized in Spike Recorder software.

We hope everything is clear now and you understand how the signals are propagating from your brain to the screen of the laptop.

**Features of Spike Recorder that you can explore:**

- Increase or decrease the scale of the Y axis by clicking on the + and - icons respecitively that is present on the left side of the graph.
- Increase or decrease the X axis timescale by sliding up and down on the scroll wheel of the mouse.
- Visualize the FFT graph by clicking on the FFT icon on top left size of the screen.
- Record the data in .wav format by clicking the record icon on the top right corner. You can convert this data in any other format according to your project requirements.
- Listen to the signals by clicking the volume icon on the top right corner. No don't smile right now, that's how your brain sounds like :P

Some Project Ideas
*********************

.. only:: html

    .. article-info::
      :avatar: media/instructables.svg
      :avatar-link: https://www.instructables.com/member/Upside+Down+Labs/
      :avatar-outline: muted
      :author: Upside Down Labs on Instructables:
      :class-container: sd-p-2 sd-rounded-1

    .. grid:: 2 2 2 2
        :margin: 4 4 0 0 
        :gutter: 2

        .. grid-item-card:: Recording EEG from visual cortex
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/

        .. grid-item-card:: Measuring heart rate
            :text-align: center
            :link: https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Detecting heart beats
            :text-align: center
            :link: https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/

        .. grid-item-card:: Creating a drowsiness detector
            :text-align: center
            :link: https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/

        .. grid-item-card:: Detecting eye blinks
            :text-align: center
            :link: https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/

    These are some of the project ideas but the possibilities are endless. So create your own Human Computer Interface (HCI) and 
    Brain Computer Interface (BCI) projects and share them with us at contact@upsidedownlabs.tech.


.. only:: latex

    You can find step-by-step tutorials for various HCI/BCI projects on our `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_.

    Here are some project ideas that you can try making at your home. Click on the links below to get the step by step guides to build the projects.

    1. `Recording EEG from visual cortex <https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/>`_
    2. `Measuring heart rate <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_
    3. `Detecting heart beats <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_
    4. `Creating a drowsiness detector <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
    5. `Detecting eye blinks <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_

    These are some of the project ideas but the possibilities are endless. So create your own Human Computer Interface (HCI) and 
    Brain Computer Interface (BCI) projects and share them with us at contact@upsidedownlabs.tech
