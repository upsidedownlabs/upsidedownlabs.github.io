.. _chords-pythons:

Chords-Python
##############

.. youtube:: bj7exKRsuZ8

Overview
********

Chords-Python is an open-source bag of tools for recording biopotential signals like **ECG**, **EMG**, **EEG**, or **EOG**, along with visualization using BioAmp hardware. It’s ideal for educational purposes as it promotes DIY Neuroscience and makes biopotential signal exploration more accessible for students and researchers.

Features
********

+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Feature                   | Description                                                                                                                                                                       |
+===========================+===================================================================================================================================================================================+
| Connection                | Supports both wired and wireless connections via Wi-Fi, Bluetooth, or USB (Serial).                                                                                               |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Data Reading              | Reads data packets from development board in real-time, efficiently processing them to prevent data loss and ensure accurate signal representation for analysis and visualization.|
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| CSV Logging               | Optionally logs incoming data to a CSV file with columns for counter and channel data, enabling easy storage, analysis, and sharing.                                              |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| LSL Streaming             | Streams data via Lab Streaming Layer (LSL), a protocol for time-synchronized data sharing. Enables real-time analysis, visualization, or integration with tools like BrainVision. |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Applications              | Provides an interface to run multiple applications simultaneously via the LSL stream.                                                                                             |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Create Custom Application | Allows users to develop and integrate their own applications with the system.                                                                                                     |
+---------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Software Requirements  
*********************

- `Arduino IDE <https://www.arduino.cc/en/software>`_ – Required to upload the Chords Arduino firmware to your development board.  
- `Python <https://www.python.org/downloads/>`_ – Ensure you have the most recent version installed.  
- `VS Code <https://code.visualstudio.com/>`_ or any other code editor (Alternatively, you can use the Command Prompt).  

Hardware Requirements
*********************

To use Chords-Python, you need:

- A development board (`Compatible Boards <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/blob/main/README.md>`_)  
- A USB cable (type depends on the board)
- `BioAmp Hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_ and its accessories

Setting up the hardware
***********************

Make all the connections according to the `hardware you are using <https://docs.upsidedownlabs.tech/hardware/index.html>`_ , including sensor connections with the development board, body connections with the sensor, and connections from the development board to your laptop.

Uploading the code
******************

Once you are all set, it is time to upload the code to your development board. Go to `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ GitHub repo, scroll down to the supported boards table, find your board name, and click on the Arduino sketch corresponding to that row.
Copy the sketch and paste it into Arduino IDE.
Go to tools, select your board, and the correct COM port. Now, hit the upload button.

.. _using-chords-python:

Opening Chords-Python
*********************

There are two ways to use Chords-Python:

**A. Using the `chordspy` Python Package (Recommended)**

**B. Running Scripts Manually from the Repository**

A. Using the chordspy Package
=============================

This is the smoothest way to get started. Follow the steps below:

1. **Install Python**  
   Make sure latest version of Python is installed.

2. **Create and Activate a Virtual Environment**:

   - **On Windows**:

      .. code-block:: console

         python -m venv .venv

      .. code-block:: console

         .venv\Scripts\activate

   - **On macOS/Linux**:

      .. code-block:: console

         python3 -m venv .venv

      .. code-block:: console

         source .venv/bin/activate

3. **Install the Package**:

   .. code-block:: console

      pip install chordspy

4. **Launch the Web Interface**:

   .. code-block:: console

      chordspy

A web interface will open where you can connect your device and access applications.

.. figure:: ./media/light-interface.*
   :align: center
   :alt: Interface in Light Mode
   
   Interface in Light Mode

.. figure:: ./media/dark-interface.*
   :align: center
   :alt: Interface in Dark Mode

   Interface in Dark Mode

B. Running Scripts Manually (Alternative)
=========================================

If you prefer running scripts directly (for development, debugging, or customization):

1. **Download the Repository**:

   - You can download the Chords-Python repository from GitHub by visiting the following link: `Chords-Python <https://github.com/upsidedownlabs/Chords-Python/>`_.

   - Or, you can clone the repository using Git by running the following command:

   .. code-block:: console

      git clone https://github.com/upsidedownlabs/Chords-Python.git

