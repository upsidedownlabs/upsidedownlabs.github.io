.. _neuro-play-ground-lite:

Neuro PlayGround (NPG) Lite
#############################

**An expandable 3-channel wireless BioAmp for HCI & BCI**

.. figure:: media/npg-lite-banner.*
    :target: https://www.crowdsupply.com/upside-down-labs/neuro-playground-lite
    :align: center
    :alt: NPG Lite Crowd Supply Banner

Overview
*********

.. youtube:: 9ZnYd7bmcgY
    :align: center

**Neuro PlayGround Lite (NPG Lite)** is a multichannel Adafruit feather form-factor wireless bio-physiological signal acquisition board. 
It can be used for Electrocardiography (ECG), Electromyography (EMG), 
Electrooculography (EOG), or Electroencephalography (EEG). Its compact footprint and hassle-free setup ensure 
portability, quick deployment and a clutter-free experience, making it ideal for research, education and 
wearable applications. 

.. figure:: media/npg-lite-front-back.*
    :align: center
    :alt: Neuro PlayGround (NPG) Lite

    Neuro PlayGround (NPG) Lite

With the addition of **NPG Playmate Boards** and 3rd party FeatherWing boards,
users can easily enhance the device’s capabilities, enabling them
to create awesome Human-Computer Interface (HCI) and Brain-Computer Interface (BCI) applications.
Its extensive compatibility lets you equip your device with features like a vibration motor for 
haptic feedback, a buzzer for audio feedback, and I2C connectivity, making it highly versatile for a 
wide range of applications. 

It leverages our powerful open source, cross-platform **Chords software suite**
(:ref:`Chords-Web<chords>`, :ref:`Chords-Python<chords-pythons>`, :ref:`Chords LSL Connector<chords-lsl-connector>` and :ref:`Chords LSL Visualizer<chords-lsl-visualizer>`), 
letting users visualize captured bio-physiological signals in real-time, apply filtering, perform FFT analysis, and much more. 
To simplify the process to **flash your NPG Lite board** we have also created a dedicated flasher 
tool called :ref:`NPG Lite Flasher<npg-lite-flasher>`, it allows you to download pre-build firmware binaries from GitHub 
and you can flash your own binary files as well.
 
Because of its expandability, wide array of applications, and robust networking capabilities 
(using Bluetooth, Zigbee, Wi-Fi, or Thread for mesh networking), NPG Lite lets you capture bio-physiological 
signals how you want and where you want it.

.. figure:: media/npg-lite-chords-3-ch-data.*
    :align: center
    :alt: 3 Channel Data using Chords Web 

    3 Channel Data using Chords Web 

Features & Specifications
**************************

+---------------------+----------------------------------------------------------+
| **Feature**         | **Details**                                              |
+=====================+==========================================================+
| Bio-signal channels | 3-6 Channel BioAmp (ECG, EMG, EOG, EEG)                  |
+---------------------+----------------------------------------------------------+
| Microcontroller     | ESP32-C6 (RISC-V) with 4 MB Flash                        |
+---------------------+----------------------------------------------------------+
| Biopotential(s)     | EXG                                                      |
+---------------------+----------------------------------------------------------+
| ADC Resolution      | 12 Bit                                                   |
+---------------------+----------------------------------------------------------+
| Wireless I/O        | Wi-Fi 6, Bluetooth LE 5, Thread, Zigbee                  |
+---------------------+----------------------------------------------------------+
| USB & Programming   | USB-C for power, charging & programming; UART, JTAG      |
+---------------------+----------------------------------------------------------+
| LEDs                | 6 addressable RGB LEDs, User LED, Charging indicator LED |
+---------------------+----------------------------------------------------------+
| Buttons             | Reset button + User/Boot Buttons                         |
+---------------------+----------------------------------------------------------+
| Power Options       | USB-C or LiPo battery                                    |
+---------------------+----------------------------------------------------------+
| Power Regulation    | 600 mA LDO with LiPo battery charging onboard            |
+---------------------+----------------------------------------------------------+
| Battery Connector   | PicoBlade LiPo                                           |
+---------------------+----------------------------------------------------------+
| Form Factor         | Standard Adafruit Feather (GPIO, Power, RX/TX pins)      |
+---------------------+----------------------------------------------------------+
| Protection          | On-board patient & USB ESD protection                    |
+---------------------+----------------------------------------------------------+
| Compatible Hardware | NPG Playmates & FeatherWing boards & QWIIC               |
+---------------------+----------------------------------------------------------+


