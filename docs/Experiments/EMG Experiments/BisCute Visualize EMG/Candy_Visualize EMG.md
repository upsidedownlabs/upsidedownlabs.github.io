# Using Muscle BioAmp Candy (Candy Size Muscle Sensor)

![](EMGimg6/Thumbnail1.jpg)

![](EMGimg6/Thumbnail2.jpg)
In this tutorial, we are going to show you how to create a simple EMG system at your home so that you can easily record and visualize muscle signals in real-time using Muscle BioAmp Candy (candy-size EMG sensor) and Arduino Uno.

But before moving forward, let's understand a brief about Electromyography.

## What is Electromyography (EMG)?

Electromyography is a technique that measures muscle response or electrical activity in response to a nerve’s stimulation of the muscle. We can use this electrical activity to detect neuromuscular abnormalities or create solutions for some crazy real-world problems like making artificial limbs for amputees.

### About Muscle BioAmp Candy:

Muscle BioAmp Candy is a candy-size EMG sensor that can record minute electrical signals from the surface of our muscles and amplify them to a level a microcontroller unit (MCU) can understand.

The entire BioAmp series of sensors from Upside Down Labs is designed to teach you the basics of the instrumentation amplifier, active bandpass filtering, soldering, programming, neuroscience, HCI, and BCI to name a few concepts.


## Supplies

### HARDWARE:

1 x Muscle BioAmp Candy Kit ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/muscle-bioamp-candy/) |
 [Amazon Store](https://www.amazon.in/dp/B09ZDZVCT7?ref=myi_title_dp) | [Tindie Store](https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-candy/))

- The Kit includes:
    - Muscle BioAmp Candy x 1
    - BioAmp Cable (50cm) x 1
    - Jumper Wires x 3
    - Gel Electrodes x 3
    - Muscle BioAmp Band x 1


1 x Arduino uno with USB cable (Type A to Type B)

### SKIN PREPARATION KIT & ELECTRODE GEL:

1 x NuPrep skin preparation gel ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/nuprep-gel/) | [Tindie Store](https://www.tindie.com/products/upsidedownlabs/nuprep-skin-preparation-gel/))


1 x Wet wipe

1 x Electrode Gel ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/electrode-gel/) | [Tindie Store](https://www.tindie.com/products/upsidedownlabs/electrode-gel-250ml/))

### SOFTWARE:

Arduino IDE

## Step 1: Connecting Electrode Cable


![dodge gif](./EMGimg6/Connecting%20Electrode%20Cable.gif)


Connect the BioAmp Cable to Muscle BioAmp BisCute as shown in the connection diagram. We have different variants of the BioAmp Cable so don't go with the color coding and focus on the REF, IN+ and IN- written on the Muscle BioAmp BisCute.


## Step 2: Skin Preparation




![dodge gif](./EMGimg6/Skin%20Preparation.gif)

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe.

### About Nuprep Gel:
Nuprep skin preparation gel is a mildly abrasive, highly conductive gel that should be applied before placing the electrodes on the skin to improve measurements. When applied gently, it strips away the top layer of skin and moistens the underlying skin layer which reduces the skin impedance with minimal skin irritation and discomfort.

## Step 3: Electrode Placements

![dodge gif](./EMGimg6/Using%20Gel%20Electrodes.gif)

![dodge gif](./EMGimg6/Using%20EMG%20Band.gif)


We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based EMG band. You can try both of them one by one.

### Measuring EMG using Gel electrodes:

1. Connect the BioAmp Cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.


### Measuring EMG using Muscle BioAmp Band, a dry electrode based EMG band:

1. Connect the BioAmp Cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp Cable to get the best results.

## Step 4: Connections
![](EMGimg6/Connections.jpg)

Connect Muscle BioAmp Candy to Arduino Uno using the jumper cables as directed below:

- VCC to 5V
- GND to GND
- OUT to A0

**Note:** BE VERY CAREFUL and follow the above diagram while making the connections between your Muscle BioAmp Candy & Arduino Uno, especially the GND and VCC else it may damage the sensor.

## Step 5: Download Arduino IDE
Download the Arduino IDE from the link given below:

https://www.arduino.cc/en/software

(We have used Arduino IDE version 1.8.19 for this project)

After downloading, connect the Arduino Uno to your laptop using the USB Cable (Type A to Type B)

**Note:** Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.


## Step 6: Coding Time!
Copy paste any one of the Arduino Sketches given below in Arduino IDE:

EMG Envelop: https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/EMGEnvelop/EMGEnvelop.ino

EMG Filter: https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/EMGFilter/EMGFilter.ino

After flashing the code, open the serial plotter to visualize the EMG signals.

## Step 7: Enjoy & Flex Your Arm

![](EMGimg6/Thumbnail1.jpg)

Enjoy, finally you have completed the project. Now flex your arm to visualize the muscle signals in real time on your laptop. Similarly you can try to record EMG from other parts of your body like biceps, triceps, cheeks, thighs, etc.

You are all set to explore on your own and make amazing HCI projects at the comfort zone of your home.


## Step 8: Complete Video Guide


<iframe width="100%" height="444" src="https://www.youtube.com/embed/lPX2TGBcHOA?feature=oembed&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

You can also watch this complete video guide of this project.

Let us know your feedback in the comments and feel free to ask any questions.

You can also mail us at support@upsidedownlabs.tech for any kind of support while you are making this project.