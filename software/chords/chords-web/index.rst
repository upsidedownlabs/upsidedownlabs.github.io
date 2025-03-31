.. _chords:

Chords-Web
###############

Overview
********

Chords-Web is an open-source web application designed for real-time signal visualization, particularly tailored for bio-potential signals like EEG, EMG, ECG and EOG. This tool serves as an advanced alternative to the standard Arduino IDE serial plotter, offering enhanced functionality for students, researchers and hobbyists alike who want to record biopotential data using  `BioAmp hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_.

.. figure:: ./media/chords_landing_page.*
    :align: center
    :alt: Chords-Web Landing Page


.. _chords-browsers-compatibility:

Browser Compatibility
*********************

The web application is compatible with the **Web Serial API**, which is essential for its functionality. Supported browsers include the latest versions of:

- **Google Chrome**
- **Microsoft Edge**
- **Opera**

If the user's browser does not support the Web Serial API, a message will inform them of the incompatibility, recommending the use of a supported browser.

For more information, refer to MDN Web Docs on the `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_.


Software Requirements
*********************

*  `Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ (Use this software to upload Chords Arduino firmware to your development board).
* Chromium-based browsers (Know more about  :ref:`chords-browsers-compatibility`).

Hardware Requirements
*********************

- A development board (see the list of `Compatible Development Boards <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_)
- A USB cable (type depends on board)
- :ref:`BioAmp Hardware <upsidedownlabs_hardware_home>` and its accessories

Setting up the hardware
***********************

Make all the connections according to the hardware you are using, including sensor connections with the development board, body connections with the sensor, and connections from the development board to your laptop.

Uploading the code
==================

1. Connect your Arduino board to the laptop using a USB cable.  
2. Open the `Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ for your board in the Arduino IDE.  
3. Navigate to `Tools > Board` and select your board.  
4. In the tools menu, choose the correct COM port (the one that disappears when the board is disconnected).  
5. Upload the code and open Chords-Web in your web browser.  

Once ready, upload the firmware to your development board. Visit the Chords Arduino Firmware GitHub repository, scroll to the supported boards table, locate your board, and click on the corresponding Arduino sketch.  

Copy the sketch, paste it into the Arduino IDE, go to `Tools`, select your board and the correct COM port, then click the upload button.  


Opening Chords-web
*******************

1. Open a Chromium-based browser like Google Chrome, Microsoft Edge, Opera, brave, etc.
2. Search `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech/>`_ .
3. Click on visualize now.
4. The images in the center show an overview of your hardware connections so far.
5. At the bottom, you can see buttons to access various applications, which are discussed below:

Applications
************

Chords Visualizer
=================

The Chords Visualizer is a powerful web-based tool designed for seamless real-time biopotential signal acquisition and analysis. Designed for researchers, developers, and enthusiasts, this app provides an intuitive interface for monitoring multiple channels, applying advanced filters, and managing recorded data efficiently. Whether you're analyzing EMG, ECG, EOG, or EEG signals, the app ensures a smooth and interactive experience, simplifying data acquisition and enhancing signal interpretation.

Features
---------

.. list-table:: Features
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Effortless Connectivity**
     - Instantly detects **BioAmp Hardware** running **Chords-Web Arduino Firmware**, simplifying setup and ensuring smooth workflow from data acquisition to visualization.
   * - **Real-time Visualization**
     - Experience smooth, real-time data rendering powered by `WebGL-Plot <https://github.com/danchitnis/webgl-plot>`_. Ensures uninterrupted signal display for seamless data monitoring.
   * - **Frame Buffer & Snapshots**
     - Stores the **last five snapshots**, with left/right controls for navigation. Changing the **channel count resets snapshots** for accuracy. Users can **zoom in and out** for detailed or broad views.
   * - **Recording & Data Management**
     - Record data in **CSV format** indefinitely or with a timer. Manage files via a popover menu and **download or delete** them individually or as a ZIP with one click.
   * - **Zoom & Time Base**
     - Use **Zoom-In & Zoom-Out** controls to focus on signal details. Adjust the **Time Base Slider** from **1 to 10 seconds per frame** for flexible data visualization.
   * - **Filter Options**
     - Enhance biopotential signals using the **notch filter** and **bandpass filters**. Apply them individually per channel or collectively via the **master filter**.
   * - **Channel Support**
     - Supports **real-time multi-channel plotting** with color-coded streams. Accommodates **up to 16 channels**, depending on the connected device, for flexible biosignal applications.
   * - **One-Click Disconnect**
     - Easily disconnect from the development board with a single click, ensuring a hassle-free disconnection process after data collection or visualization.

Chords-Web Icons
-----------------

.. figure:: ./media/chords_icon.*
    :align: center
    :alt: Chords-Web Icons

    Chords-Web Icons

Play/Pause Data Stream
----------------------

