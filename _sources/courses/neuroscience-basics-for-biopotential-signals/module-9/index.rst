.. _neuroscience-basics-for-biopotential-signals-module-9:

Module 9 : EEG
#############################################

- **Basic Terminologies**
  
  1. **Electroencephalography** : Technique to measure the electrical activity of the brain
  2. **Electroencephalograph** : Device used to measure the electrical activity of the brain
  3. **Electroencephalogram** : Graphical representation of the electrical activity of the brain

- **If you want to know detailed history of EEG, you can refer to this section:** `History of EEG <https://www.neuroelectrics.com/blog/the-evolution-of-eeg-a-journey-through-time>`_
  
9.1 Introduction
****************************

EEG is a non-invasive medical test that records the electrical activity of the brain using small electrodes placed on the scalp. It helps detect abnormal brain wave patterns and is commonly used to diagnose epilepsy, sleep disorders, brain injury and to study psychiatric conditions such as bipolar disorder and schizophrenia. 

**Normal EEG frequency range :**  [1]_

1. Delta waves : 0.5-4 Hz
2. Theta waves : 4-7 Hz
3. Alpha waves : 8-12 Hz
4. Beta waves : 13-30 Hz
5. Gamma waves : 30-80 Hz

9.2 Basic principle
*******************************

EEG measures the tiny electrical voltages (in microvolts) generated on the scalp when large groups of brain neurons fire together synchronously. It mainly records the summed postsynaptic potentials from cortical pyramidal neurons, which get amplified and displayed as brain waves over time.

9.3 How it works
***********************

9.3.1 Electrode Placement
==================================

1. In **surface EEG**, small sensors called electrodes are placed on the scalp according to standardized systems like the 10-20 system, which ensures consistent positioning over brain regions.
2. **Electrode Cap**: A wearable cap that holds multiple electrodes in place. This ensures consistent electrode placement and is used for convenience during longer recordings.

9.3.2 Signal Detection
=================================

When groups of neurons in the brain fire synchronously, they generate tiny electrical fields that propagate to the scalp. The electrodes detect these voltage fluctuations, known as brain waves , which represent summed postsynaptic potentials from cortical neurons.

9.3.3 Signal Amplification and Filtering
==================================================

Since these signals are extremely weak (measured in microvolts), they are first amplified to make them readable. Then, unwanted noise-like eye blinks, muscle artifacts, or 50/60 Hz power line interference-is filtered out to ensure the recorded data is clean and accurate.

**Upside Down Labs Hardware compatible with EEG signal acquisition and processing:**

- :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>`
- :ref:`Bioamp EXG Pill <bioamp-exg-pill>`

We offer our own **open source** :ref:`Chords <upsidedownlabs_software_home>` software suite, featuring tools for signal visualization, data recording (with easy save and download options), time-based plotting, and a host of other benefits-such as analyzing signal frequencies and bandpower.

9.4 Key components of EEG
***********************************

9.4.1 Electrode placement system
==========================================

1. 10-20 system 
----------------------------------

This is the standard system used for placing electrodes on the scalp. It divides the scalp into regions and assigns electrode positions based on specific anatomical landmarks (e.g., nasion, inion, and ear lobes). This system helps in the consistent placement of electrodes.

If you want to know the 10-20 system in detail , kindly refer to this section : `10-20 system wikipedia <https://en.wikipedia.org/wiki/10%E2%80%9320_system_(EEG)>`_

2. High-Density EEG
------------------------------

In some advanced setups, additional electrodes are placed for more detailed spatial information. This can involve 64, 128, or even 256 electrodes.

9.4.2 Characteristics of different EEG waves types 
==========================================================

1. **Delta waves**

   - Low frequency, high amplitude waves
   - Frequency range : 0.5 - 4 Hz
   - Associated with deep sleep (Non Rapid Eye Movement) stage 3 & 4 in adults

2. **Theta waves**

   - Frequency range : 4-7 Hz
   - Associated with drowsiness and early sleep stages

3. **Alpha waves**

   - Frequency range : 8-12 Hz
   - Associated with relaxed wakefulness, particularly when a person is awake but calm and not focused on specific tasks. 
   - Alpha waves are most prominent when the eyes are closed.

