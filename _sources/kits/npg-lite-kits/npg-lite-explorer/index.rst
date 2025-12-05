.. _npg-lite-explorer:

NPG Lite - Explorer Pack
#####################################

The Explorer Pack is the entry-level kit designed to get you started with the NPG Lite ecosystem.  
It provides everything you need for biosignal acquisition and experimentation, including the Proto Playmate for custom prototyping.  
Whether you are a beginner, educator, or enthusiast, this pack allows you to quickly set up and begin exploring EEG, EMG, ECG, and more.  

👉🏻 **Get yours on CrowdSupply**: `Neuro PlayGround Lite <https://www.crowdsupply.com/upside-down-labs/neuro-playground-lite>`__

.. figure:: ./media/npg-lite-explorer-box.*
    :align: center
    :alt: Neuro PlayGround Lite Explorer Pack
    
    Neuro PlayGround Lite Explorer Pack

Contents of the kit
********************

.. figure:: ./media/npg-lite-explorer-pack.*
    :align: center
    :alt: Kit Content Explorer Pack
    
    Kit Contents of NPG Lite Explorer Pack

+------------------------------------------+-----+
| Kit Contents                             | Qty |
+==========================================+=====+
| NPG Lite Board                           | 1   |
+------------------------------------------+-----+
| Proto Playmate                           | 1   |
+------------------------------------------+-----+
| Snap Cables                              | 7   |
+------------------------------------------+-----+
| Alligator Cables                         | 5   |
+------------------------------------------+-----+
| Gel Electrodes                           | 12  |
+------------------------------------------+-----+
| Battery Connector (Battery not included) | 1   |
+------------------------------------------+-----+

Proto Playmate
***************

Proto Playmate offers a flexible prototyping space with a dedicated area for adding your 
own components or circuits. It includes a QWIIC port for quick sensor integration, 
2.54 mm electrode header pins, an ON/OFF slide switch, and a connector interface for electrodes. 
By combining electrodes with custom electronics, users can rapidly prototype biosignal-driven experiments, 
build add-on circuits, or test new designs without needing a separate breadboard.

Using the Kit
********************

This kit makes custom neuroscience projects accessible, enabling beginners to quickly start recording biopotential signals and flexibly integrate their own circuits for compelling HCI/BCI applications. 
The Proto Playmate easily connects to the NPG Lite board, providing a flexible prototyping space for adding custom components, circuits, or testing new designs without complex wiring or needing a separate breadboard.

Step 1: Skin Preparation
=========================

Apply Nuprep skin preparation Gel on the target areas where the
Electrodes will be placed → Rub in circular motion → Clean with an alcohol swab or wet wipe.

For more information, please check out detailed step by step :ref:`Skin Preparation Guide <skin-preparation>`.

Step 2: Connect BioAmp Cables
===============================

Using Proto you can record 3-channel biopotential signals, connect the jumper
wires according to the number of channels required:

.. figure:: ./media/npg-lite-proto-back.*
    :align: center
    :width: 70%
    :alt: NPG Lite Proto Playmate Back
    
    NPG Lite Proto Playmate Back

.. figure:: ./media/npg-lite-proto-connection.*
    :align: center
    :alt: NPG Lite Proto Playmate Connection
    
    NPG Lite Proto Playmate Connection

+---------------+---------+------------------------+
| Channel       | Pin     | Channel Connection     |
+===============+=========+========================+
| **Channel 0** | **A0P** | +ve of Channel 0       |
+---------------+---------+------------------------+
|               | **A0N** | -ve of Channel 0       |
+---------------+---------+------------------------+
| **Channel 1** | **A1P** | +ve of Channel 1       |
+---------------+---------+------------------------+
|               | **A1N** | -ve of Channel 1       |
+---------------+---------+------------------------+
| **Channel 2** | **A2P** | +ve of Channel 2       |
+---------------+---------+------------------------+
|               | **A2N** | -ve of Channel 2       |
+---------------+---------+------------------------+
|               | **REF** | Reference cable to REF |
+---------------+---------+------------------------+
|               | **CN**  | Common Negative        |
+---------------+---------+------------------------+

