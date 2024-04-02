.. _bioamp-exg-pill:

BioAmp EXG Pill
##################

Publication-grade analog front-end amplification for recording ECG, EMG, EOG, or EEG on a pill-size board.

Overview
*********

BioAmp EXG Pill is a small, powerful analog-front-end (AFE) biopotential signal-acquisition board that can be paired 
with any microcontroller unit (MCU) or single-board computer (SBC) with an analog-to-digital converter (ADC) such as 
Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, and Raspberry Pi Pico, to name 
just a few. It also works with any dedicated ADC, like the Texas Instruments ADS1115 and ADS131M0x, among others.

.. figure:: media/BioAmp-EXG-Pill-Front.*
    :width: 500
    :align: center

What makes it different?
**************************

1. Record publication-quality biopotential signals like ECG, EMG, EOG, or EEG.
2. Small size (25.4 x 10.0mm) allows easy integration into mobile and space-constrained projects.
3. Powerful noise rejection makes it usable even when the device is close to the AC mains supply.
4. Any 1.5 mm diameter wire can be used as a strain-relieving electrode cable, making it very cost-effective.
5. Pair it with any MCU with an ADC. It is by default compatible with 5V but you can make it compatible with 3.3V as well using a voltage divider.
6. Configure the gain, band pass filter and electrode count according to your requirements.

Features & Specifications
**************************

+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Operating Voltage                   | 5 V                                                                                                                                                                                                   |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance                     | 10^12 ohm                                                                                                                                                                                             |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware                 | Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) or any standalone ADC of your choice |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials                       | EMG, ECG, EOG, EEG (configurable band-pass, by default configured for EEG & EOG)                                                                                                                      |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels                     | 1                                                                                                                                                                                                     |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes                          | 2 or 3 (By default configured for 3 electrodes)                                                                                                                                                       |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions                          | 25.4 x 10 mm                                                                                                                                                                                          |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source                         | Hardware + Software                                                                                                                                                                                   |
+-------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Board layout
*************

.. Images below shows a quick overview of the BioAmp EXG Pill hardware design.

.. .. figure:: media/PCB_Front.*
..     :width: 300
..     :align: center
..     :alt: PCB Front

.. .. figure:: media/PCB_Back.*
..     :width: 300
..     :align: center
..     :alt: PCB Back

BioAmp EXG Pill’s elegant design allows it to be used in 3 ways:

 1. Pin-header holes allow you to solder (berg strip) pin headers for easy use with a breadboard.
 2. Castellated holes allow you to solder BioAmp EXG Pill directly onto a custom PCB that requires biopotential-amplification capabilities.
 3. Electrode holes allow you to use any 1.5 mm diameter wire as an electrode cable with minimal strain.

.. figure:: media/Front_Specifications.*
    :width: 500
    :align: center

.. figure:: media/Back_Specifications.*
    :width: 500
    :align: center

**BioAmp EXG Pill is fully configurable as you can:**

1. Increase the gain of the instrumentation amplifier by using a 0603 resistor at R6. Decrease gain and configure the bandpass filter by using 0603 parts at R12 and C5. Band limiting is very useful for EOG and EEG recording. Also, the signal sometimes clips while recording ECG with electrodes very close to the heart. Creating a solder jumper for a band-pass filter helps with that. By default, BioAmp EXG Pill is configured to record EEG and EOG but you can bridge the pads (below bandpass) with solder to make it configurable for EMG and ECG.
2. The normal method of operation for best-quality signal amplification is to use 3 electrodes by default but you can bridge the pads (below electrodes) to make it configurable for 2 electrodes. The 2-electrode mode is specifically included for projects like heart (ECG) patches for HRV. It’s only supposed to be used with a battery-operated setup and is quite prone to high interference noise due to a lack of proper reference on the body (This option is not recommended for most operations)



Assembly & getting started
****************************

If you have received the assembled BioAmp EXG Pill then you can skip the step 1 below. But, if you got the unassembled one, follow step 1 to assemble your Pill:

.. grid:: 1 1 1 1
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::

        .. card::

            **Step 1: Solder Connectors**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            
            .. figure:: media/assembly-step1.*
                :width: 300

            Insert the provided BioAmp cable's JST PH connector and header pins from top as shown in the image and solder them from below.

        .. card::

            **Step 2 (optional): Configure for ECG/EMG**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/assembly-step2.*
                :width: 300

            BioAmp EXG Pill is by default configured for recording EEG or EOG but if you want to record good quality ECG or EMG, then it is recommended to configure it by making a solder joint as shown in the image above.

            .. note:: Even without making the solder joint the BioAmp EXG Pill is capable of recording ECG or EMG as well but the signals would be more accurate if you configure it.

        .. card::

            **Step 3 (optional): Configure to operate at 3.3V**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/EXG_Recording.*
                :width: 300
                :align: center

            It is by default compatible with 5V but you can make it compatible with 3.3V as well using a voltage divider.

        .. card::

            **Step 4: Connect MCU/ADC**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/assembly-step3.*
                :width: 300

            Connect VCC to 5V, GND to GND, and OUT to Analog (ADC) IN of your favorite MCU/ADC board via jumper cables provided by us.

            .. warning:: Take precautions while connecting to power, if power pins are to be swapped, your BioAmp EXG Pill will be fried and it’ll become unusable (DIE).

        .. card::

            **Step 5: Make the connections**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/Basic-Circuit.*
                :width: 300

            Connect the BioAmp Cable to the BioAmp EXG Pill and then to the electrodes. Place the electrodes according to your recording biopotential signal.

ElectroMyoGraphy (EMG)
***********************

Electromyography (EMG) is a technique for evaluating and recording the electrical activity produced by skeletal muscles. 
EMG is also used as a diagnostic procedure to assess the health of muscles and the nerve cells that control them (motor 
neurons). EMG results can reveal nerve dysfunction, muscle dysfunction, or problems with nerve-to-muscle signal transmission. 
The images below show an EMG wave recorded with BioAmp EXG Pill and the electrode placement for the recorded EMG respectively.

.. figure:: media/EMGEnvelop.*
    :align: center

.. figure:: media/EMG.*
    :align: center

ElectroCardioGraphy (ECG)
**************************

Electrocardiography (ECG) is the process of producing an electrocardiogram (ECG or EKG). It is a graph of voltage versus time 
of the electrical activity of the heart using electrodes placed on the skin. These electrodes detect the small electrical changes 
that are a consequence of cardiac muscle depolarization followed by repolarization during each cardiac cycle (heartbeat). The 
images below show electrode placement for lead 1 ECG recording, an ECG wave recorded with BioAmp EXG Pill and electrode placement 
for hand ECG/EKG recording respectively.

.. figure:: media/ECG.*
    :align: center
.. figure:: media/bioamp-Exg-Pill-ECG.*
    :align: center
.. figure:: media/EKG.*
    :align: center

Electrooculography (EOG)
*************************

Electrooculography (EOG) is a technique for measuring the corneo-retinal standing potential that exists between the front and 
the back of the human eye. The resulting signal is called EOG. Common electrode placement for vertical & horizontal EOG recording 
is shown in the image below.

.. figure:: media/bioamp-exg-pill-eog-electrode-placement.*
    :align: center

To measure eye movement, pairs of electrodes are typically placed either above and below the eye or to the left and right of 
the eye. If the eye moves from the center position toward one of the two electrodes, this electrode "sees" the positive side of 
the retina, and the opposite electrode "sees" the negative side of the retina. Consequently, a potential difference occurs between 
the electrodes. Assuming the resting potential is constant, the recorded potential is a measure of the eye’s position. The images 
below show electrode placement for vertical EOG recording, an EOG signal recorded with BioAmp EXG Pill and electrode placement for 
vertical EOG respectively.

.. figure:: media/EOG-Horizontal.*
    :align: center