Board Layout & Pinout Diagram
******************************

.. figure:: media/npg-lite-annotated.*
    :align: center
    :alt: Neuro PlayGround (NPG) Lite annotations

    Neuro PlayGround (NPG) Lite annotations

.. figure:: media/npg-lite-pinout.*
    :align: center
    :alt: Neuro PlayGround (NPG) Lite Pinout

    Neuro PlayGround (NPG) Lite Pinout

Components
************

.. figure:: media/npg-lite-components.*
    :align: center
    :width: 80%
    :alt: Neuro PlayGround (NPG) Lite Components

    Neuro PlayGround (NPG) Lite Components

+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Number | Components                 | Description                                                                                                                                                       |
+========+============================+===================================================================================================================================================================+
| 1      | **ESP32-C6**               | The ESP32-C6 is a Wi-Fi 6 and Bluetooth 5 (LE) enabled microcontroller developed by Espressif Systems.                                                            |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 2      | **Antenna**                | The onboard PCB antenna is tuned for 2.4GHz, ensuring strong, stable Wi-Fi and Bluetooth connectivity with low power use.                                         |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 3      | **6 Addressable RGB LEDs** | Enables visualization of device states, signal strength, or neural feedback using dynamic color indicators.                                                       |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 4      | **User ESD Protection**    | ESD protection components, ensuring durability and reliability when connecting electrodes.                                                                        |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 5      | **BioAmp**                 | The onboard BioAmp is a low-noise, high-gain biopotential amplifier that captures and amplifies EMG, ECG, and EEG signals for digital processing by the ESP32-C6. |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 6      | **Boot/User Button**       | The Boot/User button enables bootloader mode for firmware flashing and serves as a programmable user input.                                                       |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 7      | **600mA LDO**              | The voltage regulator converts higher input voltages (USB or battery) into a stable 3.3V output.                                                                  |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 8      | **Battery Connector**      | It offers a safe, port for battery power, allowing portable operation of the board. **Note:** There is no polarity protection.                                    |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 9      | **LiPo Charging**          | The integrated LiPo charging controller safely manages charging cycles, supporting automatic termination and trickle charging for optimal battery health.         |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 10     | **USB ESD Protection**     | USB ESD protection shields the interface from electrostatic and voltage spikes, ensuring reliable data transfer and preventing component damage.                  |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 11     | **Reset Button**           | The reset button restarts the microcontroller and running program without power loss, aiding debugging and firmware testing.                                      |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 12     | **Charging LED**           | The Charging LED indicates battery charging status, lighting during charging and turning off when fully charged for immediate feedback.                           |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 13     | **USB C**                  | USB C port for data transfer and power input.                                                                                                                     |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 14     | **User LED**               | A programmable LED on a GPIO pin used to show board activity, connection status, or custom signals during development.                                            |
+--------+----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Explorer, Ninja, and Beast!
********************************

If you’re comfortable with soldering and only need a 3-channel wireless BioAmp, the **Explorer Kit** is a great choice. For the most complete NPG Lite experience right out of the box, go with **Ninja Pack**. If you require additional channels for full-body signal acquisition or advanced experimentation, the **Beast Pack** offers the most comprehensive configuration.

.. only:: html

   .. grid:: 1 1 3 3
      :margin: 3 3 3 3 
      :gutter: 2

      .. grid-item-card:: NPG Lite - Explorer Pack 
         :text-align: center
         :link: npg-lite-explorer
         :img-top: ../../../kits/npg-lite-kits/npg-lite-explorer/media/npg-lite-explorer-box.*
         :img-alt: NPG Lite Explorer Box
         :link-type: ref

      .. grid-item-card:: NPG Lite - Ninja Pack 
         :text-align: center
         :link: npg-lite-ninja
         :img-top: ../../../kits/npg-lite-kits/npg-lite-ninja/media/npg-lite-ninja-box.*
         :img-alt: NPG Lite Ninja Box
         :link-type: ref

      .. grid-item-card:: NPG Lite - Beast Pack 
         :text-align: center
         :link: npg-lite-beast
         :img-top: ../../../kits/npg-lite-kits/npg-lite-beast/media/npg-lite-beast-box.*
         :img-alt: NPG Lite Beast Box
         :link-type: ref