2. **Create and Activate a Virtual Environment** (if not already):

   - **On Windows**:

      .. code-block:: console

         python -m venv .venv

      .. code-block:: console

         .venv\Scripts\activate

   - **On macOS/Linux**:

      .. code-block:: console

         python3 -m venv .venv

      .. code-block:: console

         source .venv/bin/activate

3. **Install Requirements**:

   .. code-block:: console

      pip install -r requirements.txt

4. **Run the Application**:

   Navigate to the `chordspy` folder and run:

   .. code-block:: console

      python -m chordspy.app                          # To launch the web interface
      python -m chordspy.connection --protocol usb    # To start LSL stream via USB
      python -m chordspy.connection --protocol ble    # To start LSL stream via BLE
      python -m chordspy.connection --protocol wifi   # To start LSL stream via WiFi

   To run any application, open a new terminal:

   .. code-block:: console

      python chordspy.gui.py         # GUI Application
      python chordspy.ffteeg.py      # EEG with FFT Analysis

Connection
**********

The first step is to establish a connection with your device and start the stream.

There are three connection options available:

- Wi-Fi
- Bluetooth
- Serial (USB)

Wi-Fi
=====

1. Upload the Wi-Fi firmware through the ``Chords-Arduino-Firmware`` repository
2. Turn on the device and connect to the access point created by the device (e.g., ``npg-lite-2``)
3. In the web interface:

   - Click the **Wi-Fi** button
   - Click the **Connect** button

A pop-up notification will appear indicating a successful connection.

Bluetooth
=========

1. Upload the Bluetooth firmware through the ``Chords-Arduino-Firmware`` repository
2. Turn on the device and enable Bluetooth on your computer
3. In the web interface:

   - Click the **Bluetooth** button
   - Select your device from the list of available devices
   - Hit the **Connect** button

A pop-up notification will appear indicating a successful connection.

Serial (USB)
============

1. Upload the Serial firmware through the ``Chords-Arduino-Firmware`` repository
2. Connect the device to your computer using a USB cable
3. In the web interface:

   - Click the **Serial** button
   - Click the **Connect** button

A pop-up notification will appear indicating a successful connection.

.. note::
   The connection step is essential as it initiates the LSL Stream, which is required for running applications.

CSV Logging
***********

The raw data received from the device can be logged to a CSV file for further analysis or record-keeping. This optional feature can be enabled or disabled in the web interface.

To use CSV logging:

1. Click the **Start recording** button to begin logging
   - A file with name is created ``ChordsPy_{timestamp}.csv`` in the same folder.
   - File includes columns for counter and channel data
2. Click the **Stop recording** button to end logging
   - File will be saved in the same folder

.. figure:: ./media/csv.*
   :align: center
   :alt: CSV Logging

   CSV Logging

Applications
************

There are many applications available that stream the LSL and can be run for various purposes.

List of available applications:

1. `ECG with Heart Rate`
========================

.. youtube:: tZud2tc-TGI

Overview
--------

The **ECG with Heart Rate** is a real-time application designed to visualize and analyze Electrocardiogram (ECG) data using the Lab Streaming Layer (LSL) protocol. Built with Python and PyQt5, this application provides a graphical interface for monitoring ECG signals, detecting R-peaks (heartbeats), and calculating the heart rate in real time. It applies signal processing techniques and utilizes the `neurokit2` library to estimate R-peak detection and heart rate.

Features
--------

+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                     |
+=======================================================================+=================================================================================================================+
| 1. Real-Time ECG Visualization                                        | - Displays real-time ECG signals in a dynamic plot using `pyqtgraph`.                                           |
|                                                                       | - Supports adjustable y-axis scaling based on the sampling rate (e.g. 250 Hz or 500 Hz).                        |
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 2. R-Peak Detection                                                   | - Utilizes the `neurokit2` library to detect R-peaks in the ECG signal.                                         |
|                                                                       | - Highlights detected R-peaks as red dots on the plot for easy visualization.                                   |
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 3. Heart Rate Calculation                                             | - Computes heart rate (in BPM) using the time intervals between consecutive R-peaks.                            |         
|                                                                       | - Implements a moving average filter to smooth heart rate values and reduce noise.                              |
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 4. Interactive GUI                                                    | - Built with PyQt5, providing a user-friendly interface with a real-time ECG plot and heart rate display.       |         
|                                                                       | - Allows double-click to reset the plot's zoom level to default settings.                                       |                                                                                           
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+
| 5. Signal Filtering                                                   | - Applies a low-pass Butterworth filter to remove high-frequency noise from the ECG signal.                     |         
|                                                                       | - Helps in enhancing signal clarity, which can assist in identifying R-peaks.                                   |                                                                                           
+-----------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------+

