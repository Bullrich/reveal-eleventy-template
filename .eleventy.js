module.exports = config => {

    config.addPassthroughCopy({
        "node_modules/reveal.js/dist": "assets/reveal/",
        "node_modules/reveal.js/plugin": "assets/reveal/plugin",
    });

    config.addPassthroughCopy('./src/images/');

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