+------------------+--------------+------------+------------+
| Pack Options     | Explorer     | Ninja      | Beast      |
+==================+==============+============+============+
| NPG Lite         | Included     | Included   | Included   |
+------------------+--------------+------------+------------+
| Playmate Type    | Proto        | VibZ       | VibZ+      |
+------------------+--------------+------------+------------+
| Channel Count    | 3 Channels   | 3 Channels | 6 Channels |
+------------------+--------------+------------+------------+
| Gel Electrodes   | 12 Pieces    | 24 Pieces  | 24 Pieces  |
+------------------+--------------+------------+------------+
| Snap Cables      | 7 Pieces     | 7 Pieces   | 13 Pieces  |
+------------------+--------------+------------+------------+
| Alligator Cables | 5 Pieces     | 5 Pieces   | 8 Pieces   |
+------------------+--------------+------------+------------+
| Battery Cable    | Included     | Included   | Included   |
+------------------+--------------+------------+------------+
| LiPo Battery     | Not Included | Included   | Included   |
+------------------+--------------+------------+------------+
| 3D Printed Case  | Not Included | Included   | Included   |
+------------------+--------------+------------+------------+
| USB Cable        | Not Included | Included   | Included   |
+------------------+--------------+------------+------------+

Playmates
*************

Playmates are modular expansion boards designed to enhance the functionality of Neuro PlayGround (NPG) Lite. These add-ons seamlessly integrate with the core system, allowing users to extend their capabilities to create awesome Human-Computer Interface (HCI) & Brain-Computer Interface (BCI).

.. figure:: media/npg-playmates-grouped.*
    :align: center
    :alt: Neuro PlayGround (NPG) Lite Playmates

    Neuro PlayGround (NPG) Lite Playmates

Need of Playmate 
==========================

Playmate offer a convenient way to expand the functionality of your NPG Lite setup without complex wiring or modifications. It easily plug into NPG Lite's Feather compatible headers, providing additional features such as 

1. Proto Playmate 
-----------------------

.. figure:: ./media/npg-proto-playmate.*
    :align: center
    :alt:   Neuro PlayGround (NPG) Lite Proto Playmate

    Neuro PlayGround (NPG) Lite Proto Playmate

a. ON/OFF switch for power control
b. QWIIC/Stemma QT port
c. Electrodes connector
d. Large prototyping area for custom circuits

2. VibZ Playmate
--------------------------

.. figure:: ./media/npg-vibz-playmate.*
    :align: center
    :alt:   Neuro PlayGround (NPG) Lite VibZ Playmate

    Neuro PlayGround (NPG) Lite VibZ Playmate

a. ON/OFF switch for power control
b. QWIIC/Stemma QT port
c. Electrodes connector
d. Vibration motor for haptic feedback
e. Buzzer for audio feedback

3. VibZ+ Playmate
------------------------------

.. figure:: ./media/npg-vibz+-playmate.*
    :align: center
    :alt:   Neuro PlayGround (NPG) Lite VibZ+ Playmate

    Neuro PlayGround (NPG) Lite VibZ+ Playmate

a. ON/OFF switch for power control
b. QWIIC/Stemma QT port
c. Electrodes connector
d. Vibration motor for haptic feedback
e. Buzzer for audio feedback
f. Additional 3 channel BioAmp (total 6 channels)

Comparison of Playmates
=================================

