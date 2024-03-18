# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import sys
from pathlib import Path
from typing import Any, Dict
import pydata_sphinx_theme
from sphinx.application import Sphinx

sys.path.append(str(Path(".").resolve()))

project = 'upsidedownlabs.github.io'
copyright = '2024, Upside Down Labs'
author = 'Upside Down Labs'

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

html_sidebars = {
  "ideas/index": [],
}

html_theme_options = {
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
    "show_nav_level": 2,
    "announcement": "Welcome to Upside Down Labs docs site!",
    # "show_version_warning_banner": True,
    "navbar_center": ["navbar-nav"],
    "navbar_start": ["navbar-logo"],
    "navbar_end": ["theme-switcher", "navbar-icon-links"],
    # "navbar_persistent": ["search-button"],
    "footer_start": ["copyright"],
    "footer_end": ["last-updated"],
    # "content_footer_items": ["last-updated"],
    # "secondary_sidebar_items": {
    #     "**": ["page-toc", "edit-this-page", "sourcelink","pdf"]
    # }
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
}

latex_documents = [
    ("bioamp-exg-pill", "bioamp-exg-pill.tex", "BioAmp EXG Pill", author, "manual"),
]