Using the Common Negative (CN)
---------------------------------

The Common Negative (CN) is an essential feature, especially when performing multi-channel
recordings like EEG, as it simplifies electrode placement and wiring.

To configure a channel to use the Common Negative, follow these steps:

1. **Choose Your Channels**: Decide which BioAmp channels (A0, A1, A2) you want to share a negative electrode.
2. **Solder the Bridge**: Look for the small solder bridge labeled 'CN' next to the channel's negative pin (A0N, A1N, A2N).
3. **Make it Common:** You must solder this bridge closed. This physically connects that channel's negative input to the main Common Negative line.
4. **Connect the Shared Electrode:** Connect your single, common negative electrode jumper cable to the dedicated CN pin.
5. **Simplify Wiring:** For any channel configured this way, you no longer need to connect an electrode to the corresponding negative input pin (e.g., A0N, A1N, or A2N).

.. figure:: media/npg-lite-proto-cn.*
    :align: center
    :alt: NPG Lite Proto Playmate Common Negative

    NPG Lite Proto Playmate Common Negative 

Step 3: Place Gel Electrodes
===============================

EMG (Electromyography)
-------------------------

- **1-CH Setup**: Place +ve and -ve cables of Channel 0 on the targeted muscle and REF cable on a bony part (back of the palm or elbow).

- **2-CH Setup**: Place +ve, -ve cables of Channel 0 & 1 on the targeted muscles and 1 REF cable on a bony part.

- **3-CH Setup**:  Place +ve, -ve cables of Channel 0, 1 and 2 on the targeted muscles and 1 REF cable on a bony part.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EMG.*
    :align: center
    :alt: Connection for EMG
    
    Connection for EMG

ECG (Electrocardiogram)
-------------------------

- **1-CH Setup**: Place -ve cable of Channel 0 on the left side of the chest, +ve cable just to its right, and REF cable on the right side of chest.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-ECG.*
    :align: center
    :alt: Connection for ECG
    
    Connection for ECG

EOG (Electroculography)
-------------------------

**Horizontal Movement Recording**

- **1-CH Setup**: Place -ve cable of Channel 0 on the right side of your right eye, +ve cable on the left side of the left eye, and REF cable on the bony part at the back side of your earlobe.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EOG-Horizontal.*
    :align: center
    :alt: Connection for EOG Horizontal
    
    Connection for EOG Horizontal

**Vertical Movement Recording**

- **1-CH Setup**: Place the -ve cable of Channel 0 above either of your eyes, the +ve electrode below same eye, and the REF cable on the bony area behind your earlobe.

- **2-CH Setup**:  To record both horizontal & vertical eye movement together, follow the electrode placements mentioned above for Channels 0 and 1. Make sure to use just 1 REF cable.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EOG-Vertical.*
    :align: center
    :alt: Connection for EOG Vertical
    
    Connection for EOG Vertical

EEG (Electroencephalogram)
----------------------------

- **1-CH Setup**: Place +ve cable of Channel 0 on the targeted area, REF and -ve cable on the bony part at the back of each earlobe. (refer to the `International 10-20 system for recording EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_)

- **2-CH Setup**: Place +ve cables of Channel 0 and 1 on the targeted area (refer to the `International 10-20 system for recording EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_), 1 REF and 1 CN (Common Negative) cable on the bony parts at the back of each earlobe. Make sure the common negative solder joint is done for the respective channels accordingly, as per the information provided above.

