.. _arduino-library-from-github:

Adding an Arduino Library from GitHub
######################################

Some Arduino libraries are not published in the official Arduino Library Manager and are only available on GitHub. This guide walks you through downloading such a library from a GitHub repository and installing it in Arduino IDE using the "Add .ZIP Library" method.

This method is straightforward and works for any library that is available as a ZIP file on GitHub. It does not require you to clone the repository or use Git commands, making it accessible for beginners.

.. note::

   This guide uses the `ESP32-BLE-Combo <https://github.com/upsidedownlabs/ESP32-BLE-Combo>`_ library as an example. You can follow the same steps for any other GitHub-hosted Arduino library.

Step 1: Open the GitHub Repository
====================================

Open your web browser and navigate to the GitHub repository of the library you want to install.

For the ESP32-BLE-Combo library, go to:
`https://github.com/upsidedownlabs/ESP32-BLE-Combo <https://github.com/upsidedownlabs/ESP32-BLE-Combo>`_

.. figure:: media/step1.jpg
   :align: center
   :alt: GitHub repository page


   The GitHub repository page for the library

Step 2: Download the ZIP
==========================

On the repository page, click the green **Code** button near the top-right of the file listing. A dropdown menu will appear with several options.

.. figure:: media/step2.jpg
   :align: center
   :alt: Clicking the Code button


   Click the green "Code" button to open the download dropdown

From the dropdown, click **Download ZIP**. Your browser will download a `.zip` archive of the entire repository to your computer (usually to the Downloads folder).

.. figure:: media/step3.jpg
   :align: center
   :alt: Download ZIP option


   Select "Download ZIP" from the dropdown

.. note::

   Do not unzip the file. Arduino IDE needs the file in its original `.zip` format to install it correctly.

Step 3: Open Arduino IDE
==========================

Launch Arduino IDE on your computer. Wait for it to fully load before proceeding.

.. figure:: media/step4.jpg
   :align: center
   :alt: Arduino IDE main window


   Arduino IDE ready to use

Step 4: Click on "Sketch" in the Menu Bar
============================================

In the Arduino IDE menu bar at the top, click on **Sketch**. A dropdown menu will appear.

.. figure:: media/step5.jpg
   :align: center
   :alt: Clicking Sketch in the Arduino IDE menu bar

   Click on "Sketch" in the menu bar

Step 5: Hover Over "Include Library"
=======================================

In the dropdown, move your mouse over **Include Library**. A submenu will slide out to the right.

.. figure:: media/step6.jpg
   :align: center
   :alt: Hovering over Include Library

   Hover over "Include Library" to open the submenu

Step 6: Click "Add .ZIP Library..."
======================================

From the submenu, click **Add .ZIP Library...**. A file picker dialog will open.

.. figure:: media/step7.jpg
   :align: center
   :alt: Clicking Add .ZIP Library

   Click "Add .ZIP Library..." from the submenu

Step 7: Select the Downloaded ZIP
====================================

In the file picker dialog, navigate to the location where you saved the downloaded ZIP file (typically the Downloads folder). Select the ZIP file and click **Open** (or **Choose** on macOS).

.. figure:: media/step8.jpg
   :align: center
   :alt: File picker with ZIP selected

   Select the downloaded ZIP file and click Open

Arduino IDE will install the library. You should see a success message at the bottom of the IDE window:

.. figure:: media/step9.jpg
   :align: center
   :alt: Library installed successfully message

   "Library installed" confirmation shown at the bottom of Arduino IDE

Step 8: Verify the Installation
==================================

To confirm the library was installed correctly, click **Sketch** > **Include Library** in the menu bar. Scroll down till the end, under the contributed library, look for **ESP32 BLE Combo Keyboard Mouse**.

.. figure:: media/step10.jpg
   :align: center
   :alt: Library appearing in the Include Library list

   The installed library appears at the bottom of the Include Library list

Now that you have followed all the steps, your ESP32 BLE Combo Keyboard Mouse library is included in your Arduino globally, and you can use it in any of your sketches by including it at the top of your code:

.. code-block:: cpp

   #include <BleCombo.h>

Troubleshooting
*****************

**The library does not appear in the list after installation**
   Close and reopen Arduino IDE, then check the list again. If it is still missing, repeat the Add .ZIP Library step.

**"No valid library found in the ZIP" error**
   This usually means the ZIP was extracted and re-compressed before installation. Download the ZIP fresh from GitHub without unzipping it first.

**The ZIP failed to download**
   Try refreshing the GitHub page and clicking Download ZIP again. If the repository is private, make sure you are logged into GitHub and have access.

.. seealso::

   - :ref:`resolve-software-issues` for general Arduino IDE troubleshooting tips.
   - :ref:`upsidedownlabs_contribute` to understand how you can contribute us.
