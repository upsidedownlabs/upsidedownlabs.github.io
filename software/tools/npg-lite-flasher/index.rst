.. _npg-lite-flasher:

NPG Lite Flasher
##################

.. youtube:: 2rH9ivyHv-s

Overview
********

NPG Lite Flasher is an open-source desktop application that allows you to flash firmware onto the Neuro PlayGround Lite, as well as any other ESP32-based board using a binary file.
A polished GUI (and CLI) to upload new firmware bundles to your NPG Lite device (or any ESP32 board).  

- **🖥️ Sleek New UI**  

  - Redesigned interface for clarity  
  - Built-in steps to fetch firmware from GitHub  
  - Custom firmware upload support  
  
- **🔄 One-Click Integration**  

  - Launch :ref:`Chords-Web<chords>` or :ref:`Chords-Python<chords-pythons>` directly for real-time visualization  
  
- **🧠 Smarter Firmware Management**  

  - Auto-detects duplicate firmware names  
  - Shows live download status with green checkmarks  
  - Auto-fills firmware names from file metadata 
   
- **⚡ Enhanced Flashing Workflow**  
  
  - “Add & Flash” now supports custom uploads in one smooth step  


.. figure:: media/npg-lite-flasher-launch-page.*
    :align: center
    :alt: NPG Lite Flasher

    NPG Lite Flasher

System Requirements
*********************

- Operating System: Windows 10+ / macOS 10.15+ / Linux (glibc 2.27+)  


Hardware Requirements
*********************

- :ref:`Neuro PlayGround Lite Board <neuro-play-ground-lite>`  or any ESP32 board.
- USB type-C cable

Setting up the hardware
***********************

Ensure the NPG Lite or ESP32 based development board is properly connected to your laptop via USB or the appropriate interface.

Installation
******************

1. Download the **installer** from the latest release: `NPG Lite Flasher Release <https://github.com/upsidedownlabs/NPG-Lite-Flasher/releases/latest>`_

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
    
    .. code:: 
      
      sudo dnf install npg-lite-flasher-<version>.rpm  
    
    2. Enter your password and confirm the install when prompted.  
    3. After installation, launch **NPG Lite Flasher** from your Applications menu.

.. dropdown:: **Debian/Ubuntu (.deb)**  

  1. Open a terminal and run:  
  
  .. code:: 
    
    sudo apt install ./npg-lite-flasher_<version>_amd64.deb
  
  2. If you hit missing dependencies, run:  
  
  .. code:: 
    
    sudo apt --fix-broken install  
  
  3. Launch **NPG Lite Flasher** from your desktop launcher or via:  
  
  .. code:: 
    
    npg-lite-flasher

.. dropdown:: **macOS (.dmg)**  

  1. Double-click the downloaded `npg-lite-flasher.dmg` file.  
  2. When you see the macOS warning:
  3. “npg-lite-flasher.dmg” was downloaded from the Internet.
      
  ``Are you sure you want to open it?``

  ``click **Open**``

  3. Drag **NPG Lite Flasher.app** into your **Applications** folder.  
  4. Eject the mounted image and open the app from **Applications**.


4. (Optional) Build from source 
   
.. code-block:: bash
  
  git clone https://github.com/upsidedownlabs/NPG-Lite-Flasher.git
  cd NPG-Lite-Flasher
  npm i
  cargo tauri build



Uploading the Firmware
************************

Once your device is connected, you can choose from multiple firmware options depending on how 
you plan to use the NPG Lite - including Bluetooth Low Energy (BLE), Serial, Wi-Fi, 
or even upload your own custom firmware.

