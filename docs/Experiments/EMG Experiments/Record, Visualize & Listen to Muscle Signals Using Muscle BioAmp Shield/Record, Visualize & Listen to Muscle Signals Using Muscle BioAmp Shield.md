# Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield


![dodge gif](./EMGimg4/Thumbnail.gif)


In this tutorial, we are going to show you how to create a simple EMG system at your home so that you can record the muscle signals, visualize them on LEDs and even listen to your muscles using the Arduino Uno shield for EMG, Muscle BioAmp Shield.

But before moving forward, let's understand a brief about Electromyography.

## What is Electromyography (EMG)?

Electromyography is a technique that measures muscle response or electrical activity in response to a nerve’s stimulation of the muscle. We can use this electrical activity to detect neuromuscular abnormalities or create solutions for some crazy real-world problems like making artificial limbs for amputees.

![](EMGimg4/EMGEnvelop.png)

### About Muscle BioAmp Shield:

Muscle BioAmp Shield is an all-in-one Arduino Uno Shield for Electromyography (EMG). It is perfect for beginners as it can be stacked on top of Arduino Uno to record, visualize and listen to the muscle signals to make amazing Human-Computer Interface (HCI) projects. It also comes with various plug-and-play options so you can connect hundreds of devices like OLED screens, character displays, accelerometers, and servo claws to name just a few using the I2C interface.

This is one of the products in the entire BioAmp series of sensors from Upside Down Labs which is designed in a way to teach you the basics of the instrumentation amplifier, active bandpass filtering, soldering, programming, neuroscience, Human-Computer Interface (HCI), Brain-Computer Interface (BCI), etc.

![](EMGimg4/Muscle%20BioAmp%20Shield.jpg)

## Supplies
### HARDWARE:

