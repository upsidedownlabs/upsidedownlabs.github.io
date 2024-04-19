.. _bioamp-v1.5:

BioAmp v1.5
############

:bdg-danger:`2023 Edition`

Overview
*********

It is a small size portable biopotential amplifier with a no code setup to record and listen to your muscle signals (EMG) non 
invasively. The best part is that it doesn’t require any microcontroller (like Arduino) to sample the signal. You just plug a 9V 
battery into the board, electrodes to the body, and an audio jack to a mobile/laptop, and you are ready to record signals from
muscles (EMG) using softwares like audacity or Backyard Brain’s spike recorder app.

.. figure:: media/bioamp-v1.5.*
    :width: 800
    :align: center


Features & Specifications
***************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 7-9 V                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | 10^7 ohm                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | ~200x                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 5.0 x 3.0 cm                                                                                                                                                     |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Hardware
**********
Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::
        
            .. card::

                **PCB Front**
                ^^^^^
                .. figure:: media/front-pcb.*

    .. grid-item::
        
            .. card::

                **PCB Back**
                ^^^^^
                .. figure:: media/back-pcb.*            


.. figure:: media/Assembly/16.*
    :align: center
    :width: 70%

    Assembled BioAmp v1.5

Contents of the kit
********************

.. image:: media/kit-contents.*

Software requirements
**********************

Before you start using the kit, download Backyard Brains' `Spike Recorder <https://backyardbrains.com/products/spikerecorder>`_ or `Audacity <https://www.audacityteam.org/download/>`_ according to the operating system you are using (Windows, OSX, Linux).

.. figure:: ../../../kits/diy-neuroscience/basic/media/byb.*

    **Backyard Brains Spike Recorder**

.. figure:: media/audacity.*

    **Audacity (An easy-to-use, multi-track audio editor and recorder)**

Assembling the kit
********************

You can get your own BioAmp v1.5 bag of parts from our `online stores <https://linktr.ee/Upside_Down_Labs_stores>`_ (shipping worldwide) and for assembling the board you can take a look at the step by step guide given below.

**Note:** Follow the highlighted yellow shapes to assemble your BioAmp v1.5!

.. grid:: 1 1 3 3
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::
        
        .. figure:: media/Assembly/1.*

            **Step 1 - Bare Board**

    .. grid-item::

        .. figure:: media/Assembly/2-100K-resistor.*
            
            **Step 2 - 100K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/3-2.2K-resistor.*

            **Step 3 - 2.2K Resistor** 

    .. grid-item::

        .. figure:: media/Assembly/4-1K-resistor.*

            **Step 4 - 1K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/5-220K-resistor.*

            **Step 5 - 220K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/6-10K-resistor.*

            **Step 6 - 10K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/7-100nF-capacitor.*

            **Step 7 - 100nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/8-1nF-capacitor.*

            **Step 8 - 1nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/9-connectors.*

            **Step 9 - JST PH Connectors** 

    .. grid-item::

        .. figure:: media/Assembly/10-socket.*

            **Step 10 - IC Socket** 

    .. grid-item::

        .. figure:: media/Assembly/11-IC.*

            **Step 11 - IC** 

    .. grid-item::

        .. figure:: media/Assembly/12-LED.*

            **Step 12 - Power LED** 

    .. grid-item::

        .. figure:: media/Assembly/13-47uF-capacitor.*

            **Step 13 - 47uF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/14-switch.*

            **Step 14 - Switch** 

    .. grid-item::

        .. figure:: media/Assembly/15-headphone-jack.*

            **Step 15 - Headphone jack** 


Using the kit
*****************

.. image:: media/bioamp-v1-5-connections.*

The image above shows the possibilities of using BioAmp v1.5. Seems complicated? Don't worry, we'll explain each and every step in detail. So follow along to create your own setup.

Step 1: Connecting the cables
==================================

.. image:: media/board-with-cables.*

Connect the BioAmp cable, 9V snap cable and BioAmp AUX cable to BioAmp v1.5 by inserting the cable ends in the respective JST PH connectors as shown above.

Step 2: Skin Preparation
==========================

Apply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe.

For more information, please check out detailed step by step :ref:`skin-preparation`.

Step 3: Electrode placements
===========================================

We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based Muscle BioAmp Band. You can try both of them one by one.

- **Using gel electrodes:**

1. Connect the BioAmp cable to gel electrodes.
2. Peel the plastic backing from the electrodes.
3. Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand as shown in the connection diagram.

