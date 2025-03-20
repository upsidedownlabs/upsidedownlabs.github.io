.. _chords-python:

Chords-Python
##############

.. youtube:: bj7exKRsuZ8

Overview
********

Chords Python script is designed to interface with an Arduino-based bio-potential amplifier, read data from it, optionally log this data to CSV or stream it via the Lab Streaming Layer (LSL).

Features
********

- **Automatic Arduino Detection**: The tool automatically scans and detects connected Arduino devices, streamlining setup by eliminating manual port configuration. This ensures quick and user-friendly selection of the correct device for data acquisition.
- **Data Reading**: The system reads data packets from the Arduino in real-time, efficiently processing them to ensure no data loss and accurate signal representation for analysis or visualization.
- **CSV Logging**: An optional feature logs incoming data to a CSV file with columns for Counter and upto 6-Channel data, enabling easy storage for analysis or sharing.
- **LSL Streaming**: The tool streams data via Lab Streaming Layer (LSL), a protocol for time-synchronized data sharing, enabling real-time analysis, visualization, or integration with platforms like BrainVision LSL Viewer.
- **Verbose Output**: This feature provides detailed output, including real-time statistics and error reporting. It tracks the sampling rate, signal drift, and other key metrics to ensure the data acquisition process is smooth.
- **Inverted Signal**: Users can invert the signal in software to correct electrode placement issues without needing physical adjustments, ensuring seamless experimentation.
- **Timer**: This feature enables time-based recording, automatically stopping after a user-defined duration in seconds. Ideal for experiments requiring specific data intervals, it simplifies automated data collection.

Software Requirements  
=====================

- `Arduino IDE <https://www.arduino.cc/en/software>`_ – Required to upload the Chords Arduino firmware to your development board.  
- `Python <https://www.python.org/downloads/>`_ – Ensure you have the most recent version installed.  
- `VS Code <https://code.visualstudio.com/>`_ or any other code editor (Alternatively, you can use the Command Prompt).  

Hardware Requirements
=====================

To use Chords-Python, you need:

- A development board (`Compatible Boards <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/blob/main/README.md>`_)  
- A USB cable (type depends on the board)
- `BioAmp Hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_ and its accessories

Setting up the hardware:
------------------------

Make all the connections according to the `hardware you are using <https://docs.upsidedownlabs.tech/hardware/index.html>`_ , including sensor connections with the development board, body connections with the sensor, and connections from the development board to your laptop.[Link]

Uploading the code:
-------------------

Once you are all set, it is time to upload the code to your development board. Go to `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_. GitHub repo, scroll down to the supported boards table, find your board name, and click on the Arduino sketch corresponding to that row.

Copy the sketch and paste it into Arduino IDE.

Go to tools, select your board, and the correct COM port. Now, hit the upload button.

Opening Chords-Python:
----------------------

Follow these steps to set up and install Chords-Python:

1. Ensure you have latest version of Python installed.
2. **Download the GitHub repository**:

   - You can download the Chords-Python repository from GitHub by visiting the following link: `Chords-Python <https://github.com/upsidedownlabs/Chords-Python/>`_.
   - Or, You can clone the repository using Git by running the following command:

   .. code-block:: python
      
      git clone https://github.com/upsidedownlabs/Chords-Python.git

3. **Create a Virtual Environment**:
   
   A virtual environment allows you to manage dependencies for your project in isolation.

   - Open a terminal or command prompt.
   - Navigate to the directory where you have cloned the repository.
   - Run the following command to create a virtual environment:

   .. code-block:: python
      
      python -m venv venv

   - To activate the virtual environment:
      - **On Windows**:
      .. code-block:: python

         .\venv\Scripts\activate

      - **On macOS/Linux**:
      .. code-block:: python
         
         source venv/bin/activate

4. **Install the Required Python Libraries**:

   Once the virtual environment is activated, you need to install the required libraries for the project.

   - In the terminal or command prompt, run the following command to install the dependencies needed to run the python script listed in the `chords_requirements.txt` file:

   .. code-block:: python
      
      pip install -r chords_requirements.txt

   - This will install all the necessary Python libraries and dependencies for Chords-Python.

   Once these steps are completed, you will be ready to run the Chords-Python Script.
5. To run the Script, run the following command :

   .. code-block:: python
      
      python chords.py [options]

.. tip::

   Replace `[options]` with any specific flags you want to use.

Options available are:

