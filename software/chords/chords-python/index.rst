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

Hardware Requirements
*********************

To use Chords-Python, you need:

- Compatible Development Board: Arduino Uno R3 and R4 Minima
- A USB cable (type depends on board)
- BioAmp Hardware:

  - `BioAmp EXG Pill <https://docs.upsidedownlabs.tech/hardware/bioamp/bioamp-exg-pill/index.html>`_
  - `Muscle BioAmp Biscute <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-biscute/index.html>`_
  - `Muscle BioAmp Candy <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-candy/index.html>`_
  - `Muscle BioAmp Patchy <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-patchy/index.html>`_
  - `Muscle BioAmp Shield <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-shield/index.html>`_

.. note::

   You have to flash  `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ 
   to your Arduino board using Arduino IDE.

How to use Chords-python
************************

Uploading the code
==================

1. Connect the Arduino board to your laptop using the USB cable.
2. Copy and paste the `Arduino Firmware  <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ for your board into the Arduino IDE.
3. Select your board from `Board` section in the tools menu.
4. Choose the correct COM port in the tools menu (the one that disappears when you disconnect the board).
5. Click on the `Upload` button to flash your Arduino board.

Now, you are ready to use Chords-Python.

Using the Software
==================

Follow these steps to set up and install Chords-Python:

1. Ensure you have latest version of Python installed.
2. **Download the GitHub repository**:

   - You can download the Chords-Python repository from GitHub by visiting the following link: `Chords-Python <https://github.com/upsidedownlabs/Chords-Python/>`_.
   - Or, You can clone the repository using Git by running the following command:

   ```
   git clone https://github.com/upsidedownlabs/Chords-Python.git
   ```
3. **Create a Virtual Environment**:
   
   A virtual environment allows you to manage dependencies for your project in isolation.

   - Open a terminal or command prompt.
   - Navigate to the directory where you have cloned the repository.
   - Run the following command to create a virtual environment:

   ```
   python -m venv venv
   ```

   - To activate the virtual environment:
      - **On Windows**:
      ```
      .\venv\Scripts\activate
      ```

      - **On macOS/Linux**:
      ```
      source venv/bin/activate
      ```
4. **Install the Required Python Libraries**:

   Once the virtual environment is activated, you need to install the required libraries for the project.

   - In the terminal or command prompt, run the following command to install the dependencies listed in the `chords_requirements.txt` file:

   ```
   pip install -r chords_requirements.txt
   ```

   - This will install all the necessary Python libraries and dependencies for Chords-Python.

   Once these steps are completed, you will be ready to run the Chords-Python Script.
5. To run the Script, run the following command :

   ```
   python chords.py [Options]
   ```

.. tip::

   Replace `[options]` with any specific flags you want to use.
   Options available are:

- **-p, --port**: Specify the serial port to use (e.g., COM5, /dev/ttyUSB0).(By default it automatically detects the port.)
- **-b, --baudrate** : Set the baud rate for serial communication (default is 230400).
- **--csv**: Enable CSV logging. Data will be saved to a timestamped file.
- **--lsl**: Enable LSL streaming. Sends data to an LSL outlet.
- **-v, --verbose**: Enable verbose output with detailed statistics and error reporting.
- **--inverted**:Invert the signal before streaming LSL and logging.
- **-t** : Enable the timer to run program for a set time in seconds.