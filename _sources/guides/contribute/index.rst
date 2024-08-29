.. _upsidedownlabs_contribute:

Contribute to Documentation
#############################

This guide outlines the process for contributing to our documentation.

Prerequisites
=============

- .. raw:: html

     <a href="https://www.python.org/downloads/" target="_blank">Python</a>
- .. raw:: html

     <a href="https://git-scm.com/downloads" target="_blank">Git</a>

Setup Steps
==================

1. Clone the repository:
   
   .. code-block:: bash

      git clone https://github.com/upsidedownlabs/upsidedownlabs.github.io.git


2. Navigate to the cloned directory:
   
   .. code-block:: bash

      cd upsidedownlabs.github.io

3. Creating virtual environment 

   - Windows:
   
   .. code-block:: bash

      py -m venv myenv
      myenv\Scripts\activate

   - Linux:
   
   .. code-block:: bash

      python3 -m venv myenv
      source myenv/bin/activate
   
4. Install dependencies:
   
   .. code-block:: bash

      pip install -r requirements.txt




For Windiows
======================

1. Install Python from the official website if not already installed.
2. Build the documentation:
   
   .. code-block:: bash

      sphinx-autobuild <source-dir> <output-dir>
   .. warning::
      The source directory and output directory must be different.
      
   Example:
   
   .. code-block:: bash

      sphinx-autobuild . ../build/html

   

.. note::

   Run this command if recent updates are not visible, this will clean the cache memory and rebuild the documentation.
   
   .. code-block:: bash

      .\make.bat clean

Linux-Specific Steps
====================

1. Ensure Python is installed.
2. Build the documentation:
   
   .. code-block:: bash

      make livehtml

Making Changes
==============

1. Locate the relevant ``.rst`` files in the repository.
2. Make your desired edits.
3. Save the files to see live changes on your local server.

.. note::

   Run this command if recent updates are not visible, this will clean the cache memory and rebuild the documentation.
   
   .. code-block:: bash

      make clean
