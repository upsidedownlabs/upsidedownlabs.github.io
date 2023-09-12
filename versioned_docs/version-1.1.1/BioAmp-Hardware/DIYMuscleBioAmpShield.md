---
sidebar_position: 2
---

# DIY Muscle BioAmp Shield
All-in-one Arduino Uno Shield for EMG (Electromyography).

## Overview
Muscle BioAmp Shield is an all-in-one Arduino Uno ElectroMyography (EMG) shield for learning neuroscience with ease. It is a DIY Electrophysiology/NeuroScience shield inspired from Back Yard Brains (BYB) Muscle Spiker shield and provides similar features like hobby servo output, user buttons, LED Bar, Audio output, and battery input. It is perfect for beginners as they can easily stack it on top of Arduino Uno to record, visualize and listen to their muscle signals to make amazing projects in the domain of Human-Computer Interface (HCI).

<iframe width="100%" height="444" src="https://www.youtube.com/embed/w8yw12SUe6Q" title="Muscle BioAmp Shield v0.3 Unboxing | @Arduino Shield for EMG | Muscle Sensor | DIY Neuroscience" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Features & Specifications
Muscle BioAmp Shield comes with various plug-and-play options so you can connect hundreds of extension boards like OLED screens, character displays, accelerometers, and servo controllers to name just a few using the STEMMA I2C interface. You also get STEMMA digital and STEMMA analog ports. On STEMMA analog port you can connect additional BioAmp EXG Pill or any other sensor with analog output. On STEMMA digital port you can connect any digital sensor or actuator of your choice.

![Muscle BioAmp Shield](img/Muscle%20BioAmp%20Shield/Shield%20v0.3%20Pamphlet.jpg)

|||
| :-------- | :---------- |
|Input Voltage|5V|
|Input Impedance|10^11 Ω|
|Fixed Gain|x2420|
|Bandpass filter|72 – 720 Hz|
|Compatible Hardware|Arduino UNO|
|BioPotentials|EMG (Electromyography)|
|No. of channels|1|
|Electrodes|3 (Positive, Negative, and Reference)|
|Dimensions|6.0 x 5.3 cm|
|Open Source|Hardware + Software|

## Hardware
Images below shows a quick overview of the hardware design.

| PCB front | PCB back |
| :-------: | :--------: |
| ![Muscle BioAmp Shield](img/Muscle%20BioAmp%20Shield/Muscle-BioAmp-Shield-Front.png) | ![Muscle BioAmp Shield](img/Muscle%20BioAmp%20Shield/Muscle-BioAmp-Shield-Back.png) |
![With wires](img/Muscle%20BioAmp%20Shield/Muscle-BioAmp-Shield-With-Wires.png)
![Dimensions](img/Muscle%20BioAmp%20Shield/dimensions.png)
![Schematic](img/Muscle%20BioAmp%20Shield/Schematic.png)

## Assemblying he Kit
You can get your own Muscle BioAmp Shield bag of parts from [our store](https://store.upsidedownlabs.tech/product/muscle-bioamp-shield-v0-3/) or [Tindie](https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-shield-v03-arduino-shield-for-emg/) and for assembling your shield you can take a look at [this interactive BOM](https://upsidedownlabs.github.io/DIY-Muscle-BioAmp-Shield/) or the step by step guide below. 

| Step 1 - Bare board | Step 2 - 1M Resistors | Step 3 - 330R Resistors| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/01_Bare_Board.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/02_1M_Resistors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/03_330R_Resistors.jpg)|

| Step 4 - 10K Resistors | Step 5 - 22K Resistors | Step 6 - 1K Resistors| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/04_10K_Resistors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/05_22K_Resistors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/06_1K_Resistors.jpg)|

| Step 7 - 220K Resistors | Step 8 - 1nF Capacitors | Step 9 - 100nF Capacitors| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/07_220K_Resistors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/08_1nF_Capacitors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/09_100nF_Capacitors.jpg)|

| Step 10 - 100pF Capacitors | Step 11 - Servo Header Pin | Step 12 - Buttons| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/10_100pF_Capacitors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/11_Angled_Header_Pins.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/12_5x5mm_Buttons.jpg)|

| Step 13 - Optoisolator | Step 14 - Angled JST Connectors | Step 15 - Straight JST Connectors| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/13_OptoIsolator.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/14_JST_PH_Angled_Connectors.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/15_JST_PH_Straight_Connectors.jpg)|

| Step 16 - IC Socket | Step 17 - IC | Step 18 - LEDs| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/16_IC_Socket.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/17_IC.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/18_LEDs.jpg)|

| Step 19 - 3.5mm Headphone Jack | Step 20 - 2.2uF Capacitor | Step 21 - 1uF Capacitor| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/19_3.5mm_Headphone_Jack.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/20_2.2uF_Capacitor.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/21_1uF_Capacitor.jpg)|

| Step 22 - 470uF Capacitors | Step 23 - Shield Header Pins | Step 24 - Shield Ready| 
| :----: | :----: | :----: |
| ![](img/Muscle%20BioAmp%20Shield/Assembly/22_470uF_Capacitor.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/23_Header_Pins.jpg)|![](img/Muscle%20BioAmp%20Shield/Assembly/24_Assembled.jpg)|

Still can't figure out the assembly? You can follow the video provided below to assemble your Shield.

<iframe width="100%" height="444" src="https://www.youtube.com/embed/dcuCihh3yn4" title="Muscle BioAmp Shield v0.3: Assembly Guide | EMG Shield for @Arduino Uno | Muscle Sensor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Using the Sensor
The possibilities are endless as you can:

- Visualize the EMG signals using the 6-onboard LEDs. The more you flex, the more LEDs will glow up.
![LED bar graph](img/Muscle%20BioAmp%20Shield/LEDGraph.gif)

- Directly connect the servo motor via 3-pin angled header pins and control it using muscle signals (EMG).
![Servo motor](img/Muscle%20BioAmp%20Shield/Servo%20control.gif)

- Give audio/mic input signals from your mobile phone, laptop, or speakers via BioAmp AUX Cable connected to a 4-pin JST PH 2mm connector.

  ![Listening signals](img/Muscle%20BioAmp%20Shield/listening%20muscle%20signals.gif)

- Connect a 7V to 9V battery via snap cable.
![9V snap](img/Muscle%20BioAmp%20Shield/9V%20battery.gif)

- Record the muscle signals (EMG) either using Gel Electrodes or BioAmp Bands (dry electrode based) via BioAmp Cable connected to a 3-pin JST PH 2mm connector.

- Listen to your muscle signals using wired headphones/earphones connected to a 3.5mm headphone jack.
- Connect hundreds of devices like OLED screens, character displays, temperature sensors, accelerometers, BioAmp Hardware, and much more using the two I2C interfaces.
- Connect Arduino Uno's D6 digital I/O pins and A2 analog input pins using STEMMA digital and STEMMA analog connectors respectively.
- Program the 2 user buttons according to your project requirements.

## Some project ideas
These features make it the ultimate plug-and-play kit for students, researchers, and hobbyists alike who want to use muscle signals (EMG) to make amazing human-computer interface (HCI) projects like:

1. Controlling a Dino Game using your muscle signals (EMG)

<iframe width="100%" height="444" src="https://www.youtube.com/embed/66VOVqrFLoQ" title="Controlling Dino Game using Muscle Signals (EMG) | Muscle BioAmp Shield v0.3 | DIY Neuroscience" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


2. Scrolling Instagram Reels/YouTube Shorts by using your muscle signals (EMG)

<iframe width="100%" height="444" src="https://www.youtube.com/embed/ZzhrNyndky4" title="Scrolling Instagram Reels or YouTube Shorts using muscle signals (EMG) | BioAmp Hardware | @Arduino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>