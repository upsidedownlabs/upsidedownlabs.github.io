---
sidebar_position: 1
---

# EMG Experiments

# Recording and Visualizing Muscle Signals (EMG) Using Muscle BioAmp Patchy (wearable Muscle Sensor)

![](img/emgimg1.jpg)
![](img/emgimg2.jpg)

In this tutorial we are going to show you how to create a simple EMG system at your home so that you can easily record and visualize muscle signals in real time using Muscle BioAmp Patchy (wearable muscle sensor) and Arduino Uno.

But before moving forward, let's understand a brief about Electromyography.

## What is Electromyography (EMG)?
Electromyography (EMG) is a technique for evaluating and recording the electrical activity produced by skeletal muscles.

Some applications of EMG:

1. Prosthetic hands, 
2. Human augmentation, 
3. Games controllers, 
4. Rehabilitation and 
5. Physical therapy
Even doctors are using them for the diagnosis of various neuromuscular ailments.

Recently, it was in the news that [Meta is working on wearable EMG sensors](https://tech.facebook.com/reality-labs/2021/03/inside-facebook-reality-labs-wrist-based-interaction-for-the-next-computing-platform/) to track user movements in the metaverse.

### About Muscle BioAmp Patchy:

Muscle BioAmp Patchy is a small **wearable muscle sensor** for precise EMG sensing. It can be snapped directly to the electrodes, eliminating electrode cables.

## Supplies

## HARDWARE

1 x Muscle BioAmp Patchy Kit ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/muscle-bioamp-patchy-v0-2/) | [Amazon India](https://www.amazon.in/dp/B0C4P2JB7J?ref=myi_title_dp&th=1) | [Tindie India](https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-patchy-wearable-muscle-sensor/))

The kit will include:
* 1 Muscle BioAmp Patchy,
* 1 Reference Cable,
* 3 Jumper Wires,
* 3 Boxy Gel Electrodes


1 x Arduino Uno with USB Cable

1 x Nuprep Skin Preparation Gel ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/nuprep-gel/) | [Tindie Store](https://www.tindie.com/products/upsidedownlabs/nuprep-skin-preparation-gel/))

1 x Wet wipe

## SOFTWARE:

Ardiuno IDE

## Step 1: Connecting Reference Cable

![](img/emgimg3.jpg)

Connect the reference cable to the Muscle BioAmp Patchy as shown in the above diagram.

## Step 2: Connecting Muscle BioAmp Patchy to Gel Electrodes

![](img/emgimg4.jpg)

Connect the Muscle BioAmp Patchy to gel electrodes (Don't peel the plastic from the electrodes at this moment).

## Step 3: Skin Preparation

![dodge gif](./img/Skin_Prep.gif)

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe.

### About Nuprep Gel:

Nuprep skin preparation gel is a mildly abrasive, highly conductive gel that should be applied before placing the electrodes on the skin to improve measurements. When applied gently, it strips away the top layer of skin and moistens the underlying skin layer which reduces the skin impedance with minimal skin irritation and discomfort. This enhances the performance of the monitoring electrode and virtually eliminates problems such as diaphoresis and muscle artifacts.


## Step 4: Electrode Placements

![](img/emgimg5.jpg)

Now peel off the plastic backing from the gel electrodes and place the Muscle BioAmp Patchy on the muscle from where you want to record muscle signals (EMG). In this project, we are targeting the ulnar nerve on the forearm.


## Step 5: Connections

![](img/emgimg6.jpg)


Connect the Muscle BioAmp Patchy to your Arduino Uno using jumper cables as directed below:

1. OUT to A0
2. GND to GND
3. VCC to 5V


## Step 6: Download Arduino IDE

Download the Arduino IDE from the link given below:

https://www.arduino.cc/en/software

(We have used Arduino IDE version 1.8.19 for this project)

After downloading, connect the Arduino Uno to your laptop using the USB Cable (Type A to Type B)

**Note:** Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

## Step 7: Check All the Conections

![](img/emgimg7.jpg)

Now that you have made all the connections and downloaded the Arduino IDE. Once again check everything as shown in the diagram.

## Step 8: Coding Time!

Copy paste any one of the Arduino Sketches given below in Arduino IDE:

1. EMG Envelop: https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/EMGEnvelop/EMGEnvelop.ino
2. EMG Filter: https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/EMGFilter/EMGFilter.ino

After flashing the code, open the serial plotter to visualize the EMG signals.

## Step 9: Flex Your Muscle


<iframe width="100%" height="444" src="https://www.youtube.com/embed/4dnCX3U7LS8?feature=oembed&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 


Now flex your arm to visualize the muscle signals in real time on your laptop. Similarly you can try to record muscle signals from other parts of your body like biceps, triceps, cheeks, thighs, etc.

You are all set to explore on your own and make amazing HCI projects at the comfort zone of your home.

Let us know your feedback in the comments and feel free to ask any questions.

You can also mail us at support@upsidedownlabs.tech for any kind of support while you are making this project.