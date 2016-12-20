# 

## Installing dependencies & running up
To work, the **Pixel2HTML Boilerplate** needs to install some dependencies to run the options you select.
For this job, run this command in your shell

```
$ npm install
$ npm run code
```

### Other available npm commands

```
$ npm run build //build the project without serving
```

## File Structure

This boilerplate will create a set of files and folders

```

├── dist/
├── src/
│    ├──  assets/
│    │    ├──  .gulp/
│    │    ├──  fonts/
│    │    ├──  icons/
│    │    ├──  images/
│    │    ├──  js/
│    │    ├──  styles/
│    │    │    ├──  components/
│    │    │    │    ├──  _buttons.scss
│    │    │    │    ├──  _footer.scss
│    │    │    │    ├──  _header.scss
│    │    │    │    └──  _nav.scss
│    │    │    ├──  screens/
│    │    │    │    ├──  _base.scss
│    │    │    │    └──  screen_1.scss

│    │    │    ├──  _variables.scss
│    │    │    ├──  _reset.scss
│    │    │    ├──  _mixins.scss
│    │    │    └──  main.scss
│    │    └──  vendor/
│    └──  screen_1.html
├── .bowerrc
├── .editorcofig
├── .gitattributes
├── .gitignore
├── .gitlab-ci.yml
├── .project.conf
├── bower.json
├── gulpfile.js
├── package.json
└── README.md
```



## Available Gulp Commands

### Helpers
* `$ gulp clean` Clean /dist directory

### Static Files
* `$ gulp main:static` Compile static files (images, fonts, icons)
* `$ gulp main:static:images` Move images
* `$ gulp main:static:fonts` Move fonts
* `$ gulp main:static:icons` Move icons

### Scripts
* `$ gulp main:scripts` Concat, uglify and move JS files

### Styles
* `$ gulp main:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] files

### Vendors




### jQuery
* `$ gulp vendor:jquery` Compile & move all **jQuery** files
* `$ gulp vendor:jquery:scripts` Compile, concat, minify and move **jQuery** files

### Daemons
* `$ gulp watch` **Watch** your files and autoexecute gulp directives
* `$ gulp serve` **Watch** your files and **serve** with an HTTP server and **Sync** with your prefered browser _awesome!_

### Delivery
 * `$ gulp build` Execute all the gulp directives and makes a `.zip` file with the latest code.
