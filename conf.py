# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import os
import sys
from pathlib import Path
from typing import Any, Dict
import pydata_sphinx_theme

sys.path.append(str(Path(".").resolve()))

project = 'upsidedownlabs.github.io'
copyright = '2024, Upside Down Labs'
author = 'Upside Down Labs'

# PDF path exploration
MAX_DEPTH = 2
walk_dirpaths = ['hardware','kits']
pdf_paths = []
for walk_dirpath in walk_dirpaths:
    for (dirpath, dirnames, filenames) in os.walk(walk_dirpath, topdown=True):
        if dirpath.count('/') == MAX_DEPTH:
            pdf_paths.append(dirpath[:])

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx_design",
    "sphinxcontrib.youtube",
    "sphinx_copybutton"
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'env', ".venv"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']
html_logo = "_static/logo/logo_black_hr_nbg.svg"
html_favicon = "_static/logo/logo_sqr_bgw.svg"
html_sourcelink_suffix = ""
html_last_updated_fmt = ""
html_theme_path = [pydata_sphinx_theme.Path()]
html_baseurl = "docs.upsidedownlabs.tech"
html_css_files = [
    'css/custom.css',
]

# Pages entry without primary (left) sidebar

# html_sidebars = {

# }

html_theme_options = {
    "external_links": [
        {
            "url": "https://www.digikey.com/en/supplier-centers/myupsidedownlab",
            "name": "DigiKey",
        },
        {
            "url": "https://www.mouser.com/manufacturer/upside-down-labs/",
            "name": "Mouser",
        },
        {
            "url": "https://www.tindie.com/stores/upsidedownlabs/",
            "name": "Tindie",
        },
        {
            "url": "https://www.amazon.in/stores/UpsideDownLabs/Homepage/page/476F15A3-A296-4D5F-A91A-D266CB247355",
            "name": "Amazon India",
        },
        {
            "url": "https://store.upsidedownlabs.tech/",
            "name": "Store India",
        },
        {
            "url": "https://t.ly/ExlaF",
            "name": "GeM India",
        }
    ],
    "header_links_before_dropdown": 4,
    "show_prev_next": True,
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/upsidedownlabs/",
            "icon": "fa-brands fa-github",
            "attributes": {"target": "_blank"},
        },
        {
            "name": "Docs",
            "url": "https://docs.upsidedownlabs.tech",
            "icon": "fa-solid fa-book",
            "attributes": {"target": "_blank"},
        },
        {
            "name": "Discord",
            "url": "https://discord.gg/SzYRVz8xRw",
            "icon": "fa-brands fa-discord",
            "attributes": {"target": "_blank"},
        },
        {
            "name": "Upside Down Labs",
            "url": "https://upsidedownlabs.tech/",
            "icon": "_static/logo/logo_sqr_bgw.svg",
            "type": "local",
            "attributes": {"target": "_blank"},
        },
    ],
    "logo": {
        "image_dark": "_static/logo/logo_white_hr_nbg.svg",
    },
    "use_edit_page_button": True,
    "show_toc_level": 1,
    "navbar_align": "right",
    "show_nav_level": 1,
    "announcement": "Welcome to Upside Down Labs docs site!",
    # "show_version_warning_banner": True,
    "navbar_center": ["navbar-nav"],
    "navbar_start": ["navbar-logo"],
    "navbar_end": ["theme-switcher", "navbar-icon-links"],
    # "navbar_persistent": ["search-button"],
    "footer_start": ["copyright"],
    "footer_end": ["last-updated"],
    # "content_footer_items": ["last-updated"],
    "secondary_sidebar_items": {
        "**": ["page-toc", "edit-this-page", "sourcelink","pdf"]
    },
}

html_context = {
    "display_github": True,
    "github_user": "upsidedownlabs",
    "github_repo": "upsidedownlabs.github.io",
    "github_version": "main",
    "doc_path": "",
    "conf_py_path": "",
    "show_license": True,
    "pages_url": "https://docs.upsidedownlabs.tech",
    "pages_slug": "",
    "docs_url": "https://docs.upsidedownlabs.tech",
    "edit_page_url_template": "{{ my_vcs_site }}{{ file_name }}",
    "edit_page_provider_name": "GitHub",
    "my_vcs_site": "https://github.com/upsidedownlabs/upsidedownlabs.github.io/edit/main",
    "pdf_paths": pdf_paths
}

# -- Options for LaTeX output --
latex_documents = []

latex_elements = {
    "papersize": "a4paper",
    "preamble": open("_static/latex/preamble.tex").read(),
}

for pdf_path in pdf_paths:
    board_tex_name = pdf_path.split('/')[-1]
    latex_documents.append((pdf_path+"/index", board_tex_name+".tex", "", author, "manual"))