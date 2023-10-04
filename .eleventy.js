const path = require("path");
const prettier = require("prettier");

module.exports = config => {

    // This enable all the dependency libraries inside the `assets` folder
    config.addPassthroughCopy({
        "node_modules/reveal.js/dist": "assets/reveal/",
        "node_modules/reveal.js/plugin": "assets/reveal/plugin",
    });

    // This copies anything from `src/images` into `dist/images`.
    // Call it using <img src="images/my-image.jpg" />
    config.addPassthroughCopy('./src/images/');

    // Prettifies the output html so the indentations are correct
    config.addTransform("prettier", function (content, outputPath) {
        const extname = path.extname(outputPath);
        switch (extname) {
          case ".html":
            // Strip leading period from extension and use as the Prettier parser.
            const parser = extname.replace(/^./, "");
            return prettier.format(content, { parser });
    
          default:
            return content;
        }
      });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist'
        }
    };
}
