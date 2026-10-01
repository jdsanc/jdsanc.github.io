# Jesus Diaz Sanchez

Personal academic website at https://jdsanc.github.io/, built with Jekyll and hosted on GitHub Pages.

## Edit content

- `_pages/about.md`: affiliation and research bio.
- `_data/publications.yml`: selected publications, newest first.
- `_data/socials.yml`: contact, Google Scholar, and profile links.
- `_data/cv.yml`: CV content.
- `assets/img/headshot.png`: square portrait.
- `_sass/_academic.scss`: responsive layout and typography.

“All publications” links directly to Google Scholar. The old `/publications/` URL redirects there. `/cv/` remains an accessible HTML CV. The site uses no JavaScript, analytics, external UI libraries, or remote fonts.

## Build locally

Use Ruby 3.3, matching the GitHub Actions workflow:

```sh
bundle install
bundle exec jekyll build --strict_front_matter
bundle exec jekyll serve
```

Pushes to `main` build and deploy through `.github/workflows/pages.yml`. In repository settings, GitHub Pages should use **GitHub Actions** as its source.
