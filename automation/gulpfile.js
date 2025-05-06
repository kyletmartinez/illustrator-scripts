const eslint = require("gulp-eslint");
const fs = require("fs");
const gulp = require("gulp");
const jsdoc2md = require("jsdoc-to-markdown");

gulp.task("build", done => {
    jsdoc2md.render({
        template: fs.readFileSync("./template.hbs", "utf8"),
        helper: "./replace.js",
        files: `../source/*.jsx`})
    .then(output => fs.writeFileSync(`../README.md`, output));
    return done();
});

gulp.task("lint", () => {
    return gulp.src([`../source/*.jsx`])
        .pipe(eslint({configFile: ".eslintrc.json"}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("default", gulp.series("lint", "build"));