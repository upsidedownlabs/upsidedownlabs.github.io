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

To use your DIY Neuroscience Kit Basic, you will need the softwares mentioned below. Instructions on how to use them are provided later in the guide.

- `Arduino IDE <https://www.arduino.cc/en/software>`_ (Download this to upload Chords arduino firmware to your development board)

- `Chords Web <https://chords.upsidedownlabs.tech/>`_ (Use this open-source web application to visualize your biopotential signals)

- `Visual Studio Code <https://code.visualstudio.com/download>`_ (or any other Code editor of your choice)
  
- `Python <https://www.python.org/downloads/>`_ (To run Chords-Python script)

- `Chords Python <https://github.com/upsidedownlabs/Chords-Python>`_ (Use this open-source python script designed to record and visualize biopotential signals)

.. note::

    1. The Chords Arduino firmware is identical for both Chords Web and Chords Python, so you only need to upload the code once, and you're all set.
    2. You can choose either Chords Web or Chords Python to record and visualize your biopotential signals based on your needs. If you're curious, you can try both one at a time.

Using the kit
**************

This kit is made in a way so that even beginners can use it and get started with recording biopotential signals from their body to explore the field of neuroscience by making HCI/BCI projects.

Step 1 (optional): Configure for EMG/ECG
=========================================

.. figure:: media/configuration-emg-ecg.*
    :align: center

BioAmp EXG Pill is by default configured for recording EEG or EOG, so if you are recording any of the two signals
you can skip this step. But if you want to record good quality ECG or EMG, then it is recommended to configure it
by making a solder joint as shown in the image above.

.. note:: Even without making the solder joint the BioAmp EXG Pill is capable of recording ECG or EMG as well but the signals would be more accurate if you configure it.

Step 2: Connect Maker UNO
==========================

.. figure:: media/connection-with-maker-uno.*
    :align: center

Connect ``VCC`` to ``5V``, ``GND`` to ``GND``, and ``OUT`` to ``Analog pin A0`` of your Maker UNO via jumper cables provided by us. If you are connecting OUT to any other analog pin, then you will have to change the INPUT PIN in the arduino sketch accordingly.

.. warning:: Take precautions while connecting to power, if power pins (GND & VCC) are to be swapped, your BioAmp EXG Pill will be fried and it’ll become unusable (DIE).

Step 3: Connecting electrode cable
===================================

.. figure:: media/bioamp-cable.*
    :align: center

Connect the BioAmp cable to BioAmp EXG Pill by inserting the cable end in the JST PH connector as shown above.

Step 4: Skin Preparation
=========================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with an alcohol wipe or a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.


Step 5: Electrode placement
===========================

We have 2 options to measure the signals, either using the gel electrodes or using dry electrode based BioAmp Bands. You can try both of them one by one.

1. :ref:`Using Gel electrodes guide <steps-for-gel-electrodes>`
2. :ref:`Assembling & using BioAmp Bands guide <using-bioamp-bands>`

Once you have made the connections, return here to proceed to the next steps.

Step 6: Uploading the code
===========================

1. Connect the Maker Uno to your laptop using the USB cable (Type A to Type B). Go to Chords Arduino Firmware github repository, open ``AVR-NANO-UNO-MEGA`` folder and copy paste the arduino sketch in Arduino IDE that you downloaded earlier.

    Link for the arduino sketch: :fab:`github;pst-color-primary` `Chords Arduino Firmware for Maker Uno <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/blob/main/AVR-NANO-UNO-MEGA/AVR-NANO-UNO-MEGA.ino>`_

2. Uncomment ``#define BOARD_MAKER_UNO`` in the code.

3. Go to ``tools`` > ``board`` > ``Arduino AVR boards`` and select Arduino UNO. In the same menu, select the COM port on which your Maker Uno is connected. To find out the right COM port, disconnect your Maker UNO board and reopen the menu. The entry that disappears should be the right COM port. Now click on the upload button.

.. warning:: Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

Step 7: Setting up Chords Web
==============================

1. Visit `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech>`_.
2. Click on "Visualize now" button.
3. At the bottom, you can see buttons to access various applications:
    a. :ref:`Chords Visualizer <chords-visualizer>`: Use this application for real-time data visualization, recording and data management, filter options, and multi-channel support.
    b. :ref:`FFT Visualizer <chords-web-fft-visualizer>`: Use this app to visualize filtered EEG signals in real-time, FFT graph, EEG frequency bands, and a beta candle to determine your focus.
    c. :ref:`Serial Wizard <chords-web-serial-wizard>`: This interface provides real-time serial data visualization using serial plotter and monitor, optimised data rendering, baud rate selection and options to toggle between different modes.

4. Click on any of the button according to your requirement, select the COM port and click OK. You will be able to visualize your signals on the screen.

Step 8: Setting up Chords Python
=================================

Since you have uploaded the firmware already to your Maker UNO, use our python script and follow the steps given in the :ref:`Chords-Python documentation <using-chords-python>` for lsl streaming, CSV data logging, verbose output with detailed statistics and error reporting. Not only that, you get a complete web interface to access various applications (like ECG with heart rate, EMG with envelope, GUI of channels, CSV plotter, etc.) that you can use to further analyse your signals and create HCI/BCI projects.

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

        .. grid-item-card:: Controlling video game using EEG
            :text-align: center
            :link: https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/

        .. grid-item-card:: Recording EEG from visual cortex
            :text-align: center
            :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/

        .. grid-item-card:: Record publication-grade ECG signals
            :text-align: center
            :link: https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/

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

        .. grid-item-card:: Detecting up and down eye movement
            :text-align: center
            :link: https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/

        .. grid-item-card:: Recording publication-grade EMG
            :text-align: center
            :link: https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/

    These are some of the project ideas but the possibilities are endless. So create your own Human Computer Interface (HCI) and
    Brain Computer Interface (BCI) projects and share them with us at contact@upsidedownlabs.tech.


.. only:: latex

    You can find step-by-step tutorials for various HCI/BCI projects on our `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_.

    Here are some project ideas that you can try making at your home. Click on the links below to get the step by step guides to build the projects.

    1. `Controlling video game using EEG signals <https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/>`_
    2. `Recording EEG from visual cortex <https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/>`_
    3. `Record publication-grade ECG signals <https://www.instructables.com/Record-Publication-Grade-ECG-at-Your-Home-Using-Bi/>`_
    4. `Measuring heart rate <https://www.instructables.com/Measuring-Heart-Rate-Using-BioAmp-EXG-Pill/>`_
    5. `Detecting heart beats <https://www.instructables.com/Detecting-Heart-Beats-Using-BioAmp-EXG-Pill/>`_
    6. `Creating a drowsiness detector <https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/>`_
    7. `Detecting eye blinks <https://www.instructables.com/Eye-Blink-Detection-by-Recording-EOG-Using-BioAmp-/>`_
    8. `Detecting up and down movement of eyes <https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/>`_
    9. `Recording publication-grade EMG signals <https://www.instructables.com/Recording-Publication-Grade-Muscle-Signals-Using-B/>`_

    These are some of the project ideas but the possibilities are endless. So create your own Human Computer Interface (HCI) and
    Brain Computer Interface (BCI) projects and share them with us at contact@upsidedownlabs.tech
