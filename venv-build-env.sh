#!/bin/sh
if [ ! -e ./.venv ]; then
   python3 -m venv .venv
fi
source ./.venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt