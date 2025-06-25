.. _neuro-play-ground-lite:

Neuro Play Ground (NPG) Lite
############################

**An expandable 3-channel wireless BioAmp for HCI & BCI**

.. figure:: media/npg-lite-banner.*
    :target: https://www.crowdsupply.com/upside-down-labs/neuro-playground-lite
    :align: center
    :alt: NPG Lite Crowd Supply Banner


Overview
*********

Neuro PlayGround Lite (NPG Lite) is a multichannel Adafruit feather form-factor wireless bio-physiological signal acquisition board. 
It can be used for Electrocardiography (ECG), Electromyography (EMG), 
Electrooculography (EOG), or Electroencephalography (EEG). Its compact footprint and hassle-free setup ensure 
portability, quick deployment and a clutter-free experience, making it ideal for research, education and 
wearable applications. 

.. figure:: media/npg-lite-front-back.*
    :align: center
    :alt: Neuro Play Ground (NPG) Lite

    Neuro Play Ground (NPG) Lite

With the addition of Playmate boards and 3rd party FeatherWing boards,
users can easily enhance the device’s capabilities, enabling them
to create awesome Human-Computer Interface (HCI) and Brain-Computer Interface (BCI) applications.
Its extensive compatibility lets you equip your device with features like a vibration motor for 
haptic feedback, a buzzer for audio feedback, and I2C connectivity, making it highly versatile for a 
wide range of applications. 

It leverages our powerful open source, cross-platform Chords software suite 
(:ref:`Chords-Web<chords>`, :ref:`Chords-Python<chords-pythons>`, `Chords LSL Connector <https://github.com/upsidedownlabs/Chords-LSL-Connector>`_ and `NPG Lite Flasher <https://github.com/upsidedownlabs/NPG-Lite-Flasher>`_), 
letting users visualize  captured bio-physiological signals in real-time, apply filtering, perform FFT analysis, and much, much, more. 
Because of its expandability, wide array of applications, and robust networking capabilities 
(using Bluetooth, Zigbee, Wi-Fi, or Thread for mesh networking), NPG Lite lets you capture bio-physiological 
signals how you want and where you want it.

.. figure:: media/npg-lite-chords-3-ch-data.*
    :align: center
    :alt: 3 Channel Data using Chords Web 

    3 Channel Data using Chords Web 

Features & Specifications
**************************

+--------------------------+----------------------------------------------------------------------+
| **Feature**              | **Details**                                                          |
+==========================+======================================================================+
| Bio-signal channels      | 3-channel BioAmp (ECG, EMG, EOG, EEG)                                |
+--------------------------+----------------------------------------------------------------------+
| Microcontroller          | ESP32-C6 (RISC-V) with 8 MB flash                                    |
+--------------------------+----------------------------------------------------------------------+
| Wireless I/O             | Wi-Fi, Bluetooth LE, Thread, Zigbee                                  |
+--------------------------+----------------------------------------------------------------------+
| USB & Programming        | USB-C for power, charging & programming; UART, JTAG                  |
+--------------------------+----------------------------------------------------------------------+
| LEDs                     | 6 addressable RGB LEDs, User LED, Charging indicator LED             |
+--------------------------+----------------------------------------------------------------------+
| Buttons                  | Reset button + User/Boot buttons                                     |
+--------------------------+----------------------------------------------------------------------+
| Power Options            | USB-C or LiPo battery                                                |
+--------------------------+----------------------------------------------------------------------+
| Power Regulation         | 600 mA LDO with LiPo battery charging onboard                        |
+--------------------------+----------------------------------------------------------------------+
| Battery Connector        | PicoBlade LiPo                                                       |
+--------------------------+----------------------------------------------------------------------+
| Form Factor              | Standard Adafruit Feather (GPIO, Power, RX/TX pins)                  |
+--------------------------+----------------------------------------------------------------------+
| Protection               | On-board patient & USB ESD protection                                |
+--------------------------+----------------------------------------------------------------------+
| Compatible hardware      | NPG Playmates & FeatherWing boards                                   |
+--------------------------+----------------------------------------------------------------------+


Board Layout & Pinout Diagram
******************************

.. figure:: media/npg-lite-annotated.*
    :align: center
    :alt: Neuro Play Ground (NPG) Lite annotations

    Neuro Play Ground (NPG) Lite annotations

.. figure:: media/npg-lite-pinout.*
    :align: center
    :alt: Neuro Play Ground (NPG) Lite Pinout

    Neuro Play Ground (NPG) Lite Pinout

Playmates
*********

Playmates are modular expansion boards designed to enhance the functionality of Neuro Play Ground (NPG) Lite. These add-ons seamlessly integrate with the core system, allowing users to extend their capabilities to create awesome Human-Computer Interface (HCI) & Brain-Computer Interface (BCI).

NPG Playmate Vibz
=================