1 x Muscle BioAmp Shield Kit ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/muscle-bioamp-shield-v0-3/) | [Amazon India](https://www.amazon.in/dp/B09Z32M3PP?ref_=cm_sw_r_cp_ud_dp_N6R5671596GFW0C3JAF0) | [Tindie India](https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-shield-v03-arduino-shield-for-emg/))

- The Kit includes:
    - Muscle BioAmp Shield PCB x 1
    - Components
        - Ceramic capacitors.
        - Electrolytic capacitors
        - Resistors
        - LEDs
        - Audio Jack
        - Connectors
        - Tactical Switch
        - Optocoupler
        - Quad OpAmp, etc.
    - BioAmp Cable (100cm) x 1
    - Gel Electrodes x 24
    - Muscle BioAmp Band x 1
    - BioAmp AUX Cable x 1
    - 9V Snap Cable x 1
    - STEMMA Cables x 6

1 x Arduino uno with USB cable (Type A to Type B)

1 x 9V Battery (Optional, only if you want to make the system portable)

Soldering iron and other equipments to solder the components on the PCB


### SKIN PREPARATION KIT & ELECTRODE GEL:
1 x NuPrep skin preparation gel ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/nuprep-gel/) | [Tindie India](https://www.tindie.com/products/upsidedownlabs/nuprep-skin-preparation-gel/))

1 x Wet wipe

1 x Electrode Gel (only if using Muscle BioAmp Band) ([Upside Down Labs Store](https://store.upsidedownlabs.tech/product/electrode-gel/) | [Tindie India](https://www.tindie.com/products/upsidedownlabs/electrode-gel-250ml/))

### SOFTWARE:

Arduino IDE

## Step 1: Assembly


<iframe width="100%" height="444" src="https://www.youtube.com/embed/eaIDXosPSbs?feature=oembed&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

First of all, you have to assemble all the passive components on the Muscle BioAmp Shield PCB. For a step-by-step guide for the assembly, you can follow the video above or take a look at this ([interactive BOM](https://docs.upsidedownlabs.tech/DIY-Muscle-BioAmp-Shield/ibom.html))

## Step 2: Stacking on Arduino Uno


![dodge gif](./EMGimg4/Stacking%20on%20Arduino%20Uno.gif)

Stack the Muscle BioAmp Shield on top of Arduino Uno properly.

## Step 3: Connecting Electrode Cable
![dodge gif](./EMGimg4/Connecting%20Electrode%20Cable.gif)

Connect the BioAmp Cable to Muscle BioAmp Shield as shown in the connection diagram.

**Note:** Don't place the electrodes on the skin at this moment.

## Step 4: Skin Preparation
![dodge gif](./EMGimg4/Skin%20Preparation.gif)
Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe.

### About Nuprep Gel:

Nuprep skin preparation gel is a mildly abrasive, highly conductive gel that should be applied before placing the electrodes on the skin to improve measurements. When applied gently, it strips away the top layer of skin and moistens the underlying skin layer which reduces the skin impedance with minimal skin irritation and discomfort.

## Step 5: Electrode Placements

![dodge gif](./EMGimg4/Using%20Gel%20Electrodes.gif)
![dodge gif](./EMGimg4/Using%20EMG%20Band.gif)

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based EMG band. You can try both of them one by one.


### Measuring EMG using Gel electrodes:

1. Connect the BioAmp Cable to gel electrodes,
2. Peel the plastic backing from electrodes
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand.

### Measuring EMG using Muscle BioAmp Band, a dry electrode based EMG band:

1. Connect the BioAmp Cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp Cable to get the best results.

## Step 6: Download Arduino IDE

Download the Arduino IDE from the link given below:

https://www.arduino.cc/en/software

(We have used Arduino IDE version 1.8.19 for this project)

After downloading, connect the Arduino Uno to your laptop using the USB Cable (Type A to Type B)

**Note:** Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition.

## Step 7: Coding Time!

Copy paste the Arduino Sketch given below in Arduino IDE:

1. LED Bar Graph: https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/LEDBarGraph/LEDBarGraph.ino

After flashing the code, open the serial plotter to visualize the EMG signals.

## Step 8: Enjoy & Flex Your Arm

![dodge gif](./EMGimg4/LED%20Bar%20Graph.gif)

Now flex your arm to visualize the muscle signals (EMG) in real time on your laptop (on serial plotter of Arduino IDE) as well as on the onboard LEDs of Muscle BioAmp Shield.

More strength you apply, more the LED bar goes up.

Similarly you can try to record EMG from other parts of your body like biceps, triceps, cheeks, thighs, etc.

## Step 9: Listen to Your Muscles

![dodge gif](./EMGimg4/Listening%20Music.gif)

Here comes the most interesting part of the project which is listening to your muscles.

You can either listen it on a speaker or wired earphones/headphones. Let's try both of them.

### Listening on a wired earphones/headphones:

1. Plug your wired earphones or headphones on the 3.5mm jack of Muscle BioAmp Shield
2. Plug it in your ears
3. Flex and listen to your muscles

### Listening on a speaker using BioAmp AUX Cable:

1. Plug the BioAmp AUX Cable on Muscle BioAmp Shield
2. Connect the BioAmp AUX cable on the speaker
3. Flex and listen to your muscles.
Isn't it AMAZING? How did you feel?

Let us know your feedback in the comments and feel free to ask any questions.

You can also mail us at support@upsidedownlabs.tech for any kind of support while you are making this project.

## Step 10: Make It Portable

![dodge gif](./EMGimg4/Connecting%209V%20battery.gif)

Till now, the power for the EMG system was coming from the laptop via USB cable of Arduino Uno but there can be 2 ways in which you can make the system portable:

1. Using 9V battery: Directly connect a 9V battery to Muscle BioAmp Shield using a 9V snap cable.

2. Using Power Bank: Instead of connecting the USB cable of Arduino Uno to laptop, you can directly connect it to power bank.

## Step 11: Some Other Projects


<iframe width="100%" height="444" src="https://www.youtube.com/embed/kgvK51UIXdo?feature=oembed&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

You can also make various other projects using Muscle BioAmp Shield like:

1. Controlling a servo claw by muscle signals (EMG): https://www.instructables.com/Controlling-a-Servo-Claw-With-Muscle-Signals-EMG-U/