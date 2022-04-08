# Bulk Pixels to EM/REM calculator and converter

---

I often find it difficult following design patterns/systems where each adds a different variation of `spacings`, `font-size` and `line-heights`.

While most find it easy to just kickstart with **Bootstrap** or **TailwindCSS** defaults and then override them resulting in an over-bloated CSS, it's not good in practice. One of the pain-points in implementing design systems/patterns is how `spacings`, `font-sizes` and `line-heights` would behave responsively.

Though there are some new and promising features recently introduced in CSS like `min()`, `max()` and `clamp()` over `calc()` which I've started to use on few projects, I still go through ton of conversions between `pixels` to `rem`.

### Why REM?

Because it has only one ultimate root parent `<html>` unlike `em` which scales nicely on every device, and it's predictable. `REM's` are used by default when generating code.

### The 4px Grid System

It's a reasonably robust grid system to control your design both aesthetically and visually on any device. The 4px grid system is used by:

- [Mozilla](https://design.firefox.com/photon/visuals/grid.html)
- [Atlassian](https://atlassian.design/foundations/grid)
- [Webflow](https://webflow.com/blog/why-were-using-a-4-point-grid-in-webflow)

### Useful Resources

Here's a list of tools and utilities that might prove useful in your front-end development.

- [Web Semantics](https://websemantics.uk)
- [PX to EM](http://pxtoem.com)
- [Omatsuri](https://omatsuri.app)
- [Typescale](https://type-scale.com)
- [Grid Lover](https://www.gridlover.net)

Questions or Queries - mail me (dont expect prompt reply): [anithegregorian@gmail.com](mailto:anithegregorian@gmail.com)

---

Built with ❤️ on [**AlpineJS**](https://alpinejs.dev) and [**PicoCSS**](https://picocss.com)
