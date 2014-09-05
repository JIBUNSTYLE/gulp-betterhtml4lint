/*
 *	@See http://qiita.com/morou/items/1297d5dd379ef013d46c
 *	@See https://github.com/spenceralger/gulp-jshint/blob/master/src/index.js
 *
var gutil    = require('gulp-util');
var through  = require('through2');

module.exports = function(arg) {

	function transform(file, encoding, callback){

		callback();
	}

	function flush(callback){
		callback();
	}

	var th2 = through2.obj(transform, flush);
	return th2;
};
*/


/**
 *	HTMLファイル中にHTML5で廃止されたタグがないかチェックします。
 *	廃止タグが合った場合、ファイル中の全ての廃止タグについて、
 *	{ "行番号" : "開始行の内容", ... } の連想配列で返します。
 *	廃止タグが一つもない場合には空の連想配列を返します。
 *	同一行に複数の廃止タグがある場合には以下の様に連番を付けて返します。
 *
 *	{
 *		"5" : "<font size=\"5\" color=\"#ff0000\">important line</font>",
 *		"15" : "<center><font size=\"5\" color=\"#ff0000\">important centered line</font></center>",
 *		"15-2" : "<center><font size=\"5\" color=\"#ff0000\">important centered line</font></center>"
 *	}
 *
 */
var checkHtmlDeprecatedTag = function(html) {
	
	return {};
};

/**
 *	引数の中にHTML5で廃止されたタグがある場合にはtrueを返します。
 */
var _hasHtmlDeprecatedTag = function(line) {

	return false;
};

/**
 *	HTML5で追加され、IE8がサポートしていないタグがないかチェックします。
 *	（セマンティクス強化のためのタグは除く）
 *	未サポートタグが合った場合、ファイル中の全ての未サポートタグについて、
 *	{ "行番号" : "開始行の内容", ... } の連想配列で返します。
 *	未サポートタグが一つもない場合には空の連想配列を返します。
 *	同一行に複数の未サポートタグがある場合には以下の様に連番を付けて返します。
 *
 *	{
 *		"5" : "<canvas></canvas>",
 *		"15" : "<video><source></source></video>",
 *		"15-2" : "<video><source></source></video>"
 *	}
 *
 */
var checkHtmlUnspportedTag = function(html) {

	return {};
};

/**
 *	引数の中にHTML5で追加され、IE8がサポートしていないタグがある場合にはtrueを返します。
 */
var _hasHtmlUnspportedTag = function(line) {

	return false;
};

/**
 *	HTMLファイル中にHTML5で廃止された属性がないかチェックします。
 *	廃止属性が合った場合、ファイル中の全ての廃止属性について、
 *	{ "行番号" : "開始行の内容", ... } の連想配列で返します。
 *	廃止属性が一つもない場合には空の連想配列を返します。
 *	同一行に複数の廃止属性がある場合には以下の様に連番を付けて返します。
 *
 *	{
 *		"5" : "<div align=\"center\">centerd line</div>",
 *		"15" : "<p align=\"center\" color=\"#ff0000\">important centered line</p>",
 *		"15-2" : "<p align=\"center\" color=\"#ff0000\">important centered line</p>"
 *	}
 *
 */
var checkHtmlDeprecatedAttribute = function(html) {

	return {};
};

/**
 *	引数の中にHTML5で廃止された属性がある場合にはtrueを返します。
 */
var _hasHtmlDeprecatedAttribute = function(line) {

	return false;
};

/**
 *	CSS3で追加され、IE8がサポートしていないプロパティがないかチェックします。
 *	未サポートプロパティが合った場合、ファイル中の全ての未サポートプロパティについて、
 *	{ "行番号" : "該当行の内容", ... } の連想配列で返します。
 *	未サポートプロパティが一つもない場合には空の連想配列を返します。
 *	同一行に複数の未サポートプロパティがある場合には以下の様に連番を付けて返します。
 *
 *	{
 *		"5" : "div.test { background-size: 100% auto; }",
 *		"15" : "border-radius: 2rem, box-shadow ; 1rem",
 *		"15-2" : "border-radius: 2rem, box-shadow ; 1rem"
 *	}
 *
 */
var checkCssUnsupportedProperty = function(css) {

	return {};
};

/**
 *	引数の中にCSS3で追加され、IE8がサポートしていないプロパティがある場合にはtrueを返します。
 */
var _hasCssUnsupportedProperty = function(line) {

	return false;
};

/**
 *	CSS3で追加され、IE8がサポートしていない値がないかチェックします。
 *	未サポートの値が合った場合、ファイル中の全ての未サポートの値について、
 *	{ "行番号" : "該当行の内容", ... } の連想配列で返します。
 *	未サポートの値が一つもない場合には空の連想配列を返します。
 *	同一行に複数の未サポートの値がある場合には以下の様に連番を付けて返します。
 *
 *	{
 *	}
 *
 */
var checkCssUnsupportedValue = function(css) {

	return {};
};

/**
 *	引数の中にCSS3で追加され、IE8がサポートしていない値がある場合にはtrueを返します。
 */
var _hasCssUnsupportedValue = function(line) {

	return false;
};


