.. _diy-neuroscience-kit-basic:

DIY Neuroscience Kit Basic
############################

This kit is perfect for ``students``, ``researchers`` and ``hobbyists`` alike who want to start exploring neuroscience. 
Whether it's studying brain waves, monitoring heart rhythms, analyzing muscle movements, or tracking eye movements, 
this DIY kit provides an accessible and educational platform for understanding the complexities of human physiology and 
developing practical applications in the fields of human-computer interaction, and beyond.

.. figure:: media/diy-neuroscience-kit-basic.*
    :align: center

Contents of the kit
********************

From development board (Maker UNO), BioAmp EXG Pill, BioAmp cable, jumper cables, gel electrodes, BioAmp bands to 
skin preparation kit, this includes everything that you need to get started with your awesome HCI/BCI project. 

.. figure:: media/kit-contents.*
    :align: center

.. youtube:: 7O9Bw8y5fQs
    :width: 100%
    :align: center

Using the kit
**************

.. grid:: 1 1 1 1
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::

        .. card::

            **Step 1 (optional): Configure for EMG/ECG**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            
            .. figure:: media/configuration.*
                :width: 400

            BioAmp EXG Pill is by default configured for recording EEG or EOG, so if you are recording any of the two signals 
            you can skip this step. But if you want to record good quality ECG or EMG, then it is recommended to configure it 
            by making a solder joint as shown in the image above.

            .. note:: Even without making the solder joint the BioAmp EXG Pill is capable of recording ECG or EMG as well but the signals would be more accurate if you configure it.

        .. card::

            **Step 2 (optional): Configure to operate at 3.3V**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/configuration-3v.*
                :width: 400
                :align: center

            It is by default compatible with 5V but you can make it compatible with 3.3V as well using a voltage divider.

        .. card::

            **Step 3: Connect Maker UNO**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/connection-with-maker-uno.*
                :width: 400

            Connect VCC to 5V, GND to GND, and OUT to Analog (ADC) IN of your Maker UNO via jumper cables provided by us.

            .. warning:: Take precautions while connecting to power, if power pins (GND & VCC) are to be swapped, your BioAmp EXG Pill will be fried and it’ll become unusable (DIE).

        .. card::

            **Step 4: Connecting electrode cable**
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            .. figure:: media/bioamp-cable.*
                :width: 400

            Connect the BioAmp Cable to BioAmp EXG Pill by inserting the cable end in the JST PH connector. We have different variants of the BioAmp Cable so don't go with the 
            color coding and focus on the REF, IN+ and IN- written on the BioAmp EXG Pill.
