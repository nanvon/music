const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
            .set("api", resolve("src/api"))

        //引入图标
        config.module.rule("svg").exclude.add(resolve("./src/assets/fonts/svg"));
        config.module.rule("icon").test(/\.svg$/)
            .include.add(resolve("./src/assets/fonts/svg")).end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: 'icon-[name]'
            });
    },
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/styles/common";@import "./src/assets/styles/variables";`,
            },
        },
    },
}
