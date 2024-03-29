.. _muscle-bioamp-shield:

Muscle BioAmp Shield
######################

All-in-one Arduino Uno Shield for EMG (Electromyography).

Overview
**********

Muscle BioAmp Shield is an all-in-one Arduino Uno ElectroMyography (EMG) shield for learning neuroscience with ease. It is a 
DIY Electrophysiology/NeuroScience shield inspired from Back Yard Brains (BYB) Muscle Spiker shield and provides similar features 
like hobby servo output, user buttons, LED Bar, Audio output, and battery input. It is perfect for beginners as they can easily 
stack it on top of Arduino Uno to record, visualize and listen to their muscle signals to make amazing projects in the domain of 
Human-Computer Interface (HCI).

.. youtube:: w8yw12SUe6Q
  :width: 100%
  :align: center

Features & Specifications
****************************

Muscle BioAmp Shield comes with various plug-and-play options so you can connect hundreds of extension boards like OLED screens, 
character displays, accelerometers, and servo controllers to name just a few using the STEMMA I2C interface. You also get STEMMA 
digital and STEMMA analog ports. On STEMMA analog port you can connect additional BioAmp EXG Pill or any other sensor with analog 
output. On STEMMA digital port you can connect any digital sensor or actuator of your choice.

.. figure:: media/shield-pamphlet.*
    :align: center

+---------------------+---------------------------------------+
| Input Voltage       | 5V                                    |
+---------------------+---------------------------------------+
| Input Impedance     | 10^11 ohm                             |
+---------------------+---------------------------------------+
| Fixed Gain          | x2420                                 |
+---------------------+---------------------------------------+
| Bandpass filter     | 72 – 720 Hz                           |
+---------------------+---------------------------------------+
| Compatible Hardware | Arduino UNO                           |
+---------------------+---------------------------------------+
| BioPotentials       | EMG (Electromyography)                |
+---------------------+---------------------------------------+
| No. of channels     | 1                                     |
+---------------------+---------------------------------------+
| Electrodes          | 3 (Positive, Negative, and Reference) |
+---------------------+---------------------------------------+
| Dimensions          | 6.0 x 5.3 cm                          |
+---------------------+---------------------------------------+
| Open Source         | Hardware + Software                   |
+---------------------+---------------------------------------+

Hardware
*********

Images below shows a quick overview of the hardware design.

.. grid:: 1 1 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item::

        .. card::

            **PCB Front**
            ^^^^^
            .. figure:: media/Muscle-BioAmp-Shield-Front.*

    .. grid-item::
        
        .. card::

            **PCB Back**
            ^^^^^
            .. figure:: media/Muscle-BioAmp-Shield-Back.*

.. figure:: media/Muscle-BioAmp-Shield-With-Wires.*
    :align: center
.. figure:: media/dimensions.*
    :align: center
.. figure:: media/Schematic.*
    :align: center

Assemblying the Kit
********************

You can get your own Muscle BioAmp Shield bag of parts from our `store <https://store.upsidedownlabs.tech/product/muscle-
bioamp-shield-v0-3/>`_ or `Tindie <https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-shield-v03-arduino-shield-for-emg/>`_
and for assembling your shield you can take a look at `this interactive BOM <https://upsidedownlabs.github.io/DIY-Muscle-BioAmp-
Shield/>`_ or the step by step guide below. 

