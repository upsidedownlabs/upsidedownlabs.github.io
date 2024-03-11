.. _bioamp-v1.5:

BioAmp v1.5
############

Small-size portable biopotential amplifier with a no code setup for non-invasive EMG recording!

Overview
*********

It is a small size portable biopotential amplifier with a no code setup to record and listen to your muscle signals (EMG) non 
invasively. The best part is that it doesn’t require any microcontroller (like Arduino) to sample the signal. You just plug a 9V 
battery into the board, electrodes to the body, and an audio jack to a mobile/laptop, and you are ready to record signals from
muscles (EMG) using audacity or Backyard Brain’s spike recorder app.

.. figure:: media/bioamp-v1.5.*
    :width: 800
    :align: center


Features & Specifications
***************************

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Minimum Input Voltage | 7-9 V                                                                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Input Impedance       | ≥10^7 Ω                                                                                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Fixed Gain            | ~200x                                                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| BioPotentials         | EMG (Electromyography)                                                                                                                                           |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| No. of channels       | 1                                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Electrodes            | 3 (Positive, Negative, and Reference)                                                                                                                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Dimensions            | 5.0 x 3.0 cm                                                                                                                                                     |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Open Source           | Hardware + Software                                                                                                                                              |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+



Hardware
**********
Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::
        
            .. card::

                **PCB Front**
                ^^^^^
                .. figure:: media/front-pcb.*

    .. grid-item::
        
            .. card::

                **PCB Back**
                ^^^^^
                .. figure:: media/back-pcb.*            


.. figure:: media/front-assembled-with-wires-1.*
    :align: center

.. figure:: media/schematic.*
    :align: center   

Assemblying the kit
********************

You can get your own Bioamp v1.5 bag of parts from `our store <https://store.upsidedownlabs.tech/product/bioamp-v1-5-2023-edition/>`_ or `Tindie <https://www.tindie.com/products/upsidedownlabs/bioamp-v15-2023-edition-biopotential-amplifier/>`_ or the step by step guide below. 

.. grid:: 1 1 3 3
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::
        
        .. figure:: media/Assembly/1.*

            **Step 1 - Bare Board**

    .. grid-item::

        .. figure:: media/Assembly/2_100K.*
            
            **Step 2 - 100K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/3_2.2K.*

            **Step 3 - 2.2K Resistor** 

    .. grid-item::

        .. figure:: media/Assembly/4_1K.*

            **Step 4 - 1K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/5_220K.*

            **Step 5 - 220K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/6_10K.*

            **Step 6 - 10K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/7_100nF.*

            **Step 7 - 100nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/8_1nF.*

            **Step 8 - 1nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/9_connectors.*

            **Step 9 - JST PH Connectors** 

    .. grid-item::

        .. figure:: media/Assembly/10_Socket.*

            **Step 10 - IC Socket** 

    .. grid-item::

        .. figure:: media/Assembly/11_IC.*

            **Step 11 - IC** 

    .. grid-item::

        .. figure:: media/Assembly/12_LED.*

            **Step 12 - Power LED** 

    .. grid-item::

        .. figure:: media/Assembly/13_47uF.*

            **Step 13 - 47uF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/14_Switch.*

            **Step 14 - Switch** 

    .. grid-item::

        .. figure:: media/Assembly/15_Headphone jack.*

            **Step 15 - Headphone jack** 


Connections
*************************

To measure the EMG signals, just connect BioAmp Cable v3 with the hardware as shown in the image below, and get started.

.. figure:: media/connections.*

Using the Sensor
*******************

.. .. youtube:: ujFsAE0E0nk
..     :align: center
..     :width: 100%

Some project ideas
************************

.. We have curated a playlist for you which consists some awesome project ideas for you to get started with your next HCI project.

.. .. youtube:: https://youtube.com/playlist?list=PLtkEloJ7UnkQIoz1HK4IXWujCB8hKdiKU&si=osloTX71TE7AJ3CF
..     :width: 100%
..     :align: center
