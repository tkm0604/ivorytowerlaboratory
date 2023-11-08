const gulp          = require("gulp");
const sass          = require("gulp-sass");
const dartsass      = require("sass");
sass.compiler       = dartsass;
const fiber         = require("fibers");
const autoprefixer  = require("gulp-autoprefixer");
const plumber       = require("gulp-plumber");
const notify        = require("gulp-notify");
const pug           = require("gulp-pug");
const browserSync   = require("browser-sync").create();
const rename        = require("gulp-rename");
const ejs           = require("gulp-ejs");
const webpackStream = require("webpack-stream");
const webpack       = require("webpack");
const webpackConfig = require("./webpack.config");
const fs            = require("fs");
const imagemin      = require("gulp-imagemin");
const pngquant      = require("imagemin-pngquant");

const dir = {
  src: {
    root: "../../../dev/frontend/",
    css: "../../../dev/frontend/src/sass/",
    js: "../../../dev/frontend/src/js/",
    template: "../../../dev/frontend/src/template/",
    docs: "../../../dev/frontend/docs/",
  },

  dist: {
    root: "../../../dist/html/",
    css: "../../../dist/html/assets/css/",
    js: "../../../dist/html/assets/js/",
    template: "../../../dist/html/_dev/template/",
    docs: "../../../dist/html/_dev/docs/",
  },
};

const src   = dir.src;
const dist  = dir.dist;

// templateビルド
//+---------------------------------*/
function templateBuild(done) {
  return gulp
    .src(src.template + "**/!(_)*.ejs")
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    // .pipe(gulp.dest(dist.root));//中間ファイルがないとき
    .pipe(gulp.dest(dist.template));//中間ファイルがあるとき
  done();
}

// Documentビルド
//+---------------------------------*/
const pugOptions = {
  pretty: true,
};
function pagelistBuild() {
  return gulp
    .src(src.docs + "**/*.pug")
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(pug(pugOptions))
    .pipe(gulp.dest(dist.docs));
}

function componentListBuild() {
  return gulp
    .src(src.docs + "**/!(_)*.ejs")
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest(dist.docs));
}

function docsSassBuild() {
  return gulp
    .src(src.docs + "**/*.scss")
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      sass({
        fiber: fiber,
      })
    )
    .pipe(plumber.stop())
    .pipe(gulp.dest(dist.docs))
    .pipe(browserSync.reload({ stream: true }));
}

// CSSビルド
//+---------------------------------*/
const autoprefixer_option = {
  browsers: ["last 1 versions"],
};

function cssBuild() {
  return gulp
    .src(src.css + "**/*.scss")
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      sass({
        fiber: fiber,
        outputStyle: "expanded",
      })
    )
    .pipe(autoprefixer(autoprefixer_option))
    .pipe(plumber.stop())
    .pipe(gulp.dest(dist.css))
    .pipe(browserSync.reload({ stream: true }));
}

// JSビルド
//+---------------------------------*/
function jsBuild() {
  return gulp
    .src(src.js + "**/*.js")
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(dist.js))
    .pipe(browserSync.reload({ stream: true }));
}

// localhost起動
//+---------------------------------*/
const browserSyncOption = {
  startPath: "/_dev/docs/pagelist/",
  port: 7777,//localhost番号は適宜変更する
  server: {
    baseDir: dist.root,
  },
  reloadOnRestart: true,
};

function browsersync(done) {
  browserSync.init(browserSyncOption);
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

// 画像圧縮
//+---------------------------------*/
function minifyImage() {
  return gulp
    .src(dist.root + "assets/img/**/*.{png,jpg,jpeg,gif,svg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
        imagemin.gifsicle({
          interlaced: true,
        }),
        pngquant({
          quality: [0.65, 0.8],
          speed: 1,
        }),
      ])
    )
    .pipe(gulp.dest(dist.root + "assets/minify-images/"));
}
exports.minify = minifyImage;

// watch
//+---------------------------------*/
function watch(done) {
  gulp.watch(src.template + "**/*", gulp.series(templateBuild, browserReload));
  gulp.watch(src.docs + "**/*.pug", gulp.series(pagelistBuild, browserReload));
  gulp.watch(src.docs + "**/*.ejs", gulp.series(componentListBuild, browserReload));
  gulp.watch(src.docs + "**/*.scss", gulp.series(docsSassBuild, browserReload));
  gulp.watch(src.css + "**/*.scss", gulp.series(cssBuild, browserReload));
  gulp.watch(src.js + "**/*.vue", gulp.series(jsBuild, browserReload));
  gulp.watch(src.js + "**/*.js", gulp.series(jsBuild, browserReload));
  done();
}

// 常駐タスク
//+---------------------------------*/
exports.dev = gulp.series(
  gulp.parallel(
    pagelistBuild,
    componentListBuild,
    docsSassBuild,
    templateBuild,
    cssBuild,
    jsBuild
  ),
  gulp.series(browsersync, watch)
);