- **3-CH Setup**:  Place +ve cables of Channel 0, 1, and 2 on the targeted area (refer to the `International 10-20 system for recording EEG <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_), 1 REF, and 1 CN (Common Negative) cable on the bony part at the back of each earlobe. Make sure the common negative solder joint is done for the respective channels accordingly, as per the information provided above.

.. figure:: ../../../hardware/bioamp/neuro-play-ground-lite/media/npg-lite-EEG.*
    :align: center
    :alt: Connection for EEG
    
    Connection for EEG

Step 4: Upload Firmware
========================

Follow the quick steps below to upload the firmware to your NPG Lite device:

For detailed firmware upload guide, visit: :ref:`How to Flash Firmware on NPG Lite<npg-lite-flasher>`

- Power ON NPG Lite by flipping the on/off switch.
- Connect it to Laptop/PC via USB-C cable.
- Download the :ref:`NPG Lite Flasher<npg-lite-flasher>` and run the app.
- Select a firmware type, select your port, and flash it on your NPG Lite.
- For a WiFi or BLE connection, remove the USB-C cable and enable Bluetooth or Wi-Fi on your laptop based on Firmware uploaded.

Step 5: Visualizing the signals
================================

Follow the steps below to view real-time biopotential signal data from your NPG Lite device:

- Go to `Chords Web <https://chords.upsidedownlabs.tech/>`_
- Click on ``Visualize Now``, navigate to the ``NPG-Lite``, hit the ``Connect`` button and choose your device. 
- You can see the biopotential signals in real-time. 

For the detailed guide, visit: :ref:`Chords Web Documentation<chords>`

Explore features like play/pause data stream, apply filters,
increase channel count, enable features for recording and
downloading data in CSV format.

Battery Connection Guide
*************************

.. important::
    
    The battery connectors are polarity-sensitive and requires correct connection for safe operation. Incorrect connections will damage the device. Always verify connector polarity before connecting.

Option 1: Battery with 1.25mm PicoBlade Connector
==================================================

If you have purchased your battery from Upside Down Labs, or if have the same ``1.25 mm PicoBlade connector``, you can plug it directly into the battery connector on the NPG Lite.

While connecting the battery:

- Make sure the :bdg-danger:`Red Wire` is connected to the ``Positive (+) terminal``.
- Make sure the :bdg-black:`Black Wire` is connected to the ``Negative (−) terminal``.

This ensures the battery is connected with the correct polarity and prevents damage to the device.

.. figure:: ../../npg-lite-kits/media/npg-battery-guide-picoblade-connector.*
    :align: center
    :width: 60%
    :alt: Using Battery with 1.25mm PicoBlade Connector
    
    Using Battery with 1.25mm PicoBlade Connector

Option 2: Using a Battery with a JST-PH 2.0 mm Connector
=========================================================

If your battery has a ``JST-PH 2.0 mm`` connector, you will need to use the adapter cable included in the NPG Lite kit to connect it.

Follow these steps:

1. Connect the battery to the adapter cable with JST connector: Match the wire colors - ``Red to Red`` and ``Black to Black``.
2. Connect the adapter cable to NPG Lite using the PicoBlade connector:

- Make sure the :bdg-danger:`Red Wire` lines up with the ``Positive (+) terminal``.
- Make sure the :bdg-black:`Black Wire` lines up with the ``Negative (−) terminal`` on the NPG Lite connector.

This ensures the battery is connected with the correct polarity and prevents damage to the device.

.. figure:: ../../npg-lite-kits/media/npg-battery-guide-jst-connector.*
    :align: center
    :width: 60%
    :alt: Using Battery with JST-PH 2.0mm Connector
    
    Using Battery with JST-PH 2.0mm Connector

Verifying Battery Polarity with a Multimeter
=============================================

If you are unsure about your battery's polarity, verify it before connection:

- Set your multimeter to measure DC Voltage (V⎓) and select 20V or higher range if it has manual dial.

- Touch the :bdg-danger:`red probe` to the metal terminal of the connector where the :bdg-danger:`red wire` is attached.

- Touch the :bdg-black:`black probe` to the metal terminal where the :bdg-black:`black wire` is attached.

Read the display:

- Positive voltage (e.g., +3.6V to +4.2V): Polarity is correct. ✅
- Negative voltage (e.g., -4.2V): Polarity is reversed. ❌

.. danger:: 
    
    **Safety Reminder:** Double-check all connections before powering ON the device. Wrong battery connection will damage the device.
