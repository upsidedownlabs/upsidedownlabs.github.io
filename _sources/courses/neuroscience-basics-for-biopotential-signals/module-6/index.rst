.. _neuroscience-basics-for-biopotential-signals-module-6:

Module 6: Biopotential signals 
#############################################

Biopotentials are the electrical signals produced inside the body. They come from excitable cells found in the nervous system,
muscles, and glands. When one of these cells gets stimulated, it triggers either an action potential or a graded potential. 
These electrical potentials are the basic building blocks of all biopotentials in the body. [1]_ 

**Upside Down Labs** has engineered multiple open-source :ref:`BioAmp Hardware <upsidedownlabs_hardware_home>` and :ref:`BioAmp Software <upsidedownlabs_software_home>` to measure and 
visualize the body's biopotential signals. These signals include:

- **Electrocardiogram (ECG)**: Measures the electrical activity of the heart.
- **Electromyogram (EMG)**: Records the electrical activity produced by skeletal muscles.
- **Electrooculogram (EOG)**: Measures the electrical potential of the eyes.
- **Electroencephalogram (EEG)**: Captures the electrical activity of the brain.

BioAmp devices serve as a catalyst for the development of innovative **Human-Computer Interface (HCI)** and **Brain-Computer 
Interface (BCI) projects**, enabling people to explore the field of neuroscience.

6.1 How to measure biopotential signals
*************************************************

- Step 1: Prepare Skin - reduces skin impedance
- Step 2: Place Electrodes - ensures correct signal location
- Step 3: Connect Hardware - establishes electrical interface between electrodes and acquisition system
- Step 4: Amplify & Filter - boosts weak signals and removes noise/interference
- Step 5: Record & Visualize - captures signals for real-time monitoring and analysis
- Step 6: Analyze - interprets data to extract meaningful physiological information

6.2 Skin Preparation Guide 
*************************************

6.2.1 Why is skin preparation important?
==============================================

Proper skin preparation is crucial before recording any biopotential signal be it Electrocardiography (ECG), Electromyography (EMG), Electroencephalography (EEG), or Electrooculography (EOG).

- **Clean skin surface**: Removes dead skin cells, oils, & other substances that increase skin impedance.
- **Improve impedance**: Improves the conduction of electrical signals from the body to the recording equipment and minimizes impedance.
- **Electrode-skin contact**: Ensures optimal contact between the electrodes and the skin surface.
- **Signal quality**: Enhances the overall quality of recorded signals, providing clear & reliable data for analysis & improves the ability to capture subtle variations in biopotential signals.
- **Consistency in recordings**: Reduces variability in signal quality, making it easier to make any Human-Computer Interface (HCI), Brain-Computer Interface (BCI) project or a real-world application.
- **Long term adhesion**: Facilitates long-term adhesion & stable placement of electrodes to the skin during extended signal monitoring. 

6.2.2 Steps to follow
============================

You can follow the steps given below to do the skin preparation properly :

Step 1: Identify the targeted area
--------------------------------------------------
Identify the target area where the gel electrodes or BioAmp Bands will be placed for recording the biopotential signals.

Electrooculography (EOG)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-eog.*
    :align: center
    :alt: Target area to record EOG 

    Target area to record EOG

Electromyography (EMG)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-emg.*
    :align: center
    :alt: Target area to record EMG

    Target area to record EMG


Electrocardiography (ECG)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-ecg.*
    :align: center
    :alt: Target area to record ECG

    Target area to record ECG


Electroencephalography (EEG)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-eeg.*
    :align: center
    :alt: Target area to record EEG

    Target area to record EEG

Step 2: Apply NuPrep gel
------------------------------
Take a small amount of NuPrep gel using a cotton swab and apply it on your targeted area.


.. figure:: ../../../guides/usage-guides/skin-preparation/media/step-2.*
    :align: center
    :alt: Applying NuPrep Gel

    Applying NuPrep Gel


Step 3: Clean the skin surface
----------------------------------
Use gentle, circular motions to rub the gel on the skin surface. This removes all the dead skin cells & improves conductivity.

.. figure:: ../../../guides/usage-guides/skin-preparation/media/step-3.*
    :align: center
    :alt: Rubbing the gel

    Rub the gel gently using the cotton swab

.. admonition:: Warning 

    Do not rub the gel for too long as it has abrasive properties and may cause skin redness and 
    irritation.

