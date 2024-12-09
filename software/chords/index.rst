.. _chords:

Getting Started
#################

Overview
********
Chords is an open source web application designed for real-time signal visualization, particularly tailored for bio-potential signals like EEG, EMG, ECG and EOG. This tool serves as an advanced alternative to the standard Arduino IDE serial plotter, offering enhanced functionality for students, researchers and hobbyists alike who want to record biopotential data using  `BioAmp hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_.

.. figure:: media/chords_landing_page.*
    :align: center
    :alt: chords landing page

Features
********
- **Connection**: Effortlessly compatible with BioAmp Hardware and automatically detects the ADC of the development board running the Chords application, simplifying the setup process and ensuring a smooth and efficient workflow from data acquisition to visualization.
- **Real-time Visualization**: Experience smooth real-time visualization of incoming data rendered with `WebGL-Plot <https://github.com/danchitnis/webgl-plot>`_. The system ensures smooth signal display, helping you monitor the signal flow without interruptions or lag.
- **Frame Buffer Feature**:View and save up to the last five snapshots of your data. Snapshots are automatically captured per frame and can be navigated using left/right buttons. Adjusting the channel count resets snapshots for the new configuration. Plus, zoom in or out for a closer look!
- **Recording**: You can record data in CSV format indefinitely or set a timer to stop recording automatically when it expires.
- **Download/Delete**: Easily download or delete recorded data with just a few clicks. Manage your data efficiently, allowing for quick access to relevant data or removal of unwanted data to free up storage.
- **Zoom**: Zoom-in and zoom-out feature, gives you more control as now you can either zoom in to look at signal or zoom out for an overall view.
- **Filter**: You can now add filters to biopotential signals like EMG (70 Hz) using muscles icon, ECG (30 Hz) using heart icon, EOG (10 Hz) using eye icon, EEG (45 Hz) using brain icon and master buttons to apply filters to all channels.
- **Mode Toggle**: Offers both light and dark modes, enabling you to switch according to your preference for a more comfortable user experience.
- **Pause/Play**: Control the data flow on the screen, and use the two additional buttons to move backward and forward through previous and next frames.
- **Channel**: Supports plotting of up to six channels of data simultaneously in real time where each stream is color coded differently for easy identification.
- **Disconnect**: Terminate the connection to the development board with a simple click. This functionality ensures a hassle-free disconnection process when you’re done with data collection or visualization.


Software Requirements
*********************

* You have to install `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ using arduino IDE.
* For now Chords is compatible with chromium based browsers. To ensure compatibility with supported browsers, see :ref:`chords-browsers-compatibility`.

Hardware Requirements
*********************
To use Chords, you need:

- Compatible Development Board : Arduino Uno R3, R4 Minima and Maker Uno.
- A USB cable (type depends on board)
- BioAmp Hardware : 

  - `BioAmp EXG Pill <https://docs.upsidedownlabs.tech/hardware/bioamp/bioamp-exg-pill/index.html>`_
  - `Muscle BioAmp Biscute <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-biscute/index.html>`_
  - `Muscle BioAmp Candy <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-candy/index.html>`_
  - `Muscle BioAmp Patchy <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-patchy/index.html>`_
  - `Muscle BioAmp Shield <https://docs.upsidedownlabs.tech/hardware/bioamp/muscle-bioamp-shield/index.html>`_
  

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
2. Use the ``Zoom in/out`` button to adjust the data visualization.
2. Use the ``Play/Pause`` button to control the data stream.
3. Click the ``Record`` button to start recording data into a CSV file.
4. To save the recorded data, click the ``Download`` button.
5. Click the ``Delete`` button to remove recorded data.
6. Change the mode using the ``Mode`` button which is present in the navbar. 
7. Add ``Filter`` button for EMG, ECG, EOG, and EEG filters with ``muscle``, ``heart``, ``eye``, and ``brain`` icons or master buttons for all channels.
8. Adjust the number of channels by using the ``Plus/Minus`` buttons.

Chords Icons
************

.. list-table::
   :widths: 1 3
   :header-rows: 1

   * - Icons
     - Description
   * - .. figure:: media/chords_connect.*
        :alt: chords Connect
        :align: left
        :width: 20px
        :height: 20px
     - Connect
   * - .. figure:: media/chords_zoom_in.*
        :alt: chords zoom in
        :align: left
        :width: 20px
        :height: 20px
     - Zoom in
   * - .. figure:: media/chords_zoom_out.*
        :alt: chords zoom out
        :align: left
        :width: 20px
        :height: 20px
     - Zoom out
   * - .. figure:: media/chords_pause.*
        :alt: chords pause
        :align: left
        :width: 20px
        :height: 20px
     - Pause
   * - .. figure:: media/chords_resume.*
        :alt: chords resume
        :align: left
        :width: 20px
        :height: 20px
     - Resume
   * - .. figure:: media/chords_record.*
        :alt: chords record
        :align: left
        :width: 20px
        :height: 20px
     - Record
   * - .. figure:: media/chords_save.*
        :alt: chords save
        :align: left
        :width: 20px
        :height: 20px
     - Save
   * - .. figure:: media/chords_delete.*
        :alt: chords delete
        :align: left
        :width: 20px
        :height: 20px
     - Delete
   * - .. figure:: media/chords_plus.*
        :alt: chords plus
        :align: left
        :width: 20px
        :height: 20px
     - Increase Channel
   * - .. figure:: media/chords_minus.*
        :alt: chords minus
        :align: left
        :width: 20px
        :height: 20px
     - Decrease Channel
   * - .. figure:: media/chords_light_mode.*
        :alt: chords light theme
        :align: left
        :width: 20px
        :height: 20px
     - Light Mode
   * - .. figure:: media/chords_dark_mode.*
        :alt: chords dark theme
        :align: left
        :width: 20px
        :height: 20px
     - Dark Mode
    
    

.. _chords-browsers-compatibility:

Browser Compatibility
*********************

The web application is compatible with the **Web Serial API**, which is essential for its functionality. Supported browsers include the latest versions of:

- **Google Chrome**
- **Microsoft Edge**
- **Opera**

If the user's browser does not support the Web Serial API, a message will inform them of the incompatibility, recommending the use of a supported browser.

For more information, refer to MDN Web Docs on the `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_.


Technologies Used
*******************
- **Next.js**: A framework built on top of React.js.
- **Web Serial API**: API for serial communication with devices.
- **Tailwind CSS**: Utility-first CSS framework.
- **Shadcn UI**: Reusable and customizable components, built with Radix UI.
- **WebGL Plot**: Real-time charting library.
- **IndexedDB API**: Browser-based database for storing recorded data.

.. figure:: media/chords_tech_stack.*
    :align: center
    :alt: chords tech stack

  


In earlier versions of the application, selecting the COM port was necessary each time you connected to your development board. Now imagine connecting your device effortlessly—no repetitive setup required. With the capability of Direct Device Connection, your previously connected devices are now saved in local storage. This means you can start visualising the biopotential signals instantly without the need to reselect the board.

We have removed repetitive COM port selection process! So any previously connected devices are saved in local storage, allows you to just click on connect button & start visualising biopotential signals instantly.



