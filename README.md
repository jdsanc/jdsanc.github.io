# Jesus Diaz Sanchez

Academic portfolio of Jesus Diaz Sanchez at MIT. The site brings together his research interests, selected publications, and the visual standard he uses for scientific figures and presentations.

[Portfolio](https://jdsanc.github.io/) · [Publications](https://jdsanc.github.io/publications/) · [Design system](https://jdsanc.github.io/design-system/) · [GitHub profile](https://github.com/jdsanc)

## Design system

The homepage uses DM Serif Display Regular for the cover, DM Serif Text Regular for section and publication headings, and DM Sans for text and navigation. White paper, dark ink, and one teal accent carry through the site. The responsive layout keeps the reference’s generous margins and lets the text determine the height of each section.

The [figure guide](_pages/design-system.md) includes the compact type scale, legend and panel rules, and a worked example with editable slide and print exports. The [example generator](scripts/decay-example.py) uses the Cyma figure exporter. The finished SVG and PDF assets work independently. Font files and their licenses are in [assets/fonts](assets/fonts/).

## Edit the portfolio

| Content | Source |
| --- | --- |
| Homepage bio and affiliation | [_pages/about.md](_pages/about.md) |
| Publications shown on the homepage and publications page | [_data/publications.yml](_data/publications.yml) |
| Contact and academic profiles | [_data/socials.yml](_data/socials.yml) |
| Navigation and footer | [_includes](_includes/) |
| Web typography, colors, and responsive spacing | [assets/css/main.css](assets/css/main.css) |

To enable the CV link, set `resume_url` in [_config.yml](_config.yml) to the public PDF path or HTTPS URL. The navigation opens that file directly.

## Build locally

With Ruby 3.3 and the repository’s locked gems installed, run the following from the checkout.

```sh
bundle install
bundle exec jekyll build --strict_front_matter
bundle exec jekyll serve
```

The site serves its own styles, fonts, and images. Pushes to `main` trigger the [GitHub Pages workflow](.github/workflows/pages.yml).
