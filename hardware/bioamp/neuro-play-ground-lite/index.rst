.. _neuro-play-ground-lite:

Neuro Play Ground (NPG) Lite
############################

:bdg-info:`Launching soon`

Overview
**********

Neuro Playground (NPG) Lite is a multichannel wireless bio-potential signal amplification device designed for recording EMG, ECG, EOG, and EEG. It comes in a compact `Adafruit feather <https://learn.adafruit.com/adafruit-feather/overview>`_ form factor and offers WiFi/BLE wireless connectivity. With the addition of playmate daughter boards, users can easily enhance the device’s capabilities, enabling the students/researchers/hobbyists to create awesome Human-Computer Interface (HCI) and Brain-Computer Interface (BCI) applications.


.. figure:: media/npg-hero-1.*
    :align: center

    Neuro Play Ground (NPG) Lite

Features & Specifications
**************************

+------------------------+-----------------------------------------------------------------------+
| No. of channels        | 3                                                                     |
+------------------------+-----------------------------------------------------------------------+
| Power options          | USB type C or Lipo battery                                            |
+------------------------+-----------------------------------------------------------------------+
| Microcontroller        | ESP32-CX (RISC-V) with 4MB Flash                                      |
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
| LEDs                   | 6 NeoPixel mini RGB LEDs with controllable power pins                 |
+------------------------+-----------------------------------------------------------------------+
| BioPotentials          | EMG, ECG, EOG and EEG                                                 |
+------------------------+-----------------------------------------------------------------------+
| Compatible hardware    | NPG Playmates & FeatherWing boards                                    |
+------------------------+-----------------------------------------------------------------------+
| Protection             | Built-in patient & USB ESD protection                                 |
+------------------------+-----------------------------------------------------------------------+

Board Layout
************

.. figure:: media/npg-front-annotations.*
    :align: center

    Neuro Play Ground (NPG) Lite annotations

Playmates
*********

Playmates are modular expansion boards designed to enhance the functionality of **Neuro Play Ground (NPG) Lite**. These add-ons seamlessly integrate with the core system, allowing users to extend their bio-potential signal processing capabilities with additional features.

VibZ
=====

The first Playmate, **VibZ**, introduces haptic feedback, a buzzer, a QWIIC port for easy sensor integration, an ON/OFF switch, and electrode header pins. With these Playmates, users can customize their setup for specific applications, whether in research, education, or interactive biofeedback experiments. This modular approach ensures flexibility, scalability, and better user experience.

.. figure:: media/npg-playmate-annotations.*
    :align: center

    VibZ Playmate

Features & Specifications
-------------------------

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