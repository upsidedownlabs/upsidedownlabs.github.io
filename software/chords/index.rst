.. _chords:

Getting Started
#################

Overview
********
The Chords is a web-based application that utilizes a Web Serial connection for real-time visualization of bio-potential signals, such as ECG, EMG, EOG and EEG. It is designed as an advanced alternative to traditional Arduino serial plotters, providing enhanced features tailored for both researchers and hobbyists working with Arduino boards. 

Chords offers:

- A user-friendly interface for displaying time-series data streams.
- Multi-channel plotting that allows users to easily add or remove channels.
- Zoom-in and zoom-out functionality for better data viewing.
- Options to pause, resume, record, and save data in CSV format.


Software Requirements
*********************

* Before using the Chords, download the `Arduino IDE <https://www.arduino.cc/en/software>`_ .
* Ensure compatibility with supported browsers: see :ref:`chords-browsers-compatibility`.

Hardware Requirements
*********************
To use Chords, you need:

- A USB cable (type depends on board)
- Compatible Board : Arduino Uno R3 And R4 Minima



How to Use Chords
*******************

Uploading the Code
------------------
1. Connect the Arduino board to your laptop using the USB cable.
2. Copy and paste the `Arduino Firmware  <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ into the Arduino IDE.
3. Select your board under `Board > Arduino AVR` in the tools menu.
4. Choose the correct COM port in the tools menu (the one that disappears when you disconnect the board).
5. Upload the code and open Chords in your web browser.

Using the Software
------------------
1. Click the ``Connect`` button to establish a connection with the Arduino and start streaming.
2. Use the ``Play/Pause`` button to control the data stream.
3. Click the ``Record`` button to start recording data into a CSV file.
4. To save the recorded data, click the ``Download`` button.
5. Use the ``Zoom`` button to adjust the data visualization.
6. Change the theme using the ``Theme`` button in the navbar.
7. Click the ``Delete`` button to remove recorded data.
8. Adjust the number of channels by using the ``Plus/Minus`` buttons.

.. _chords-browsers-compatibility:

Browser Compatibility
*********************

The web application is compatible with the **Web Serial API**, which is essential for its functionality. Supported browsers include the latest versions of:

- **Google Chrome**
- **Microsoft Edge**
- **Opera**

If the user's browser does not support the Web Serial API, a message will inform them of the incompatibility, recommending the use of a supported browser.

For more information, refer to MDN Web Docs on the `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_.

Features
========
- **Connection**: Smooth connection/disconnection with a board in a single click.
- **Real-time Visualization**: Jitter-free visualization of incoming data in real-time on Smoothie Charts.
- **Recording**: Record data signals and download them in CSV format.
- **Zoom**: Adjust data visualization using zoom-in and zoom-out functionality.
- **Theme Toggle**: Switch between different themes using button present in navbar.
- **Data Management**: Save or delete recorded data using intuitive buttons.

Recent Updates
***************

**WebGL Plot**
- We previously used the Smoothie charting library, which caused some lag and didn’t provide the smoothest visual experience. By switching to **WebGL Plot**, the visualization of bio-signals is now smoother and more responsive, enhancing data clarity.
  
**New Zoom Feature**
- In the past, an autoscale button was used to adjust the view. Now, with zoom-in and zoom-out functionality, users have more control to view specific data points up close or zoom out for a broader overview.

These changes, combined with the use of **WebGL Plot**, make the rendering of bio-signals efficient, even when working with multiple channels simultaneously.

