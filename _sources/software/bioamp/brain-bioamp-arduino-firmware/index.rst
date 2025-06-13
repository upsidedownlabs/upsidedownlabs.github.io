.. _brain-bioamp-arduino-firmware:

Brain (EEG) BioAmp Arduino Firmware
######################################

What is Electroencephalography (EEG)?
**************************************

Electroencephalography (EEG) `[1] <https://www.mayoclinic.org/tests-procedures/eeg/about/pac-20393875>`_ 
is a method to record an electrogram of the spontaneous electrical activity
of the brain. The bio potential signals detected by EEG have been shown to represent the postsynaptic potentials of 
pyramidal neurons in the neocortex and allocortex. It is typically non-invasive, with the EEG electrodes
placed along the scalp (commonly called "scalp EEG") using the International 10–20 system,
or variations of it. Clinical interpretation of EEG recordings is most often performed by visual inspection of 
the tracing or quantitative EEG analysis

To know more about EEG `visit here <https://en.wikipedia.org/wiki/Electroencephalography>`_.

The International 10–20 system is a standard method for placing EEG electrodes on the scalp in relation
to the brain's cerebral cortex. Electrode positions are labeled with letters (like Fp, F, T, C, P, O, and Z for
midline) and numbers (odd for left, even for right hemisphere). The "10" and "20" refer to the percentage distances
between electrodes based on the size of the head. Key reference points like the nasion, inion, and preauricular 
points are used for accurate placement. The system helps ensure consistent, repeatable, and comparable EEG
recordings. More detailed versions like the 10–10 or 10–5 systems provide higher resolution by adding extra 
electrodes.

To know more about International 10–20 system `visit here <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_.

Who is this for?
==================

Anyone who's using the BioAmp Hardware for the very first time — whether you're a student, hobbyist, educator or just curious. No experience needed!

👉 To learn about our BioAmp Hardware checkout :ref:`the hardware page <upsidedownlabs_hardware_home>`.

Step-by-Step Setup Guide
***************************

With the hardware in your hands, you're just a few steps away from unlocking its full potential — let's get the software set up!

Step 1: Downloading GitHub Repository for Hardware
===================================================

- This is the code your Arduino needs to read Brain (EEG) signals.
- You have two easy ways to get the code that will help you read your EEG signals:

.. dropdown:: Simply Download (recommended for beginners)
    :open:

    - Go to the GitHub page: `Brain BioAmp Arduino Firmware <https://github.com/upsidedownlabs/Brain-BioAmp-Arduino-Firmware>`_
    - Click the green “**Code**” button > Download ZIP
    - Unzip the folder and save it somewhere easy to find.

.. dropdown:: Clone using Git (for tech-savvy users)

      - Install Git for your OS: https://git-scm.com/
      - Clone this GitHub repository using
      
        .. code-block:: bash
            
            git clone https://github.com/upsidedownlabs/Brain-BioAmp-Arduino-Firmware

Step 2: Application Required
===================================

Before you start using the kit, please download or open the following: 

1. **Arduino IDE** 
   
   - We need Arduino IDE to upload code to your Arduino board.
   - Link to download IDE for your OS: https://www.arduino.cc/en/software

2. **Chords Website**
   
   - We will use Chords Website to visualize the Brain Signals!
   - Open this website: `Chords Web <https://chords.upsidedownlabs.tech>`_

.. _Connect Your Hardware:

Step 3: Connect Your Hardware
===============================

1. Plug the Hardware into your Arduino UNO using jumper wires.
2. Follow the exact wiring diagram from the :ref:`hardware documentation <upsidedownlabs_hardware_home>` of the hardware you are using.
3. Hardwares that are compatible with Brain BioAmp Firmware:
   
   - :ref:`Bioamp EXG Pill <bioamp-exg-pill>`

4. For  ``Fixed Sampling`` and ``EEG Filter`` programs any Arduino Board can be used.

.. note::

    For the experiments given below, you will require : **Arduino UNO R4 Minima / WiFi boards**

It’s just like putting together a puzzle!

Step 4: Skin Preparation and Electrodes Placement
==================================================

- **Using Gel Electrodes:**

1. **Prepare your skin**

   - Choose the area where you'll place the electrodes.
   - Clean the skin using **an alcohol swab** or **Nuprep Gel** to remove oils and dead cells — this improves signal clarity.

.. note::

    - Need help with skin prep? Check out the full guide here: :ref:`Skin Preparation Guide <skin-preparation>`
    - The described electrode placement **isn't universal**. Always refer to the **"Connect Your Hardware"** section for the specific requirements of your experiment

2. For **Prefrontal EEG (for frontal brain activity)**, attach the wires to the electrodes, then attach the electrodes to skin (refer diagram below):

   - ``IN+`` (red wire): Place on center of forehead (above nose bridge).
   - ``IN–`` (black wire): Place on left side of forehead (above left eyebrow).
   - ``REF`` (yellow/white wire): Place behind the ear (bony area).

3. For **Visual Cortex EEG (for back-of-brain activity)**, attach the wires to the electrodes, then attach the electrodes to skin (refer diagram below):

   - ``IN+`` (red wire): Place on right side of the occipital lobe (back of head).
   - ``IN–`` (black wire): Place on left side of the occipital lobe.
   - ``REF`` (yellow/white wire): Place behind the ear (as above).

Make sure the sticky side of electrodes touches your skin firmly.

.. figure:: ../../../guides/usage-guides/skin-preparation/media/skin-prep-eeg.png

    :align: center
    :alt: EEG Placement

    EEG Placement

- **Using BioAmp Band:** For BioAmp Band, refer to the following documentation: :ref:`Using BioAmp Bands <using-bioamp-bands>`

.. _How to upload the Code to Arduino:

Step 5: How to upload the Code to Arduino
============================================

1. Open the folder you downloaded: **Brain-BioAmp-Arduino-Firmware**
2. Inside that, you’ll find several subfolders.
3. Pick the folder for the experiment you want to try. (For beginners: start with the first one and move step-by-step through the others for a better learning experience )
4. Inside that folder, open the **.ino** file using **Arduino IDE**
   
- For example:

  - To try raw signal: open ``01-fixed-sampling.ino``
  - To try filtered signal: open ``02-eeg-filter.ino``

.. note::
    You'll find all the experiments listed below, each with :ref:`step-by-step instructions<experiments step by step>`. Just scroll to the one you're working on to get started with the right setup.
   
5. Connect Your Arduino

   - Plug your Arduino board into your computer’s USB port using the USB cable.
   - Wait for the operating system to install any required USB drivers.

6. In Arduino IDE:

   - Go to **Tools > Board > Arduino UNO** choose the model of your board (e.g., “Arduino UNO R4”)
   - Go to **Tools > Port > [select the correct COM port]**

7.	Verify (Compile) the Sketch

        - Click the **“✔️ Verify”** button (or press ``Ctrl + R``).
        - Wait for **“Done compiling.”** If errors appear, double-check you opened the correct .ino file.

8.  Click the **✓** Upload (or press ``Ctrl + U``) button to send the code to your Arduino.  

    - The IDE will compile again and then send the code to your board.
    - The onboard LED labeled **“L”** may blink during upload. When you see **“Done uploading”**, the new firmware is running.


9. Open Serial Monitor and Serial Plotter (Optional)

   - For serial monitor and plotter, we recommend using `Chords Web <https://chords.upsidedownlabs.tech>`_. However, if you're learning to develop, you might also find these options useful.

   - For Serial Monitor: In the IDE, click **Tools → Serial Monitor** (or press ``Ctrl + Shift + M``).
   - Ensure the baud rate at the bottom right of the Serial Monitor is set to ``115200`` (or whatever the sketch’s Serial.begin(115200); line specifies).
   - You should start seeing lines of numbers. Those are your readings.


   - For Serial Plotter: In the IDE, click **Tools → Serial Plotter**.
   - You should start seeing plotting of graph and visualize the waves.

.. important::

    - Remember to close the **Serial Monitor & Serial Plotter** in **Arduino IDE** before starting the Chords Visualizer.

.. _Visualize Your Brain Signals!:

Step 6: Visualize Your Brain Signals!
============================================

1. Open this website: https://chords.upsidedownlabs.tech
2. Click: Visualize Now → then choose Serial Wizard.
3. Select the correct COM port (same one from Arduino IDE).
4. Click Connect.

.. important::

    - Remember to close the **Serial Monitor** in **Arduino IDE** before starting the Chords Visualizer.
    - Always **disconnect your laptop charger** while testing. Why? Charging can introduce 50 Hz noise that affects the signal.


🎉 Now sit still and let your mind wander—or blink and shift your gaze—you’ll see real‑time EEG waves on the screen!
    
.. _experiments step by step:

Let's explore all the experiments step by step
***********************************************
.. Experiment 1

