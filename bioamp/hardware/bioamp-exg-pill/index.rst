.. _bioamp-exg-pill:

BioAmp EXG Pill
##################

Professional-grade analog front-end amplification for ECG, EMG, EOG, and EEG biosensing on one tiny board.

Overview
*********

BioAmp EXG Pill is a small, powerful analog-front-end (AFE) biopotential signal-acquisition board that can be paired 
with any microcontroller unit (MCU) or single-board computer (SBC) with an analog-to-digital converter (ADC) such as 
Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, and Raspberry Pi Pico, to name 
just a few. It also works with any dedicated ADC, like the Texas Instruments ADS1115 and ADS131M0x, among others.

.. figure:: media/BioAmp-EXG-Pill-Front.*
    :width: 500
    :align: center

BioAmp EXG Pill is capable of recording publication-quality biopotential signals like ECG, EMG, EOG, and EEG, without 
the inclusion of any dedicated hardware or software filters. Its small size allows easy integration into mobile and 
space-constrained projects, and its powerful noise rejection makes it usable even when the device is close to the AC 
mains supply. Any 1.5 mm diameter wire can be used as a strain-relieving electrode cable, making it very cost-effective 
in comparison to the other available.

.. figure:: media/Basic-Circuit.*
.. figure:: media/EXG_Recording.*

Features & Specifications
**************************

+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage               | 4.5-40 V                                                                                                                                                         |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance                     | 10^12 Ω                                                                                                                                                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Compatible Hardware                 | Any development board with an ADC (Arduino UNO & Nano, Espressif ESP32, Adafruit QtPy, STM32 Blue Pill, BeagleBone Black, Raspberry Pi Pico, to name just a few) |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials                       | EMG, ECG, EOG, EEG (configurable band-pass)                                                                                                                      |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels                     | 1                                                                                                                                                                |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes                          | 2 or 3 (configurable)                                                                                                                                            |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions                          | 25.4 x 10 mm                                                                                                                                                     |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Designed for use with carrier board | Yes                                                                                                                                                              |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source                         | Hardware + Software                                                                                                                                              |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Board layout
*************

Images below shows a quick overview of the BioAmp EXG Pill hardware design.

.. figure:: media/PCB_Front.*
    :width: 300
    :align: left
    :alt: PCB Front

.. figure:: media/PCB_Back.*
    :width: 300
    :align: right
    :alt: PCB Back

.. figure:: media/Front_Specifications.*
    :align: center

.. figure:: media/Back_Specifications.*
    :align: center

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

.. youtube:: G3z9fvQnuw
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
- Quantitative analysis of physical therapy for palsy (EMG)
- Real-time game controllers (EOG)
- Blink detection (EOG)
- Capturing photos with a blink of an eye (EOG)
- Controlling LEDs via brain waves (EEG)
- Patient monitoring
and many more examples. 

Some project ideas
*******************

.. grid:: 1 1 1 1
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::
            
            **1. Record Publication Grade ECG at Your Home Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: l1Z8S0pUAvY
                :align: center
                :width: 100%

        .. card::
            
            **2. Detecting Heart Beats Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: uB5R-vGJjJo
                :align: center
                :width: 100%

        .. card::
            
            **3. Measuring Heart Rate Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: PvWtCFNK3_s
                :align: center
                :width: 100%

        .. card::
            
            **4. Recording EEG From Pre Frontal Cortex of Brain Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: QzZh243-Ac8
                :align: center
                :width: 100%

        .. card::
            
            **5. Visualizing Electrical Impulses of Eyes (EOG) Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: Txo7DjUr5Tk
                :align: center
                :width: 100%

        .. card::
            
            **6. Eye Blink Detection by Recording EOG Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: 4dnCX3U7LS8
                :align: center
                :width: 100%

        .. card::
            
            **7. Drowsiness Detector by Detecting EOG Signals Using BioAmp EXG Pill**
            ^^^^

            .. youtube:: h4F41mp4mWk
                :align: center
                :width: 100%