VibZ introduces vibration motor for haptic feedback, a buzzer, a QWIIC port for easy sensor integration, an ON/OFF slide switch, 2.54 mm electrode header pins
and common negative electrode option. With these Playmates, users can customize their setup for specific applications, whether in research, education, or 
interactive biofeedback experiments. This modular approach ensures flexibility, scalability, and better user experience.

.. figure:: media/playmate-vibz-front-and-back.*
    :align: center
    :alt: Neuro Play Ground (NPG) Vibz Playmate

    Neuro Play Ground (NPG) Vibz Playmate


Compatible Software
************************

Chords Web
=============

- Visit `Chords Web <https://chords.upsidedownlabs.tech/>`_ for real-time biopotential signal visualization (EEG, EMG, ECG, EOG), featuring advanced plotting, filtering, snapshotting and CSV recording.

.. figure:: ../../../software/chords/chords-web/media/chords_landing_page.*
    :align: center
    :alt: Chords Web Landing Page 

    Chords Web Landing Page

- To know more about Chords Web :ref:`click here<chords>` or watch the YouTube video.

.. youtube:: Tqor4mo2Ji8
    :align: center
    :width: 100%


Chords Python
================

- :ref:`Chords Python<chords-pythons>` is an open-source bag of tools for recording biopotential signals like ECG, EMG, EEG, or EOG, along with visualization using BioAmp hardware. 

.. figure:: ../../../software/chords/chords-python/media/dark-interface.*
    :align: center
    :alt: Chords Python Landing Page

    Chords Python Landing Page 

- To know more about Chords Python watch the YouTube video.

.. youtube:: TiDwSQEY2eY
    :align: center
    :width: 100%

Chords LSL Connector
=====================

- `Chords LSL Connector <https://github.com/upsidedownlabs/Chords-LSL-Connector>`_ is a Rust based bridge that streams data from devices running Chords firmware into the Lab Streaming Layer (LSL), enabling synchronized acquisition and analysis with BCI/EEG software.

- To know more about Chords LSL Connector watch the YouTube video.

.. youtube:: 94lPImB0eRo
    :align: center
    :width: 100%

.. .. figure:: ../../../software/chords/chords-python/media/dark-interface.*
    :align: center
    :alt: Chords Web Landing Page 

    Chords Web Landing Page
..
    

NPG Lite Flasher
============================
  
- `NPG Lite Flasher <https://github.com/upsidedownlabs/NPG-Lite-Flasher>`_ is a cross-platform, flashing utility for the Neuro PlayGround Lite board, providing seamless firmware updates over serial or DFU via a simple CLI.

.. figure:: media/npg-lite-flasher-launch-page.*
    :align: center
    :alt: NPG Lite Flasher Landing Page

    NPG Lite Flasher Landing Page

- To know more about NPG Lite Flasher watch the YouTube video.

.. youtube:: NDk-P3nob_0
    :align: center
    :width: 100%


Arduino IDE
==============
  
- The official `Arduino IDE <https://www.arduino.cc/en/software/>`_ development environment for writing, compiling, and uploading Chords-Arduino-Firmware sketches to supported boards; features built-in library management, serial monitor, and easy board configuration for rapid bio-signal prototyping.

.. _neuro-play-ground-lite-project-tutorials:

Project Tutorials
*****************

NPG Lite, with its multi-channel BioAmp, wireless connectivity, battery operation, and expansion interface, allows
users to create HCI and BCI applications with ease. We’ve created projects leveraging ECG, EMG, EOG, and EEG signals to 
inspire you, but the possibilities cover so many more use cases.


.. card:: 1. Make Muscular Music

    This is a human-computer interface (HCI) that uses 3-channel EMG data to detect muscle signals from the 
    left hand, right hand, and chest to control virtual musical instruments. When muscles contract, each channel 
    triggers a distinct sound effect, transforming your body into an organic orchestra.

    .. youtube:: zUwIHk5culs
        :align: center

    .. Note::

        To learn about this project, visit our Instructables page for detailed guide: `Muscle Melody: Create Music With Your Muscle Movements (EMG) <https://www.instructables.com/Muscle-Melody-Play-Music-With-Your-Muscle-Movement/>`_

.. card:: 2. Track Your Ticker

    This project focuses on capturing electrocardiogram (ECG) signals to calculate heart rate using
    Neuro PlayGround Lite and displaying them in a Chrome-based browser on a mobile phone in real-time
    via a Bluetooth LE connection.

    .. youtube:: 2UDBqEsjJSI
        :align: center

    .. Note::

        To learn about this project, visit our Instructables page for detailed guide: `Monitor ECG and Heartrate on Your Mobile Phone <https://www.instructables.com/Monitor-ECG-and-Heartrate-on-Your-Mobile-Phone/>`_

