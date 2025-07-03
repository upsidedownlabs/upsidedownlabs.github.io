.. _chords-lsl-connector:

Chords-LSL-Connector
######################

Overview
********

The **Chords-LSL-Connector** bridges your Neuro Playground Lite (running Chords Firmware) to the LSL ecosystem, providing:

- **Real-time data streaming** with low latency.
- **Cross-platform support** (Windows, macOS, Linux).  
- **GUI mode** for flexible workflow.
- **Automatic device discovery** and LSL stream advertisement.  

.. figure:: ./media/chords-lsl-connector-landing-page.*
    :align: center
    :alt: Chords-LSL-Connector Landing Page

    Chords-LSL-Connector

Features
--------

- Streams multi-channel bio-potential signals over LSL.   
- Works with any Chords-compatible firmware build.  
  
What is Lab Streaming Layer (LSL)?
------------------------------------

Lab Streaming Layer (LSL) is an open-source protocol and software framework for real-time streaming of time-synchronized data, especially in neuroscience and biomedical experiments.

LSL is an open-source networked middleware ecosystem to stream, receive, synchronize, and record neural, physiological, and behavioral data streams acquired from diverse sensor hardware.

To know more about LSL `click here <https://labstreaminglayer.org/#/>`_.


System Requirements
*********************

- Operating System: Windows 10+ / macOS 10.15+ / Linux (glibc 2.27+)  


Hardware Requirements
*********************

- :ref:`Neuro PlayGround Lite Board <neuro-play-ground-lite>`.
- USB type-C cable
- Or listed hardware on the `GitHub page <https://github.com/upsidedownlabs/Chords-LSL-Connector>`_.

Setting up the hardware
***********************

Make all the connections according to the hardware you are using, including sensor connections with the development board, body connections with the sensor, and connections from the development board to your laptop.


Installation
******************

1. Download the **installer** from the latest release: `Chords LSL Connector Release <https://github.com/upsidedownlabs/Chords-LSL-Connector/releases>`_

2. Choose the installer for your OS:  
   
   - Fedora → ``.rpm``  
   - Debian/Ubuntu → ``.deb``  
   - macOS → ``.dmg``  
   - Windows → ``.msi``  
   - Or download the **source bundle** to build yourself  

3. Run the installer for **your OS**:

.. dropdown:: **Windows (.msi)** 
  :open: 

  1.  Double-click the downloaded `.msi` file.  
  2.  If you see a SmartScreen warning, click **More Info** → **Run Anyway**.  
  3.  Proceed through the installer wizard: **Next** → select install location → **Install** → **Finish**.


.. dropdown:: **Fedora (.rpm)**  

    1. Open a terminal and run:  
    
    :: 
      
      sudo dnf install chords-lsl-connector-0.3.0-1.x86_64.rpm  
    
    2. Enter your password and confirm the install when prompted.  
    3. After installation, launch **NPG Lite Flasher** from your Applications menu.

.. dropdown:: **Debian/Ubuntu (.deb)**  

  1. Open a terminal and run:  
  
  ::
    
    sudo apt install ./chords-lsl-connector_<version>_amd64.deb
  
  2. If you hit missing dependencies, run:  
  
  ::
    
    sudo apt --fix-broken install  
  
  3. Launch **Chords LSL Connector** from your desktop launcher or via:  
  
  ::
    
    npg-lite-flasher

.. dropdown:: **macOS (.dmg)**  

  1. Double-click the downloaded `chords-lsl-connector.dmg` file.  
  2. When you see the macOS warning:
  3. “chords-lsl-connector.dmg” was downloaded from the Internet.
      
  ``Are you sure you want to open it?``

  ``click **Open**``

  3. Drag **Chords LSL Connector.app** into your **Applications** folder.  
  4. Eject the mounted image and open the app from **Applications**.


4. (Optional) Build from source 
   
.. code-block:: bash
  
  git clone https://github.com/upsidedownlabs/Chords-LSL-Connector.git
  cd Chords-LSL-Connector
  npm i
  cargo tauri build

.. _chords-lsl-connector-flashing-firmware:

Flashing the Firmware
**********************

- To flash the firmware: Visit GitHub Page by clicking ``Get Firmware``, and then downloading firmware according to your developement board.

.. figure:: media/chords-lsl-connector-get-firmware.*
  :width: 600 px
  :alt: Chords LSL Connector Get Firmware Button    

- You can also use NPG Lite Flasher to flash your desired firmware, to know more visit :ref:`NPG Lite Flasher documentation <npg-lite-flasher>`.

Visualization of LSL
************************

Once your device is connected, you can choose from multiple options depending on how 
you plan to use the NPG Lite - including Bluetooth Low Energy (BLE), Serial or Wi-Fi.

