var gulp = require('gulp'),
    typescript = require('gulp-typescript');

gulp.task('compile', function compileTs() {
    var tsProject = typescript.createProject('tsconfig.json');
    var ts = tsProject.src()
                .pipe(typescript(tsProject));
    return ts.js.pipe(gulp.dest('.'));
});

gulp.task('default', ['compile']);