.. grid:: 1 1 2 2
    :margin: 2 2 0 0 
    :gutter: 2

    .. grid-item::
        
        .. figure:: media/Assembly/01_Bare_Board.*

            **Step 1 - Bare Board**

    .. grid-item::

        .. figure:: media/Assembly/02_1M_Resistors.jpg
            
            **Step 2 - 1M Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/03_330R_Resistors.jpg

            **Step 3 - 330R Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/04_10K_Resistors.jpg

            **Step 4 - 10K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/05_22K_Resistors.jpg

            **Step 5 - 22K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/06_1K_Resistors.jpg

            **Step 6 - 1K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/07_220K_Resistors.jpg

            **Step 7 - 220K Resistors** 

    .. grid-item::

        .. figure:: media/Assembly/08_1nF_Capacitors.jpg

            **Step 8 - 1nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/09_100nF_Capacitors.jpg

            **Step 9 - 100nF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/10_100pF_Capacitors.jpg

            **Step 10 - 100pF Capacitors** 

    .. grid-item::

        .. figure:: media/Assembly/11_Angled_Header_Pins.jpg

            **Step 11 - Angled Header Pins** 

    .. grid-item::

        .. figure:: media/Assembly/12_5x5mm_Buttons.jpg

            **Step 12 - 5x5mm Buttons** 

    .. grid-item::

        .. figure:: media/Assembly/13_OptoIsolator.jpg

            **Step 13 - OptoIsolator** 

    .. grid-item::

        .. figure:: media/Assembly/14_JST_PH_Angled_Connectors.jpg

            **Step 14 - JST PH Angled Connectors** 

    .. grid-item::

        .. figure:: media/Assembly/15_JST_PH_Straight_Connectors.jpg

            **Step 15 - JST PH Straight Connectors** 

    .. grid-item::

        .. figure:: media/Assembly/16_IC_Socket.jpg

            **Step 16 - IC Socket** 

    .. grid-item::

        .. figure:: media/Assembly/17_IC.jpg

            **Step 17 - IC** 

    .. grid-item::

        .. figure:: media/Assembly/18_LEDs.jpg

            **Step 18 - LEDs** 

    .. grid-item::

        .. figure:: media/Assembly/19_3.5mm_Headphone_Jack.jpg

            **Step 19 - 3.5mm Headphone Jack** 

    .. grid-item::

        .. figure:: media/Assembly/20_2.2uF_Capacitor.jpg

            **Step 20 - 2.2uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/21_1uF_Capacitor.jpg

            **Step 21 - 1uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/22_470uF_Capacitor.jpg

            **Step 22 - 470uF Capacitor** 

    .. grid-item::

        .. figure:: media/Assembly/23_Header_Pins.jpg

            **Step 23 - Header Pins** 

    .. grid-item::

        .. figure:: media/Assembly/24_Assembled.jpg

            **Step 24 - Assembled Shield** 


Still can't figure out the assembly? You can follow the video provided below to assemble your Shield.

.. youtube:: dcuCihh3yn4
     :width: 100%

Using the Sensor
******************

The possibilities are endless as you can:

.. .. grid:: 1 1 2 2
..     :margin: 2 2 0 0 
..     :gutter: 2

..     .. grid-item::

..         .. card::
            
..             .. figure:: media/LEDGraph.*
                
..             ^^^^^  
..             Visualize the EMG signals using the 6-onboard LEDs. The more you flex, the more LEDs will glow up.

..     .. grid-item::

..         .. card::

..             .. figure:: media/servo-control.*

..             ^^^^^    
..             Directly connect the servo motor via 3-pin angled header pins and control it using muscle signals (EMG).

..     .. grid-item::

..         .. card::

..             .. figure:: media/listening-muscle-signals.*
            
..             ^^^^^    
..             Give audio/mic input signals from your mobile phone, laptop, or speakers via BioAmp AUX Cable connected to a 4-pin JST PH 2mm connector. 
            
..     .. grid-item::

..         .. card::

..             .. figure:: media/9v-battery.*
            
..             ^^^^^    
..             Connect a 7V to 9V battery via snap cable.


- Record the muscle signals (EMG) either using Gel Electrodes or BioAmp Bands (dry electrode based) via BioAmp Cable connected to a 3-pin JST PH 2mm connector.
- Listen to your muscle signals using wired headphones/earphones connected to a 3.5mm headphone jack.
- Connect hundreds of devices like OLED screens, character displays, temperature sensors, accelerometers, BioAmp Hardware, and much more using the two I2C interfaces.
- Connect Arduino Uno's D6 digital I/O pins and A2 analog input pins using STEMMA digital and STEMMA analog connectors respectively.
- Program the 2 user buttons according to your project requirements.

Some project ideas
********************

These features make it the ultimate plug-and-play kit for students, researchers, and hobbyists alike who want to use muscle signals (EMG) to make amazing human-computer interface (HCI) projects like:

.. grid:: 1 1 1 1 
    :margin: 2 2 0 0
    :gutter: 2

    .. grid-item::

        .. card::
            
            **1. Controlling a Dino Game using your muscle signals (EMG)**
            ^^^^

            .. youtube:: 66VOVqrFLoQ
                :align: center
                :width: 100%

        .. card::
            
            **2. Scrolling Instagram Reels/YouTube Shorts by using your muscle signals (EMG)**
            ^^^^

            .. youtube:: ZzhrNyndky4
                :align: center
                :width: 100%

        .. card::
            
            **3. Making a Muscle Strength Game Using Muscle BioAmp Shield & Arduino UNO**
            ^^^^

            .. youtube:: bSfTnFcCHYM
                :align: center
                :width: 100%                
   
        .. card::
            
            **4. Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield**
            ^^^^

            .. youtube:: kgvK51UIXdo
                :align: center
                :width: 100%  

        .. card::
            
            **5. Controlling Servo Claw With Muscle Signals Using Muscle BioAmp Shield**
            ^^^^

            .. youtube:: kgvK51UIXdo
                :align: center
                :width: 100% 