.. figure:: media/bioamp-exg-pill-eog.*
    :align: center
.. figure:: media/EOG-Vertical.*
    :align: center

Electroencephalography (EEG)
*****************************

Electroencephalography (EEG) is an electrophysiological monitoring method to record electrical activity on the scalp. During 
the procedure, electrodes consisting of small metal discs with thin wires are pasted onto your scalp. The electrodes detect tiny 
electrical charges that result from the activity of your brain cells which are then amplified to appear on the computer screen. 
It is typically non-invasive, with the electrodes placed along the scalp. The images below show an EEG wave recorded with BioAmp 
EXG Pill and the electrode placement for the frontal cortex EEG recording respectively.

.. figure:: media/bioamp-exg-pill-eeg.*
    :align: center
.. figure:: media/EEG.*
    :align: center

Glimpses of previous versions
*******************************

The BioAmp EXG Pill can be used in a variety of ways, the YouTube video below shows a potential way of using v0.7 of 
BioAmp EXG Pill.

.. youtube:: -G3z9fvQnuw
    :align: center
    :width: 100%

A lot has improved in terms of interference rejection and flexibility from v0.7 to v1.0 of the BioAmp EXG Pill. The YouTube video 
below shows the ECG, EMG, EOG, and EEG recording using v1.0b of device.

.. youtube:: z9-B9bHWuhg
    :align: center
    :width: 100%

Real-world Applications
************************

BioAmp EXG Pill is perfect for researchers, makers, and hobbyists looking for novel ways to sample biopotential data. It can 
be used for a wide variety of interesting biosensing projects, including:

- AI-assisted detection of congestive heart failure using CNN (ECG)
- Heart-rate variability calculation to detect heart ailments (ECG)
- Prosthetic arm (servo) control (EMG)
- Controlling a 3DOF robotic arm (EMG)
- Real-time game controllers (EOG)
- Blink detection (EOG)
- Capturing photos with a blink of an eye (EOG) and many more examples. 

Some project ideas & tutorials
********************************

You can find step-by-step tutorials for various HCI/BCI projects on our `Instructables <https://www.instructables.com/member/Upside+Down+Labs/>`_.

.. grid:: 1 1 1 1
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::
            
            **1. Record publication-grade ECG at your home**
            ^^^^

            .. youtube:: l1Z8S0pUAvY
                :align: center
                :width: 100%

        .. card::
            
            **2. Detecting heart beats**
            ^^^^

            .. youtube:: uB5R-vGJjJo
                :align: center
                :width: 100%

        .. card::
            
            **3. Measuring heart rate**
            ^^^^

            .. youtube:: PvWtCFNK3_s
                :align: center
                :width: 100%

        .. card::
            
            **4. Recording EEG from visual cortex part of brain**
            ^^^^

            .. youtube:: XENPUkfxLec
                :align: center
                :width: 100%

        .. card::
            
            **5. Visualizing electrical impulses of eyes (EOG)**
            ^^^^

            .. youtube:: Txo7DjUr5Tk
                :align: center
                :width: 100%

        .. card::
            
            **6. Eye blink detection by recording EOG**
            ^^^^

            .. youtube:: PfEJVa3gv6E
                :align: center
                :width: 100%

        .. card::
            
            **7. Drowsiness detector by detecting EOG signals**
            ^^^^

            .. youtube:: h4F41mp4mWk
                :align: center
                :width: 100%

        .. card::
            
            **8. Recording publication-grade muscle signals (EMG)**
            ^^^^

            .. youtube:: yx5EQTKNbvs
                :align: center
                :width: 100%

Software tutorials
********************

.. grid:: 1 1 1 1
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::
            
            **1. Getting started with Backyard Brains' Spike Recorder**
            ^^^^

            .. youtube:: QzZh243-Ac8
                :align: center
                :width: 100%

        .. card::
            
            **2. Getting started with Brainbay**
            ^^^^

            .. youtube:: 8vKYAg9C8Jg
                :align: center
                :width: 100%



