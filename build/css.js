const postcssConfig = require('./postcss.config')
const postcss = require('postcss')
const glob = require('glob')
const sass = require('node-sass')
const cleancss = require('clean-css')
const fs = require('fs')
const path = require('path')
const files = ['bootstrap', 'bootstrap-grid', 'bootstrap-reboot', 'bootstrap-utilities']

files.forEach(filename => {
  sass.render({
    file: path.resolve(`./scss/${filename}.scss`),
    outputStyle: 'expanded',
    sourceMap: true,
    sourceMapContents: true,
    precision: 6,
    outFile: `./dist/css/${filename}.css`
  }, (error, css) => {
    // Not sure what to do with css.map here
    postcss(postcssConfig)
      .process(css.css, { from: `./dist/css/${filename}.css` })
      .then(result => {
        fs.writeFile(`./dist/css/${filename}.css`, result.css, () => true)
        fs.writeFile(`./dist/css/${filename}.min.css`, new cleancss().minify(result.css).styles, () => true)
      })
  })
})

// Autoprefix examples
glob('./site/content/**/*.css', {}, (error, files) => {
  files.forEach(file => {
    fs.readFile(file, (err, css) => {

      postcss(postcssConfig)
        .process(css, { from: file, to: file })
        .then(result => {
          if (css.toString('utf8') !== result.css) {
            fs.writeFile(file, result.css, () => true)
          }
        })
    })
  })
})
