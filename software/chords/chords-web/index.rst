.. _chords:

Chords-Web
###############

Overview
********

Chords-Web is an open-source web application designed for real-time signal visualization, particularly tailored for bio-potential signals like EEG, EMG, ECG and EOG. This tool serves as an advanced alternative to the standard Arduino IDE serial plotter, offering enhanced functionality for students, researchers and hobbyists alike who want to record biopotential data using  `BioAmp hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_.

.. figure:: ./media/chords_landing_page.*
    :align: center
    :alt: Chords-Web Landing Page

Features
********
- **Connection**: Effortlessly compatible with BioAmp Hardware and automatically detects the development board running the Chords-Web Arduino Firmware, simplifying the setup process and ensuring a smooth and efficient workflow from data acquisition to visualization.

.. figure:: ./media/chords_connection.*
    :align: center
    :alt: Chords-Web Connection

- **Board Support** : You can check out `Compatible Development Board <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_.
- **Real-time Visualization**: Experience smooth real-time visualization of incoming data rendered with `WebGL-Plot <https://github.com/danchitnis/webgl-plot>`_. The system ensures smooth signal display, helping you monitor the signal flow without interruptions or lag.
- **Frame Buffer Feature**: View and save up to the last five snapshots of your data. Snapshots are automatically captured per frame and can be navigated using left/right buttons. Adjusting the channel count resets snapshots for the new configuration. Plus, zoom in or out for a closer look!
- **Recording**: You can record data in CSV format indefinitely or set a timer to stop recording automatically when it expires.
- **Download/Delete**: You can manage recorded files more efficiently with a popover menu to download or delete individual files stored in IndexedDB. Additionally, buttons to download all files as a ZIP or delete them in one click.
- **Zoom**: Zoom-in and zoom-out feature, gives you more control as now you can either zoom in to look at signal or zoom out for an overall view.
- **Filter**: You can easily enhance biopotential signal quality with intuitive filter controls. select the muscle icon to apply a 70 Hz high-pass filter for EMG signals, improving their clarity. For ECG signals, click the heart icon to activate a 30 Hz low-pass filter for accurate heart rhythm visualization. The eye icon applies a 10 Hz low-pass filter to EOG signals, reducing high-frequency noise, while the brain icon enables a 45 Hz low-pass filter to enhance EEG signal analysis. Use the master button to apply these filters across all channels.

.. figure:: ./media/chords_filter.*
    :align: center
    :alt: Chords-Web Filter

- **Channel**: Supports plotting of multiple channels of data simultaneously in real time where each stream is color coded differently for easy identification.
- **Disconnect**: Terminate the connection to the development board with a simple click. This functionality ensures a hassle-free disconnection process when you’re done with data collection or visualization.


Software Requirements
*********************

* You have to flash `Chords-Web Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ to your development board using Arduino IDE.
* For now Chords-Web is compatible with chromium based browsers. To ensure compatibility with supported browsers, see :ref:`chords-browsers-compatibility`.

Hardware Requirements
*********************

- `Compatible Development Board <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_
- A USB cable (type depends on board)
- `BioAmp Hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_
  
How to Use Chords-Web
*********************

Uploading the Code
==================

1. Connect the Arduino board to your laptop using the USB cable.
2. Copy and paste the `Arduino Firmware  <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_  for your board into the Arduino IDE.
3. Select your board under `Tools > Board`.
4. Choose the correct COM port in the tools menu (the one that disappears when you disconnect the board).
5. Upload the code and open Chords-Web in your web browser.


Using the Software
==================

1. Click the ``Connect`` button to establish a connection with the Arduino and start streaming.
2. Use the ``ZoomIn/ZoomOut`` button to adjust the data visualization.
3. Use the ``Play/Pause`` button to control the data stream. Navigate the last five snapshots with the ``Left/Right`` buttons in the Frame Buffer feature.
4. Click the ``Record`` button to start recording data into a CSV file.
5. To save the recorded data, click the ``Download`` button.
6. Click the ``Delete`` button to remove recorded data.
7. Click ``Filter`` button for EMG, ECG, EOG and EEG filters with ``muscle``, ``heart``, ``eye`` and ``brain`` icons or master buttons for all channels. You can apply 50Hz or 60Hz filter to individual or all channel.
8. Adjust the number of channels by using the ``Plus/Minus`` buttons.

Chords-Web Icons
************

.. figure:: ./media/chords_icons.*
    :align: center
    :alt: Chords-Web Icons

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

.. only:: html

   .. grid:: 2 2 2 2
      :margin: 4 4 0 0
      :gutter: 2

      .. grid-item-card:: 
         :text-align: center
         :link: https://nextjs.org/
         :link-type: url

         .. image:: https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg
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

         .. image:: media/chords_serialdevice.*
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

         .. image:: ./media/chords_tailwindcss.*
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

         .. image:: ./media/chords_shadcn.*
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

         .. image:: ./media/chords_webgl_plot.*
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

         .. image:: ./media/chords_Indexeddbdark.*
            :alt: IndexedDB API Logo
            :width: 40px
            :height: 40px
            :align: center

         **IndexedDB API**  
         Local database for web applications.


.. figure:: ./media/chords_tech_stack.*
    :align: center
    :alt: Chords-Web Tech Stack

