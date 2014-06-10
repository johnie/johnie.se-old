# Johnie Hjelm

##Hello there!

Welcome to the heart of my website. Fairly recently, my site and I went through a somewhat philosophical change, opting for speed over much else on the backend, and for inspirational design over personal taste.

### For whom is this repo for?

This repo is mostly for me. I, like many of you, host my site on GitHub for reasons of portability, ease of work, and peace of mind. Beyond my own needs, I have also open-sourced this repo for you, the reader (and most likely developer), to explore the things that make my site tick.


### Points of Interest

Some things you may find interesting:
* [Uncompressed Sass files](https://github.com/johnie/johnie.se/tree/master/style)
* [Gruntfile.js](https://github.com/johnie/johnie.se/blob/master/Gruntfile.js) – the Grunt configuration used to help me develop locally.

### Workflow
The source code here on Github is all good and well, but there’s still a vital missing ingredient between here and the live site. Here’s a short overview of how I modify and build my site;

1. [Grunt](http://gruntjs.com/) is always running when coding or designing. It handles a few things, as defined in my Gruntfile, namely: — [Sass](http://sass-lang.com/) to make authoring my stylesheets easier together with [CssWizardry](http://csswizardry.com/)'s awesome framework [Inuit.css](http://inuitcss.com/) — [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) to minify the JS-files with source maps — [Jekyll](http://jekyllrb.com/) to build my site into static HTML files - Finally, a “watch” task with livereload to watch my files for changes and perform the above tasks.

2. Jekyll builds my site in a <code>_site</code> directory, which is ignored by Git so that I don’t end up with duplicate content and unnecessary bloat on Github.

### FAQ

<dl>
  <dt>Why aren't you using Github pages to host your Jekyll site, like everbody else?</dt>
  <dd>While GitHub lets you host Jekyll-powered sites directly on GitHub itself, they don’t allow many custom Jekyll plugins. I also have some issues with the Open Graph Protocol not parsing my sites data. So if you have an solution to this; please [submit an issue](https://github.com/johnie/johnie.se/issues) regarding it with the solution.</dd>
</dl>