- Clicking the pause button displays the last saved frame.  
- You can view and save up to the last five snapshots of your data.  
- Snapshots are automatically captured per frame.  
- Navigate snapshots using the left and right buttons.  
- Adjusting the channel count resets the snapshots for the new configuration.  

Setting Channel Count
---------------------

.. figure:: ./media/chords_channelsupport.*
    :align: center
    :alt: Chords-Web Channel Support
    
    Chords-Web Channel Support

- The number of available channels depends on the development board in use (list different boards and their channel counts).
- Select a specific channel by clicking the channel button.  
- Use the "Select All" button to choose all available channels at once.  
- Click the reset button to revert to your previously selected channels.  

Recording the Data  
-------------------

.. figure:: ./media/chords_recordingTime.*
    :align: center
    :alt: Recording Time

    Recording Time

- **Record** data in **CSV format** for a set duration or indefinitely until manually stopped.  
- Start recording with a set time limit or record freely and stop anytime using the stop icon.  

- Efficiently **download** or **delete** recorded files through the popover menu.  
- Files are securely stored in **IndexedDB** for seamless management.  
- Manage individual files by downloading specific files and removing them as needed.
- Easily download all files as a ZIP or delete them with a single click for seamless file management.

.. figure:: ./media/chords_filesaveordelete.*
    :align: center
    :alt: Save and Delete Option

    Save and Delete Option

Visualizing EMG (Electromyography) signal
-------------------------------------------

EMG captures the electrical activity produced by skeletal muscles. This signal is essential for assessing muscle health and diagnosing neuromuscular disorders.

.. figure:: ./media/chords_emg_signal.*
   :alt: EMG Signal Example
   :width: 600px
   :align: center

   EMG Signal Example

Visualizing EEG (Electroencephalography) signals
--------------------------------------------------

EEG records the electrical activity of the brain and is commonly used for diagnosing neurological conditions and studying brain functions.

.. figure:: ./media/chords_eeg_signal.*
   :alt: EEG Signal Example
   :width: 600px
   :align: center
  
   EEG Signal Example

Visualizing EOG (Electrooculography) signals
---------------------------------------------

EOG measures the electrical potential generated by eye movements. It is often used in studies related to sleep, fatigue, and eye movement disorders.

.. figure:: ./media/chords_eog_signal.*
   :alt: EOG Signal Example
   :width: 600px
   :align: center
  
   EOG Signal Example

Visualizing ECG (Electrocardiography) signals
-------------------------------------------------

The **ECG (Electrocardiography)** signal represents the electrical activity of the heart. This custom ECG signal is used both in clinical practice and research to evaluate heart rhythm, detect abnormalities, and assess cardiac health.

.. figure:: ./media/chords_ecg_signal.*
   :alt: ECG Signal Example
   :width: 600px
   :align: center
  
   ECG Signal Example

Other Options to Explore
-------------------------

- **Switch Theme**  
  Quickly switch between light and dark modes using the theme button in the navigation bar.

- **Visit the GitHub Repository**  
  Access the Chords Web GitHub repository via the link in the navigation bar.

- **Contributors**  
  View the list of contributors using the link in the navigation bar's top-right corner.

Running the Application
------------------------

1. Click the ``Visualize Now`` button to navigate to the applications page. Here, you will find two options.
2. Click the ``Chords Visualizer`` button to establish a connection with the Arduino and start streaming data.  
3. Use the ``ZoomIn/ZoomOut`` buttons to adjust data visualization.  
4. Use the ``Play/Pause`` button to control the data stream. Navigate the last five snapshots with the ``Left/Right`` buttons in the **Frame Buffer** feature.  
5. Click the ``Record`` button to start recording data into a CSV file.  
6. Click the ``Download`` button to save the recorded data.  
7. Click the ``Delete`` button to remove recorded data.  
8. Click the ``Filter`` button to apply filters for EMG, ECG, EOG, and EEG signals:  
   - ``Muscle`` (70Hz high-pass for EMG)  
   - ``Heart`` (30Hz low-pass for ECG)  
   - ``Eye`` (10Hz low-pass for EOG)  
   - ``Brain`` (45Hz low-pass for EEG)  
   - Use the **Master button** to apply filters across all channels.  
   - Apply **50Hz or 60Hz** filters to individual or all channels.  
9.  Select channels via the ``Channels`` button in the settings popover.  
10. Adjust the number of channels using the ``Plus/Minus`` buttons.  
11. Adjust zoom using the ``Zoom`` slider for a detailed or overall view.  


FFT Analysis and EEG Band Spectrum Plotting
===========================================

Overview
--------

We have introduced **FFT (Fast Fourier Transform) analysis** and **EEG band spectrum plotting** to improve real-time signal processing. These features enable you to visualize and analyze EEG frequency bands, providing deeper insights into brain activity.  

Features
--------

.. list-table:: Features
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Download EEG Data**
     - Save recorded channel data as a **CSV file** for further analysis, storage, or external visualization.
   * - **Live EEG Band Monitoring**
     - View real-time plots of EEG band values for better brain activity tracking.


