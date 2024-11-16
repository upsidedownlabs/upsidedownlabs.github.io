.. _resolve-software-issues:

Resolving software issues
#############################

:bdg-info:`Arduino IDE`

- **Better signal visualization:** Many people find it difficult to visualize the biopotential signals in the serial plotter even if everything is correct because the serial plotter of the latest version (v2.0) of Arduino IDE plots very few data points per frame and this is why you may find it moving very fast. To resolve this issue you can either:
  
  - Use `Chords application <chords.upsidedownlabs.tech>`_ to visualise the data. :bdg-success-line:`Recommended`  
  - Download the Arduino IDE version 1.8.X (Legacy IDE) in which the serial plotter plots more data points per frame so it moves comparatively slow as compared to the latest version.

- **COM Port selection:** Make sure you have selected the correct COM port of the development board connected to your laptop. If you are unable to detect the COM port, follow the steps given below:

  .. card::

    :fab:`windows;pst-color-primary` For Windows

    ^^^^^^^^^^^^^^^^^^

    - Connect the development board to your laptop via USB.
    - Press Win + X and select Device Manager.
    - Expand the Ports (COM & LPT) section.
    - Look for an entry like "USB Serial Device (COMx)" where "x" is the COM port number.

  .. card::

    :fab:`linux;pst-color-primary` For Linux

    ^^^^^^^^^^^^^^^^^^

    - Connect the development board to your laptop via USB.
    - Open a terminal.
    - Run the following command to list the connected devices:
  
      .. code-block::

        dmesg | grep tty

    - Look for lines that show something like ``/dev/ttyUSB0`` or ``/dev/ttyACM0``, which indicates the COM port.

  .. card:: For macOS

    :fab:`apple;pst-color-primary` For macOS

    ^^^^^^^^^^^^^^^^^^

    - Connect the development board to your laptop via USB.
    - Open the Terminal.
    - Run the following command: 

      .. code-block::

        ls /dev/tty.*

    - This will list all serial devices. Look for something like ``/dev/tty.usbserial-XXXX`` or ``/dev/tty.usbmodemXXXX``.

- **Development board selection:** Select the correct board in Arduino IDE. To select the board, go to tools from the menu bar, select the board option and then select the development board that you have connected to the laptop.

  .. note:: While using Cytron Technologies Maker Uno make sure you are selecting a board as Arduino Uno as it is an Arduino Uno compatible board.

- **Set baudrate:** Make sure you have selected the correct baud rate (i.e. 115200) while visualizing the biopotential signals on the serial plotter of Arduino IDE.