.. card:: 3. Jump In the Blink of an Eye

    Instead of using the keyboard, you can control a game simply by blinking. The setup detects EOG signals from the eyes, 
    sends the data over Bluetooth LE to the PC, detects eye blinks, and then takes the eye blink as a trigger to emulate the 
    spacebar keystroke. You can configure the code to simulate any other keystroke as well.

    .. youtube:: ZJmUUtHJj08
        :align: center

    .. Note::

        To learn about this project, visit our Instructables page for detailed guide: `Controlling Keyboard With Eye Blinks Using Neuro PlayGround Lite <https://www.instructables.com/Controlling-Keyboard-With-Eye-Blinks-Using-Neuro-P/>`_

.. card:: 4. Pop Bubbles With Your Mind

    This project showcases a brain-computer interface (BCI) application that utilizes EEG (electroencephalography) signals 
    to operate an interactive bubble-popping game in a web browser. The system identifies beta wave activity (12–30 Hz), 
    indicating concentration and attention levels. Bubbles appear and pop as the user maintains focus, but they cease to
    pop when concentration wanes.
    
    .. youtube:: EjJBlU8QiEI
        :align: center

    .. Note::

        To learn about this project, visit our Instructables page for detailed guide: `Pop Bubbles With Your Mind (EEG) | Neuro PlayGround (NPG) Lite <https://www.instructables.com/Pop-Bubbles-With-Your-Mind-EEG-Neuro-PlayGround-NP/>`_


.. dropdown:: Neuro-Playground Lite C3 (Obsolete)

    .. rubric:: Overview

    Neuro Playground (NPG) Lite is a multichannel wireless bio-potential signal amplification device 
    designed for recording EMG, ECG, EOG, and EEG. It comes in a 
    compact `Adafruit feather <https://learn.adafruit.com/adafruit-feather/overview>`_ form factor and 
    offers WiFi/BLE wireless connectivity. With the addition of daughter boards called Playmates, users can 
    easily enhance the device’s capabilities, enabling the students/researchers/hobbyists to create awesome 
    Human-Computer Interface (HCI) and Brain-Computer Interface (BCI) applications.


    .. figure:: media/npg-C3-hero-1.*
        :align: center
        :alt: Neuro Play Ground (NPG) Lite C3

        Neuro Play Ground (NPG) Lite C3

    .. rubric:: Features & Specifications

    +------------------------+-----------------------------------------------------------------------+
    | No. of channels        | 3                                                                     |
    +------------------------+-----------------------------------------------------------------------+
    | Power options          | USB type C or LiPo battery                                            |
    +------------------------+-----------------------------------------------------------------------+
    | Microcontroller        | ESP32-C3 (RISC-V) with 4MB Flash                                      |
    +------------------------+-----------------------------------------------------------------------+
    | Power supply           | 600mA LDO with filtering                                              |
    +------------------------+-----------------------------------------------------------------------+
    | Connectivity options   | WiFi, Bluetooth, USB                                                  |
    +------------------------+-----------------------------------------------------------------------+
    | Debugging options      | JTAG, UART                                                            |
    +------------------------+-----------------------------------------------------------------------+
    | LEDs                   | User LED, charging LED, 6 addressable RGB LEDs                        |
    +------------------------+-----------------------------------------------------------------------+
    | Buttons                | Reset & user button                                                   |
    +------------------------+-----------------------------------------------------------------------+
    | BioPotentials          | EMG, ECG, EOG and EEG                                                 |
    +------------------------+-----------------------------------------------------------------------+
    | Compatible hardware    | NPG Playmates & FeatherWing boards                                    |
    +------------------------+-----------------------------------------------------------------------+
    | Protection             | Built-in patient & USB ESD protection                                 |
    +------------------------+-----------------------------------------------------------------------+

    .. rubric:: Board Layout

    .. figure:: media/npg-C3-front-annotations.*
        :align: center
        :alt: Neuro Play Ground (NPG) Lite C3 annotations

        Neuro Play Ground (NPG) Lite C3 annotations

    .. rubric:: Playmates

    Playmates are modular expansion boards designed to enhance the functionality of **Neuro Play Ground (NPG) Lite**. These add-ons seamlessly integrate with the core system, allowing users to extend their capabilities to create awesome Human-Computer Interface (HCI) & Brain-Computer Interface (BCI).

    **VibZ**

    The first Playmate, **VibZ**, introduces haptic feedback, a buzzer, a QWIIC port for easy sensor integration, an ON/OFF switch, and electrode header pins. With these Playmates, users can customize their setup for specific applications, whether in research, education, or interactive biofeedback experiments. This modular approach ensures flexibility, scalability, and better user experience.

    .. figure:: media/npg-C3-playmate-annotations.*
        :align: center
        :alt: VibZ Playmate

        VibZ Playmate

    .. rubric:: Features & Specifications

    +---------------------------------------------------+
    | 2.54mm Dupont header pin for electrode connection |
    +---------------------------------------------------+
    | Vibration motor for haptic Feedback motor         |
    +---------------------------------------------------+
    | Buzzer for audio feedback                         |
    +---------------------------------------------------+
    | QWIIC / STEMMA QT I2C port                        |
    +---------------------------------------------------+
    | ON/OFF Switch                                     |
    +---------------------------------------------------+