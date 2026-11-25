"""Public illustration: analytical exponential decay, with no experimental data.

Requires Matplotlib, NumPy and the Cyma package with its figures dependencies.
Run from the website checkout with python scripts/decay-example.py
The example files are saved in assets/figures.
"""

import base64
import json
from pathlib import Path
import xml.etree.ElementTree as ET

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import font_manager

from cyma.figures import configure_style, export_figure


def reflow_narrow(figure):
    """Give the narrower composition independent print spacing."""
    if getattr(figure, "_cyma_mode", "") == "print":
        figure.set_size_inches(4.0, 3.6)
        figure.axes[0].set_position((.15, .13, .80, .66))


def generate(narrow=False):
    configure_style()
    destination = Path(__file__).resolve().parents[1] / "assets" / "figures"
    stem = destination / ("decay-example-mobile" if narrow else "decay-example")
    time = np.linspace(0, 5, 201)
    figure = plt.figure(figsize=(4.0, 4.8) if narrow else (6.5, 4.3))
    axes = figure.add_axes((.19, .15, .75, .56) if narrow else (.13, .15, .83, .64))
    axes.plot(time, np.exp(-time), color="#136F64", linestyle="-", marker="o",
              markevery=25, markersize=3.5, label="Fast decay (rate 1)")
    axes.plot(time, np.exp(-time / 2), color="#005E9D", linestyle="--", marker="s",
              markevery=25, markersize=3.5, label="Slow decay (rate 0.5)")
    axes.set(xlim=(0, 5), ylim=(0, 1), xlabel="Scaled time, t",
             ylabel="Remaining fraction", xticks=range(6), yticks=(0, .25, .5, .75, 1))
    axes.yaxis.label.set(rotation=0, ha="left", va="bottom")
    axes.yaxis.set_label_coords(0, 1.04)
    axes.tick_params(length=3, pad=4)
    figure.legend(*axes.get_legend_handles_labels(), loc="upper center",
                  bbox_to_anchor=(.54, .995), ncol=1 if narrow else 2,
                  columnspacing=2, handlelength=2.7)
    if narrow:
        figure._cyma_layout = reflow_narrow
    paths = export_figure(figure, stem, print_width_mm=140,
                          provisional_print_width=True, slide_width_px=390 if narrow else 780)
    plt.close(figure)

    # A standalone <img> cannot inherit a host page's web fonts. Embed the
    # original OFL-licensed font in each SVG; text remains editable.
    font_path = Path(font_manager.findfont("DM Sans", fallback_to_default=False))
    encoded = base64.b64encode(font_path.read_bytes()).decode("ascii")
    ns = "http://www.w3.org/2000/svg"
    ET.register_namespace("", ns)
    ET.register_namespace("xlink", "http://www.w3.org/1999/xlink")
    for path in paths:
        if path.suffix != ".svg":
            continue
        tree = ET.parse(path)
        definitions = tree.getroot().find(f"{{{ns}}}defs")
        if definitions is None:
            definitions = ET.SubElement(tree.getroot(), f"{{{ns}}}defs")
        style = ET.SubElement(definitions, f"{{{ns}}}style", type="text/css")
        style.text = ("@font-face {font-family:'DM Sans';font-style:normal;font-weight:400;"
                      "src:url(data:font/ttf;base64," + encoded + ") format('truetype');}")
        tree.write(path, encoding="utf-8", xml_declaration=True)
    # The public handoff contains dimensions and dependencies, not local paths.
    handoff_path = stem.with_name(stem.name + ".handoff.json")
    handoff = json.loads(handoff_path.read_text())
    handoff["fonts"].pop("package_directory", None)
    handoff["fonts"]["svg_text"] = "editable; DM Sans Regular embedded as an OFL-licensed data font"
    handoff_path.write_text(json.dumps(handoff, indent=2) + "\n")
    for mode, info in handoff["modes"].items():
        print(mode, info)


if __name__ == "__main__":
    generate()
    generate(narrow=True)
