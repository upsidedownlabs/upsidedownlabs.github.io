.. _upsidedownlabs_contribute:

Contribute to Documentation
#############################

Welcome to the Upside Down Labs documentation contribution guide! This guide is designed for everyone - whether you're completely new to programming or an experienced developer. We'll walk you through every step with clear explanations and help you troubleshoot common issues.

🏫 What You'll Learn
=======================

- How to set up your computer for contributing
- How to make changes to documentation
- How to submit your contributions
- How to solve common problems you might encounter

📃 Prerequisites (What You Need Before Starting)
====================================================
Before we begin, you'll need to install a few tools on your computer. Don't worry - we'll explain what each one does and how to install it.

1. **Python - The Programming Language**

   - Visit: https://www.python.org/downloads/
   - Click the big yellow "Download Python" button
   - Run the downloaded file
   - Click "Install Now"

   .. important:: 
      Check the box that says "Add Python to PATH" during installation

   - How to verify it worked:
      * Open Command Prompt (Windows) or Terminal (Mac/Linux)
  
      * Type
  
      .. code-block:: bash
         
         python --version

      * You should see something like "**Python 3.11.x**"

2. **Git - Version Control System**

   - Visit: https://git-scm.com/downloads
   - Download the version for your operating system
   - Run the installer with default settings
   - When asked about "Adjusting your PATH environment," choose "Git from the command line and also from 3rd-party software"

   - How to verify it worked:
      * Open Command Prompt or Terminal
      * Type
  
      .. code-block:: bash
         
        git --version

      * You should see something like "**git version 2.x.x**"

3. **GitHub Account - Your Online Workspace**

   - How to create an account:
      - Visit: https://github.com/signup
      - Click "Sign up"
      - Choose a username (this will be public)
      - Use your email address
      - Create a strong password
      - Verify your account through email

4. **VSCode (Visual Studo Code)**
   
   .. dropdown:: Microsoft Store (Recommended for Windows)
      :open:

      1. **Open Microsoft Store**
   
         - Click the ``Windows Start`` button
         - Type "Microsoft Store" and press Enter
         - Or click the Microsoft Store icon in your taskbar

      2. **Search for Visual Studio Code**
   
         - Click the search box at the top
         - Type "Visual Studio Code"
         - Press Enter

      3. **Install VS Code**
   
         - Click on "Visual Studio Code" (published by Microsoft)
         - Click the "Get" or "Install" button
         - Wait for the download and installation to complete (usually 2-5 minutes)

      4. **Launch VS Code**
   
         - Click "Launch" when installation is complete
         - Or find "Visual Studio Code" in your Start menu

   .. dropdown:: Direct Download (For All Platforms)

      Visit Visual Studio Code Website: https://code.visualstudio.com/download

   To learn about VSCode and it's setup visit: https://code.visualstudio.com/docs


🛠️ Setup Steps (Getting Everything Ready)
===============================================

Now that you have the tools installed, let's set up your workspace. Follow these steps exactly as written.

