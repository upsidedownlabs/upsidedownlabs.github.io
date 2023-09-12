---
sidebar_position: 4
---

# Muscle BioAmp Candy
Candy-size affordable muscle sensor for precise EMG sensing

## Overview
A candy-size single-channel ElectroMyography (EMG) sensor for precise recording of muscle signals at an affordable cost. It is an SMD version of Muscle BioAmp BisCute that can be used to make amazing Human-Computer Interface (HCI) projects. To record the EMG signals you can use any standalone ADC like ADS1115 or any microcontroller development board with an ADC of your choice like Arduino UNO/Nano.

![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/Muscle-BioAmp-Candy-front.jpg) 

## Features & Specifications

|||
| :------- | :-------- |
|Minimum Input Voltage|3.3-30 V|
|Input Impedance|10^11 Ω|
|Fixed Gain|x2420|
|Bandpass filter|72 – 720 Hz|
|Compatible Hardware|Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few)|
|BioPotentials|EMG (Electromyography)|
|No. of channels|1|
|Electrodes|3 (Positive, Negative, and Reference)|
|Dimensions|3.5 x 1.5 cm|
|Open Source|Hardware + Software|


## Hardware
Images below shows a quick overview of the hardware design.

| PCB front | PCB back |
| :-------: | :--------: |
| ![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/PCBfront.png) | ![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/PCBback.png) |

![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/Muscle%20BioAmp%20Candy_front.png)
![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/Muscle%20BioAmp%20Candy_back.png)
![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/dimensions.png)
![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/schematic.png)


## Connecting with Arduino

To get started, you can pair Muscle BioAmp Candy with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

To measure the EMG signals, connect BioAmp Cable v3 with your muscle sensor as shown in the image below:

![Muscle BioAmp Candy](img/Muscle%20BioAmp%20Candy/Muscle-BioAmp-Candy-Arduino-EMG-Recording.jpg)

CAUTION: Make sure to follow the above diagram while making the connections between your Muscle BioAmp Candy & Arduino (or any other ADC of your choice), especially the GND and VCC else it may damage the muscle sensor.

## Using the sensor

<iframe width="100%" height="444" src="https://www.youtube.com/embed/lPX2TGBcHOA" title="How to use Muscle BioAmp Candy? | Muscle Sensor (EMG) | @Arduino | Upside Down Labs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Some project ideas

We have curated a playlist for you which consists some awesome project ideas for you to get started with your next HCI project.
<iframe width="100%" height="444" src="https://www.youtube.com/embed/videoseries?list=PLtkEloJ7UnkQIoz1HK4IXWujCB8hKdiKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>