/**
 * 在第三方网站自动生成widget fleet365也暂时使用它. add by Nigel
 */

function createIframe() {
  var _mlogicWidgetDiv = document.getElementById('mlogicWidgetDiv');
  var _httpPath = '';
  var _uid = '';
  var _version = '';
  var _iframeWidth = '294px';
  var _iframeHeight = '578px';

  if (!_mlogicWidgetDiv) {
    alert("Can't find div on the parent page.\reg:\r<div id=\"mlogicWidgetDiv\"/>\r<script src=\"http://fleet365.com/interface/widget.js\" UID=\"testsetetsetset\" IFRAME_WIDTH=\"294px\" IFRAME_HEIGHT=\"578px\" VERSION=\"1.00\"></script>");
  } else {
    var _widgetFlag = _mlogicWidgetDiv.getAttribute('widgetFlag');
    if (_widgetFlag && _widgetFlag === 'true') {
      var _hostPath = location.protocol + "//" + location.host;
      if (location.port) {
        _hostPath += ":" + location.port;
      }
      _httpPath = _hostPath;
      _uid = _mlogicWidgetDiv.getAttribute('UID');
      _version = _mlogicWidgetDiv.getAttribute('VERSION');

      if(_mlogicWidgetDiv.getAttribute('IFRAME_WIDTH') !== ''){
        _iframeWidth = _mlogicWidgetDiv.getAttribute('IFRAME_WIDTH');
      }
      if(_mlogicWidgetDiv.getAttribute('IFRAME_HEIGHT') !== ''){
        _iframeHeight = _mlogicWidgetDiv.getAttribute('IFRAME_HEIGHT');
      }

    } else {
      var tags = document.getElementsByTagName("script");
      var _val = tags[0].attributes.src.value;
      var _splitVal = _val.split('/')
      _uid = tags[0].getAttribute('UID');
      _version = tags[0].getAttribute('VERSION');

      if(tags[0].getAttribute('IFRAME_WIDTH') !== ''){
        _iframeWidth = tags[0].getAttribute('IFRAME_WIDTH');
      }
     if(tags[0].getAttribute('IFRAME_HEIGHT') !== ''){
       _iframeHeight = tags[0].getAttribute('IFRAME_HEIGHT');
     }
      for (var i = 0; i < _splitVal.length - 2; i++) {
        var _v = _splitVal[i];
        if (_v && _v !== '') {
          _httpPath += _v;
          if (_v.indexOf('http') !== -1) {
            _httpPath += '//';
          }
        }

      }
    }

    var _iframe = document.createElement("iframe");
    _iframe.setAttribute("src", _httpPath + "/widget/apiPage/" + _uid + "/"+_version);
    _iframe.setAttribute("scrolling", "no");
    _iframe.setAttribute("frameborder", "0");
    _iframe.setAttribute("width", _iframeWidth);
    _iframe.setAttribute("height", _iframeHeight);
    _iframe.setAttribute("style", "border:none;");
    document.getElementById("mlogicWidgetDiv").appendChild(_iframe);
  }
}

// if (window.addEventListener) {
//   window.addEventListener("load", createIframe, false);
// } else if (window.attachEvent) {
//   window.attachEvent("onload", createIframe);
// } else {
//   window.onload = createIframe;
// }
createIframe();