.. tab-set:: 

  .. tab-item:: Bluetooth LE

    1. Open the NPG Lite Flasher.
    2. Select the ``Bluetooth LE`` tab, at the top of the window you’ll see tabs for each firmware types - click on Bluetooth LE to bring up the BLE-specific interface.

    .. figure:: media/npg-lite-flasher-ble-select.*
      :width: 600 px
      :alt: NPG Lite Flasher BLE Selection
    
    3. Bluetooth LE specific interface will appear.
   
    .. figure:: media/npg-lite-flasher-ble.*
      :width: 600 px
      :alt: NPG Lite Flasher BLE Interface

    4. Connect your NPG Lite device via USB-C. The Flasher should detect a new serial COM port. From the Port dropdown, choose the port corresponding to your NPG Lite. 
   
    .. figure:: media/npg-lite-flasher-ble-select-com.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Select COM
    
    5. Click ``Flash``, the Flash button to begin uploading the BLE firmware. 
  
    .. figure:: media/npg-lite-flasher-ble-click-flash.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Click Flash
    
    6. Wait for confirmation, you’ll see a “Success” message. This indicates the firmware has been successfully flashed.
    
    .. figure:: media/npg-lite-flasher-ble-flash-wait.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Flashing
    
    .. figure:: media/npg-lite-flasher-ble-flash-comp.*
      :width: 400 px
      :alt: NPG Lite Flasher BLE Flash Complete
    
    7. Restart your device, Unplug the USB cable, toggle the NPG Lite’s power switch off and then on, and your board will now boot into the new Bluetooth LE firmware.


  .. tab-item:: Serial

   1. Open the NPG Lite Flasher.
   2. Select the ``Serial`` tab, at the top of the window you’ll see tabs for each firmware types - click on Serial to bring up the Serial-specific interface.

   .. figure:: media/npg-lite-flasher-serial-select.*
    :width: 600 px
    :alt: NPG Lite Flasher Serial Selection

   3. Serial specific interface will appear.

   .. figure:: media/npg-lite-flasher-serial.*
    :width: 600 px
    :alt: NPG Lite Flasher Serial Interface

   4. Connect your NPG Lite device via USB-C. The Flasher should detect a new serial COM port. From the Port dropdown, choose the port corresponding to your NPG Lite. 

   5. Click ``Flash``, the Flash button to begin uploading the Serial firmware. 

   .. figure:: media/npg-lite-flasher-serial-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher Serial Click Flash

   6. Wait for confirmation, you’ll see a “Success” message. This indicates the firmware has been successfully flashed.

   .. figure:: media/npg-lite-flasher-serial-flash-wait.*
    :width: 400 px
    :alt: NPG Lite Flasher Serial Flashing

   .. figure:: media/npg-lite-flasher-serial-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher Serial Flash Complete

   7. Restart your device, Unplug the USB cable, toggle the NPG Lite’s power switch off and then on, and your board will now boot into the new Serial firmware.


  .. tab-item:: WiFi

   1. Open the NPG Lite Flasher.
   2. Select the ``WiFi`` tab, at the top of the window you’ll see tabs for each firmware types - click on WiFi to bring up the WiFi-specific interface.

   .. figure:: media/npg-lite-flasher-wifi-select.*
    :width: 600 px
    :alt: NPG Lite Flasher WiFi Selection

   3. WiFi specific interface will appear.

   .. figure:: media/npg-lite-flasher-wifi.*
    :width: 600 px
    :alt: NPG Lite Flasher WiFi Interface

   4. Connect your NPG Lite device via USB-C. The Flasher should detect a new serial COM port. From the Port dropdown, choose the port corresponding to your NPG Lite. 

   5. Click ``Flash``, the Flash button to begin uploading the WiFi firmware. 

   .. figure:: media/npg-lite-flasher-wifi-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher WiFi Click Flash

   6. Wait for confirmation, you’ll see a “Success” message. This indicates the firmware has been successfully flashed.

   .. figure:: media/npg-lite-flasher-wifi-flash-wait.*
    :width: 400 px
    :alt: NPG Lite Flasher WiFi Flashing

   .. figure:: media/npg-lite-flasher-wifi-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher WiFi Flash Complete

   7. Restart your device, Unplug the USB cable, toggle the NPG Lite’s power switch off and then on, and your board will now boot into the new WiFi firmware.
  
  .. tab-item:: + Add Custom

   1. Open the NPG Lite Flasher.
   2. Select the ``+Add Custom`` tab, at the top of the window to switch into custom‐firmware mode.

   .. figure:: media/npg-lite-flasher-custom-select.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Selection

   3. ``+ Add Custom`` specific interface will appear.

   .. figure:: media/npg-lite-flasher-custom.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Interface

   4. **Add your firmware file**: Click on ``Choose File`` button to locate your firmware and select your compiled .bin file.
   5. Once imported you will see the your firmware file name in Firmware Name.
   6. Connect your NPG Lite device via USB-C. The Flasher should detect a new serial COM port. From the Port dropdown, choose the port corresponding to your NPG Lite. 
   
   .. figure:: media/npg-lite-flasher-custom-select-com-file.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Select Firmware

  
   7. Click ``Flash``, the Flash button to begin uploading the Custom firmware. 

   .. figure:: media/npg-lite-flasher-custom-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Click Flash

   8. Wait for confirmation, you’ll see a “Success” message. This indicates the firmware has been successfully flashed.

   .. figure:: media/npg-lite-flasher-custom-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Flash Complete

   9. Restart your device, Unplug the USB cable, toggle the NPG Lite’s power switch off and then on, and your board will now boot into the new Custom firmware.

   10. Click ``Add``, this will add the firmware in the +Add Custom list for future flashes - so you can skip the file-selection step next time.

   .. figure:: media/npg-lite-flasher-custom-click-add.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Click Add
  
   .. figure:: media/npg-lite-flasher-custom-firmware-main-page.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Main Page

   .. figure:: media/npg-lite-flasher-custom-flash-direct.*
    :width: 400 px
    :alt: NPG Lite Flasher Custom Flash Directly
 
  
  .. tab-item:: Get from GitHub

   1. Open the NPG Lite Flasher.
   2. Select the ``Get From GitHub`` tab, at the top of the window to select the firmware designed by Upside Down Labs for NPG Lite and ESP32 devices.

   .. figure:: media/npg-lite-flasher-get-github-select.*
    :width: 600 px
    :alt: NPG Lite Flasher Get from GitHub

   3. A firmware list will appear. You can download multiple firmwares simultaneously, but only one can be flashed at a time.
   
   .. figure:: media/npg-lite-flasher-get-github-list-downloads.*
    :width: 700 px
    :alt: NPG Lite Flasher Get from GitHub List Downloads

   4. Once downloaded, ``Flash Custom Firmware`` screen will appear, click ``Flash`` to flash the firmware onto your device. Make sure your NPG Lite device is connected via USB-C. The Flasher will detect serial COM port automatically. You can also choose COM port from the Port dropdown, corresponding your device. 
   
   .. figure:: media/npg-lite-flasher-get-github-click-flash.*
    :width: 400 px
    :alt: NPG Lite Flasher Get from GitHub Flash
  
   5. Wait for confirmation, you’ll see a “Success” message. This indicates the firmware has been successfully flashed.
 
   .. figure:: media/npg-lite-flasher-get-github-flash-comp.*
    :width: 400 px
    :alt: NPG Lite Flasher Get from GitHub Flash Completed

   6. Restart your device, Unplug the USB cable, toggle the NPG Lite’s power switch off and then on, and your board will now boot into the new firmware.

   7. Check the ``Custom Firmwares`` tab for future flashes; this saves you from downloading the same firmware file again.
   
   .. figure:: media/npg-lite-flasher-get-github-custom-list-main.*
    :width: 600 px
    :alt: NPG Lite Flasher Custom Click Add
 

