---
sidebar_position: 3
---

# Muscle BioAmp Patchy

## Overview

Muscle BioAmp Patchy is a wearable ElectroMyoGraphy or EMG sensor that snaps directly to gel electrodes and connects to your muscle like a patch. It comes with reverse polarity projection, power indicator, onboard snap connectors, and Upside Down Labs' powerful BioAmp sensing technology for precise muscle signal recording. This enables you to easily integrate this sensor in your EMG-based Human-Computer Interface (HCI).

![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/Patchy-All-Colors.jpg) 

| Features & Specifications ||
| :------- | :-------- |
|Minimum Input Voltage|4.5 V|
|Input Impedance|10^12 Ω|
|Fixed Gain|x2420|
|Bandpass filter|72 – 720 Hz|
|Wearable|Yes|
|Compatible Hardware|Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few)|
|BioPotentials|EMG (Electromyography)|
|No. of channels|1|
|Electrodes|3 (Positive, Negative, and Reference)|
|Dimensions|47 x 14 mm|
|Open Source|Hardware + Software|

[![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/patchy_Intro_YT.jpg)](https://www.youtube.com/watch?v=qRKU_HvapDE&)

## Hardware
Images below shows a quick overview of the hardware design.

| PCB front | PCB back |
| :-------: | :--------: |
| ![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/PCB-Front.png) | ![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/PCB-Back.png) |

![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/Muscle-BioAmp-Patchy-Assembled-Front.png)

![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/Muscle-BioAmp-Patchy-Assembled-Back.png) 



## Connecting with Arduino

To get started, you can pair Muscle BioAmp Patchy with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

For the connections and electrode placements, you can follow the diagram given below:

![Muscle BioAmp Patchy Connections](img/Muscle%20BioAmp%20Patchy/Patchy-Arduino-Connections.jpg)


## Demonstration

After snapping the Patchy onto gel electrodes(placed on our targeted muscle), you can connect your patchy to the arduino via jumper cables, arduino to your battery operated laptop, and start recording your EMG easily. Follow the steps shown in the video below for the demonstration.

[![Muscle BioAmp Patchy](img/Muscle%20BioAmp%20Patchy/patchy_demo_thumbnail.jpg)](https://www.youtube.com/watch?v=4dnCX3U7LS8&)