.. tab-set:: 

  .. tab-item:: Using Bluetooth LE

    1. Launch the Chords LSL Connector app.
    2. Click the ``Bluetooth LE`` tab.
  
    .. figure:: media/chords-lsl-connector-ble.*
      :width: 600 px
      :alt: Chords LSL Connector BLE Device

    3. If you cannot find the device, flash the BLE firmware from the :ref:`Flashing the Firmware <chords-lsl-connector-flashing-firmware>` steps and power on your board.

    4. Wait for the Available Devices dialog to list your NPG device (e.g. NPG-54:32:04:29:39:b6) and click its link icon.

    .. figure:: media/chords-lsl-connector-ble-device-scan.*
      :width: 400 px
      :alt: Chords LSL Connector BLE Device Scan

    .. figure:: media/chords-lsl-connector-ble-device-connect.*
      :width: 400 px
      :alt: Chords LSL Connector BLE Device Connect

    5. Observe the ``Connection Statistics`` panel showing sampling rate and total samples.
  
    .. figure:: media/chords-lsl-connector-ble-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector BLE Device Visualise

    6. Use the built-in buttons
    
    - `Brain Vision LSL Viewer <https://www.brainproducts.com/downloads/more-software/>`_
    - `Open EEG GUI <https://open-ephys.org/gui>`_
    - `LabRecorder <https://github.com/labstreaminglayer/App-LabRecorder>`_
    
    to visualize or record your live LSL stream.

    .. figure:: media/chords-lsl-connector-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Visualise Tab


  .. tab-item:: Using Serial

    1. Launch the Chords LSL Connector app.
    2. Click the ``Serial`` tab.
  
    .. figure:: media/chords-lsl-connector-serial.*
      :width: 600 px
      :alt: Chords LSL Connector Serial Device

    3. If you cannot find the device, flash the Serial firmware from the :ref:`Flashing the Firmware <chords-lsl-connector-flashing-firmware>` steps and power on your board.

    4. Wait for the Available Devices dialog to list your NPG device, if using multiple devices then click its link icon, for single connected device it will be detected and connected automatically.

    .. figure:: media/chords-lsl-connector-serial-connect.*
      :width: 400 px
      :alt: Chords LSL Connector Serial Device Connect

    5. Observe the ``Connection Statistics`` panel showing sampling rate and total samples.
  
    .. figure:: media/chords-lsl-connector-serial-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Serial Device Visualise

    6. Use the built-in buttons
    
    - `Brain Vision LSL Viewer <https://www.brainproducts.com/downloads/more-software/>`_
    - `Open EEG GUI <https://open-ephys.org/gui>`_
    - `LabRecorder <https://github.com/labstreaminglayer/App-LabRecorder>`_
    
    to visualize or record your live LSL stream.

    .. figure:: media/chords-lsl-connector-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Visualise Tab
  
  .. tab-item:: Using WiFi

    1. Launch the Chords LSL Connector app.
    2. Open your computer’s Wi-Fi settings, select the NPG Lite device (e.g. npg-lite-2) network from the list, and click Connect - you’ll see “Connecting” followed by “Connected” once the link is established.
   
    .. figure:: media/chords-lsl-connector-wifi-connect.*
      :width: 300 px
      :alt: Chords LSL Connector WiFi Connect

    3. If you cannot find the device, flash the WiFi firmware from the :ref:`Flashing the Firmware <chords-lsl-connector-flashing-firmware>` steps and power on your board.

    4. Now, Click the ``WiFi`` tab.
  
    .. figure:: media/chords-lsl-connector-wifi.*
      :width: 600 px
      :alt: Chords LSL Connector WiFi Device

    5. Observe the ``Connection Statistics`` panel showing sampling rate and total samples.
  
    .. figure:: media/chords-lsl-connector-wifi-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector WiFi Device Visualise

    6. Use the built-in buttons
    
    - `Brain Vision LSL Viewer <https://www.brainproducts.com/downloads/more-software/>`_
    - `Open EEG GUI <https://open-ephys.org/gui>`_
    - `LabRecorder <https://github.com/labstreaminglayer/App-LabRecorder>`_
    
    to visualize or record your live LSL stream.

    .. figure:: media/chords-lsl-connector-visualise.*
      :width: 600 px
      :alt: Chords LSL Connector Visualise Tab


GitHub Repository
*******************

For full source code, issue tracking, and contribution guidelines, head over to the Chords-LSL-Connector GitHub repo.

You’ll discover setup guides and can track ongoing development - including bug fixes and feature enhancements: `Chords LSL GitHub <https://github.com/upsidedownlabs/Chords-LSL-Connector>`_