.. dropdown:: 1. Fixed Sampling
    :open:
    
    **1. Program Purpose & Overview**

    The **Fixed Sampling** sketch acquires raw EEG/biopotential data from the Brain‑BioAmp’s ADC at 
    a user‑defined, constant rate. By using a hardware timer interrupt rather than a delay loop, 
    it guarantees uniformly‑spaced samples—critical for accurate digital filtering, spectral analysis, 
    or machine‑learning pipelines downstream.

    **2. How It Works**

    1. Initialize the Sensor Pin    
         
       - The sketch sets an Arduino analog input pin (e.g., A0) to read voltage values from the BioAmp sensor.

    2. Set Sampling Rate

       - A timer (using ``micros()`` or ``delayMicroseconds()``) ensures that we call ``analogRead(A0)`` at a precise interval.

    3. Print Raw Values

       - The user sees raw voltage fluctuations corresponding to brain waves.

    4. Loop Forever

       - The ``loop()`` continues indefinitely, constantly reading and printing.
  
    **3. Perform the Hardware**
    
    - Refer to wiring as per instructions given in :ref:`Connect Your Hardware<Connect Your Hardware>`

    **4. Firmware Upload**

    - For this project, navigate to the repository folder (Brain-BioAmp-Arduino-Firmware/01-fixed-sampling) and select ``01-fixed-sampling.ino``.
    - To upload firmware, refer to :ref:`How to upload the Code to Arduino<How to upload the Code to Arduino>`
    
    **5. Visualize your signal**

    - Follow the steps given in :ref:`Visualize Your Brain Signals!<Visualize Your Brain Signals!>` 
  
    **6. Running & Observing Results**

    - Quiet Baseline (No Signal): Trace hovers near mid‑rail.
    - EEG Burst (e.g. Alpha Waves): You observe rhythmic oscillations.
    - Muscle Artifact or Motion: Large, slow deflections riding on the baseline.


    .. Experiment 2

.. dropdown:: 2. EEG Filter
 
    **1. Program Purpose & Overview**

    The EEG Filter sketch acquires raw EEG data from the BioAmp EXG Pill sensor at 256 Hz and applies 
    a 0.5 – 29.5 Hz 4th‑order Butterworth band‑pass filter (implemented as four biquad sections) to
    isolate true EEG rhythms. By stripping out slow DC drifts and high‑frequency noise, you obtain a 
    clean EEG stream ideal for real‑time visualization, event detection, or further spectral analysis.

    **2. How It Works**

    1. Initialize the Sensor Pin    
            
       - The sketch configures an Arduino analog input pin (e.g., A0) to read voltage values from the BioAmp sensor.

    2. Compute Elapsed time
   
       - A static ``past`` timestamp holds the previous sample’s microsecond count.
       - ``present = micros()`` and ``interval = present – past`` give the time since the last loop.
       - ``past`` is updated to present for the next iteration.

    3. Run the Sample Timer
        
       - A static ``timer`` variable counts down by ``interval`` each loop.
       - When ``timer < 0``, it’s time to take the next sample:

    ::
        
        timer += 1000000 / SAMPLE_RATE;  // ≈3906 µs for 256 Hz

    4. Acquire Raw Sample

       - Calls ``analogRead(INPUT_PIN)`` (e.g. ``A0``) to get the latest ADC count from the BioAmp output.
       - Converts the integer reading to a ``float sensor_value``.
    
    5. Apply 4th‑Order Butterworth Band‑Pass.
   
       - Passes ``sensor_value`` into ``EEGFilter(input)``, which implements four cascaded biquad sections.
       - Coefficients (``a1, a2, b0, b1, b2``) were generated via SciPy’s ``butter()`` and exported by ``filter_gen.py``.
       - Each section maintains two static states (``z1``, ``z2``), computes the difference‑equation:

    ::

        x = output – a1*z1 – a2*z2;
        output = b0*x + b1*z1 + b2*z2;
        z2 = z1;
        z1 = x;

    6. Stream Filtered Output
   
       - After filtering, Serial.println(signal); sends the clean EEG value to your PC or host.

    7. Loop Forever

       - The sketch never blocks: timing logic and filtering run every ≈3.9 ms (256 Hz), then immediately repeat.

    - To learn more about filters and how to generate new filters, visit:  https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.butter.html

    **3. Perform the Hardware**

    - Refer to wiring as per instructions given in :ref:`Connect Your Hardware<Connect Your Hardware>`

    **4. Firmware Upload**

    - For this project, go to the repository folder (Brain-BioAmp-Arduino-Firmware/02-eeg-filter) and select ``02-eeg-filter.ino``.
    - To upload firmware, refer to :ref:`How to upload the Code to Arduino<How to upload the Code to Arduino>`
    
    **5. Visualize your signal**

    - Follow the steps given in :ref:`Visualize Your Brain Signals!<Visualize Your Brain Signals!>` 
    - You’ll see a smooth EEG waveform updating at 256 Hz, free of drift and high‑frequency spikes.

    **6. Running & Observing Results**

    - Quiet Rest (Eyes Closed): Trace should be mostly low‑amplitude noise around zero.
    - Alpha Rhythm (8–12 Hz): Rhythmic oscillations become clearly visible after you close your eyes and relax.
    - Movement Artifacts (>30 Hz): Spikes from blinks or muscle tension are greatly attenuated, keeping the focus on EEG bands.