Step 4: Wipe off the gel
--------------------------------
Wipe away excess gel with alcohol swabs or wet wipes.

.. figure:: ../../../guides/usage-guides/skin-preparation/media/step-4.*
    :align: center
    :alt: Wipe away excess gel

    Wipe away excess gel

.. admonition:: Warning 

    - Using alcohol swabs can dry out the skin, so do not use them if your skin is already dry.
    - Close your eyes while using the alcohol swabs for EOG recording else it may cause eye redness & irritation.

Step 5: Measuring the signals
-----------------------------------
Now you can either use gel electrodes or BioAmp bands for the signal recording.

**Using gel electrodes**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Connect the BioAmp cable to gel electrodes, peel the plastic backing from electrodes and place the IN+, IN-, REF cables
according to your specific biopotential recording.

.. figure:: ../../../guides/usage-guides/skin-preparation/media/step-5a.*
    :align: center
    :alt: Placing gel electrodes on skin surface

    Placing gel electrodes on skin surface

.. admonition:: NOTE

    While placing the gel electrodes on the skin, make sure to place the non-sticky tab of the electrode in the direction
    opposite to your hair growth. This allows you to remove the electrodes easily without pulling off much body hair.

- **For detailed info about using gel electrodes, please refer :** :ref:`Using Gel Electrodes <using-gel-electrodes>`

**Using BioAmp bands**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Connect the BioAmp cable to your BioAmp band. Now apply a small amount of electrode gel or Ten20 conductive paste on the dry 
electrodes between the skin and metallic part of BioAmp cable. This improves the signal conductivity, enhancing overall signal
quality.

.. figure:: ../../../guides/usage-guides/skin-preparation/media/step-5b.*
    :align: center
    :alt: Using Electrode gel

    Method 1: Using Electrode gel

.. figure:: ../../../guides/usage-guides/skin-preparation/media/step-5c.*
    :align: center
    :alt: Using Ten20 paste

    Method 2: Using Ten20 paste

- **For detailed info about using BioAmp bands, please refer :** :ref:`Using BioAmp Bands <using-bioamp-bands>`

6.3 Basic electrode configuration
********************************************



6.3.1 What do IN+, IN-, and REF mean?
=======================================

.. note:: IN+ & IN- are two inputs of a special amplifier used by most biological recording systems, it's called an **instrumentation amplifier**. An **instrumentation amplifier** (In-Amp) for biomedical devices is a high-gain, amplifier designed to 
    extract a weak biological signal (the instrumentation voltage) while rejecting high levels of unwanted noise (the common-mode voltage).

IN+ (Non-inverting input)
-----------------------------

- Positive input of the instrumentation amplifier
- Placed directly on or very close to the tissue that generates the signal (muscle, heart, forehead, eye, etc.)
- If the voltage here increases, the amplifier output increases.

IN- (Inverting input) 
-------------------------

- Negative input of the instrumentation amplifier
- Placed 2-10 cm away from IN+ (same muscle, same general area) OR on the opposite side (e.g., for EOG/ECG)
- If the voltage here increases, the amplifier output decreases (it is inverted).

REF (Mid-supply or DRL)
----------------------------------------

- Placed at a neutral, electrically silent site.
- Placed on bony area far from the signal source (elbow, wrist bone, ankle)
- Removes common noise like 50/60 Hz noise that appears on both IN+ and IN- .

.. tip:: For better signal acquisition guide, refer: :ref:`Tips for best signal acquisition<tips-for-best-signal-acquisition>`

.. note:: For some system REF can mean common negative or ground electrode, for BioAmp we use REF to denote mid-supply electrode which is same as BIAS on other systems.

6.4 Summary 
********************

In this module, we learned about biopotential signals. This module explained the steps of measuring biopotentials, including 
skin preparation and electrode placement. We also studied how instrumentation amplifier recording works using IN+, IN-, and REF to get 
clean, noise-free signals. In the next module you are going to learn how to record EMG signals at home by using our budget 
friendly BioAmp hardwares and open source softwares. 

.. warning:: **These recordings are for educational use only - not for medical diagnosis.**


6.5 References
***************

.. [1] `Chapter 10: Biopotential Signals. <https://alanmacy.com/books/the-handbook-of-human-physiological-recording/chapter-10-biopotential-signals/>`_



