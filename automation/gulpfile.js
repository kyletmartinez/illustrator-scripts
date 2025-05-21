const eslint = require("gulp-eslint");
const fs = require("fs");
const gulp = require("gulp");
const jsdoc2md = require("jsdoc-to-markdown");

const files = "../source/*.jsx";

gulp.task("build", done => {
    jsdoc2md.render({
        "template": fs.readFileSync("./template.hbs", "utf8"),
        "helper": "./replace.js",
        "files": files})
    .then(output => fs.writeFileSync(`../README.md`, output));
    return done();
});

gulp.task("lint", () => {
    return gulp.src([files])
        .pipe(eslint({configFile: ".eslintrc.json"}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("default", gulp.series("lint", "build"));