4. **Beta waves**

   - Frequency range : 13-30 Hz
   - Most common EEG pattern seen in awake, alert adults and children
   - Abnormal beta patterns can indicate neurological dysfunction such as in Parkinson’s disease.

5. **Gamma waves** 

   - Frequency range : 30-80 Hz
   - Associated with higher mental activity, cognitive processing, and information integration. 
   - They are often seen in tasks requiring concentration and problem-solving. 

9.5 Applications of EEG 
********************************

1. Clinical applications 
===================================

- **Diagnosis of Epilepsy** : EEG is a key tool for diagnosing epilepsy. It can detect abnormal brain wave patterns, such as spikes or sharp waves, which indicate epileptic seizures. [2]_
- **Sleep Disorders** : EEG is used in sleep studies (polysomnography) to monitor sleep stages and identify disorders such as sleep apnea, insomnia, or narcolepsy. [3]_
- **Monitoring of Brain Activity** : EEG is used in critical care settings to monitor patients who are in coma, vegetative states, or under anesthesia. It can help assess brain function and guide treatment decisions.
- **Brain Death Diagnosis** : EEG can be used to confirm brain death, which is characterized by the absence of electrical activity in the brain. [4]_
- **Neurocognitive Disorders**: EEG can help assess conditions such as dementia, Alzheimer’s disease, or encephalitis, as abnormal patterns of brain activity may be observed. [5]_ 

2. Research Applications 
===============================

- **Brain-Computer Interfaces (BCIs)** : EEG helps in BCIs by converting brain signals into commands that can control devices like artificial limbs or computers. This allows people who have difficulty moving to communicate or operate machines by using only their brain activity. [6]_
- **Cognitive Neuroscience** : EEG is widely used to study brain function during various cognitive tasks. Researchers use EEG to explore attention, memory, perception, and language processing. [7]_

3. Neurofeedback
============================

EEG is also used in neurofeedback therapy, where individuals are trained to control their brain activity. This can be applied to treat conditions like ADHD, anxiety, depression, and even help with performance enhancement in athletes and musicians. [8]_

Projects Using EEG
========================

You can utilize our BioAmp Hardware to create various applications. We’ve successfully developed multiple applications, so there’s nothing holding you back from creating something innovative and outstanding. A few applications of our devices
are highlighted below:

.. grid:: 2 2 2 2
    :margin: 4 4 0 0 
    :gutter: 2

    .. grid-item-card:: Recording EEG From Pre Frontal Cortex of Brain Using BioAmp EXG Pill 
        :text-align: center
        :link: https://www.instructables.com/Recording-EEG-From-Pre-Frontal-Cortex-of-Brain-Usi/ 

    .. grid-item-card:: Recording EEG From Visual Cortex of Brain Using BioAmp EXG Pill 
        :text-align: center
        :link: https://www.instructables.com/Recording-EEG-From-Visual-Cortex-of-Brain-Using-Bi/ 

    .. grid-item-card:: Controlling Video Game Using Brainwaves
        :text-align: center
        :link: https://www.instructables.com/Controlling-Video-Game-Using-Brainwaves-EEG/ 

    .. grid-item-card:: Play Tug of War Game With Your Mind Using EEG
        :text-align: center
        :link: https://www.instructables.com/Play-Tug-of-War-Game-With-Your-Mind-Using-EEG-1/ 

    .. grid-item-card:: Control the Flame of a Candle Using Your Focus
        :text-align: center
        :link: https://www.instructables.com/Control-the-Flame-of-a-Candle-Using-Your-Focus-EEG/ 

    .. grid-item-card:: Controlling LEDs of Arduino Uno R4 With Your Mind
        :text-align: center
        :link: https://www.instructables.com/Controlling-LEDs-of-Arduino-Uno-R4-With-Your-Mind-/ 

    .. grid-item-card:: Brain-Controlled Car: EEG + EMG Robotic Control 
        :text-align: center
        :link: https://www.instructables.com/Brain-Controlled-Car-EEG-EMG-Robotic-Control/ 

    .. grid-item-card:: A Neurofeedback Meditation Journey
        :text-align: center
        :link: https://www.instructables.com/A-Neurofeedback-Meditation-Journey/ 

    .. grid-item-card:: Pop Bubbles With Your Mind (EEG) | Neuro PlayGround (NPG) Lite
        :text-align: center
        :link: https://www.instructables.com/Pop-Bubbles-With-Your-Mind-EEG-Neuro-PlayGround-NP/ 