+----------------------+-------------------+--------------------+--------------------+
| **Feature**          | **Proto**         | **VibZ**           | **VibZ+**          |
+======================+===================+====================+====================+
| **Bio Channels**     | 3                 | 3                  | 6                  |
+----------------------+-------------------+--------------------+--------------------+
| **Prototyping Area** | Yes(Large)        | No                 | No                 |
+----------------------+-------------------+--------------------+--------------------+
| **Haptic Feedback**  | No                | Yes (Vibration)    | Yes (Vibration)    |
+----------------------+-------------------+--------------------+--------------------+
| **Audio Feedback**   | No                | Yes (Buzzer)       | Yes (Buzzer)       |
+----------------------+-------------------+--------------------+--------------------+
| **QWIIC Port**       | Yes               | Yes                | Yes                |
+----------------------+-------------------+--------------------+--------------------+
| **Power Switch**     | Yes               | Yes                | Yes                |
+----------------------+-------------------+--------------------+--------------------+
| **Electrode Headers**| Dupont 2.54 mm    | Dupont 2.54 mm     | Dupont 2.54 mm     |
+----------------------+-------------------+--------------------+--------------------+
| **Common Negative**  | Solder option     | Solder option      | Switch             |
+----------------------+-------------------+--------------------+--------------------+
| **Best For**         | Development       | Complete Projects  | Research           |
+----------------------+-------------------+--------------------+--------------------+

Usage Guide
************

To help you get started quickly, we’ve prepared a step-by-step video tutorial.  
This guide walks you through setup, connections, and running your experiments with the Neuro PlayGround Lite.  

.. youtube:: hBrbw9vF-m4
    :align: center

.. admonition:: Troubleshooting

   Having trouble connecting your **NPG Device** with :ref:`Chords Web <chords>`?

   If you try to connect the device and the pop-up window for **Bluetooth Connection** doesn't appear, make sure your chromium based browser has
   following feature Enabled:

   1. Open a new tab and go to ``chrome://flags``
   2. Find and enable the following flags:
    
   - **Web Bluetooth**
   - **Use the new permissions backend for Web Bluetooth**
   - **Web Bluetooth confirm pairing support**
   - **Experimental Web Platform features**
  
Compatible Software
************************

NPG Lite Flasher
===================
  
- :ref:`NPG Lite Flasher <npg-lite-flasher>` is a cross-platform, flashing utility for the Neuro PlayGround Lite board, providing seamless firmware updates over serial or DFU via a simple CLI.

.. figure:: ../../../software/tools/npg-lite-flasher/media/npg-lite-flasher-launch-page.*
    :align: center
    :alt: NPG Lite Flasher Landing Page

    NPG Lite Flasher Landing Page

- To know more about NPG Lite Flasher watch the YouTube video.

.. youtube:: NDk-P3nob_0
    :align: center

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

Chords LSL Connector
=====================

- :ref:`Chords LSL Connector<chords-lsl-connector>` is a Rust based bridge that streams data from devices running Chords firmware into the Lab Streaming Layer (LSL), enabling synchronized acquisition and analysis with BCI/EEG software.

.. figure:: ../../../software/chords/chords-lsl-connector/media/chords-lsl-connector-landing-page.*
    :align: center
    :alt: Chords LSL Connector Landing Page 

    Chords LSL Connector Landing Page 

- To know more about Chords LSL Connector watch the YouTube video.

.. youtube:: 94lPImB0eRo
    :align: center

Chords LSL Visualizer
=====================

- :ref:`Chords LSL Visualizer<chords-lsl-visualizer>` is a Rust based program to visualize biopotenial signals from any LSL stream.
  
.. figure:: ../../../software/chords/chords-lsl-visualizer/media/chords-lsl-visualizer-landing-page.*
    :align: center
    :alt: Chords LSL Visualizer Landing Page 

    Chords LSL Visualizer Landing Page 

.. _neuro-play-ground-lite-project-tutorials:

Project Tutorials
*****************

NPG Lite, with its multi-channel BioAmp, wireless connectivity, battery operation, and expansion interface, allows
users to create HCI and BCI applications with ease. We’ve created projects leveraging ECG, EMG, EOG, and EEG signals to 
inspire you, but the possibilities cover so many more use cases.

