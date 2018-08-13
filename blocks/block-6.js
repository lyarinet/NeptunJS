var Promise, urlToPromise, getnum, resetMessage, showMessage, showError, updatePercent, elemIcon, DSaveStateOn, eachLength, $result; + function() {
    function _0x13E1B(_0x13E1B) {
        return new Promise(function(_0x13E73, _0x13E47) {
          NJSZipUtils.getBinaryContent(_0x13E1B, function(_0x13E1B, _BIGARRAY) {
            if (_0x13E1B) {
              _0x13E47(_0x13E1B)
            } else {
              _0x13E73(_BIGARRAY)
            }
          })
        })
      }
      
      function _0x13E47() {
          Neptq("#result").removeClass().text("")
      }
      
      function _0x13E73(_0x13E1B) {
          _0x13E47();
          Neptq("#result").addClass("alert alert-success").text(_0x13E1B)
      }
      
      function _0x13E9F(_0x13E1B) {
          _0x13E47();
          Neptq("#result").addClass("alert alert-danger").text(_0x13E1B)
      }
      
      function _0x13ECB(_0x13E1B) {
          Neptq("#" + NCSS + "progress_bar").find("." + NCSS + "progress-bar").attr("aria-valuenow", _0x13E1B).css({
              width: _0x13E1B + "%"
          })
      }
      
      function _0x13EF7(_0x13E1B) {
          elemIcon = Neptq(this);
          var _0x13E47 = Neptq(this).attr("data-slot");
          _0x13FA7(_0x13E47)
      }
      
      function _0x13F23() {
          elemIcon = Neptq(this);
          Neptq("#" + NCSS + "display").focus();
          Neptq("." + NCSS + "nep_save_game").addClass("" + NCSS + "active_info");
          var _0x13E1B = setTimeout(function() {
              Neptq("." + NCSS + "nep_save_game").removeClass("" + NCSS + "active_info")
          }, 2000);
          Neptune.ccall("trgfsdsse879", "number"[1]);
          Neptune.ccall("x7ooiujgfgda", "number"[1]);
          return SMgetSave()
      }
      
      function _0x13F4F() {
          elemIcon = Neptq(this);
          Neptq("." + NCSS + "nep_save_game").addClass("" + NCSS + "active_info");
          Neptq("#" + NCSS + "Dstatus").html(progressText);
          Neptq("#" + NCSS + "inder").html(HtmlProgressFull);
          Neptq("#" + NCSS + "popupProgress").css({
              "visibility": "visible",
              "opacity": "1",
              "zIndex": "50"
          });
          var _0x13E1B = setTimeout(function() {
              Neptq("." + NCSS + "nep_save_game").removeClass("" + NCSS + "active_info")
          }, 2000);
          Neptune.ccall("trgfsdsse879", "number"[1]);
          Neptune.ccall("x7ooiujgfgda", "number"[1]);
          SMgetSave();
          var _0x13E47 = setTimeout(function() {
              Neptune.ccall("yytrd9852hhf", "number"[1]);
              _0x13FA7()
          }, 500)
      }
      
      function _0x13F7B() {
          elemIcon = Neptq(this);
          Neptq("#" + NCSS + "Dstatus").html(progressText);
          Neptq("#" + NCSS + "inder").html(HtmlProgressFull);
          Neptq("#" + NCSS + "popupProgress").css({
              "visibility": "visible",
              "opacity": "1",
              "zIndex": "50"
          });
          _0x13FA7()
      }
      
      function _0x13FA7(_0x13EF7) {
          Neptq("#" + NCSS + "inder").html(HtmlProgress);
          if (elemIcon[0].id === "" + NCSS + "NEPicon-down-save") {
              var _0x13E9F = Neptq("." + NCSS + "last")
          };
          if (elemIcon[0].className === "" + NCSS + "dsavesate") {
              Neptq("#" + NCSS + "Dstatus").html(progressText);
              Neptq("#" + NCSS + "inder").html(HtmlProgressFull);
              Neptq("#" + NCSS + "popupProgress").css({
                  "visibility": "visible",
                  "opacity": "1",
                  "zIndex": "50"
              });
              var _0x13E9F = Neptq("." + NCSS + "get" + _0x13EF7 + "")
          };
          if (elemIcon[0].id === "" + NCSS + "saveDall") {
              var _0x13E9F = Neptq("." + NCSS + "gets")
          };
          var _0x13F4F = new NJSZip();
          Neptq(_0x13E9F).each(function() {
              var _0x13E73 = Neptq(this);
              var _0x13E9F = _0x13E73.data("url");
              var _0x13E47 = _0x13E73.data("name");
              _0x13F4F.file(_0x13E47, _0x13E1B(_0x13E9F), {
                  binary: true
              })
          });
          _0x13F4F.generateAsync({
              type: "blob",
              compression: "DEFLATE",
              compressionOptions: {
                  level: 1
              }
          }, function _0x13F23(_0x13E1B) {
              Neptq("#" + NCSS + "popupProgress").css({
                  "visibility": "visible",
                  "opacity": "1",
                  "zIndex": "50"
              });
              Neptq("#" + NCSS + "Dstatus").html(Dstatus);
              var _0x13E47 = "progression : " + _0x13E1B.percent.toFixed(2) + " %";
              if (_0x13E1B.currentFile) {
                  _0x13E47 += ", current file = " + _0x13E1B.currentFile
              };
              _0x13E73(_0x13E47);
              _0x13ECB(_0x13E1B.percent | 0)
          }).then(function _0x13E47(_0x13E47) {
              var _0x13E73 = window.URL.createObjectURL(_0x13E47);
              var _0x13E1B = document.createElement("a");
              document.body.appendChild(_0x13E1B);
              _0x13E1B.style = "display: none";
              _0x13E1B.download = "" + game + ".ggz";
              if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                  window.navigator.msSaveOrOpenBlob(_0x13E47, _0x13E1B.download)
              } else {
                  _0x13E1B.href = _0x13E73
              };
              _0x13E1B.click();
              window.URL.revokeObjectURL(_0x13E73);
              setTimeout(function() {
                  Neptq("#" + NCSS + "popupProgress").css({
                      "visibility": "hidden",
                      "opacity": "0",
                      "zIndex": "0"
                  });
                  Neptq("." + NCSS + "progress-bar").css({
                      width: "0%"
                  })
              }, 1000)
          }, function(_BIGARRAY) {});
          return false
      }
      urlToPromise = _0x13E1B;
      resetMessage = _0x13E47;
      showMessage = _0x13E73;
      showError = _0x13E9F;
      updatePercent = _0x13ECB;
      DSaveStateOn = _0x13FA7;
      if (netp === 1) {
          Promise = window.Promise;
          if (!Promise) {
              Promise = NJSZip.external.Promise
          };
          elemIcon = "";
          Neptq("." + NCSS + "savemr").on("click", "." + NCSS + "dsavesate", _0x13EF7);
          Neptq("." + NCSS + "NEPicon-save").on("click", _0x13F23);
          Neptq("#" + NCSS + "NEPicon-down-save").on("click", _0x13F4F);
          Neptq("#" + NCSS + "saveDall").on("click", _0x13F7B);
          eachLength = 0;
          $result = Neptq("#result")
      };
  return 4143
}();