.. Experiment 3

.. dropdown:: 3. BCI FFT

    This foundational sketch is designed to display real-time EEG bandpower values—Delta, Theta, Alpha, Beta,
    and Gamma—on the Arduino IDE’s Serial Monitor. It serves as a powerful tool for observing how your brain 
    state affects brainwave activity. For instance, you’ll notice a rise in beta waves when focusing on a single 
    point, and an increase in alpha waves when you close your eyes and relax. It’s ideal for understanding how 
    different activities in the brain influence your EEG signals.

    For this project, you need to do **electrode placement** as per the given figure: 

    .. figure:: media/eeg-f1-f2.png
       
        :align: center
        :alt: Placement between F1 and F2 

    For detailed guide, visit our **Instructables Page**: `Controlling LEDs of Arduino Uno R4 With Your Mind (EEG) <https://www.instructables.com/Controlling-LEDs-of-Arduino-Uno-R4-With-Your-Mind-/>`_

    For a detailed walkthrough, follow along with the **YouTube** tutorial for this project:

    .. youtube:: _GDfogfElII

    .. note::

        This project will only work with **Arduino UNO R4 Minima and R4 WiFi** board.

.. Experiment 4

.. dropdown:: 4. BCI LED

    This sketch allows you to control the built-in LED on the Arduino UNO R4 using your focus. 
    When your beta activity rises (indicating strong concentration), the LED lights up. As your mind relaxes 
    and beta power drops, the LED turns off. It creates a simple yet effective neurofeedback to train and 
    observe your concentration levels.

    For this project, you need to do **electrode placement** as per the given figure: 

    .. figure:: media/eeg-f1-f2.png
        
        :align: center
        :alt: Placement between F1 and F2
        
        Placement between F1 and F2

    For detailed guide, visit our **Instructables Page**: `Controlling LEDs of Arduino Uno R4 With Your Mind (EEG) <https://www.instructables.com/Controlling-LEDs-of-Arduino-Uno-R4-With-Your-Mind-/>`_

    For a detailed walkthrough, follow along with the **YouTube** tutorial for this project:

    .. youtube:: _GDfogfElII

    .. note::

        This project will only work with **Arduino UNO R4 Minima and R4 WiFi** board.

 
        
.. dropdown:: 5. BCI Toggle

    The BCI Toggle program enables hands-free toggling of the built-in LED using sustained focus. 
    By maintaining your concentration for 4–5 seconds, the system switches the LED on or off, 
    like flipping a switch using your brain. This method can be extended to control other devices, 
    making it a stepping stone for brain-controlled automation.

    For this project, you need to do **electrode placement** as per the given figure: 

    .. figure:: media/eeg-f1-f2.png
       
        :align: center
        :alt: Placement between F1 and F2 
        
        Electrode Placement between F1 and F2 


    For detailed guide, visit our **Instructables Page**: `Controlling LEDs of Arduino Uno R4 With Your Mind (EEG) <https://www.instructables.com/Controlling-LEDs-of-Arduino-Uno-R4-With-Your-Mind-/>`_

    For a detailed walkthrough, follow along with the **YouTube** tutorial for this project:

    .. youtube:: _GDfogfElII

    .. note::

        This project will only work with **Arduino UNO R4 Minima and R4 WiFi** board.


.. dropdown:: 6. BCI Spiral

    The BCI Spiral program is one of the most engaging and interesting sketch as it transforms your focus into gameplay. 
    
    Running on the Arduino UNO R4 WiFi, it controls the 12×8 LED matrix on the board. 
    As you concentrate, LEDs begin to light up in a clockwise spiral pattern. 
    
    The more intense and sustained your focus, the more the spiral progresses. 
    If your concentration lapses, the spiral unwinds in reverse. This sketch creates an immersive and intuitive 
    brain-training game driven entirely by your EEG signals.

    For this project, you need to do **electrode placement** as per the given figure: 

    .. figure:: media/eeg-f1-f2.png
       
        :align: center
        :alt: Placement between F1 and F2 

    For detailed guide, visit our **Instructables Page**: `Controlling LEDs of Arduino Uno R4 With Your Mind (EEG) <https://www.instructables.com/Controlling-LEDs-of-Arduino-Uno-R4-With-Your-Mind-/>`_

    For a detailed walkthrough, follow along with the **YouTube** tutorial for this project:

    .. youtube:: _GDfogfElII

    .. note::

        This project will only work with **Arduino UNO R4 WiFi** board.


✅ **And That’s it!, Congrats on making your neuroscience project using BioAmp Hardware.**
