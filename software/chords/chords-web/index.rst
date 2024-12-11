.. _chords:

Chords-Web
#################

Overview
********

Chords is an open source web application designed for real-time signal visualization, particularly tailored for bio-potential signals like EEG, EMG, ECG and EOG. This tool serves as an advanced alternative to the standard Arduino IDE serial plotter, offering enhanced functionality for students, researchers and hobbyists alike who want to record biopotential data using  `BioAmp hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_.

.. figure:: ./media/chords_landing_page.*
    :align: center
    :alt: Chords Landing Page

Features
********
- **Connection**: Effortlessly compatible with BioAmp Hardware and automatically detects the ADC of the development board running the Chords application, simplifying the setup process and ensuring a smooth and efficient workflow from data acquisition to visualization.

.. figure:: ./media/chords_connection.*
    :align: center
    :alt: Chords Connection

- **Board Support** : We have support for Arduino UNO R3, R4 and Maker UNO. Chords should now work for other Arduino R3 clones with CH340 USB to UART Chips as well.
- **Real-time Visualization**: Experience smooth real-time visualization of incoming data rendered with `WebGL-Plot <https://github.com/danchitnis/webgl-plot>`_. The system ensures smooth signal display, helping you monitor the signal flow without interruptions or lag.
- **Frame Buffer Feature**: View and save up to the last five snapshots of your data. Snapshots are automatically captured per frame and can be navigated using left/right buttons. Adjusting the channel count resets snapshots for the new configuration. Plus, zoom in or out for a closer look!
- **Recording**: You can record data in CSV format indefinitely or set a timer to stop recording automatically when it expires.
- **Download/Delete**: Easily download or delete recorded data with just a few clicks. Manage your data efficiently, allowing for quick access to relevant data or removal of unwanted data to free up storage.
- **Zoom**: Zoom-in and zoom-out feature, gives you more control as now you can either zoom in to look at signal or zoom out for an overall view.
- **Filter**: You can now add filters to biopotential signals like EMG (70 Hz) using muscles icon, ECG (30 Hz) using heart icon, EOG (10 Hz) using eye icon, EEG (45 Hz) using brain icon and master buttons to apply filters to all channels.

.. figure:: ./media/chords_filter.*
    :align: center
    :alt: Chords Filter

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
==================

1. Connect the Arduino board to your laptop using the USB cable.
2. Copy and paste the `Arduino Firmware  <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ into the Arduino IDE.
3. Select your board under `Board > Arduino AVR` in the tools menu.
4. Choose the correct COM port in the tools menu (the one that disappears when you disconnect the board).
5. Upload the code and open Chords in your web browser.


Using the Software
==================

1. Click the ``Connect`` button to establish a connection with the Arduino and start streaming.
2. Use the ``Zoom in/out`` button to adjust the data visualization.
3. Use the ``Play/Pause`` button to control the data stream.
4. Click the ``Record`` button to start recording data into a CSV file.
5. To save the recorded data, click the ``Download`` button.
6. Click the ``Delete`` button to remove recorded data.
7. Change the mode using the ``Mode`` button which is present in the navbar. 
8. Add ``Filter`` button for EMG, ECG, EOG and EEG filters with ``muscle``, ``heart``, ``eye`` and ``brain`` icons or master buttons for all channels.
9. Adjust the number of channels by using the ``Plus/Minus`` buttons.

Chords Icons
************

.. figure:: ./media/chords_icons.*
    :align: center
    :alt: Chords Icons

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
            :width: 50px
            :height: 50px
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
            :width: 50px
            :height: 50px
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
            :width: 50px
            :height: 50px
            :align: center

         **IndexedDB API**  
         Local database for web applications.


.. figure:: ./media/chords_tech_stack.*
    :align: center
    :alt: Chords Tech Stack

