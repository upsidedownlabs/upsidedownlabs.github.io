.. _fix-hardware-setup:

Fixing hardware setup
#############################

- Make sure that the pins of jumper cables are properly connected to the development board as well as to the Bioamp hardware as mentioned in the documentation.

.. warning:: Take precautions while connecting to power, if power pins are to be swapped, your BioAmp Hardware will be fried and it’ll become unusable (DIE).

- Use the jumper cables that are provided in the kit as we thoroughly test them before packing everything. To check if jumper cables are working correctly then you can do a `continuity test using a multimeter <https://www.wikihow.com/Test-Continuity-with-a-Multimeter>`_.
- There can be a case where you are trying to upload the code on the development board using Arduino IDE but continuously getting “Uploading” status for some time without getting any errors. To resolve this you can:
  
  - Change the USB cable connecting the development board to the laptop as some USB cables are only meant for charging but may not work as USB to transfer data bidirectionally. So it is always better to use the USB cable which came with the development board itself.
  - If the issue still persists then you can try inserting the USB cable in another USB port. There can be cases where the issue is with your USB port so it is better to try using another USB port to resolve the issue.