.. note::

    Each of these projects runs on the ``BLE firmware``, which you can flash using the following flasher tools: 
    
    - We recommend using :ref:`NPG Lite Flasher <npg-lite-flasher-uploading-firmware>` for flashing BLE Firmware.
    - Alternatively, you can use `Arduino IDE <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ to manually upload the firmware.
    - It is recommended to use ESP32 version ``3.2.0`` to ensure error free operations. 

.. card:: 1. Make Muscular Music

    This is a human-computer interface (HCI) that uses 3-channel EMG data to detect muscle signals from the 
    left hand, right hand, and chest to control virtual musical instruments. When muscles contract, each channel 
    triggers a distinct sound effect, transforming your body into an organic orchestra.

    .. youtube:: O36z_YhaDqg
        :align: center

    .. Note::

        - To learn about this project, visit our Instructables page for detailed guide: `Muscle Melody: Create Music With Your Muscle Movements (EMG) <https://www.instructables.com/Muscle-Melody-Play-Music-With-Your-Muscle-Movement/>`_
        
        - Visit the `Web Interface <https://amanmahe.github.io/Muscle_game/>`__ to visualize in real time.

.. card:: 2. Track Your Ticker

    This project focuses on capturing electrocardiogram (ECG) signals to calculate heart rate using
    Neuro PlayGround Lite and displaying them in a Chrome-based browser on a mobile phone in real-time
    via a Bluetooth LE connection.

    .. youtube:: 2UDBqEsjJSI
        :align: center

    .. Note::

        - To learn about this project, visit our Instructables page for detailed guide: `Monitor ECG and Heartrate on Your Mobile Phone <https://www.instructables.com/Monitor-ECG-and-Heartrate-on-Your-Mobile-Phone/>`_

        - Visit the `Web Interface <https://ciumsy.github.io/ECG_Monitor/>`__ to visualize in real time.

.. card:: 3. Jump In the Blink of an Eye

    Instead of using the keyboard, you can control a game simply by blinking. The setup detects EOG signals from the eyes, 
    sends the data over Bluetooth LE to the PC, detects eye blinks, and then takes the eye blink as a trigger to emulate the 
    spacebar keystroke. You can configure the code to simulate any other keystroke as well.

    .. youtube:: ZJmUUtHJj08
        :align: center

    .. Note::

        - To learn about this project, visit our Instructables page for detailed guide: `Controlling Keyboard With Eye Blinks Using Neuro PlayGround Lite <https://www.instructables.com/Controlling-Keyboard-With-Eye-Blinks-Using-Neuro-P/>`_

.. card:: 4. Pop Bubbles With Your Mind

    This project showcases a brain-computer interface (BCI) application that utilizes EEG (electroencephalography) signals 
    to operate an interactive bubble-popping game in a web browser. The system identifies beta wave activity (12–30 Hz), 
    indicating concentration and attention levels. Bubbles appear and pop as the user maintains focus, but they cease to
    pop when concentration wanes.
    
    .. youtube:: MGTNjFtikZE
        :align: center

    .. Note::

        - To learn about this project, visit our Instructables page for detailed guide: `Pop Bubbles With Your Mind (EEG) | Neuro PlayGround (NPG) Lite <https://www.instructables.com/Pop-Bubbles-With-Your-Mind-EEG-Neuro-PlayGround-NP/>`_
        
        - Visit the `Web Interface <https://upsidedownlabs.github.io/Focion/>`__ to visualize in real time.

.. card:: 5. CortEX

    CortEX is an open-source neurofeedback meditation platform that combines EEG and ECG signals
    to provide real-time feedback on your mental and emotional state. Designed to enhance mindfulness, 
    it visualizes brainwave activity, heart rate, and hemisphere balance to help you meditate more 
    effectively - all from your browser, using the NPG Lite device.
    
    .. youtube:: O3F-0UWxNfA
        :align: center

    .. Note::
        
        - To learn about this project, visit our Instructables page for detailed guide: `A Neurofeedback Meditation Journey <https://www.instructables.com/A-Neurofeedback-Meditation-Journey/>`_

        - Visit the `Web Interface <https://upsidedownlabs.github.io/CortEX/>`__  to visualize in real time.
 