- **-p, --port**: Specify the serial port to use (e.g., COM5, /dev/ttyUSB0).(By default it automatically detects the port.)
- **-b, --baudrate** : Set the baud rate for serial communication (By default the script will first attempt to use 230400, and if that fails, it will automatically fallback to 115200.)
- **--csv**: Enable CSV logging. Data will be saved to a timestamped file.
- **--lsl**: Enable LSL streaming. Sends data to an LSL outlet.
- **-v, --verbose**: Enable verbose output with detailed statistics and error reporting.
- **--inverted**: Invert the signal before streaming LSL and logging.
- **-t** : Enable the timer to run program for a set time in seconds.

Example:
If you run the following command:

.. code-block:: python
   
   python chords.py --lsl -v --csv -t 60

Then, This command executes the Python script chords.py, initiates the LSL stream, enables verbose output, activates CSV logging, and script runs for 60 seconds.

Applications:
#############

Open another terminal and run any application. Ensure the LSL Stream is running first.

.. note::

Before running any application, install all the dependencies required. Run the following command in a new terminal:

.. code-block:: python
   
   pip install -r app_requirements.txt

After installing the dependencies, you can run any of the following applications by executing the corresponding command in a new terminal.

List of available applications:

1. `Heart Rate with ECG`
************************

.. youtube:: tZud2tc-TGI

Overview
=========

The **Heart Rate with ECG** is a real-time application designed to visualize and analyze Electrocardiogram (ECG) data using the Lab Streaming Layer (LSL) protocol. Built with Python and PyQt5, this application provides a graphical interface for monitoring ECG signals, detecting R-peaks (heartbeats), and calculating the heart rate in real time. It leverages signal processing techniques and the `neurokit2` library for accurate R-peak detection and heart rate estimation.

Features
=========

1. Real-Time ECG Visualization:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Displays real-time ECG signals in a dynamic plot using `pyqtgraph`.
   - Supports adjustable y-axis scaling based on the sampling rate (e.g., 250 Hz or 500 Hz).

2. R-Peak Detection:
~~~~~~~~~~~~~~~~~~~~

   - Utilizes the `neurokit2` library to detect R-peaks in the ECG signal.
   - Highlights detected R-peaks as red dots on the plot for easy visualization.

3. Heart Rate Calculation:
~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Computes heart rate (in BPM) using the time intervals between consecutive R-peaks.
   - Implements a moving average filter to smooth heart rate values and reduce noise.

4. Interactive GUI:
~~~~~~~~~~~~~~~~~~~

   - Built with PyQt5, providing a user-friendly interface with a real-time ECG plot and heart rate display.
   - Allows double-click to reset the plot's zoom level to default settings.

5. Signal Filtering:
~~~~~~~~~~~~~~~~~~~~

   - Applies a low-pass Butterworth filter to remove high-frequency noise from the ECG signal.
   - Ensures clean and accurate R-peak detection.

Running the Application
=======================

To run the Heart Rate with ECG application, execute the following command in a terminal:

.. code-block:: python

   python heartbeat_ecg.py

.. figure:: ./media/heartbeat_ecg.*
    :align: center
    :alt: Heart Rate with ECG

2. `EMG with Envelope`
**********************

Overview
=========

The **EMG with Envelope** is a Python-based application designed to visualize and analyze Electromyography (EMG) signals in real-time. It connects to an EMG data stream using the Lab Streaming Layer (LSL) protocol, processes the signal to extract the EMG envelope, and displays both the filtered EMG signal and its envelope in a user-friendly graphical interface. Built with `PyQt5` and `pyqtgraph`, the application provides a responsive and interactive visualization tool for researchers, clinicians, or developers working with EMG data.

Features
=========

1. Real-Time EMG Signal Visualization:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Connects to an LSL stream to acquire real-time EMG data.
   - Displays the raw EMG signal after applying a high-pass filter (70 Hz cutoff) to remove low-frequency noise.

2. EMG Envelope Extraction:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Computes the Root Mean Square (RMS) envelope of the filtered EMG signal using a moving window.
   - Visualizes the EMG envelope alongside the filtered EMG signal for easy comparison.

3. Interactive and Responsive GUI:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Built using `PyQt5` for a modern and intuitive user interface.
   - Features two synchronized plots: one for the filtered EMG signal and one for the EMG envelope.
   - Disables zoom and pan for a clean, fixed-axis visualization.

4. Customizable Signal Processing:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Implements a high-pass Butterworth filter to remove baseline drift and noise.
   - Adjusts the RMS window size dynamically based on the sampling rate (e.g., 25 samples for 250 Hz, 50 samples for 500 Hz).