.. image:: media/bioamp-v1-5-emg.*

- **Using Muscle BioAmp Band:**

1. Connect the BioAmp cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band.
2. Now put a small drop of electrode gel between the skin and metallic part of BioAmp cable to get the best results.

.. note:: These BioAmp Cable connections to gel electrodes/band are specifically for this version of BioAmp v1.5 only. The connections for other BioAmp hardware can be different.

.. tip:: In this demonstration we are recording EMG signals from the ulnar nerve, but you can record EMG from other areas as well (biceps, triceps, legs, jaw etc) as per your project requirements. Just make sure to place the IN+, IN- electrodes on the targeted muscle and REF on a bony part.

Step 4: Connecting 9V battery
===============================

Connect any 9V battery to BioAmp v1.5 using the 9V snap cable. Now activate the board by flipping ON the power switch, and you'll notice an LED light up, showing that the board is ready to use.

.. image:: media/9v-battery.*

Step 5: Listen to Your Muscle Signals
======================================

You can either listen to the muscle signals (EMG) on a speaker or wired earphones/headphones. Let's try both of them.

Listening EMG on speakers
-----------------------------

1. Connect the BioAmp AUX cable on a bluetooth speaker that have 3.5mm jack support.
2. Switch on the speaker and turn the volume to maximum.
3. Flex and listen to your muscles.

.. image:: media/listening-emg-2.*

Listening EMG on a wired earphones/headphones
----------------------------------------------

1. Plug your wired earphones or headphones on the 3.5mm jack of BioAmp v1.5.
2. Plug it in your ears.
3. Flex and listen to your muscles.

.. image:: media/listening-emg-3.*

Step 6: Visualize the EMG signals on mobile phone
===================================================

Connect the BioAmp AUX cable to your mobile phone/tablet that has 3.5mm jack support.

Now there are various options to visualize the EMG signals:

Using Phone Recorder
--------------------------

1. Open any audio recorder app on your mobile tablet.
2. Flex your muscle to be able to record the muscle signals.
3. If you want to extract that data then it will be saved by default as a .wav file but you can convert it in any other format according to your project requirements.

.. image:: media/emg-in-mobile-2.*

Using Backyard Brains' Spike Recorder
--------------------------------------

1. Download the `Spike Recorder App <https://play.google.com/store/apps/details?id=com.backyardbrains&pli=1>`_ from playstore.
2. Open the app, click the setting icon on the top right corner and set the low band pass filter to 72Hz and high band pass filter to 720Hz.
3. Apply the 50Hz or 60Hz notch filter depending on the country you are living in. For example if you are in India then the AC current oscillates at a frequency of 50Hz but it oscillates at 60Hz frequency in USA. This AC current acts as a noise in the signals so we have to remove it by applying this notch filter.
4. Again click on the setting icon to close it and you are ready.
5. Flex your muscles to be able to visualize the muscle signals (EMG).
6. You can record the EMG data as a .wav file by pressing the record button on the top right corner of the app and then convert it in any other format as per your project requirements.

.. image:: media/emg-in-mobile.*

Step 7: Visualize the EMG signals on laptop
============================================

Connect the BioAmp AUX cable to your laptop that has 3.5mm jack support.

Now there are various options to visualize the EMG signals:

Using Backyard Brains' Spike Recorder
--------------------------------------------

1. Install the spike recorder software that you downloaded earlier.
2. Open the software, click the setting icon on the top right corner and set the low band pass filter to 72Hz and high band pass filter to 720Hz.
3. Apply the 50Hz or 60Hz notch filter depending on the country you are living in. For example if you are in India then the AC current oscillates at a frequency of 50Hz but it oscillates at 60Hz frequency in USA. This AC current acts as a noise in the signals so we have to remove it by applying this notch filter.
4. Again click on the setting icon to close it and you are ready.
5. Flex your muscles to be able to visualize the muscle signals (EMG)
6. You can record the EMG data as a .wav file by pressing the record button on the top right corner of the app and then convert it in any other format as per your project requirements.

.. image:: media/emg-in-laptop.*

Using Audacity
----------------

1. Install the audacity software that you downloaded earlier.
2. Open the software and set the recording device to microphone.
3. Flex your muscles to be able to visualize the muscle signals (EMG)
4. By default the EMG data would be recorded as a .wav file but you can convert it in any other format as per your project requirements.

.. image:: media/emg-in-audacity.*