.. dropdown:: Troubleshooting
  :icon: alert-fill

  Device not found: 
  
  - Verify USB-C cable and power switch
  - Install appropriate USB-serial drivers

  Permission errors (macOS/Linux):
  
  - Run with sudo or add your user to the dialout group

  SmartScreen warnings (Windows):
  
  - Use More Info → Run Anyway as described above


Real-Time Visualization
***************************

After flashing, visualize your biopotential signals with Chords-Web or Chords-Python:

1. In the flasher, click Open ``Chords-Web`` or ``Chords-Python`` as per your preference (under “Visualize”).
   
.. figure:: media/npg-lite-flasher-visualise.*
  :width: 600 px
  :alt: NPG Lite Flasher Visualize options

2. For ``Chords-Web`` browser tab opens to ``Chords-Web``.
3. Click ``Connect → select your NPG Lite → start streaming``.
4. For ``Chords-Python`` follow the :ref:`Chords Python documentation<chords-pythons>` .

Use the UI to:
-------------------

- Choose 1–3 channels to view
- Play/Pause the live stream
- Apply bandpass or 50/60 Hz notch filters
- Record and export data to CSV


GitHub Repository
*******************

For full source code, issue tracking, and contribution guidelines, head over to the NPG Lite Flasher GitHub repo.

You’ll discover setup guides and can track ongoing development - including bug fixes and feature enhancements: `NPG Lite Flasher GitHub <https://github.com/upsidedownlabs/NPG-Lite-Flasher>`_