.. card:: 6. Brain-Controlled Car: EEG + EMG Robotic Control

    The Brain-Controlled Car transforms brainwaves (EEG) and muscle activity (EMG) into real-time robotic control,
    letting you steer a car without traditional remotes - just focus your mind to move forward, 
    flex your left or right arm to turn, or both arms to reverse. Powered by the Neuro PlayGround Lite,
    a wireless biopotential device, the system captures your signals via electrodes and transmits 
    them over BLE to an ESP32-based receiver that drives the motors. 
    This project offers a hands-on glimpse into the future of human–machine interaction, 
    where thoughts and movements seamlessly command machines.

    .. youtube:: US_cDCRjV6c
        :align: center

    .. Note::
        
        - To learn about this project, visit our Instructables page for detailed guide: `Brain-Controlled Car :EEG + EMG Robotic Control <https://www.instructables.com/Brain-Controlled-Car-EEG-EMG-Robotic-Control/>`_
 
.. card:: 7. Playing GTA V with Your Focus & Muscles

    Control GTA V using your mind! The Brain-Controlled Gaming system uses the 
    wireless Neuro PlayGround Lite to translate your brainwaves (EEG) and muscle contractions (EMG) 
    into game controls. Focus to accelerate, and flex your left or right arm to steer. This BCI project 
    delivers a mind-bending glimpse into the future of gaming, letting you command your car with 
    nothing but your body signals.

    .. youtube:: LhvBo8MP7iQ
        :align: center

.. card:: 8. Cuboid

    Cuboid is a neurofeedback-powered game that turns your focus into action. Using real-time brainwave
    data from the NPG Lite device, the game challenges you to move a geometric cuboid upward by
    maintaining mental focus. With multiple difficulty levels, live EEG streaming, and visual feedback, 
    Cuboid transforms concentration into an immersive, brain-controlled experience.
    
    .. Note::
        
        - Visit the `Web Interface <https://upsidedownlabs.github.io/Cuboid/>`__ to visualize in real time.

.. card:: 9. Muscle Strength

    Muscle Strength Game transforms your physical efforts into insightful data. Simply connect 
    to any muscle group you want to focus on, and you'll instantly visualize the raw electrical 
    activity your muscles generate. But it's more than just raw data; the game also processes this 
    information to display your real-time muscle strength. This allows you to track your progress, 
    identify areas for improvement, and engage with your workouts in a whole new, data-driven way. 
    Whether you're an athlete, rehabilitating an injury, or just curious about your body, this project 
    offers a unique window into your muscular capabilities.


    .. Note::

        - Visit the `Web Interface <https://chords.upsidedownlabs.tech/muscle-strength>`__  to visualize in real time.

.. card:: 10. Mind-to-Words Using EEG

    Mind-to-Words (M2W) application is an innovative Assistive Communication tool that enables users to 
    control a menu interface solely through eye blinks. It utilizes the EOG artifacts present in a single 
    channel EEG signal, which is captured by the NPG Lite device. The core functionality relies on a novel 
    algorithm that separates and recognizes distinct control signals: a double blink is used to activate or 
    switch between options, while a triple blink is used to confirm and make a selection.

    .. youtube:: UyXsqCrVxh4
        :align: center

    .. Note::

        - M2W Web Application: `Web Interface <https://upsidedownlabs.github.io/M2W/>`__ 


.. dropdown:: Neuro-PlayGround Lite C3 (Obsolete)

    .. rubric:: Overview

    Neuro Playground (NPG) Lite is a multichannel wireless bio-potential signal amplification device 
    designed for recording EMG, ECG, EOG, and EEG. It comes in a 
    compact `Adafruit feather <https://learn.adafruit.com/adafruit-feather/overview>`_ form factor and 
    offers WiFi/BLE wireless connectivity. With the addition of daughter boards called Playmates, users can 
    easily enhance the device’s capabilities, enabling the students/researchers/hobbyists to create awesome 
    Human-Computer Interface (HCI) and Brain-Computer Interface (BCI) applications.


    .. figure:: media/npg-C3-hero-1.*
        :align: center
        :alt: Neuro PlayGround (NPG) Lite C3

        Neuro PlayGround (NPG) Lite C3

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
        :alt: Neuro PlayGround (NPG) Lite C3 annotations

        Neuro PlayGround (NPG) Lite C3 annotations

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
