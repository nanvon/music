const load = require.context("./svg", false, /\.svg$/);
load.keys().map(load);
