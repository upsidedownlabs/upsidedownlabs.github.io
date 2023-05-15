---
sidebar_position: 5
---

# Muscle BioAmp BisCute

## Overview
Muscle BioAmp BisCute is an ultra-affordable DIY ElectroMyography (EMG) sensor that allows you to create a Human-Computer Interface (HCI) with ease and in the process of building your own BisCute, you learn what goes into making a functional biopotential amplifier that can be used for amplifying sub mV signals created by muscles inside your body to a level a microcontroller unit (MCU) can understand. To record the EMG signals you can use any standalone ADC like ADS1115 or any microcontroller development board with an ADC of your choice like Arduino UNO/Nano.

![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/Muscle_BioAmp_BisCute.jpg)


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
|Dimensions|3.0 x 4.5 cm|
|Open Source|Hardware + Software|


## Hardware
Images below shows a quick overview of the hardware design.

| PCB front | PCB back |
| :-------: | :--------: |
| ![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/front.png) | ![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/back.png) |
![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/assembled.png)
![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/dimensions.png)
![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/schematic.png)


## Assemblying the kit

You can get your own Muscle BioAmp BisCute bag of parts from [our store](https://store.upsidedownlabs.tech/product/muscle-bioamp-biscute-diy/) or [Tindie](https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-biscute-diy-muscle-sensor/) and for assembling your Biscute you can either take a look at [this interactive BOM](https://upsidedownlabs.github.io/Muscle-BioAmp-BisCute/) or the step by step guide below. 

| Step 1 - Bare board | Step 2 - 100K Resistor | Step 3 - 10K Resistor| Step 4 - 1M Resistor|
| :----: | :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20BisCute/Assembly/001_Board.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/002_100K_Resistor.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/003_10K_Resistors.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/004_1M_Resistors.png)|

| Step 5 - 330R Resistor | Step 6 - 220K Resistor | Step 7 - 4.7nF Capacitor | Step 8 - 2.2uF Capacitor |
| :----: | :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20BisCute/Assembly/005_330R_Resistors.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/006_220K_Resistor.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/007_4.7nF_Capacitor.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/008_2.2uF_Capacitor.png)|

| Step 9 - 470uF Capacitor | Step 10 - 100nF Capacitor | Step 11 - 1nF Capacitor | Step 13 - 1K Resistor |
| :----: | :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20BisCute/Assembly/009_470uF_Capacitor.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/010_100nF_Capacitors.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/011_1nF_Capacitors.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/012_1K_Resistor.png)|

| Step 13 - BioAmp Connector | Step 14 - Header Pin | Step 15 - IC | Step 16 - Biscute ready |
| :----: | :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20BisCute/Assembly/013_Connector.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/014_HeaderPin.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/015_IC.png)|![](img/Muscle%20BioAmp%20BisCute/Assembly/016_Assembled.png)|

Still can't figure out the assembly? You can follow the video provided below to assemble your BisCute.

<iframe width="100%" height="444" src="https://www.youtube.com/embed/2dzW6pVT1L8" title="Muscle BioAmp BisCute: Assembly Guide | DIY Muscle Sensor | Upside Down Labs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Connecting with Arduino

After assembling the kit, you can pair it with any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice.

To measure the EMG signals, just connect BioAmp Cable v3 with the Muscle BioAmp BisCute as shown in the image below, and get started.

![Muscle BioAmp BisCute](img/Muscle%20BioAmp%20BisCute/Electrode_Placement_Example.jpg)


## Using the Sensor

<iframe width="100%" height="444" src="https://www.youtube.com/embed/ujFsAE0E0nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Some project ideas

We have curated a playlist for you which consists some awesome project ideas for you to get started with your next HCI project.
<iframe width="100%" height="444" src="https://www.youtube.com/embed/videoseries?list=PLtkEloJ7UnkQIoz1HK4IXWujCB8hKdiKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>