5. Dynamic Plot Updates:
~~~~~~~~~~~~~~~~~~~~~~~~

   - Updates the plots in real-time using a fixed-size circular buffer for efficient data handling.
   - Refreshes the display every 15 milliseconds for smooth and responsive visualization.

Running the Application
=======================

To run the EMG with Envelope, execute the following command in a terminal:

.. code-block:: python

   python emgenvelope.py

.. figure:: ./media/emgenvelope.*
    :align: center
    :alt: EMG with Envelope

3. `EOG with Blinks`
********************

Overview
=========

The **EOG with Blinks** is a Python-based application designed to visualize and detect eye blinks in real-time using Electrooculography (EOG) signals. Built with the PyQt5 framework and PyQtGraph for plotting, the application connects to an LSL (Lab Streaming Layer) stream to acquire EOG data, processes the signal using a low-pass filter, and detects blinks based on dynamic thresholds. The application provides a dual-plot interface to display the filtered EOG signal and detected blinks, making it a useful tool for real-time monitoring and analysis of EOG data.

Features
=========

1. Real-Time EOG Signal Visualization:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Displays the filtered EOG signal in real-time using a low-pass filter (10 Hz cutoff).
   - Dynamically updates the plot with a 5-second rolling window for continuous monitoring.

2. Blink Detection:
~~~~~~~~~~~~~~~~~~~

   - Detects blinks by identifying peaks in the filtered EOG signal.
   - Uses a dynamic threshold based on the mean and standard deviation of the signal to distinguish blinks from noise.
   - Implements a minimum time gap (0.1 seconds) between detected blinks to avoid false positives.

3. Dual-Plot Interface:
~~~~~~~~~~~~~~~~~~~~~~~

   - EOG Signal Plot: Displays the filtered EOG signal with detected peaks marked in red.
   - Blink Detection Plot: Shows a binary representation of detected blinks (1 for blink, 0 for no blink).

4. User-Friendly GUI:
~~~~~~~~~~~~~~~~~~~~~

   - Built with PyQt5 for a responsive and intuitive interface.
   - Includes features like grid lines, auto-scaling, and zoom disablement for better usability.


Running the Application
=======================

To run the EOG with Blink Detection, execute the following command in a terminal:

.. code-block:: python

   python eog.py

.. figure:: ./media/eog.*
    :align: center
    :alt: EOG with Blinks

4. `EEG with FFT`
*****************

Overview
=========

The **EEG with FFT and Brainwave Power** is a Python-based application designed to visualize and analyze Electroencephalography (EEG) signals in real-time. It connects to an EEG data stream using the Lab Streaming Layer (LSL) protocol, processes the signal to remove noise, and performs Fast Fourier Transform (FFT) to compute the power of different brainwave frequency bands (Delta, Theta, Alpha, Beta, and Gamma). The application provides a graphical user interface (GUI) built with `PyQt5` and `pyqtgraph` for real-time visualization of raw EEG signals, FFT results, and brainwave power distribution.

Features
=========

1. Real-Time EEG Signal Visualization:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Displays raw EEG signals in a real-time scrolling plot.
   - Utilizes a moving window of 500 samples for continuous visualization.

2. Signal Processing:
~~~~~~~~~~~~~~~~~~~~~

   - Applies a notch filter to remove 50 Hz powerline interference.
   - Uses a bandpass filter (0.5-48 Hz) to isolate relevant EEG frequencies.
   - Implements a Hanning window for FFT computation to reduce spectral leakage.

3. Fast Fourier Transform (FFT):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Computes the FFT of the EEG signal to analyze its frequency components.
   - Visualizes the FFT results in a separate plot, focusing on the 0-50 Hz range.

4. Brainwave Power Analysis:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Calculates the power of five brainwave frequency bands:
     - Delta (0.5-4 Hz)
     - Theta (4-8 Hz)
     - Alpha (8-13 Hz)
     - Beta (13-30 Hz)
     - Gamma (30-45 Hz)
   - Displays the power of each band in a bar chart for easy comparison.

5. User-Friendly GUI:
~~~~~~~~~~~~~~~~~~~~~

   - Provides a clean and intuitive interface with two main sections:
     - Top Section: Real-time EEG signal plot.
     - Bottom Section: FFT plot and brainwave power bar chart.
   - Allows users to monitor EEG data and its frequency components simultaneously.

Running the Application
=======================

To run the EEG with FFT, execute the following command in a terminal:

.. code-block:: python

   python ffteeg.py

.. figure:: ./media/ffteeg.*
    :align: center
    :alt: EEG with FFT

5. `EEG Tug of War Game`
************************

.. youtube:: XAhcYg1J_7k

Overview
=========