A GUI window will appear, displaying the real-time ECG signal along with the calculated heart rate.

.. figure:: ./media/heartbeat_ecg.*
   :align: center
   :alt: Heart Rate with ECG

   Heart Rate with ECG

2. `EMG with Envelope`
======================

.. youtube:: TiDwSQEY2eY

Overview
--------

The **EMG with Envelope** is a Python-based application designed to visualize and analyze Electromyography (EMG) signals in real-time. It connects to an EMG data stream using the Lab Streaming Layer (LSL) protocol, processes the signal to extract the EMG envelope, and displays both the filtered EMG signal and its envelope in a user-friendly graphical interface. Built with `PyQt5` and `pyqtgraph`, the application provides a responsive and interactive visualization tool for students, researchers, or developers working with EMG data.

Features
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. Real-Time EMG Signal Visualization                                 | - Connects to an LSL stream to acquire real-time EMG data.                                                                |
|                                                                       | - Displays the EMG signal after applying a high-pass filter (70 Hz cutoff) to remove low-frequency noise.                 |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. EMG Envelope Extraction                                            | - Computes the Root Mean Square (RMS) envelope of the filtered EMG signal using a moving window.                          |
|                                                                       | - Applies convolution with a uniform window and pads the result to align with the original signal length.                 |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Interactive and Responsive GUI                                     | - Built using `PyQt5` for a modern and intuitive user interface.                                                          |         
|                                                                       | - Features two synchronized plots: one for the filtered EMG signal and one for the EMG envelope.                          |
|                                                                       | - Disables zoom and pan for a clean, fixed-axis visualization.                                                            |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. Customizable Signal Processing                                     | - Implements a high-pass Butterworth filter to remove baseline drift and noise.                                           |         
|                                                                       | - Adjusts the RMS window size dynamically based on the sampling rate (e.g., 25 samples for 250 Hz, 50 samples for 500 Hz).|                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. Dynamic Plot Updates                                               | - Updates the plots in real-time using a fixed-size circular buffer for efficient data handling.                          |         
|                                                                       | - Refreshes the display every 15 milliseconds for smooth and responsive visualization.                                    |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

A GUI window will appear, displaying the real-time EMG signal along with the calculated EMG Envelope.

.. figure:: ./media/emgenvelope.*
   :align: center
   :alt: EMG with Envelope

   EMG with Envelope

3. `EOG with Blinks`
====================

The **EOG with Blinks** is a Python-based application designed to visualize and detect eye blinks in real-time using Electrooculography (EOG) signals. Built with the PyQt5 framework and PyQtGraph for plotting, the application connects to an LSL (Lab Streaming Layer) stream to acquire EOG data, processes the signal using a low-pass filter, and detects blinks based on dynamic thresholds. The application provides a dual-plot interface to display the filtered EOG signal and detected blinks, making it a useful tool for real-time monitoring and analysis of EOG data.

Features
=========

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. Real-Time EOG Signal Visualization                                 | - Displays the filtered EOG signal in real-time using a low-pass filter (10 Hz cutoff).                                   |
|                                                                       | - Dynamically updates the plot with a 5-second rolling window for continuous monitoring.                                  |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Dual-Plot Interface                                                | - EOG Signal Plot: Displays the filtered EOG signal with detected peaks marked in red.                                    |
|                                                                       | - Blink Detection Plot: Shows a binary representation of detected blinks (1 for blink, 0 for no blink).                   |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Blink Detection                                                    | - Detects blinks by identifying peaks in the filtered EOG signal.                                                         |         
|                                                                       | - Uses a dynamic threshold based on the mean and standard deviation of the signal to distinguish blinks from noise.       |
|                                                                       | - Implements a minimum time gap (0.1 seconds) between detected blinks to avoid false positives.                           |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. User-Friendly GUI                                                  | - Built with PyQt5 for a responsive and intuitive interface.                                                              |         
|                                                                       | - Includes features like grid lines, auto-scaling, and zoom disablement for better usability.                             |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