Supported EEG Bands
-------------------

- **Delta (0.5 - 4 Hz)** → Associated with deep sleep and unconscious states.  
- **Theta (4 - 8 Hz)** → Linked to relaxation, meditation, and light sleep.  
- **Alpha (8 - 13 Hz)** → Reflects calm, wakeful relaxation, often seen during closed-eye rest.  
- **Beta (13 - 30 Hz)** → Related to active thinking, problem-solving, and focus.  
- **Gamma (30 - 100 Hz)** → Involved in high-level cognitive functioning, attention, and perception.  

Running the Application 
------------------------

1. Select **"FFT Visualizer"** to see your brainwaves in real time. 
2. The **top segment** displays filtered EEG data using a **45Hz low-pass filter** to remove noise.  
3. The **bottom segment** is divided into two sections: 

   - **Left side** → Shows EEG frequency values in Hz.  
   - **Right side** → Offers two interactive modes:  

     - **Band Power Mode** → Displays real-time EEG band power values.  
     - **Beta Candle Mode** → A unique visualization where a glowing candle represents your focus level.  

       - **Brighter candle** = Higher beta waves = Strong focus.  
       - **Dim candle** = Lower beta waves = Distraction.  


Serial Plotter & Monitor
========================

Overview
--------
The **Serial Plotter & Monitor** is a standalone feature within Chords-Web that provides real‑time serial data visualization. 

.. figure:: ./media/chords_serialwizard.*
   :align: center
   :alt: Chords-Web Filter

   Chords-Web Filter

Features
--------

.. list-table:: Features
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Dual View Modes**
     - Previous Arduino versions did not support simultaneous viewing of the serial plotter and monitor. This tool allows you to toggle between the **Plotter**, **Monitor**, or a combined view for comprehensive visualization.
   * - **Optimized Data Rendering**
     - In newer Arduino versions, fast data plotting can lead to cluttered displays. The Serial Plotter & Monitor is optimized to handle high-frequency data, ensuring clear and accurate visual representation.
   * - **Footer Button Bar**
     - Easily switch between different viewing modes using an intuitive footer button bar.
   * - **Baud Rate Selection**
     - Choose from multiple baud rates to optimize serial communication based on your device's requirements.
   * - **Navigation Bar**
     - Access features such as theme switching (light/dark), visit the GitHub repository, view contributor details, or return to the previous page.

Running the Application
-----------------------

1. Click the **Serial Wizard** button to launch the Serial Plotter & Monitor.
2. Click on Connect button select board.
3. Use the footer button bar to toggle between the Plotter, Monitor, or a combined view.
4. Navigate using the top bar to switch themes, visit the GitHub repository, view contributors, or return to the previous page.


Technologies Used
*******************

.. only:: html

   .. grid:: 2 2 2 2
      :margin: 4 4 0 0
      :gutter: 2

      .. grid-item-card:: 
         :text-align: center
         :link: https://nextjs.org/
         :link-type: url

         .. figure:: https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg
            :alt: Next.js Logo
            :width: 50px
            :height: 50px
            :align: center

         **Next.js**  
         A React framework for building web apps.

      .. grid-item-card:: 
         :text-align: center
         :link: https://developer.mozilla.org/en-US/docs/Web/API/Serial
         :link-type: url

         .. figure:: media/chords_serialdevice.*
            :alt: Web Serial API
            :width: 40px
            :height: 40px
            :align: center

         **Web Serial API**  
         For communication with hardware devices.

      .. grid-item-card:: 
         :text-align: center
         :link: https://tailwindcss.com/
         :link-type: url

         .. figure:: ./media/chords_tailwindcss.*
            :alt: Tailwind CSS Logo
            :width: 50px
            :height: 50px
            :align: center

         **Tailwind CSS**  
         A utility-first CSS framework.

      .. grid-item-card:: 
         :text-align: center
         :link: https://ui.shadcn.com/
         :link-type: url

         .. figure:: ./media/chords_shadcn.*
            :alt: Shadcn UI Logo
            :width: 40px
            :height: 40px
            :align: center

         **Shadcn UI**  
         Advanced UI components for React.

      .. grid-item-card:: 
         :text-align: center
         :link: https://github.com/danchitnis/webgl-plot
         :link-type: url

         .. figure:: ./media/chords_webgl_plot.*
            :alt: WebGL Plot Logo
            :width: 50px
            :height: 50px
            :align: center

         **WebGL Plot**  
         Real-time plotting with WebGL.

      .. grid-item-card:: 
         :text-align: center
         :link: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
         :link-type: url

         .. figure:: ./media/chords_Indexeddbdark.*
            :alt: IndexedDB API Logo
            :width: 40px
            :height: 40px
            :align: center

         **IndexedDB API**  
         Local database for web applications.


.. figure:: ./media/chords_tech_stack.*
    :align: center
    :alt: Chords-Web Tech Stack

    Chords-Web Tech Stack