The **EEG Tug of War Game** is a Python-based application that leverages Electroencephalography (EEG) signals to create an interactive two-player game. Players control the movement of a ball on the screen by modulating their brain activity, specifically the Alpha and Beta frequency bands. The game uses the Lab Streaming Layer (LSL) protocol to acquire real-time EEG data, processes the signals to calculate relative power in the Alpha and Beta bands, and translates these into forces that move the ball. The first player to push the ball to the opponent's side wins the game. The application is built using the `pygame` library for the graphical interface and integrates with `pylsl` for EEG data acquisition.

Features
=========

1. Real-Time EEG Signal Processing:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Connects to an LSL stream to acquire real-time EEG data.
   - Computes the power spectral density (PSD) of Alpha (8-13 Hz) and Beta (13-30 Hz) frequency bands using Welch's method.
   - Calculates the relative power ratio (Beta/Alpha) to determine player force.

2. Interactive Gameplay:
~~~~~~~~~~~~~~~~~~~~~~~~

   - Two players compete to move a ball to the opponent's side using their brain activity.
   - The ball's movement is determined by the net force derived from the players' EEG signals.

3. Dynamic Thresholding:
~~~~~~~~~~~~~~~~~~~~~~~~

   - Uses a moving average of the last 10 data points to smooth the force calculations.
   - Applies a threshold to prevent small fluctuations from affecting the ball's movement.

4. User-Friendly GUI:
~~~~~~~~~~~~~~~~~~~~~

   - Features a full-screen graphical interface with a central ball and two player paddles.
   - Displays real-time updates of the ball's position and forces applied by each player.
   - Includes buttons for starting, pausing, resuming, and exiting the game.

5. Win Condition and Feedback:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Declares a winner when the ball reaches either side of the screen.
   - Plays a sound effect to celebrate the winner.
   - Automatically pauses the game upon a win and allows for a restart.

Running the Application
=======================

To run the EEG Tug of War, execute the following command in a terminal:

.. code-block:: python

   python game.py

.. figure:: ./media/game.*
    :align: center
    :alt: EEG Tug of War