.. tab-set::

   .. tab-item:: Windows

      **Step 1:  Fork the Repository (Make Your Own Copy)**

      Think of "forking" like making a photocopy of a book so you can write notes in it without affecting the original.

      - **Login to your GitHub account** : https://github.com/login using the credentials you created earlier.
      - Now that you're logged into GitHub, you're ready to create your own copy of the documentation project.
      - **Visit the official repository:** https://github.com/upsidedownlabs/docs.upsidedownlabs.tech
      - **Click the Fork button** in the top-right corner of the page
      - GitHub will make a personal copy of the project in your account
      - You now have your own copy at ``github.com/YOUR-USERNAME/docs.upsidedownlabs.tech``

      **Step 2: Clone Your Fork (Download on Your Computer)**

      Now we'll download your forked copy to your computer so you can work on it, using Git on your computer, follow the step-by-step instructions given:
      You may also follow a detailed guide `GitHub for cloning <https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository>`_.

      1. Navigate where you want to store the project by opening File Explorer ``(Windows + E)``.
      2. **Right-click in the empty space** of in Documents or folder of your choice. We recommend using Documents Folder.
      3. Select **"Open in Terminal"** from the context menu and if you don't see this option, hold Shift while right-clicking.
    
      4. Now that you have a terminal open in your chosen directory, clone your fork repo by command i.e Download your fork to your computer:
      
         .. code-block:: bash

            git clone https://github.com/YOUR-USERNAME/docs.upsidedownlabs.tech

         Replace **YOUR-USERNAME** with your actual GitHub username!
         
         **What happens:** Git will create a new folder called ``docs.upsidedownlabs.tech`` in your current location.

      5. Once cloning is done, enter the following command, it will open Visual Studio Code with all the ``docs.upsidedownlabs.tech`` folder:

         .. code-block:: bash

            code ./docs.upsidedownlabs.tech

        
      **Step 3: Creating virtual environment (Isolated Workspace)**
      
      A virtual environment is like creating a separate workspace for this project so it doesn't interfere with other Python projects on your computer.
      
      Now we'll create and activate the virtual environment using VS Code's integrated terminal:

      6. In the VS Code terminal, create the virtual environment:

         .. code-block:: bash

            py -m venv .venv
            
      7. Activate the virtual environment:

         .. code-block:: bash

            .venv\Scripts\activate
         
      .. dropdown:: Troubleshooting
         :icon: alert
    
         You may get an execution policy error if scripts are restricted. 
         To fix this;
            1. Close your current Command Prompt.
            2. Run Windows PowerShell or Command Prompt as "Run as Administrator".
            3. Run this command:
               
               .. code-block:: bash
                  
                  Set-ExecutionPolicy Unrestricted -Scope Process
            4. Then type **Y** and hit Enter.
            5. Navigate back to project folder (docs.upsidedownlabs.tech) and paste the folder file path:
               
               .. code-block:: bash

                  cd <FILE-PATH>

            6. Try activating again:
               
               .. code-block:: bash

                  .venv\Scripts\activate
         
         **How to know it worked:** You should see (.venv) at the beginning of your command prompt line.

      **Step 4: Install Dependencies (Required Tools)**
      
      Dependencies are like ingredients for a recipe - the documentation system needs specific tools to work.

      .. code-block:: bash

         pip install -r requirements.txt
      
      What this does: Downloads and installs all the tools needed to build the documentation.
      
      .. dropdown:: Troubleshooting
         :icon: alert

         If you get an error:
         Try this instead:

         .. code-block:: bash
            
            python -m pip install -r requirements.txt

      **Step 5: Build and Preview the Documentation**

      Now let's see the documentation website running on your computer!

      8.  Install Python from the official website if not already installed.
      9.  Build the documentation:

      .. code-block:: bash
         
         sphinx-autobuild . .build
      
      **What you should see:**

      - The command will show some text and then say something like "Serving on http://127.0.0.1:8000"
      - Open your web browser and go to http://127.0.0.1:8000
      - You should see the Upside Down Labs documentation website!

      .. note::

         - Run this command if recent updates are not visible, this will clean the cache memory and rebuild the documentation.
         
         .. code-block:: bash

            .\make.bat clean
         
         - **Stop live server**: In VSCode terminal, press ``Ctrl+C``.
         
         - If the above command doesn't work to clean the cache use; **Remove build directory** in VSCode terminal:

         .. code-block:: bash

            rmdir /s/q .build


   .. tab-item:: Linux

      To do.


✏️ Making Changes (The Fun Part!)
===================================

Now you're ready to contribute! Here's how to make changes to the documentation.

Understanding the File Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The documentation is written in files with .rst extension (reStructuredText). Think of these like Word documents, but with special formatting codes.

**Common folders you'll work with:**

- guides/ - Tutorial and how-to guides
- hardware/ - Hardware documentation
- software/ - Software documentation
- index.rst - The main homepage


1. Locate the ``.rst`` the file in the repository you want to edit using your VSCode Explorer or browsing on your computer.
2. In the VSCode or if you are using any other text editor of your choice open the file.
3. Make your desired changes i.e. contribution to the documentation. 
4. Save the file.
5. Check your browser (running as a local server on http://127.0.0.1:8000)- the changes should appear automatically!

💾 Submitting Your Changes (Sharing Your Work)
===============================================

Once you're happy with your changes, here's how to submit them to UpsideDown Labs, there are two ways to do it:

.. tab-set::

   .. tab-item:: Using Command Line

      **Step 1: Save Your Changes to Git**

      - Check what files you changed:

      .. code-block:: bash

         git status

      - Add your changes:

      .. code-block:: bash

         git add .

      - Commit your changes with a message (Write a brief description of what you changed):

      .. code-block:: bash

         git commit -m "Improve installation instructions for beginners"



      **Step 2: Upload to GitHub**

      .. code-block:: bash
         
         git push origin main

      **Step 3: Create a Pull Request**

      - Go to your fork on GitHub (github.com/YOUR-USERNAME/docs.upsidedownlabs.tech)
      - Click "Compare & pull request" (this button appears after you push changes)
      - Write a title and description explaining what you changed and why
      - Click "Create pull request"
   
   .. tab-item:: Using GUI

      VSCODE

**What happens next:** The Upside Down Labs team will review your changes and either accept them or ask for modifications.


💡 Tips for Good Contributions
=================================

1. Write like you're explaining to a friend - use simple, clear language
2. Break up long paragraphs - shorter paragraphs are easier to read
3. Use examples - show don't just tell
4. Test your instructions - make sure they actually work
5. Check for typos - read through your changes before submitting

For Visual Studio Code: Make your editing experience even better
=====================================================================

1. **Open Extensions panel** or ``Ctrl+Shift+X``
2. **Search and install these extensions:**
   
   - **"reStructuredText"** - Adds syntax highlighting and preview
   - **"Python"** - Better Python support
   - **"GitLens"** - Enhanced Git integration
   - **"Live Preview"** - Preview HTML files directly in VS Code