A GUI window will appear, displaying the real-time EOG signal along with the Blinks marked as Red dot.

.. figure:: ./media/eog.*
   :align: center
   :alt: EOG with Blinks

   EOG with Blinks

4. `EEG with FFT`
=================

.. youtube:: yVD9KmyZgxA

Overview
--------

The **EEG with FFT and Brainwave Power** is a Python-based application designed to visualize and analyze Electroencephalography (EEG) signals in real-time. It connects to an EEG data stream using the Lab Streaming Layer (LSL) protocol, processes the signal to remove noise, and performs Fast Fourier Transform (FFT) to compute the power of different brainwave frequency bands (Delta, Theta, Alpha, Beta, and Gamma). The application provides a graphical user interface (GUI) built with `PyQt5` and `pyqtgraph` for real-time visualization of raw EEG signals, FFT results, and brainwave power distribution.

Features
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. Multi-Channel EEG Visualization                                    | - Displays raw EEG signals from all available channels in real-time.                                                      |
|                                                                       | - Each channel shown in a scrolling plot with 500-sample moving window.                                                   |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Multi-Channel FFT Analysis                                         | - Computes and displays FFT for all EEG channels simultaneously.                                                          |
|                                                                       | - Visualizes the FFT results in a separate plot, focusing on the 0-50 Hz range.                                           |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Signal Processing                                                  | - Applies a notch filter to remove 50 Hz powerline interference.                                                          |         
|                                                                       | - Uses a bandpass filter (0.5-48 Hz) to isolate relevant EEG frequencies.                                                 |
|                                                                       | - Implements a Hanning window for FFT computation to reduce spectral leakage.                                             |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. Single-Channel Brainwave Power Analysis                            | - Calculates the power of five brainwave frequency bands:                                                                 |
|                                                                       |     - Delta (0.5-4 Hz)                                                                                                    |
|                                                                       |     - Theta (4-8 Hz)                                                                                                      |
|                                                                       |     - Alpha (8-13 Hz)                                                                                                     |
|                                                                       |     - Beta (13-30 Hz)                                                                                                     |
|                                                                       |     - Gamma (30-45 Hz)                                                                                                    |         
|                                                                       | - Displays the power of each band in a bar chart for easy comparison.                                                     |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. User-Friendly GUI                                                  | - Provides a clean and intuitive interface with Three-panels:                                                             |
|                                                                       |    - Top-left: Multi-channel EEG waveforms                                                                                |
|                                                                       |    - Top-right: Multi-channel FFT results                                                                                 |
|                                                                       |    - Bottom-right: Single-channel brainwave power analysis                                                                |         
|                                                                       | - Allows users to monitor multi-channel EEG data and its frequency components simultaneously.                             |                                                                                           
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

A GUI window will appear, displaying the real-time EEG signal along with the calculated FFT and Brainwave power distribution.

.. figure:: ./media/ffteeg.*
   :align: center
   :alt: EEG with FFT

   EEG with FFT

.. tip::

   To ensure you're recording a high-quality signal, refer to the detailed guide here: :ref:`Troubleshooting EEG Signal Quality <recording_quality_eeg>`.

5. `EEG Tug of War Game`
========================

.. youtube:: XAhcYg1J_7k

Overview
--------

The **EEG Tug of War Game** is a Python-based application that leverages Electroencephalography (EEG) signals to create an interactive two-player game. Players control the movement of a ball on the screen by modulating their brain activity, specifically the Alpha and Beta frequency bands. The game uses the Lab Streaming Layer (LSL) protocol to acquire real-time EEG data, processes the signals to calculate relative power in the Alpha and Beta bands, and translates these into forces that move the ball. The first player aims to push the ball onto the opponent’s side to score and win the game. The application is built using the `pygame` library for the graphical interface and integrates with `pylsl` for EEG data acquisition.

