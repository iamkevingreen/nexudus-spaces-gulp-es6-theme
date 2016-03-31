var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

// If you are familiar with Rails, this task the equivalent of `rake assets:precompile`
var revTask = function(cb) {
  gulpSequence(
    // 2) Update asset references (images, fonts, etc) with reved filenames in compiled css + js
    'rev-update-references',
    'rev-css',

    // 5) Report filesizes
    'size-report',
  cb)
}

gulp.task('rev', revTask)
module.exports = revTask
