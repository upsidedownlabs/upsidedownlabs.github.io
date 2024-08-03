.. _bioamp-visualizer:

Getting Started
###################

Overview
********

The `BioAmp Visualizer <https://docs.upsidedownlabs.tech/BioSignal-Recorder-Web/>`_ is a web application designed for real-time signal visualization, particularly tailored for bio-potential signals. This tool serves as an advanced alternative to the standard Arduino serial plotter, offering enhanced functionality for researchers and enthusiasts working with BioAmp hardware. The application provides a user-friendly interface for displaying time-series data streams, with features including multi-channel plotting, adjustable graph speed, the ability to pause, resume, record and save data in CSV format. By combining these capabilities, the BioAmp Visualizer aims to streamline the process of analyzing and interpreting bio-potential signals.

.. figure:: media/bioamp_visualizer_signals.*
    :align: center
    :alt: BioAmp Visualizer signal

Software Requirements
*********************

* Before using the BioAmp Visualizer, download the `Arduino IDE <https://www.arduino.cc/en/software>`_ to upload Arduino sketches to your development board.
* Any :ref:`bioamp-visualizer-browsers-compatibility`

Hardware Requirements
*********************

To use BioAmp Visualizer, you need:

* A USB cable (Type depends on board)
* Any board from the given table

Compatible Boards:

* Arduino Uno                                                                                                                                                                
* Arduino Nano                                                                                                                                                             
* Maker Uno            

Signal Acquisition
******************

The image below shows a breif preview of connections to device and body, for detailed description we recommend to visit relevant `hardware documentation <https://docs.upsidedownlabs.tech/hardware/>`_.

.. figure:: media/bioamp_visualizer_signal_aquisition.*
    :alt: Signal Acquisition
    :align: center

    Signal Acquisition

.. note::
    For detailed information about signal acquisition hardware, refer to our `hardware documentation <https://docs.upsidedownlabs.tech/hardware/>`_.

How to Use BioAmp Visualizer
****************************

Uploading the Code
========================

To use BioAmp Visualizer:

1. Connect the Arduino Board to your laptop using the USB cable.
2. Copy and paste `Arduino Firmware <https://github.com/upsidedownlabs/BioSignal-Recorder-Web/blob/main/ArduinoFirmware/ArduinoFirmware.ino>`_ into the Arduino IDE.
3. Select your board under the ``Board`` > ``Arduino AVR`` option in the tools menu.
4. Choose the correct COM port in same tools menu (the one that disappears when you disconnect the board).
5. Upload the code and open the `BioAmp Visualizer <https://docs.upsidedownlabs.tech/BioSignal-Recorder-Web/>`_.

Using the Software
===================

1. Click the ``Connect`` button to establish a connection with the Arduino and start streaming.
2. You can click the ``Record`` button to start recording data into a CSV file.
3. To save the recorded data, click the ``Save`` button.

.. figure:: media/bioamp_visualizer_connection.*
    :alt:  Port selection
    :align: center

    Port selection

.. figure:: media/bioamp_visualizer_signals.*
    :alt:  BioAmp Visualizer Signals
    :align: center

    BioAmp Visualizer Signals 

.. list-table::
   :widths: 1 3
   :header-rows: 1

   * - Icons
     - Description
   * - .. figure:: media/bioamp_visualizer_connect.*
        :alt: BioAmp Visualizer Connect
        :align: left
     - Connect
   * - .. figure:: media/bioamp_visualizer_start.*
        :alt: BioAmp Visualizer start
        :align: left
     - Start
   * - .. figure:: media/bioamp_visualizer_stop.*
        :alt: BioAmp Visualizer stop
        :align: left
     - Stop
   * - .. figure:: media/bioamp_visualizer_record.*
        :alt: BioAmp Visualizer record
        :align: left
     - Record
   * - .. figure:: media/bioamp_visualizer_saving.*
        :alt: BioAmp Visualizer save
        :align: left
     - Save

.. _bioamp-visualizer-browsers-compatibility:

Compatible Browsers
*******************

The web application is designed to ensure compatibility with the Web Serial API, which is essential for its functionality. The Web Serial API enables web applications to communicate with serial devices, such as microcontrollers and other hardware interfaces, directly from the browser.

Currently, the Web Serial API is supported by the of Google Chrome, Microsoft Edge and Opera. If the user's browser does not support this API, the application will display a message informing them of the incompatibility and suggesting the use of a supported browser.

For more detailed information on browser compatibility and implementation details, please refer to the `MDN Web Docs on the Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_.