Features
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. Real-Time EEG Signal Visualization                                 | - Connects to an LSL stream to acquire real-time EEG data.                                                                |
|                                                                       | - Computes the power spectral density (PSD) of Alpha (8-13 Hz) and Beta (13-30 Hz) frequency bands using Welch's method.  |
|                                                                       | - Calculates the relative power ratio (Beta/Alpha) to determine player force.                                             |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Interactive Gameplay                                               | - Two players compete to move a ball to the opponent's side using their brain activity.                                   |
|                                                                       | - The ball's movement is determined by the net force derived from the players' EEG signals.                               |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Dynamic Thresholding                                               | - Uses a moving average of the last 10 data points to smooth the force calculations.                                      |         
|                                                                       | - Applies a threshold to prevent small fluctuations from affecting the ball's movement.                                   |                                                             
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. User-Friendly GUI                                                  | - Features a full-screen graphical interface with a central ball and two player paddles.                                  |         
|                                                                       | - Displays real-time updates of the ball's position and forces applied by each player.                                    |  
|                                                                       | - Includes buttons for starting, pausing, resuming, and exiting the game.                                                 |                                                                                        
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. Win Condition and Feedback                                         | - Declares a winner when the ball reaches either side of the screen.                                                      |         
|                                                                       | - Plays a sound effect to celebrate the winner.                                                                           | 
|                                                                       | - Automatically pauses the game upon a win and allows for a restart.                                                      |                                                                                         
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

The game window will open, featuring buttons for **START/RESTART**, **PLAY/PAUSE**, and **EXIT**. These buttons offer intuitive control, allowing players to easily start, pause, resume, or exit the game as needed.

.. figure:: ./media/game.*
   :align: center
   :alt: EEG Tug of War

   EEG Tug of War

For detailed instructions, check out the `EEG Tug of War Game <https://www.instructables.com/Play-Tug-of-War-Game-With-Your-Mind-Using-EEG-1/#ible-footer-portal>`_ Instructable.

6. `EEG Beetle Game`
====================

Overview
--------

The **EEG Beetle Game** is a Python-based application that uses Electroencephalography (EEG) signals to control a beetle's movement in a 2D game environment. The game leverages the Lab Streaming Layer (LSL) protocol to acquire real-time EEG data, processes the signal to detect the user's focus level, and translates it into upward or downward movement of the beetle. The application is built using the `pygame` library for the game interface and integrates signal processing techniques to analyze EEG data in real-time.

Features
--------

+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                                                     |
+=======================================================================+=================================================================================================================================================+
| 1. Real-Time EEG Signal Visualization                                 | - Connects to an LSL stream to acquire real-time EEG data.                                                                                      |
|                                                                       | - Implements a notch filter to remove 50 Hz power line interference and a bandpass filter to isolate relevant EEG frequency bands (0.5–48 Hz).  |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 2. Focus Level Calculation                                            | - Computes the user's focus level by analyzing the power spectral density of the EEG signal.                                                    |
|                                                                       | - Focus level is calculated using the ratio of high-frequency (beta and gamma) to low-frequency (delta, theta, and alpha) power bands.          |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 3. Calibration System                                                 | - Includes a calibration phase to establish a baseline focus level for the user.                                                                |         
|                                                                       | - Dynamically sets a focus threshold based on the user's EEG data during calibration.                                                           |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 4. Beetle Movement Control                                            | - Moves the beetle upward when the user's focus level exceeds the threshold.                                                                    |         
|                                                                       | - Moves the beetle downward when the focus level is below the threshold.                                                                        |
|                                                                       | - Implements smooth animation and boundary constraints to ensure the beetle stays within the game window.                                       |                                                                                       
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 5. Interactive Game Interface                                         | -  Features a 2D game environment with a beetle sprite that responds to the user's focus level.                                                 |         
|                                                                       | - Displays real-time feedback on the beetle's position and focus level.                                                                         |                                                                                           
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+
| 6. Dynamic Animation                                                  | - Uses a sequence of beetle sprites to create smooth animations.                                                                                |
|                                                                       | - Adjusts animation speed based on the game's frame rate.                                                                                       |
+-----------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------+

A GUI window will appear, showing all calibration messages, followed by the game starting, and finally displaying the game with the beetle.

.. figure:: ./media/beetle.*
   :align: center
   :alt: EEG Beetle Game

   EEG Beetle Game

7. `GUI`
========

.. youtube:: BseTIdoimws

Overview
--------

The **GUI** application is a Python-based tool designed to visualize real-time data streams from an Arduino device using the Lab Streaming Layer (LSL) protocol. The application connects to an LSL stream, retrieves multi-channel data, and plots it in real-time using the `pyqtgraph` library.

