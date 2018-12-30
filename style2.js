"use strict";

var __accesstrade_smartwidget = {
    ENDPOINT_URI: "http://api.accesstrade.vn/v1/partner/product/search",

    init: function () {
        console.log("[Smart Widget] Initializing...");


        if (!window.__at_smartwidget) {
            console.log("[Smart Widget] Config not found.");
            return false;
        }

        if (!window.__at_smartwidget.tracking_domain) {
            window.__at_smartwidget.tracking_domain = "go.starsnet.co";

        }
        this.get();
        //this.log();
    },

    insert_css: function () {
        if (document.getElementById("at-smartwidget-style") == undefined) {
            document.body.appendChild('<style id="at-smartwidget-style" type="text/css"></style>');
        }
    },
    get: function () {

        var request_uri = this.ENDPOINT_URI + '?q=' + window.__at_smartwidget.keyword + '&domain=' + window.__at_smartwidget.domain + '&email=' + window.__at_smartwidget.email + ' ';

        var request = new XMLHttpRequest();
        request.open("GET", request_uri, true);
        request.setRequestHeader('Authorization', 'partner zyIO0K8J8WUQ4XVqgzPwXxmmATT4e29mkuRPldRrKFbhNRBZqx');
        // request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var resp = request.responseText;
                console.log("[Smart Widget] Get data success.");
                var resp_json = JSON.parse(resp);
                __accesstrade_smartwidget.render(resp_json.data);
                return true;
            } else {
                // We reached our target server, but it returned an error
                console.log("[Smart Widget] Error when get domain list.");
                return false;
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
            console.log("[Smart Widget] Error when connecting to API endpoint.");
            return false;
        };

        request.send();
    },

    render: function (resp_data) {
        var css = '<style type="text/css">';
        var width = window.__at_smartwidget.col * 90 + ((window.__at_smartwidget.col + 1) * 5 );
        console.log(width);
        css += '*{\n' +
            '            padding: 0px;\n' +
            '            margin: 0px;\n' +
            '        }\n' +
            '        #smart_widget{\n' +
            '            width: '+ width +'px;\n' +
            '            border: 3px solid #B40404;\n' +
            '            display: flex;\n' +
            '            display: -webkit-box;\n' +
            '            display: -moz-box;\n' +
            '            display: -ms-flexbox;\n' +
            '            display: -webkit-flex;\n' +
            '            -webkit-flex-flow: row wrap;\n' +
            '            justify-content: space-around;\n' +
            '            flex-direction: row;\n' +
            '            background-color: #B40404;\n' +
            '\n' +
            '        }\n' +
            '        #banner>img{\n' +
            '            width:'+ width +'px;\n' +
            '            border: 3px solid #B40404;\n' +
            '        }\n' +
            '        .items{\n' +
            '            width: 90px;\n' +
            '            height: 90px;\n' +
            '            background: tomato;\n' +
            '            margin-top: 5px;\n' +
            '        }\n' +
            '        .items img{\n' +
            '            width: 90px;\n' +
            '            height: 90px;\n' +
            '            position: relative;\n' +
            '        }\n' +
            '        .sale{\n' +
            '            width: 35px;\n' +
            '            height: 19px;\n' +
            '            background: red;\n' +
            '            position: relative;\n' +
            '            font-size: 13px;\n' +
            '            top: -93px;\n' +
            '            left: 2px;\n' +
            '            color: white;\n' +
            '            border-radius: 5px;\n' +
            '            z-index: 3;\n' +
            '            margin-top: inherit;\n' +
            '            z-index: 3;\n' +
            '        }\n' +
            '        .price{\n' +
            '            position: relative;\n' +
            '            top: -80px;\n' +
            '            left: 4px;\n' +
            '            color: white;\n' +
            '            padding: 3px;\n' +
            '            background: red;\n' +
            '            border-radius: 5px;\n' +
            '            display: none;\n' +
            '            z-index: 3;\n' +
            '            text-align: center;\n' +
            '            width: 83px;\n' +
            '        }\n' +
            '        .items:hover .price{\n' +
            '            display: inline-block;\n' +
            '\n' +
            '        }';
        css += '</style>';


        // mĂ n hĂ¬nh nhá» áº©n atsw-widget-product-price width < 1024
        var html = '<div id="smart_widget">';
        var product_aff_link = '';
        var count_col = 0;
        var i;
        // console.log(resp_data.length);
        var products_length = window.__at_smartwidget.col * window.__at_smartwidget.row;
        console.log(products_length);
        console.log(resp_data.length);
        if (products_length > resp_data.length){
            for (i = 0; i < resp_data.length; i++) {
                var product = resp_data[i];
                count_col++;
                var formatter = new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 0,
                });
                var aff_link = product.affiliate_link + '&redirect_302=1';
                aff_link = aff_link.replace("go.starsnet.co", window.__at_smartwidget.tracking_domain);

                html += '<div class="items">\n' +
                    '<a href="'+ aff_link +'">' +
                    '<img src="'+ product.image +'" alt="">' +
                    '</a>';

                if (product.discount_rate==0){

                } else{
                    html+= '            <div class="sale"> - '+ Math.floor(product.discount_rate * 100) +'%</div>';

                }

                html+='            <div class="price">'+ formatter.format(product.price)  +'đ</div>\n' +
                    '        </div>';
            }
        }else{
            for (i = 0; i < products_length; i++) {
                var product = resp_data[i];
                count_col++;
                var formatter = new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 0,
                });
                var aff_link = product.affiliate_link + '&redirect_302=1';
                aff_link = aff_link.replace("go.starsnet.co", window.__at_smartwidget.tracking_domain);

                html += '<div class="items">\n' +
                    '<a href="'+ aff_link +'">' +
                    '<img src="'+ product.image +'" alt="">' +
                    '</a>';

                if (product.discount_rate==0){

                } else{
                    html+= '            <div class="sale"> - '+ Math.floor(product.discount_rate * 100) +'%</div>';

                }

                html+='            <div class="price">'+ formatter.format(product.price)  +'đ</div>\n' +
                    '        </div>';
            } // end for loop
        }


        html += '</div>';
        if (!window.__at_smartwidget.banner_slider_bottom){

        } else{
            if (window.__at_smartwidget.banner_slider_bottom == ''){

            } else{
                html+=  '    <div id="banner"><img src="'+ window.__at_smartwidget.banner_slider_bottom +'" alt=""></div>\n';

            }
        }


        document.getElementById('at-smartwidget-root').innerHTML = css + html;
    },

    /*
      check url
      Found: using utm_source from url
      Not found: if has config => using config
      */
    getQueryVariable: function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return "";
    }
};

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    __accesstrade_smartwidget.init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        __accesstrade_smartwidget.init();
    });
}