The link for the Instructrables of this EEG Tug of War Game is [here](https://www.instructables.com/Play-Tug-of-War-Game-With-Your-Mind-Using-EEG-1/#ible-footer-portal)

6. `EEG Beetle Game`
********************

Overview
=========

The **EEG Beetle Game** is a Python-based application that uses Electroencephalography (EEG) signals to control a beetle's movement in a 2D game environment. The game leverages the Lab Streaming Layer (LSL) protocol to acquire real-time EEG data, processes the signal to detect the user's focus level, and translates it into upward or downward movement of the beetle. The application is built using the `pygame` library for the game interface and integrates signal processing techniques to analyze EEG data in real-time.

Features
=========

1. Real-Time EEG Signal Processing:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Connects to an LSL stream to acquire real-time EEG data.
   - Implements a notch filter to remove 50 Hz power line interference and a bandpass filter to isolate relevant EEG frequency bands (0.5–48 Hz).

2. Focus Level Calculation:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Computes the user's focus level by analyzing the power spectral density of the EEG signal.
   - Focus level is calculated using the ratio of high-frequency (beta and gamma) to low-frequency (delta, theta, and alpha) power bands.

3. Calibration System:
~~~~~~~~~~~~~~~~~~~~~~

   - Includes a calibration phase to establish a baseline focus level for the user.
   - Dynamically sets a focus threshold based on the user's EEG data during calibration.

4. Beetle Movement Control:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Moves the beetle upward when the user's focus level exceeds the threshold.
   - Moves the beetle downward when the focus level is below the threshold.
   - Implements smooth animation and boundary constraints to ensure the beetle stays within the game window.

5. Interactive Game Interface:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Features a 2D game environment with a beetle sprite that responds to the user's focus level.
   - Displays real-time feedback on the beetle's position and focus level.

6. Dynamic Animation:
~~~~~~~~~~~~~~~~~~~~~

   - Uses a sequence of beetle sprites to create smooth animations.
   - Adjusts animation speed based on the game's frame rate.

Running the Application
=======================

To run the EEG Beetle Game, execute the following command in a terminal:

.. code-block:: python

   python beetle.py

.. figure:: ./media/beetle.*
    :align: center
    :alt: EEG Beetle Game

7. `GUI`
********

.. youtube:: BseTIdoimws

Overview
=========

The **GUI** application is a Python-based tool designed to visualize real-time data streams from an Arduino device using the Lab Streaming Layer (LSL) protocol. The application connects to an LSL stream, retrieves multi-channel data, and plots it in real-time using the `pyqtgraph` library.

Features
=========

1. LSL Stream Integration:
~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Automatically searches for and connects to available LSL streams.
   - Supports dynamic detection of the number of channels in the stream.
   - Displays connection status and channel count in the GUI.

2. Real-Time Data Visualization:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Plots real-time data for each channel in separate graphs.
   - Updates plots at a high frequency for smooth visualization.

3. Customizable GUI:
~~~~~~~~~~~~~~~~~~~~

   - Built using `PyQt` and `pyqtgraph` for a responsive and interactive interface.
   - Features a clean layout with individual plots for each channel.
   - Includes a status bar to display LSL connection details.

4. Efficient Data Handling:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Uses a rolling buffer to store the last 2000 samples for each channel.
   - Implements downsampling and clipping to optimize performance and memory usage.

Running the Application
=======================

To run the GUI Visualization, execute the following command in a terminal:

.. code-block:: python

   python gui.py

.. figure:: ./media/gui.*
    :align: center
    :alt: GUI

8. `EOG Keystroke Emulator`
***************************

Overview
========

The **EOG Keystroke Emulator** is a Python-based application designed to detect eye blinks using Electrooculography (EOG) signals and translate them into keystrokes. The application leverages the Lab Streaming Layer (LSL) protocol to acquire real-time EOG data, processes the signal to detect blinks, and simulates a spacebar press whenever a blink is detected. The application is built using the `tkinter` library for the graphical user interface (GUI) and integrates with `pyautogui` for keystroke emulation.

Features
========

1. Real-Time EOG Signal Processing:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Connects to an LSL stream to acquire real-time EOG data.
   - Implements a low-pass filter to smooth the EOG signal for accurate blink detection.

2. Blink Detection:
~~~~~~~~~~~~~~~~~~~

   - Detects blinks by identifying peaks in the filtered EOG signal.
   - Uses a dynamic threshold based on the mean and standard deviation of the signal to distinguish blinks from noise.
   - Incorporates a refractory period to prevent multiple detections from a single blink.

3. Keystroke Emulation:
~~~~~~~~~~~~~~~~~~~~~~~~

   - Simulates a spacebar press (`pyautogui.press('space')`) whenever a blink is detected.
   - Provides visual feedback by updating the GUI button color upon blink detection.

4. User-Friendly GUI:
~~~~~~~~~~~~~~~~~~~~~

   - Features a compact, movable popup window with a clean and intuitive interface.
   - Includes buttons for connecting to the LSL stream, starting/stopping blink detection, and quitting the application.
   - Displays an eye icon to represent the blink detection status.

Running the Application
=======================

To run the EOG Keystroke Emulator, execute the following command in a terminal:

.. code-block:: python

   python keystroke.py

.. figure:: ./media/keystroke.*
    :align: center
    :alt: Keystroke

9. `CSV Plotter`
****************

.. youtube:: wMnCOprRpZo

Overview
========

The **CSV Plotter** is a Python-based application designed to visualize data from CSV files. Built using the `tkinter` library for the graphical user interface (GUI) and `plotly` for data visualization, this tool allows users to load CSV files, select specific data channels, and generate interactive line plots.

Features
========

1. Load CSV Files:
~~~~~~~~~~~~~~~~~~

   - Users can load CSV files containing data with a `Counter` column and multiple channels (e.g., `Channel1`, `Channel2`, etc.).
   - The application automatically detects the header row and skips any metadata above it.

2. Channel Selection:
~~~~~~~~~~~~~~~~~~~~~

   - A dropdown menu dynamically populates with available channels (e.g., `Channel1`, `Channel2`, etc.) from the loaded CSV file.
   - Users can select a specific channel to plot.

3. Interactive Data Visualization:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Utilizes `plotly` to generate interactive line plots for the selected channel.
   - Plots include advanced features such as:
         - Zoom: Zoom in to inspect specific data ranges.
         - Pan: Move across the plot to explore different sections.
         - Autoscale: Automatically adjust the plot scale to fit the data.
         - Download Plot as PNG: Save the generated plot as a high-quality PNG image.
         - Hover-to-View Data Points: Hover over the plot to view precise data values.

4. User-Friendly Interface:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   - Simple and intuitive GUI with buttons for loading files and plotting data.
   - Displays the name of the loaded CSV file for easy reference.

Running the Application
=======================

To run the CSV Plotter, execute the following command in a terminal:

.. code-block:: python

   python csvplotter.py

.. figure:: ./media/csvplotter.*
    :align: center
    :alt: CSV Plotter