Features
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. LSL Stream Integration                                             | - Automatically searches for and connects to available LSL streams.                                                       |
|                                                                       | - Supports dynamic detection of the number of channels in the stream.                                                     |
|                                                                       | - Displays connection status and channel count in the GUI.                                                                |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Real-Time Data Visualization                                       | - Plots real-time data for each channel in separate graphs.                                                               |
|                                                                       | - Updates plots at a high frequency for smooth visualization.                                                             |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Customizable GUI                                                   | - Built using `PyQt` and `pyqtgraph` for a responsive and interactive interface.                                          |
|                                                                       | - Features a clean layout with individual plots for each channel.                                                         |
|                                                                       | - Includes a status bar to display LSL connection details.                                                                |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

A GUI window will appear that shows the data in real-time.

.. figure:: ./media/gui.*
   :align: center
   :alt: GUI

   GUI

8. `EOG Keystroke Emulator`
===========================

.. youtube:: ZJmUUtHJj08

Overview
--------

The **EOG Keystroke Emulator** is a Python-based application designed to detect eye blinks using Electrooculography (EOG) signals and translate them into keystrokes. The application leverages the Lab Streaming Layer (LSL) protocol to acquire real-time EOG data, processes the signal to detect blinks, and simulates a spacebar press whenever a blink is detected. The application is built using the `tkinter` library for the graphical user interface (GUI) and integrates with `pyautogui` for keystroke emulation.

Features
--------

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. Real-Time EOG Signal Processing                                    | - Connects to an LSL stream to acquire real-time EOG data.                                                                |
|                                                                       | - Implements a low-pass filter to smooth the EOG signal for accurate blink detection.                                     |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Blink Detection                                                    | - Detects blinks by identifying peaks in the filtered EOG signal.                                                         |
|                                                                       | - Uses a dynamic threshold based on the mean and standard deviation of the signal to distinguish blinks from noise.       |
|                                                                       | - Incorporates a refractory period to prevent multiple detections from a single blink.                                    |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Keystroke Emulation                                                | - Simulates a spacebar press (`pyautogui.press('space')`) whenever a blink is detected.                                   |
|                                                                       | - Provides visual feedback by updating the GUI button color upon blink detection.                                         |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. User-Friendly GUI                                                  | - Features a compact, movable popup window with a clean and intuitive interface.                                          |
|                                                                       | - Includes buttons for connecting to the LSL stream, starting/stopping blink detection, and quitting the application.     |
|                                                                       | - Displays an eye icon to represent the blink detection status.                                                           |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

A small window appears in the corner, displaying a *Connect* button. Once connected, a *Start* button becomes visible. Pressing the *Start* button initiates blink detection, and each detected blink triggers a spacebar key press.

.. figure:: ./media/keystroke.*
   :align: center
   :alt: Keystroke Emulator

   Keystroke Emulator

9. `CSV Plotter`
================

.. youtube:: wMnCOprRpZo

Overview
--------

The **CSV Plotter** is a Python-based application designed to visualize data from CSV files. Built using the `tkinter` library for the graphical user interface (GUI) and `plotly` for data visualization, this tool allows users to load CSV files, select specific data channels, and generate interactive line plots.

Features
--------

+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                                      |
+=======================================================================+==================================================================================================================================+
| 1. Load CSV Files                                                     | - Users can load CSV files containing data with a `Counter` column and multiple channels (e.g., `Channel1`, `Channel2`, etc.).   |
|                                                                       | - The application automatically detects the header row and skips any metadata above it.                                          |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
| 2. Channel Selection                                                  | - A dropdown menu dynamically populates with available channels (e.g., `Channel1`, `Channel2`, etc.) from the loaded CSV file.   |
|                                                                       | - Users can select a specific channel to plot.                                                                                   |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+
| 3. Interactive Data Visualization                                     | - Utilizes `plotly` to generate interactive line plots for the selected channel.                                                 |
|                                                                       | - Plots include advanced features such as:                                                                                       |
|                                                                       |     - *Zoom*: Zoom in to inspect specific data ranges.                                                                           |
|                                                                       |     - *Pan*: Move across the plot to explore different sections.                                                                 |
|                                                                       |     - *Autoscale*: Automatically adjust the plot scale to fit the data.                                                          |
|                                                                       |     - *Download Plot as PNG*: Save the generated plot as a high-quality PNG image.                                               |
|                                                                       |     - *Hover-to-View Data Points*: Hover over the plot to view precise data values.                                              |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+ 
| 4. User-Friendly Interface                                            | - Simple and intuitive GUI with buttons for loading files and plotting data.                                                     |
|                                                                       | - Displays the name of the loaded CSV file for easy reference.                                                                   |
+-----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+

