
var console = jstestdriver.console;

AsyncTestCase('BetterHTML4LintTest', {

    setUp: function() {
    
    },

    /**
     *  引数の中にHTML5で廃止されたタグがある場合にはtrueを返す関数のテスト
     */
    'test: HTML Deprecated Tag (a line)' : function() {
        var tmp = "<font size=\"5\" color=\"#ff0000\">important line</font>";
        assertTrue(_hasHtmlDeprecatedTag(tmp));
    },

    /**
     *  HTMLファイル中にHTML5で廃止されたタグがないかチェックする関数のテスト
     */
    'test: HTML Deprecated Tag (an hole file)' : function(queue) {

        var ret = null;
        
        /* テスト対象の関数の実行 */
        queue.call('Step1: execute checkHtmlDeprecatedTag().', function(callbacks){

            var onComplete = callbacks.add(function(html){
                ret = checkHtmlDeprecatedTag(html);
            });

            var xhr = new XMLHttpRequest();

            xhr.open( 'GET', '/test/test/dummy.html', true );
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ){ onComplete(xhr.responseText); }
            };
            xhr.send( null );
        });

        /* 検査 */
        queue.call('Step2: assertion.', function(callbacks){

            assertTrue('the length of returned map is **not** 0.', 0 < ret.length);    
        });
    },

    /**
     *  引数の中にHTML5で追加され、IE8がサポートしていないタグがある場合にはtrueを返す関数のテスト
     */
    'test: HTML Unsupported Tag (a line)' : function() {
        var tmp = "<canvas></canvas>";
        assertTrue(_hasHtmlUnspportedTag(tmp));
    },

    /**
     *  HTML5で追加され、IE8がサポートしていないタグがないかチェックする関数のテスト
     */
    'test: HTML Unsupported Tag (an hole file)' : function(queue) {

        var ret = null;
        
        /* テスト対象の関数の実行 */
        queue.call('Step1: execute checkHtmlUnspportedTag().', function(callbacks){

            var onComplete = callbacks.add(function(html){
                ret = checkHtmlUnspportedTag(html);
            });

            var xhr = new XMLHttpRequest();

            xhr.open( 'GET', '/test/test/dummy.html', true );
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ){ onComplete(xhr.responseText); }
            };
            xhr.send( null );
        });

        /* 検査 */
        queue.call('Step2: assertion.', function(callbacks){

            assertTrue('the length of returned map is **not** 0.', 0 < ret.length);    
        });
    },

    /**
     *  引数の中にHTML5で廃止された属性がある場合にはtrueを返す関数のテスト
     */
    'test: HTML Deprecated Attribute (a line)' : function() {
        var tmp = "<div align=\"center\">centerd line</div>";
        assertTrue(_hasHtmlDeprecatedAttribute(tmp));
    },

    /**
     *  HTMLファイル中にHTML5で廃止された属性がないかチェックする関数のテスト
     */
    'test: HTML Deprecated Attribute (an hole file)' : function(queue) {

        var ret = null;
        
        /* テスト対象の関数の実行 */
        queue.call('Step1: execute checkHtmlDeprecatedAttribute().', function(callbacks){

            var onComplete = callbacks.add(function(html){
                ret = checkHtmlDeprecatedAttribute(html);
            });

            var xhr = new XMLHttpRequest();

            xhr.open( 'GET', '/test/test/dummy.html', true );
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ){ onComplete(xhr.responseText); }
            };
            xhr.send( null );
        });

        /* 検査 */
        queue.call('Step2: assertion.', function(callbacks){

            assertTrue('the length of returned map is **not** 0.', 0 < ret.length);    
        });
    },

    /**
     *  引数の中にHTML5で廃止された属性がある場合にはtrueを返す関数のテスト
     */
    'test: HTML Unsupported Property (a line)' : function() {
        var tmp = "div.test { background-size: 100% auto; }";
        assertTrue(_hasCssUnsupportedProperty(tmp));
    },

    /**
     *  CSS3で追加され、IE8がサポートしていないプロパティがないかチェックする関数のテスト
     */
    'test: HTML Unsupported Property (an hole file)' : function(queue) {

        var ret = null;
        
        /* テスト対象の関数の実行 */
        queue.call('Step1: execute checkCssUnsupportedProperty().', function(callbacks){

            var onComplete = callbacks.add(function(css){
                ret = checkCssUnsupportedProperty(css);
            });

            var xhr = new XMLHttpRequest();

            xhr.open( 'GET', '/test/test/dummy.css', true );
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ){ onComplete(xhr.responseText); }
            };
            xhr.send( null );
        });

        /* 検査 */
        queue.call('Step2: assertion.', function(callbacks){

            assertTrue('the length of returned map is **not** 0.', 0 < ret.length);    
        });
    },

    /**
     *  引数の中にCSS3で追加され、IE8がサポートしていない値がある場合にはtrueを返す関数のテスト
     */
    'test: HTML Unsupported Value (a line)' : function() {
        var tmp = "";
        assertTrue(_hasCssUnsupportedValue(tmp));
    },

    /**
     *  CSS3で追加され、IE8がサポートしていない値がないかチェックする関数のテスト
     */
    'test: HTML Unsupported Value (an hole file)' : function(queue) {

        var ret = null;
        
        /* テスト対象の関数の実行 */
        queue.call('Step1: execute checkCssUnsupportedValue().', function(callbacks){

            var onComplete = callbacks.add(function(css){
                ret = checkCssUnsupportedValue(css);
            });

            var xhr = new XMLHttpRequest();

            xhr.open( 'GET', '/test/test/dummy.css', true );
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ){ onComplete(xhr.responseText); }
            };
            xhr.send( null );
        });

        /* 検査 */
        queue.call('Step2: assertion.', function(callbacks){

            assertTrue('the length of returned map is **not** 0.', 0 < ret.length);    
        });
    },

    

});