9.6 Advantages of EEG 
**********************************

- Non-invasive & safe
- Cost-effective
- Useful for diagnosing neurological disorders
- Real-time monitoring
- Suitable for long-duration monitoring
- Can be used in cognitive and psychophysiological research
- Portable & accessible

9.7 Limitations of EEG
******************************

1. **Poor Spatial Resolution** : EEG cannot provide detailed spatial information about the precise location of brain activity, as it measures only the electrical activity at the scalp surface.
2. **Requires expert analysis** : Interpretation can be complex and subjective.
3. **Sensitivity to External Noise** : EEG signals can be distorted by artifacts caused by muscle movements (such as eye blinks or facial contractions) and external electrical interference, which may mask the brain’s actual electrical activity.
4. **Limited Depth Information** : EEG is primarily sensitive to the activity of cortical neurons, and it is not as effective in detecting activity from deeper structures of the brain, such as the brainstem or subcortical areas. 

9.8 Summary 
**********************

EEG is a non-invasive technique that records the brain’s electrical activity using scalp electrodes. It helps diagnose conditions such as epilepsy, sleep disorders, and psychiatric illnesses, and is also used in cognitive research and brain computer interfaces. Although it has limitations like poor spatial resolution and susceptibility to noise, EEG remains highly valuable due to its real-time monitoring capability and excellent temporal precision.

.. warning::

    **This content is provided solely for learning purposes only. Always seek medical advice from a healthcare expert for clinical application.**

9.9 References
************************

.. [1] `Nayak CS, Anilkumar AC. EEG Normal Waveforms. [Updated 2025 Aug 3]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. <https://www.ncbi.nlm.nih.gov/books/NBK539805/>`_
.. [2] `Britton JW, Frey LC, Hopp JLet al., authors; St. Louis EK, Frey LC, editors. Electroencephalography (EEG): An Introductory Text and Atlas of Normal and Abnormal Findings in Adults, Children, and Infants [Internet]. Chicago: American Epilepsy Society; 2016. EEG in the Epilepsies. <https://www.ncbi.nlm.nih.gov/books/NBK390347/>`_    
.. [3] `Nayak CS, Anilkumar AC. EEG Normal Sleep. [Updated 2023 May 23]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. <https://www.ncbi.nlm.nih.gov/books/NBK537023/>`_ 
.. [4] `Szurhaj W, Lamblin MD, Kaminska A, Sediri H; Société de Neurophysiologie Clinique de Langue Française. EEG guidelines in the diagnosis of brain death. Neurophysiol Clin. 2015 Mar;45(1):97-104. doi: 10.1016/j.neucli.2014.11.005. Epub 2015 Jan 14. PMID: 25687591. <https://pubmed.ncbi.nlm.nih.gov/27303609/>`_  
.. [5] `Kanda PAM, Anghinah R, Smidth MT, Silva JM. The clinical use of quantitative EEG in cognitive disorders. Dement Neuropsychol. 2009;3(3):195-203. doi:10.1590/S1980-57642009DN30300004 <https://pubmed.ncbi.nlm.nih.gov/29213628/>`_
.. [6] `Värbu K, Muhammad N, Muhammad Y. Past, Present, and Future of EEG-Based BCI Applications. Sensors (Basel). 2022;22(9):3331. Published 2022 Apr 26. doi:10.3390/s22093331 <https://pubmed.ncbi.nlm.nih.gov/35591021/>`_
.. [7] `Höller Y. Quantitative EEG in Cognitive Neuroscience. Brain Sci. 2021;11(4):517. Published 2021 Apr 19. doi:10.3390/brainsci11040517 <https://pubmed.ncbi.nlm.nih.gov/33921596/>`_
.. [8] `Marzbani H, Marateb HR, Mansourian M. Neurofeedback: A Comprehensive Review on System Design, Methodology and Clinical Applications. Basic Clin Neurosci. 2016;7(2):143-158. doi:10.15412/J.BCN.03070208 <https://pmc.ncbi.nlm.nih.gov/articles/PMC4892319/>`_