A small pop-up will appear, providing options to load the file, select the channel, and plot the data.

.. figure:: ./media/csvplotter.*
   :align: center
   :alt: CSV Plotter

   CSV Plotter

10. `EOG Morse Decoder`
=======================

Overview
--------

The **EOG Morse Decoder** is a Python-based application that enables users to input Morse code using eye movements detected via Electrooculography (EOG) signals. By moving your eyes left or right, you can generate dots and dashes, and by performing double or triple blinks, you can send characters or backspace. This application is ideal for hands-free communication and accessibility research.

.. figure:: ./media/morse_decoder.png
   :align: center
   :alt: Morse Decoder

   Morse Decoder

Features
========

+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Features                                                              | Description                                                                                                               |
+=======================================================================+===========================================================================================================================+
| 1. Real-Time EOG Signal Processing                                    | - Connects to an LSL stream to acquire real-time EOG data.                                                                |
|                                                                       | - Applies notch and bandpass filters to remove noise and isolate eye movement signals.                                    |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 2. Eye Movement Detection                                             | - Detects left and right eye movements by analyzing deviations from a dynamically calculated baseline.                    |
|                                                                       | - Uses adjustable thresholds with interactive GUI sliders for real-time sensitivity adjustment.                           |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 3. Morse Code Input                                                   | - Left eye movement generates a dot (.)                                                                                   |
|                                                                       | - Right eye movement generates a dash (-)                                                                                 |
|                                                                       | - Double blink sends the current Morse sequence as a letter.                                                              |
|                                                                       | - Triple blink acts as backspace to delete the last character.                                                            |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 4. Interactive GUI with Real-Time Visualization                       | - Displays the decoded message in a large, clear font using a Tkinter GUI.                                                |
|                                                                       | - Real-time bar graphs showing blink envelope and eye movement deviation.                                                 |
|                                                                       | - Click-and-drag threshold adjustment on visual indicators.                                                               |
|                                                                       | - Shows current buffer contents and detection status.                                                                     |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| 5. Adjustable Parameters                                              | - Interactive threshold adjustment via clickable/draggable markers on visualization bars.                                 |
|                                                                       | - Separate thresholds for blink detection and eye movement detection.                                                     |
|                                                                       | - Configurable debounce times for preventing false detections.                                                            |
+-----------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

A GUI window will appear that allows you to input Morse code using eye movements and displays the decoded text in real-time.

Electrode Placement
-------------------

Proper electrode placement is crucial for accurate EOG signal detection. The table below shows the recommended electrode configuration:

+---------------+------------------------+-----------------------------------+
| Electrode Pin | Description            | Placement                         |
+===============+========================+===================================+
| A0P           | Channel 1 Positive     | Below eye                         |
+---------------+------------------------+-----------------------------------+
| A0N           | Channel 1 Negative     | Above eye                         |
+---------------+------------------------+-----------------------------------+
| A1P           | Channel 2 Positive     | On the left of left eye           |
+---------------+------------------------+-----------------------------------+
| A1N           | Channel 2 Negative     | On the right of right eye         |
+---------------+------------------------+-----------------------------------+
| REF           | Reference              | Bony part behind the ear          |
+---------------+------------------------+-----------------------------------+

.. note::
   - Channel 1 (A0P/A0N) detects vertical eye movements for blink detection
   - Channel 2 (A1P/A1N) detects horizontal eye movements for left/right detection
   - Proper skin preparation and electrode contact quality are essential for optimal performance

.. figure:: ./media/morse-Code_electrode_placement.jpg
   :align: center
   :alt: Electrode Placement Diagram

   Electrode Placement Diagram

How It Works
------------

- **Signal Acquisition**: The application connects to an LSL stream and continuously reads vertical and horizontal EOG data from two channels.
- **Filtering**: Notch filters (50Hz), high-pass filters (1Hz), and low-pass filters (10Hz) are applied to remove powerline interference and isolate relevant frequencies.
- **Baseline Tracking**: A rolling baseline is maintained for horizontal EOG to adapt to individual signal characteristics.
- **Envelope Detection**: Vertical EOG signal envelope is computed for reliable blink detection.
- **Movement Detection**: Horizontal EOG deviations from baseline are analyzed to classify left and right eye movements.
- **Morse Code Input**: 

  - Left eye movement → Dot (.)
  - Right eye movement → Dash (-)
  - Double blink → Sends the current Morse sequence as a letter
  - Triple blink → Backspace (deletes last character)

- **GUI Display**: Real-time visualization shows detection thresholds, signal levels, buffer contents, and decoded message.

Adjusting Detection for Your Neural Signals
-------------------------------------------

The application provides an intuitive GUI for adjusting detection sensitivity in real-time:

**Interactive Threshold Adjustment:**

- **Blink Detection Threshold**: Click or drag the orange marker on the blink detection bar to adjust the threshold (range: 40-260). Higher values require stronger blinks.
- **Eye Movement Threshold**: Click or drag the orange marker on the eye movement bar to adjust the threshold (range: 40-260). Higher values require larger eye movements.

**Visual Feedback:**

- The blink detection bar shows the current envelope value (green when below threshold, red when above)
- The eye movement bar shows deviation from baseline (blue when below threshold, purple for left movement, red for right movement)
- Threshold markers display the current threshold value and can be dragged for adjustment

**Timing Parameters** (adjustable in code if needed):

- ``BLINK_DEBOUNCE_MS`` (default: 200ms): Minimum time between detecting separate blinks
- ``DOUBLE_BLINK_MS`` (default: 1000ms): Time window for double blink detection
- ``TRIPLE_BLINK_MS`` (default: 1500ms): Time window for triple blink detection
- ``EYE_MOVEMENT_DEBOUNCE_MS`` (default: 750ms): Minimum time between detecting separate eye movements

**Tips for Optimal Performance:**

- Make sure NPG Lite is charged and not connected to a charging laptop or an AC powered device 
- Sit away from AC powered appliances
- Ensure proper skin preparation and electrode contact quality. Read the :ref:`Skin Preparation Guide <skin-preparation>` for detailed instructions.
- Start with default threshold values and adjust using the GUI sliders based on your signal strength
- Ensure proper electrode placement for clean vertical and horizontal EOG signals
- Maintain a neutral gaze position during baseline calculation at startup
- Use the real-time visualization bars to monitor signal quality and adjust thresholds accordingly


Troubleshooting
---------------

- If movements are not detected reliably, use the GUI to adjust thresholds in real-time by clicking/dragging the orange markers
- Ensure electrodes are placed correctly: vertical EOG above/below one eye, horizontal EOG at outer corners of both eyes
- Remain relaxed and maintain a neutral gaze position during the initial baseline calculation
- Check the real-time visualization bars to ensure signals are being detected properly
- If blinks or movements are too sensitive, increase the respective threshold using the GUI sliders
- If blinks or movements are not sensitive enough, decrease the threshold using the GUI sliders


Create Custom application
**************************

You can create custom applications using the provided framework by following these steps:

1. Configure Application Metadata:

Edit the ``apps.yaml`` file in the ``config`` folder with your application details:

.. code-block:: yaml

    - title: "Your Application Title"
      icon: "path/to/your/icon.png"
      color: "your_hex_color"
      script: "path/to/{app_name}.py"
      description: "Brief description of your application"
      category: "Your Category"

Add this as a new entry in the YAML list. Replace all placeholders with your actual application details.

.. note::
   - The ``icon`` path should be relative to the application root directory
   - ``color`` should be in HEX format (e.g., "#FF5733")
   - The ``script`` path should point to your Python file

2. Create application script:

Create a new Python script in the main directory with your application name. The script should contain:

- LSL stream connection handling to receive device data
- User interface components using PyQt5/PyQtGraph
- Data processing logic for incoming signals

.. tip::
   Use the existing applications in the repository as reference implementations for:
   - lsl setup and data acquisition
   - Advanced UI layouts
   - Signal processing examples
   - Performance optimization