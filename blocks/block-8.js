var controllers, jsonP1, jsonP2, jsonP3, jsonP4, xboxMode, focusElement, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, dpad1, dpad2, dpad3, dpad4, Lanalog1, Lanalog2, Lanalog3, Lanalog4, Ranalog1, Ranalog2, Ranalog3, Ranalog4, axes_stick, axes_stick_up, buttonMap, keyMap, buttonMap, keyMap, initInfoLable, elementData, Player, gpadindex1, gpadindex2, gpadindex3, gpadindex4, callGpadUi, resetControll, SaveJson, SaveGameJson, loadJSONALL, loadJSON, showUiPop, keyCod_tag, initControllers, simulat_input, simulat_inputDpad, gpad, disableGpadIndex, RI, test, _ssyyquu71, _aayuq8971, _sasiu89; + function() {
  function _0x13E1B(_BIGARRAY) {
      jsonP1 = _BIGARRAY
  }

  function _0x13E47(_BIGARRAY) {
      jsonP1 = _BIGARRAY
  }

  function _0x13E73(_BIGARRAY) {
      jsonP2 = _BIGARRAY
  }

  function _0x13E9F(_BIGARRAY) {
      jsonP3 = _BIGARRAY
  }

  function _0x13ECB(_BIGARRAY) {
      jsonP4 = _BIGARRAY
  }

  function _0x13EF7(_BIGARRAY) {
      jsonP1 = _BIGARRAY
  }

  function _0x13F23(_BIGARRAY) {
      jsonP2 = _BIGARRAY
  }

  function _0x13F4F(_BIGARRAY) {
      jsonP3 = _BIGARRAY
  }

  function _0x13F7B(_BIGARRAY) {
      jsonP4 = _BIGARRAY
  }

  function _0x13FA7() {
      Neptq("." + NCSS + "labButtonStart").html("<span>" + button2 + " :</span>");
      Neptq("." + NCSS + "labButtonSelect").html("<span>" + button1 + " :</span>");
      Neptq("." + NCSS + "labButtonL1").html("<span>" + button7 + " :</span>");
      Neptq("." + NCSS + "labButtonR1").html("<span>" + button8 + " :</span>");
      Neptq("." + NCSS + "labButtonL2").html("<span>" + button9 + " :</span>");
      Neptq("." + NCSS + "labButtonR2").html("<span>" + button10 + " :</span>");
      Neptq("." + NCSS + "labButtonL3").html("<span>" + button11 + " :</span>");
      Neptq("." + NCSS + "labButtonR3").html("<span>" + button12 + " :</span>");
      Neptq("." + NCSS + "labButtonUP").html("<span>" + dpad1 + " :</span>");
      Neptq("." + NCSS + "labButtonDown").html("<span>" + dpad2 + " :</span>");
      Neptq("." + NCSS + "labButtonLeft").html("<span>" + dpad3 + " :</span>");
      Neptq("." + NCSS + "labButtonRight").html("<span>" + dpad4 + " :</span>");
      Neptq("." + NCSS + "labanUPL").html("<span>" + Lanalog1 + " :</span>");
      Neptq("." + NCSS + "labanDownL").html("<span>" + Lanalog2 + " :</span>");
      Neptq("." + NCSS + "labanLeftL").html("<span>" + Lanalog3 + " :</span>");
      Neptq("." + NCSS + "labanRightL").html("<span>" + Lanalog4 + " :</span>");
      Neptq("." + NCSS + "labanUPR").html("<span>" + Ranalog1 + ":</span>");
      Neptq("." + NCSS + "labanDownR").html("<span>" + Ranalog2 + " :</span>");
      Neptq("." + NCSS + "labanLeftR").html("<span>" + Ranalog3 + " :</span>");
      Neptq("." + NCSS + "labanRightR").html("<span>" + Ranalog4 + " :</span>");
      Neptq("." + NCSS + "labButton1").html("<span>" + button3 + " :</span>");
      Neptq("." + NCSS + "labButton2").html("<span>" + button4 + " :</span>");
      Neptq("." + NCSS + "labButton3").html("<span>" + button5 + " :</span>");
      Neptq("." + NCSS + "labButton4").html("<span>" + button6 + " :</span>");
      Neptq("." + NCSS + "labButton5").html("<span>" + button7 + " :</span>");
      Neptq("." + NCSS + "labButton6").html("<span>" + button8 + " :</span>");
      Neptq("." + NCSS + "labButton7").html("<span>" + button9 + " :</span>");
      Neptq("." + NCSS + "labButton8").html("<span>" + button10 + " :</span>");
      Neptq("." + NCSS + "labButton9").html("<span>2:</span>");
      Neptq("." + NCSS + "labButton10").html("<span>" + Ranalog1 + " :</span>");
      Neptq("." + NCSS + "labButton11").html("<span>" + Ranalog2 + " :</span>");
      Neptq("." + NCSS + "labButton12").html("<span>" + Ranalog3 + " :</span>");
      Neptq("." + NCSS + "labButton13").html("<span>" + Ranalog4 + " :</span>");
      var _0x14527 = Neptq("#NJSSTART" + Player + "").attr("data-value");
      var _0x144FB = Neptq("#NJSSTART" + Player + "").attr("data-gamepad-key");
      var _0x144CF = Neptq("#NJSSELECT" + Player + "").attr("data-value");
      var _0x144A3 = Neptq("#NJSSELECT" + Player + "").attr("data-gamepad-key");
      var _0x140AF = Neptq("#NJSKEYL" + Player + "").attr("data-value");
      var _0x14083 = Neptq("#NJSKEYL" + Player + "").attr("data-gamepad-key");
      var _0x1436F = Neptq("#NJSKEYR" + Player + "").attr("data-value");
      var _0x14343 = Neptq("#NJSKEYR" + Player + "").attr("data-gamepad-key");
      var _0x14107 = Neptq("#NJSKEYL2" + Player + "").attr("data-value");
      var _0x140DB = Neptq("#NJSKEYL2" + Player + "").attr("data-gamepad-key");
      var _0x143C7 = Neptq("#NJSKEYR2" + Player + "").attr("data-value");
      var _0x1439B = Neptq("#NJSKEYR2" + Player + "").attr("data-gamepad-key");
      var _0x1415F = Neptq("#NJSKEYL3" + Player + "").attr("data-value");
      var _0x14133 = Neptq("#NJSKEYL3" + Player + "").attr("data-gamepad-key");
      var _0x1441F = Neptq("#NJSKEYR3" + Player + "").attr("data-value");
      var _0x143F3 = Neptq("#NJSKEYR3" + Player + "").attr("data-gamepad-key");
      var _0x1462F = Neptq("#NJSKEYY" + Player + "").attr("data-value");
      var _0x14603 = Neptq("#NJSKEYY" + Player + "").attr("data-gamepad-key");
      var _0x145D7 = Neptq("#NJSKEYX" + Player + "").attr("data-value");
      var _0x145AB = Neptq("#NJSKEYX" + Player + "").attr("data-gamepad-key");
      var _0x13E47 = Neptq("#NJSKEYA" + Player + "").attr("data-value");
      var _0x13E1B = Neptq("#NJSKEYA" + Player + "").attr("data-gamepad-key");
      var _0x13E9F = Neptq("#NJSKEYB" + Player + "").attr("data-value");
      var _0x13E73 = Neptq("#NJSKEYB" + Player + "").attr("data-gamepad-key");
      var _0x1457F = Neptq("#NJSUP" + Player + "").attr("data-value");
      var _0x14553 = Neptq("#NJSUP" + Player + "").attr("data-gamepad-key");
      var _0x13EF7 = Neptq("#NJSDOWN" + Player + "").attr("data-value");
      var _0x13ECB = Neptq("#NJSDOWN" + Player + "").attr("data-gamepad-key");
      var _0x141B7 = Neptq("#NJSLEFT" + Player + "").attr("data-value");
      var _0x1418B = Neptq("#NJSLEFT" + Player + "").attr("data-gamepad-key");
      var _0x14477 = Neptq("#NJSRIGHT" + Player + "").attr("data-value");
      var _0x1444B = Neptq("#NJSRIGHT" + Player + "").attr("data-gamepad-key");
      var _0x14317 = Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-value");
      var _0x142EB = Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-gamepad-key");
      var _0x1420F = Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-value");
      var _0x141E3 = Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-gamepad-key");
      var _0x14267 = Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-value");
      var _0x1423B = Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-gamepad-key");
      var _0x142BF = Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-value");
      var _0x14293 = Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-gamepad-key");
      var _0x14057 = Neptq("#NJSKEYL_A_UP" + Player + "").attr("data-value");
      var _0x1402B = Neptq("#NJSKEYL_A_UP" + Player + "").attr("data-gamepad-key");
      var _0x13F4F = Neptq("#NJSKEYL_A_DOWN" + Player + "").attr("data-value");
      var _0x13F23 = Neptq("#NJSKEYL_A_DOWN" + Player + "").attr("data-gamepad-key");
      var _0x13FA7 = Neptq("#NJSKEYL_A_LEFT" + Player + "").attr("data-value");
      var _0x13F7B = Neptq("#NJSKEYL_A_LEFT" + Player + "").attr("data-gamepad-key");
      var _0x13FFF = Neptq("#NJSKEYL_A_RIGHT" + Player + "").attr("data-value");
      var _0x13FD3 = Neptq("#NJSKEYL_A_RIGHT" + Player + "").attr("data-gamepad-key");
      Neptq("." + NCSS + "labButtonStart").append("" + keyMap[_0x14527] + "" + buttonMap[_0x144FB]);
      Neptq("." + NCSS + "labButtonSelect").append("" + keyMap[_0x144CF] + "" + buttonMap[_0x144A3]);
      Neptq("." + NCSS + "labButton5").append("" + keyMap[_0x140AF] + "" + buttonMap[_0x14083]);
      Neptq("." + NCSS + "labButton6").append("" + keyMap[_0x1436F] + "" + buttonMap[_0x14343]);
      Neptq("." + NCSS + "labButtonL1").append("" + keyMap[_0x140AF] + "" + buttonMap[_0x14083]);
      Neptq("." + NCSS + "labButtonR1").append("" + keyMap[_0x1436F] + "" + buttonMap[_0x14343]);
      Neptq("." + NCSS + "labButtonL2").append("" + keyMap[_0x14107] + "" + buttonMap[_0x140DB]);
      Neptq("." + NCSS + "labButtonR2").append("" + keyMap[_0x143C7] + "" + buttonMap[_0x1439B]);
      Neptq("." + NCSS + "labButtonL3").append("" + keyMap[_0x1415F] + "" + buttonMap[_0x14133]);
      Neptq("." + NCSS + "labButtonR3").append("" + keyMap[_0x1441F] + "" + buttonMap[_0x143F3]);
      Neptq("." + NCSS + "labButton1").append("" + keyMap[_0x145D7] + "" + buttonMap[_0x145AB]);
      Neptq("." + NCSS + "labButton2").append("" + keyMap[_0x13E47] + "" + buttonMap[_0x13E1B]);
      Neptq("." + NCSS + "labButton3").append("" + keyMap[_0x13E9F] + "" + buttonMap[_0x13E73]);
      Neptq("." + NCSS + "labButton4").append("" + keyMap[_0x1462F] + "" + buttonMap[_0x14603]);
      Neptq("." + NCSS + "labButtonUP").append("" + keyMap[_0x1457F] + "" + buttonMap[_0x14553]);
      Neptq("." + NCSS + "labButtonDown").append("" + keyMap[_0x13EF7] + "" + buttonMap[_0x13ECB]);
      Neptq("." + NCSS + "labButtonLeft").append("" + keyMap[_0x141B7] + "" + buttonMap[_0x1418B]);
      Neptq("." + NCSS + "labButtonRight").append("" + keyMap[_0x14477] + "" + buttonMap[_0x1444B]);
      Neptq("." + NCSS + "labanUPL").append("" + keyMap[_0x14057] + "" + buttonMap[_0x1402B]);
      Neptq("." + NCSS + "labanDownL").append("" + keyMap[_0x13F4F] + "" + buttonMap[_0x13F23]);
      Neptq("." + NCSS + "labanLeftL").append("" + keyMap[_0x13FA7] + "" + buttonMap[_0x13F7B]);
      Neptq("." + NCSS + "labanRightL").append("" + keyMap[_0x13FFF] + "" + buttonMap[_0x13FD3]);
      Neptq("." + NCSS + "labanUPR").append("" + keyMap[_0x14317] + "" + buttonMap[_0x142EB]);
      Neptq("." + NCSS + "labanDownR").append("" + keyMap[_0x1420F] + "" + buttonMap[_0x141E3]);
      Neptq("." + NCSS + "labanLeftR").append("" + keyMap[_0x14267] + "" + buttonMap[_0x1423B]);
      Neptq("." + NCSS + "labanRightR").append("" + keyMap[_0x142BF] + "" + buttonMap[_0x14293])
  }

  function _0x13FD3(_0x13E1B) {
      if (_0x13E1B.index === 0) {
          gpadindex1 = "0"
      } else {
          Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "none")
      };
      if (_0x13E1B.index === 1) {
          gpadindex2 = "1"
      } else {
          Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "none")
      };
      if (_0x13E1B.index === 2) {
          gpadindex3 = "2"
      } else {
          Neptq("#" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3").css("display", "none")
      };
      if (_0x13E1B.index === 3) {
          gpadindex4 = "3"
      } else {
          Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "none")
      }
  }

  function _0x13FFF() {
      if (Neptq("#" + NCSS + "P1").hasClass("" + NCSS + "is-active")) {
          Player = "";
          _0x13FA7();
          if (gpadindex1 === "0") {
              Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "block")
          } else {
              Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "none")
          }
      } else {
          Neptq("#" + NCSS + "gbadinfo1 , #" + NCSS + "gamepadinfo1").css("display", "none")
      };
      if (Neptq("#" + NCSS + "P2").hasClass("" + NCSS + "is-active")) {
          Player = "P2";
          _0x13FA7();
          if (gpadindex2 === "1") {
              Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "block")
          } else {
              Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "none")
          }
      } else {
          Neptq("#" + NCSS + "gbadinfo2 , #" + NCSS + "gamepadinfo2").css("display", "none")
      };
      if (Neptq("#" + NCSS + "P3").hasClass("" + NCSS + "is-active")) {
          Player = "P3";
          _0x13FA7();
          if (gpadindex3 === "2") {
              Neptq("#" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3").css("display", "block")
          } else {
              Neptq("#" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3").css("display", "none")
          }
      } else {
          Neptq("#" + NCSS + "gbadinfo3 , #" + NCSS + "gamepadinfo3").css("display", "none")
      };
      if (Neptq("#" + NCSS + "P4").hasClass("" + NCSS + "is-active")) {
          Player = "P4";
          _0x13FA7();
          if (gpadindex4 === "3") {
              Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "block")
          } else {
              Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "none")
          }
      } else {
          Neptq("#" + NCSS + "gbadinfo4 , #" + NCSS + "gamepadinfo4").css("display", "none")
      }
  }

  function _0x1402B() {
      var _0x13E1B = Neptq(this);
      var _0x13E47 = Neptq("." + NCSS + "luib");
      Neptq("." + NCSS + "luib").each(function(_0x13E9F, _0x13E47) {
          Neptq(_0x13E47).attr("data");
          if (Neptq(_0x13E47).is("#" + NCSS + "stop")) {
              return false
          };
          if (_0x13E1B.attr("data") == Neptq(_0x13E47).attr("data")) {
              var _0x13E73 = Neptq(_0x13E47).attr("id");
              Neptq(_0x13E47).css("background", "" + NepColor + "")
          }
      })
  }

  function _0x14057() {
      Neptq("." + NCSS + "luib").css("background", "none")
  }

  function _0x14083() {
      Neptq("." + NCSS + "advance_tabs" + Player + "").toggleClass("" + NCSS + "advance_tabs_active")
  }

  function _0x140AF() {
      Neptq("." + NCSS + "tabs-panel").not(document.getElementById("" + NCSS + "controller-1")).css("display", "none");
      Neptq("#" + NCSS + "controller-1").fadeIn();
      Neptq("#" + NCSS + "NepCui").css("display", "block");
      Neptq("." + NCSS + "emu-ctr-bar").css("display", "none");
      Neptq("#" + NCSS + "display").addClass("" + NCSS + "Blur");
      Neptune.ccall("yytrd9852hhf", "number"[1])
  }

  function _0x140DB() {
      _0x140AF()
  }

  function _0x14107() {
      Neptq("#" + NCSS + "display").removeClass("" + NCSS + "Blur");
      Neptq("#" + NCSS + "NepCui").css("display", "none");
      Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
      Neptune.ccall("terwq7895412", "number"[1]);
      RA.context.close();
      Neptune.ccall("axiop55x2218", "number"[1]);
      Neptq("#" + NCSS + "display").focus()
  }

  function _0x14133() {
      controllers = jsonP1;
      _0x142EB()
  }

  function _0x1415F() {
      controllers = jsonP2;
      _0x142EB()
  }

  function _0x1418B() {
      controllers = jsonP4;
      _0x142EB()
  }

  function _0x141B7() {
      controllers = jsonP3;
      _0x142EB()
  }

  function _0x141E3() {
      Neptq("." + NCSS + "controllers input").each(function(_0x13EF7, _0x13F7B) {
          var _0x13E1B = Neptq(_0x13F7B).attr("data-axes-key");
          var _0x13F4F = Neptq(_0x13F7B).attr("data-input-key");
          var _0x13F23 = Neptq(_0x13F7B).attr("data-index");
          var _0x13ECB = Neptq(_0x13F7B).attr("data-gamepad-key");
          var _0x13FD3 = Neptq(_0x13F7B).attr("data-value");
          var _0x13FD3 = Neptq(_0x13F7B).attr("data-value");
          var _0x13FA7 = Neptq(_0x13F7B).attr("data-type");
          var _0x13E47 = Neptq(_0x13F7B).attr("data-id");
          var _0x13E73 = Neptq(_0x13F7B).attr("id");
          var _0x13E9F = Neptq(_0x13F7B).attr("data-gamepad-index");
          if (!controllers[_0x13F23]) {
              controllers[_0x13F23] = {}
          };
          controllers[_0x13F23][_0x13E47] = {
              axes_key: _0x13E1B,
              gamepad_key: _0x13ECB,
              type: _0x13FA7,
              index: _0x13E9F,
              value: _0x13FD3,
              input_key: _0x13F4F,
              div_id: _0x13E73
          }
      });
      if (window.localStorage) {
          window.localStorage.setItem("" + NeptunP + "_NJScontrollers", JSON.stringify(controllers))
      };
      _0x1423B();
      _0x142EB()
  }

  function _0x1420F() {
      Neptq("." + NCSS + "controllers input").each(function(_0x13EF7, _0x13F7B) {
          var _0x13E1B = Neptq(_0x13F7B).attr("data-axes-key");
          var _0x13F4F = Neptq(_0x13F7B).attr("data-input-key");
          var _0x13F23 = Neptq(_0x13F7B).attr("data-index");
          var _0x13ECB = Neptq(_0x13F7B).attr("data-gamepad-key");
          var _0x13FD3 = Neptq(_0x13F7B).attr("data-value");
          var _0x13FD3 = Neptq(_0x13F7B).attr("data-value");
          var _0x13FA7 = Neptq(_0x13F7B).attr("data-type");
          var _0x13E47 = Neptq(_0x13F7B).attr("data-id");
          var _0x13E73 = Neptq(_0x13F7B).attr("id");
          var _0x13E9F = Neptq(_0x13F7B).attr("data-gamepad-index");
          if (!controllers[_0x13F23]) {
              controllers[_0x13F23] = {}
          };
          controllers[_0x13F23][_0x13E47] = {
              axes_key: _0x13E1B,
              gamepad_key: _0x13ECB,
              type: _0x13FA7,
              index: _0x13E9F,
              value: _0x13FD3,
              input_key: _0x13F4F,
              div_id: _0x13E73
          }
      });
      if (window.localStorage) {
          window.localStorage.setItem("" + romTitle + "_" + NeptunP + "_NJScontrollers", JSON.stringify(controllers))
      };
      Neptq("#" + NCSS + "NepCui").css("display", "none");
      Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
      Neptq("#" + NCSS + "display").removeClass("" + NCSS + "Blur");
      Neptune.ccall("terwq7895412", "number"[1]);
      RA.context.close();
      Neptune.ccall("axiop55x2218", "number"[1]);
      _0x14267();
      _0x142EB()
  }

  function _0x1423B() {
      if (localStorage.getItem("" + romTitle + "_" + NeptunP + "_NJScontrollers") === null) {
          Neptq("#" + NCSS + "NepCui").css("display", "none");
          Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
          Neptq("#" + NCSS + "display").removeClass("" + NCSS + "Blur");
          Neptune.ccall("terwq7895412", "number"[1]);
          RA.context.close();
          Neptune.ccall("axiop55x2218", "number"[1])
      } else {
          Neptq("#" + NCSS + "popup3").css({
              "visibility": "visible",
              "opacity": "1",
              "zIndex": "5"
          });
          Neptq("." + NCSS + "JsonSave").click(function() {
              Neptq("#" + NCSS + "popup3").css({
                  "visibility": "hidden",
                  "opacity": "0",
                  "zIndex": "0"
              });
              localStorage.removeItem("" + romTitle + "_" + NeptunP + "_NJScontrollers");
              Neptq("#" + NCSS + "display").removeClass("" + NCSS + "Blur");
              Neptq("#" + NCSS + "NepCui").css("display", "none");
              Neptq("." + NCSS + "emu-ctr-bar").css("display", "block");
              Neptune.ccall("terwq7895412", "number"[1]);
              RA.context.close();
              Neptune.ccall("axiop55x2218", "number"[1])
          });
          Neptq("." + NCSS + "NoJsonSave").click(function() {
              _0x142BF();
              Neptq("#" + NCSS + "popup3").css({
                  "visibility": "hidden",
                  "opacity": "0",
                  "zIndex": "0"
              })
          })
      };
      if (localStorage.getItem("" + NeptunP + "_NJScontrollers") === null || resetControll === 1) {
          if (xboxMode === true) {
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/xbox_p1.json", function(_BIGARRAY) {
                  jsonP1 = _BIGARRAY;
                  controllers = jsonP1
              })
          } else {
              if (NepEmu === "n64") {
                  Neptq.getJSON("https://impragma.github.io/NeptunJS/config/n64_p1.json", function(_BIGARRAY) {
                      jsonP1 = _BIGARRAY;
                      controllers = jsonP1
                  })
              } else {
                  Neptq.getJSON("https://impragma.github.io/NeptunJS/config/P1.json", function(_BIGARRAY) {
                      jsonP1 = _BIGARRAY;
                      controllers = jsonP1
                  })
              }
          };
          resetControll = 0;
          _0x142EB()
      } else {
          var _0x13E1B = localStorage.getItem("" + NeptunP + "_NJScontrollers");
          controllers = JSON.parse(_0x13E1B)
      }
  }

  function _0x14267() {
      if (localStorage.getItem("" + romTitle + "_" + NeptunP + "_NJScontrollers") === null) {
          if (localStorage.getItem("" + NeptunP + "_NJScontrollers") === null || resetControll === 1) {
              if (xboxMode === true) {
                  Neptq.getJSON("https://impragma.github.io/NeptunJS/config/xbox_p1.json", function(_BIGARRAY) {
                      jsonP1 = _BIGARRAY;
                      controllers = jsonP1
                  })
              } else {
                  if (NepEmu === "n64") {
                      Neptq.getJSON("https://impragma.github.io/NeptunJS/config/n64_p1.json", function(_BIGARRAY) {
                          jsonP1 = _BIGARRAY;
                          controllers = jsonP1
                      })
                  } else {
                      Neptq.getJSON("https://impragma.github.io/NeptunJS/config/P1.json", function(_BIGARRAY) {
                          jsonP1 = _BIGARRAY;
                          controllers = jsonP1
                      })
                  }
              };
              resetControll = 0;
              _0x142EB()
          } else {
              var _0x13E1B = localStorage.getItem("" + NeptunP + "_NJScontrollers");
              controllers = JSON.parse(_0x13E1B)
          }
      } else {
          var _0x13E1B = localStorage.getItem("" + romTitle + "_" + NeptunP + "_NJScontrollers");
          controllers = JSON.parse(_0x13E1B)
      }
  }

  function _0x14293(_0x13E1B) {
      _0x13E1B.preventDefault();
      Neptq(this).parent().addClass("" + NCSS + "is-active");
      Neptq(this).parent().siblings().removeClass("" + NCSS + "is-active");
      var _0x13E47 = Neptq(this).attr("href");
      Neptq("." + NCSS + "tabs-panel").not(_0x13E47).css("display", "none");
      Neptq(_0x13E47).fadeIn()
  }

  function _0x142BF() {
      Neptq("#" + NCSS + "popup2").css({
          "visibility": "visible",
          "opacity": "1",
          "zIndex": "5"
      })
  }

  function _0x142EB() {
      Neptq.each(controllers, function(_0x13E1B, _0x13E47) {
          Neptq.each(_0x13E47, function(_0x13E9F, _0x13E47) {
              var _0x13E73 = Neptq("." + NCSS + "setting-controllers ." + NCSS + "tabs-panel:eq(" + _0x13E1B + ") [data-id=" + _0x13E9F + "]");
              _0x13E73.attr("data-gamepad-index", _0x13E47.index).attr("data-value", _0x13E47.value).attr("data-type", _0x13E47.type).attr("data-gamepad-key", _0x13E47.gamepad_key);
              _0x13E73.val("" + keyMap[_0x13E47.value] + "" + buttonMap[_0x13E47.gamepad_key]);
              keyCod_tag = _0x13E47.value
          })
      });
      _0x13FA7()
  }

  function _0x14317(_0x13E1B) {
      if (_0x13E1B.key) {
          Neptq(this).val("" + keyMap[_0x13E1B.keyCode] + "");
          Neptq(this).attr("data-value", _0x13E1B.keyCode);
          Neptq(this).data("value", _0x13E1B.keyCode);
          _0x13FA7()
      };
      return false
  }

  function _0x14343() {
      _0x142BF()
  }

  function _0x1436F(_0x13E47) {
      if (popset === 1) {
          var _0x13E1B = Neptq("." + NCSS + "popup");
          var _0x13E73 = Neptq("." + NCSS + "overlay");
          if (!_0x13E1B.is(_0x13E47.target) && _0x13E1B.has(_0x13E47.target).length === 0) {
              _0x13E73.css({
                  "visibility": "hidden",
                  "opacity": "0",
                  "zIndex": "0"
              })
          }
      }
  }

  function _0x1439B() {
      Neptq("." + NCSS + "overlay").css({
          "visibility": "hidden",
          "opacity": "0",
          "zIndex": "0"
      });
      Neptq("." + NCSS + "controllers input").each(function(_0x13EF7, _0x13F7B) {
          var _0x13E1B = Neptq(_0x13F7B).attr("data-axes-key");
          var _0x13F4F = Neptq(_0x13F7B).attr("data-input-key");
          var _0x13ECB = Neptq(_0x13F7B).attr("data-gamepad-key");
          var _0x13F23 = Neptq(_0x13F7B).attr("data-index");
          var _0x13FD3 = Neptq(_0x13F7B).attr("data-value");
          var _0x13FA7 = Neptq(_0x13F7B).attr("data-type");
          var _0x13E47 = Neptq(_0x13F7B).attr("data-id");
          var _0x13E73 = Neptq(_0x13F7B).attr("id");
          var _0x13E9F = Neptq(_0x13F7B).attr("data-gamepad-index");
          if (!controllers[_0x13F23]) {
              controllers[_0x13F23] = {}
          };
          controllers[_0x13F23][_0x13E47] = {
              axes_key: _0x13E1B,
              input_key: _0x13F4F,
              gamepad_key: _0x13ECB,
              type: _0x13FA7,
              index: _0x13E9F,
              value: _0x13FD3,
              div_id: _0x13E73
          }
      });
      Neptq(this).prev("input").val(JSON.stringify(controllers));
      _0x141E3()
  }

  function _0x143C7() {
      Neptq("." + NCSS + "overlay").css({
          "visibility": "hidden",
          "opacity": "0",
          "zIndex": "0"
      });
      Neptq("." + NCSS + "controllers input").each(function(_0x13EF7, _0x13F7B) {
          var _0x13E1B = Neptq(_0x13F7B).attr("data-axes-key");
          var _0x13F4F = Neptq(_0x13F7B).attr("data-input-key");
          var _0x13ECB = Neptq(_0x13F7B).attr("data-gamepad-key");
          var _0x13F23 = Neptq(_0x13F7B).attr("data-index");
          var _0x13FD3 = Neptq(_0x13F7B).attr("data-value");
          var _0x13FA7 = Neptq(_0x13F7B).attr("data-type");
          var _0x13E47 = Neptq(_0x13F7B).attr("data-id");
          var _0x13E73 = Neptq(_0x13F7B).attr("id");
          var _0x13E9F = Neptq(_0x13F7B).attr("data-gamepad-index");
          if (!controllers[_0x13F23]) {
              controllers[_0x13F23] = {}
          };
          controllers[_0x13F23][_0x13E47] = {
              axes_key: _0x13E1B,
              input_key: _0x13F4F,
              gamepad_key: _0x13ECB,
              type: _0x13FA7,
              index: _0x13E9F,
              value: _0x13FD3,
              div_id: _0x13E73
          }
      });
      Neptq(this).prev("input").val(JSON.stringify(controllers));
      _0x1420F();
      _0x14267();
      _0x142EB()
  }

  function _0x143F3() {
      if (Neptq("#" + NCSS + "DGpad1").hasClass("" + NCSS + "EGpad")) {
          Neptq("#" + NCSS + "DGpad1").html(NJSOFF);
          disableGpadIndex = "enable"
      } else {
          Neptq("#" + NCSS + "DGpad1").html(NJSOn);
          disableGpadIndex = 0
      };
      Neptq("#" + NCSS + "DGpad1").toggleClass("" + NCSS + "EGpad")
  }

  function _0x1441F() {
      if (Neptq("#" + NCSS + "DGpad2").hasClass("" + NCSS + "EGpad")) {
          Neptq("#" + NCSS + "DGpad2").html(NJSOFF);
          disableGpadIndex = "enable"
      } else {
          Neptq("#" + NCSS + "DGpad2").html(NJSOn);
          disableGpadIndex = 1
      };
      Neptq("#" + NCSS + "DGpad2").toggleClass("" + NCSS + "EGpad")
  }

  function _0x1444B() {
      if (Neptq("#" + NCSS + "DGpad3").hasClass("" + NCSS + "EGpad")) {
          Neptq("#" + NCSS + "DGpad3").html(NJSOFF);
          disableGpadIndex = "enable"
      } else {
          Neptq("#" + NCSS + "DGpad3").html(NJSOn);
          disableGpadIndex = 2
      };
      Neptq("#" + NCSS + "DGpad3").toggleClass("" + NCSS + "EGpad")
  }

  function _0x14477() {
      if (Neptq("#" + NCSS + "DGpad4").hasClass("" + NCSS + "EGpad")) {
          Neptq("#" + NCSS + "DGpad4").html(NJSOFF);
          disableGpadIndex = "enable"
      } else {
          Neptq("#" + NCSS + "DGpad4").html(NJSOn);
          disableGpadIndex = 3
      };
      Neptq("#" + NCSS + "DGpad4").toggleClass("" + NCSS + "EGpad")
  }

  function _0x144A3(_0x13E1B) {
      if (_0x13E1B.gamepad.index === disableGpadIndex) {
          gpad = "disable"
      } else {
          gpad = "enable"
      }
  }

  function _0x144CF(_0x13E1B) {
      if (_0x13E1B.gamepad.index === disableGpadIndex) {
          gpad = "disable"
      } else {
          gpad = "enable"
      }
  }

  function _0x144FB(_0x13E1B) {
      switch (_0x13E1B.type) {
          case "mouseup":
              ;
          case "mousedown":
              var _0x13E9F;
              var _0x13E73;
              if (_0x13E1B.button === 0) {
                  _0x13E73 = 40
              } else {
                  if (_0x13E1B.button === 2) {
                      _0x13E73 = 41
                  } else {
                      break
                  }
              };
              if (_0x13E1B.type === "mouseup") {
                  _0x13E9F = 0
              } else {
                  _0x13E9F = 1
              };
              for (var _0x13E47 = 0; _0x13E47 < RI.contexts.length; _0x13E47++) {
                  HEAP8[RI.contexts[_0x13E47].state + _0x13E73 >> 0] = _0x13E9F
              };
              break
      }
  }

  function _0x14527(_0x13E73) {
      var _0x13E9F;
      switch (_0x13E73.type) {
          case "mousemove":
              var _0x1402B = 0;
              var _0x14057 = 0;
              var _0x13F4F = _0x13E73.clientX - Neptune.canvas.offsetLeft;
              var _0x13F7B = _0x13E73.clientY - Neptune.canvas.offsetTop;
              if (_0x13F4F < 0) {
                  _0x13F4F = 0;
                  _0x1402B = -Neptune.canvas.offsetWidth
              } else {
                  if (_0x13F4F > Neptune.canvas.offsetWidth) {
                      _0x13F4F = Neptune.canvas.offsetWidth;
                      _0x1402B = Neptune.canvas.offsetWidth
                  } else {
                      _0x1402B = _0x13F4F - RI.currentX
                  }
              };
              if (_0x13F7B < 0) {
                  _0x13F7B = 0;
                  _0x14057 = -Neptune.canvas.offsetHeight
              } else {
                  if (_0x13F7B > Neptune.canvas.offsetHeight) {
                      _0x13F7B = Neptune.canvas.offsetHeight;
                      _0x14057 = Neptune.canvas.offsetHeight
                  } else {
                      _0x14057 = _0x13F7B - RI.currentY
                  }
              };
              RI.currentX = _0x13F4F;
              RI.currentY = _0x13F7B;
              for (_0x13E9F = 0; _0x13E9F < RI.contexts.length; _0x13E9F++) {
                  HEAP32[RI.contexts[_0x13E9F].state + 32 >> 2] = _0x1402B;
                  HEAP32[RI.contexts[_0x13E9F].state + 36 >> 2] = _0x14057
              };
              break;
          case "keyup":
              ;
          case "keydown":
              var _0x13F23 = _0x13E73.keyCode;
              var _0x13FD3;
              for (var _0x13E9F in controllers) {
                  for (var _0x13ECB in controllers[_0x13E9F]) {
                      var _0x13E47 = controllers[_0x13E9F][_0x13ECB];
                      if (_0x13E47.value == _0x13F23) {
                          simulat_input = _0x13E47.input_key;
                          _0x13FD3 = true
                      };
                      if (_0x13FD3 == true) {} else {
                          simulat_input = "200"
                      }
                  }
              };
              if (simulat_input === null || simulat_input === undefined) {
                  simulat_input = 200
              };
              var _0x13EF7 = simulat_input;
              var _0x13FA7 = _0x13EF7 >> 3;
              var _0x13E1B = 1 << (_0x13EF7 & 7);
              if (_0x13FA7 >= 32) {
                  throw "key code error! bad code: " + _0x13EF7
              };
              for (_0x13E9F = 0; _0x13E9F < RI.contexts.length; _0x13E9F++) {
                  var _0x13FFF = HEAP8[RI.contexts[_0x13E9F].state + _0x13FA7 >> 0];
                  if (_0x13E73.type === "keyup") {
                      _0x13FFF &= ~_0x13E1B
                  } else {
                      _0x13FFF |= _0x13E1B
                  };
                  HEAP8[RI.contexts[_0x13E9F].state + _0x13FA7 >> 0] = _0x13FFF
              };
              break;
          case "blur":
              ;
          case "visibilitychange":
              for (_0x13E9F = 0; _0x13E9F < RI.contexts.length; _0x13E9F++) {
                  _memset(RI.contexts[_0x13E9F].state, 0, 42)
              };
              break
      }
  }

  function _0x14553() {
      var _0x13E47 = 35;
      var _0x13E73 = _0x13E47 >> 3;
      var _0x13E1B = 1 << (_0x13E47 & 7);
      if (_0x13E73 >= 32) {
          throw "key code error! bad code: " + _0x13E47
      };
      for (i = 0; i < RI.contexts.length; i++) {
          var _0x13E9F = HEAP8[RI.contexts[i].state + _0x13E73 >> 0];
          _0x13E9F &= ~_0x13E1B;
          HEAP8[RI.contexts[i].state + _0x13E73 >> 0] = _0x13E9F
      };
      if (NjsconsoleInfo.indexOf("RetroArch [INFO] :: Ejected virtual disk tray.") > -1) {
          Neptq("." + NCSS + "nep_swap_disc").addClass("" + NCSS + "active_info");
          setTimeout(function() {
              Neptq("." + NCSS + "nep_swap_disc").removeClass("" + NCSS + "active_info");
              Neptq("." + NCSS + "nep_swap_disc").attr("data-swap", "0")
          }, 8000);
          localStorage.setItem("NJScd", JSON.stringify(0));
          setTimeout(test.DiskSwap, 500);
          return false
      }
  }

  function _0x1457F() {
      var _0x13E47 = 35;
      var _0x13E73 = _0x13E47 >> 3;
      var _0x13E1B = 1 << (_0x13E47 & 7);
      if (_0x13E73 >= 32) {
          throw "key code error! bad code: " + _0x13E47
      };
      for (i = 0; i < RI.contexts.length; i++) {
          var _0x13E9F = HEAP8[RI.contexts[i].state + _0x13E73 >> 0];
          _0x13E9F |= _0x13E1B;
          HEAP8[RI.contexts[i].state + _0x13E73 >> 0] = _0x13E9F
      };
      setTimeout(test.DiskSwapFinish, 500)
  }

  function _0x145AB() {
      if (RI.contexts.length === 0) {
          function _0x13E47() {
              if (simulat_input === null || simulat_input === undefined || gpad === "disable") {
                  simulat_input = 200
              };
              var _0x13E47 = simulat_input;
              var _0x13E73 = _0x13E47 >> 3;
              var _0x13E1B = 1 << (_0x13E47 & 7);
              if (_0x13E73 >= 32) {
                  throw "key code error! bad code: " + _0x13E47
              };
              for (i = 0; i < RI.contexts.length; i++) {
                  var _0x13E9F = HEAP8[RI.contexts[i].state + _0x13E73 >> 0];
                  _0x13E9F |= _0x13E1B;
                  HEAP8[RI.contexts[i].state + _0x13E73 >> 0] = _0x13E9F
              }
          }

          function _0x13ECB() {
              if (simulat_input === null || simulat_input === undefined || gpad === "disable") {
                  simulat_input = 200
              };
              var _0x13E47 = simulat_input;
              var _0x13E73 = _0x13E47 >> 3;
              var _0x13E1B = 1 << (_0x13E47 & 7);
              if (_0x13E73 >= 32) {
                  throw "key code error! bad code: " + _0x13E47
              };
              for (i = 0; i < RI.contexts.length; i++) {
                  var _0x13E9F = HEAP8[RI.contexts[i].state + _0x13E73 >> 0];
                  _0x13E9F &= ~_0x13E1B;
                  HEAP8[RI.contexts[i].state + _0x13E73 >> 0] = _0x13E9F
              }
          }

          function _0x13E9F() {
              var _0x13E47 = simulat_inputDpad;
              var _0x13E73 = _0x13E47 >> 3;
              var _0x13E1B = 1 << (_0x13E47 & 7);
              if (_0x13E73 >= 32) {
                  throw "key code error! bad code: " + _0x13E47
              };
              for (i = 0; i < RI.contexts.length; i++) {
                  var _0x13E9F = HEAP8[RI.contexts[i].state + _0x13E73 >> 0];
                  _0x13E9F &= ~_0x13E1B;
                  HEAP8[RI.contexts[i].state + _0x13E73 >> 0] = _0x13E9F
              }
          }

          function _0x13E73() {
              var _0x13E47 = simulat_inputDpad;
              var _0x13E73 = _0x13E47 >> 3;
              var _0x13E1B = 1 << (_0x13E47 & 7);
              if (_0x13E73 >= 32) {
                  throw "key code error! bad code: " + _0x13E47
              };
              for (i = 0; i < RI.contexts.length; i++) {
                  var _0x13E9F = HEAP8[RI.contexts[i].state + _0x13E73 >> 0];
                  _0x13E9F |= _0x13E1B;
                  HEAP8[RI.contexts[i].state + _0x13E73 >> 0] = _0x13E9F
              }
          }

          function _0x13E1B(_0x13E1B, _0x13E47) {
              Neptq(":focus").val(buttonMap[_0x13E1B]).attr("data-type", 2).attr("data-gamepad-key", _0x13E1B).attr("data-axes-key", _0x13E47)
          }
          gamepad.bind(Gamepad.Event.AXIS_CHANGED, function(_0x13F23) {
              if (Neptq(":focus").closest("." + NCSS + "controllers").length > 0) {
                  Neptq(":focus").attr("data-gamepad-index", _0x13F23.gamepad.index);
                  if (_0x13F23.axis == "LEFT_STICK_X") {
                      if (_0x13F23.value >= 0.5) {
                          axes_stick = 17;
                          axes_stick_up = 17;
                          _0x13E1B(axes_stick, axes_stick_up)
                      };
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 18;
                          axes_stick_up = 18;
                          _0x13E1B(axes_stick, axes_stick_up)
                      }
                  };
                  if (_0x13F23.axis == "LEFT_STICK_Y") {
                      if (_0x13F23.value >= 0.5) {
                          axes_stick = 19;
                          axes_stick_up = 19;
                          _0x13E1B(axes_stick, axes_stick_up)
                      };
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 20;
                          axes_stick_up = 20;
                          _0x13E1B(axes_stick, axes_stick_up)
                      }
                  };
                  if (_0x13F23.axis == "RIGHT_STICK_X") {
                      if (_0x13F23.value >= 0.5) {
                          axes_stick = 21;
                          axes_stick_up = 21;
                          _0x13E1B(axes_stick, axes_stick_up)
                      };
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 22;
                          axes_stick_up = 22;
                          _0x13E1B(axes_stick, axes_stick_up)
                      }
                  };
                  if (_0x13F23.axis == "RIGHT_STICK_Y") {
                      if (_0x13F23.value >= 0.5) {
                          axes_stick = 23;
                          axes_stick_up = 23;
                          _0x13E1B(axes_stick, axes_stick_up)
                      };
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 24;
                          axes_stick_up = 24;
                          _0x13E1B(axes_stick, axes_stick_up)
                      }
                  }
              };
              if (_0x13F23.axis == "DPAD_STICK") {
                  if (_0x13F23.value == -0.4285714030265808) {
                      simulat_inputDpad = 68;
                      _0x13E73()
                  };
                  if (_0x13F23.value == 0.7142857313156128) {
                      simulat_inputDpad = 65;
                      _0x13E73()
                  };
                  if (_0x13F23.value == 0.14285719394683838) {
                      simulat_inputDpad = 83;
                      _0x13E73()
                  };
                  if (_0x13F23.value == -1) {
                      simulat_inputDpad = 87;
                      _0x13E73()
                  };
                  if (_0x13F23.value == 1) {
                      simulat_inputDpad = 87;
                      _0x13E9F()
                  };
                  if (_0x13F23.value == 1) {
                      simulat_inputDpad = 83;
                      _0x13E9F()
                  };
                  if (_0x13F23.value == 1) {
                      simulat_inputDpad = 65;
                      _0x13E9F()
                  };
                  if (_0x13F23.value == 1) {
                      simulat_inputDpad = 68;
                      _0x13E9F()
                  }
              };
              if (_0x13F23.axis == "LEFT_STICK_X") {
                  if (_0x13F23.value >= 0.5) {
                      axes_stick = 17
                  } else {
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 18
                      } else {
                          axes_stick = 0
                      }
                  };
                  if (_0x13F23.value <= 0.5) {
                      axes_stick_up = 18;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  if (_0x13F23.value >= -0.5) {
                      axes_stick_up = 17;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  for (var _0x13F4F in controllers) {
                      for (var _0x13F7B in controllers[_0x13F4F]) {
                          var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                          if (_0x13EF7.gamepad_key == axes_stick && _0x13F23.gamepad.index == _0x13EF7.index) {
                              simulat_input = _0x13EF7.input_key
                          } else {
                              simulat_input = null
                          };
                          _0x13E47()
                      }
                  }
              };
              if (_0x13F23.axis == "LEFT_STICK_Y") {
                  if (_0x13F23.value >= 0.5) {
                      axes_stick = 19
                  } else {
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 20
                      } else {
                          axes_stick = 0
                      }
                  };
                  if (_0x13F23.value <= 0.5) {
                      axes_stick_up = 20;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  if (_0x13F23.value >= -0.5) {
                      axes_stick_up = 19;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  for (var _0x13F4F in controllers) {
                      for (var _0x13F7B in controllers[_0x13F4F]) {
                          var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                          if (_0x13EF7.gamepad_key == axes_stick && _0x13F23.gamepad.index == _0x13EF7.index) {
                              simulat_input = _0x13EF7.input_key
                          } else {
                              simulat_input = null
                          };
                          _0x13E47()
                      }
                  }
              };
              if (_0x13F23.axis == "RIGHT_STICK_X") {
                  if (_0x13F23.value >= 0.5) {
                      axes_stick = 21
                  } else {
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 22
                      } else {
                          axes_stick = 0
                      }
                  };
                  if (_0x13F23.value <= 0.5) {
                      axes_stick_up = 22;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  if (_0x13F23.value >= -0.5) {
                      axes_stick_up = 21;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  for (var _0x13F4F in controllers) {
                      for (var _0x13F7B in controllers[_0x13F4F]) {
                          var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                          if (_0x13EF7.gamepad_key == axes_stick && _0x13F23.gamepad.index == _0x13EF7.index) {
                              simulat_input = _0x13EF7.input_key
                          } else {
                              simulat_input = null
                          };
                          _0x13E47()
                      }
                  }
              };
              if (_0x13F23.axis == "RIGHT_STICK_Y") {
                  if (_0x13F23.value >= 0.5) {
                      axes_stick = 23
                  } else {
                      if (_0x13F23.value <= -0.5) {
                          axes_stick = 24
                      } else {
                          axes_stick = 0
                      }
                  };
                  if (_0x13F23.value <= 0.5) {
                      axes_stick_up = 24;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  if (_0x13F23.value >= -0.5) {
                      axes_stick_up = 23;
                      for (var _0x13F4F in controllers) {
                          for (var _0x13F7B in controllers[_0x13F4F]) {
                              var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                              if (_0x13EF7.gamepad_key == axes_stick_up && _0x13F23.gamepad.index == _0x13EF7.index) {
                                  simulat_input = _0x13EF7.input_key
                              } else {
                                  simulat_input = null
                              };
                              _0x13ECB()
                          }
                      }
                  };
                  for (var _0x13F4F in controllers) {
                      for (var _0x13F7B in controllers[_0x13F4F]) {
                          var _0x13EF7 = controllers[_0x13F4F][_0x13F7B];
                          if (_0x13EF7.gamepad_key == axes_stick && _0x13F23.gamepad.index == _0x13EF7.index) {
                              simulat_input = _0x13EF7.input_key
                          } else {
                              simulat_input = null
                          };
                          _0x13E47()
                      }
                  }
              }
          });
          gamepad.bind(Gamepad.Event.BUTTON_DOWN, function(_0x13E73) {
              if (Neptq(":focus").closest("." + NCSS + "controllers").length > 0) {
                  Neptq(":focus").val(keyMap[keyCod_tag] + "" + buttonMap[_0x13E73.control]).attr("data-type", 2).attr("data-gamepad-key", _0x13E73.control).attr("data-gamepad-index", _0x13E73.gamepad.index)
              };
              for (var _0x13E9F in controllers) {
                  for (var _0x13ECB in controllers[_0x13E9F]) {
                      var _0x13E47 = controllers[_0x13E9F][_0x13ECB];
                      if (_0x13E47.gamepad_key == _0x13E73.control && _0x13E73.gamepad.index == _0x13E47.index) {
                          simulat_input = _0x13E47.input_key
                      }
                  }
              };
              if (simulat_input === null || simulat_input === undefined || gpad === "disable") {
                  simulat_input = 200
              };
              var _0x13EF7 = simulat_input;
              var _0x13F23 = _0x13EF7 >> 3;
              var _0x13E1B = 1 << (_0x13EF7 & 7);
              if (_0x13F23 >= 32) {
                  throw "key code error! bad code: " + _0x13EF7
              };
              for (_0x13E9F = 0; _0x13E9F < RI.contexts.length; _0x13E9F++) {
                  var _0x13F4F = HEAP8[RI.contexts[_0x13E9F].state + _0x13F23 >> 0];
                  _0x13F4F |= _0x13E1B;
                  HEAP8[RI.contexts[_0x13E9F].state + _0x13F23 >> 0] = _0x13F4F
              }
          });
          gamepad.bind(Gamepad.Event.BUTTON_UP, function(_0x13E73) {
              for (var _0x13E9F in controllers) {
                  for (var _0x13ECB in controllers[_0x13E9F]) {
                      var _0x13E47 = controllers[_0x13E9F][_0x13ECB];
                      if (_0x13E47.gamepad_key == _0x13E73.control && _0x13E73.gamepad.index == _0x13E47.index) {
                          simulat_input = _0x13E47.input_key
                      }
                  }
              };
              if (simulat_input === null || simulat_input === undefined || gpad === "disable") {
                  simulat_input = 200
              };
              var _0x13EF7 = simulat_input;
              var _0x13F23 = _0x13EF7 >> 3;
              var _0x13E1B = 1 << (_0x13EF7 & 7);
              if (_0x13F23 >= 32) {
                  throw "key code error! bad code: " + _0x13EF7
              };
              for (_0x13E9F = 0; _0x13E9F < RI.contexts.length; _0x13E9F++) {
                  var _0x13F4F = HEAP8[RI.contexts[_0x13E9F].state + _0x13F23 >> 0];
                  _0x13F4F &= ~_0x13E1B;
                  HEAP8[RI.contexts[_0x13E9F].state + _0x13F23 >> 0] = _0x13F4F
              };
              return
          });
          focusElement[0].addEventListener("keyup", RI.eventHandler, false);
          focusElement[0].addEventListener("keydown", RI.eventHandler, false);
          focusElement[0].addEventListener("mousemove", RI.eventHandler, false);
          focusElement[0].addEventListener("mouseup", RI.canvasEventHandler, false);
          focusElement[0].addEventListener("mousedown", RI.canvasEventHandler, false);
          focusElement[0].addEventListener("blur", RI.eventHandler, false);
          focusElement[0].addEventListener("onvisbilitychange", RI.eventHandler, false)
      };
      if (RI.temp === null) {
          RI.temp = _malloc(42)
      };
      var _0x13EF7 = _malloc(42);
      _memset(_0x13EF7, 0, 42);
      RI.contexts.push({
          state: _0x13EF7
      });
      return RI.contexts.length
  }

  function _0x145D7(_0x13E1B) {
      _0x13E1B -= 1;
      var _0x13E47 = RI.contexts[_0x13E1B].state;
      _memcpy(RI.temp, _0x13E47, 42);
      HEAP32[RI.contexts[_0x13E1B].state + 32 >> 2] = 0;
      HEAP32[RI.contexts[_0x13E1B].state + 36 >> 2] = 0;
      return RI.temp
  }

  function _0x14603(_0x13E1B) {
      if (_0x13E1B === RI.contexts.length) {
          RI.contexts.pop();
          if (RI.contexts.length === 0) {
              Neptune.canvas.removeEventListener("keyup", RI.eventHandler, false);
              Neptune.canvas.removeEventListener("keydown", RI.eventHandler, false);
              Neptune.canvas.removeEventListener("mousemove", RI.eventHandler, false);
              Neptune.canvas.removeEventListener("mouseup", RI.canvasEventHandler, false);
              Neptune.canvas.removeEventListener("mousedown", RI.canvasEventHandler, false);
              Neptune.canvas.removeEventListener("blur", RI.eventHandler, false);
              Neptune.canvas.removeEventListener("onvisbilitychange", RI.eventHandler, false)
          }
      }
  }

  function _0x1462F() {
      Neptq("#" + NCSS + "popup1").css("visibility", "visible");
      Neptq("#" + NCSS + "popup1").css("opacity", "1");
      Neptq("#" + NCSS + "popup1").css("zIndex", "5");
      Neptq("#" + NCSS + "popup1").focus();
      Neptq("." + NCSS + "charkey").css("display", "none");
      elementData = Neptq(this).attr("id");

      function _0x13E1B() {
          Neptq("#" + NCSS + "popup1").bind("keydown", function(_0x13E47) {
              var _0x13E9F = _0x13E47.keyCode;
              var _0x13E1B = keyMap[_0x13E47.keyCode];
              Neptq("input").each(function() {
                  theHidden = Neptq(this).attr("id");
                  attrData = Neptq(this).attr("data-value");
                  if (attrData == _0x13E9F) {
                      Neptq("#" + theHidden).attr("data-value", "4545")
                  }
              });
              Neptq("." + NCSS + "charkey").html(ButSetTolang + " " + _0x13E1B);
              Neptq("." + NCSS + "charkey").css("display", "block");
              if (elementData === "" + NCSS + "ConStart") {
                  Neptq("#NJSSTART" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConSelect") {
                  Neptq("#NJSSELECT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConL1") {
                  Neptq("#NJSKEYL" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConR1") {
                  Neptq("#NJSKEYR" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConL2") {
                  Neptq("#NJSKEYL2" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConR2") {
                  Neptq("#NJSKEYR2" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConL3") {
                  Neptq("#NJSKEYL3" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "ConR3") {
                  Neptq("#NJSKEYR3" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button1") {
                  Neptq("#NJSKEYX" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button2") {
                  Neptq("#NJSKEYA" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button3") {
                  Neptq("#NJSKEYB" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button4") {
                  Neptq("#NJSKEYY" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button5") {
                  Neptq("#NJSKEYL" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button6") {
                  Neptq("#NJSKEYR" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button7") {
                  Neptq("#NJSKEYL2" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button8") {
                  Neptq("#NJSKEYR2" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button13") {
                  Neptq("#NJSKEYL3" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button14") {
                  Neptq("#NJSKEYR3" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button9") {
                  Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button10") {
                  Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button11") {
                  Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "cui_button12") {
                  Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "dpadu") {
                  Neptq("#NJSUP" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "dpadd") {
                  Neptq("#NJSDOWN" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "dpadl") {
                  Neptq("#NJSLEFT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "dpadr") {
                  Neptq("#NJSRIGHT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogLu") {
                  Neptq("#NJSKEYL_A_UP" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogLd") {
                  Neptq("#NJSKEYL_A_DOWN" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogLl") {
                  Neptq("#NJSKEYL_A_LEFT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogLr") {
                  Neptq("#NJSKEYL_A_RIGHT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogRu") {
                  Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogRd") {
                  Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogRl") {
                  Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-value", _0x13E9F)
              };
              if (elementData === "" + NCSS + "AnalogRr") {
                  Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-value", _0x13E9F)
              };
              _0x13FA7();
              var _0x13E73 = setTimeout(function() {
                  Neptq("#" + NCSS + "popup1").css("visibility", "hidden");
                  Neptq("#" + NCSS + "popup1").css("opacity", "0");
                  Neptq("#" + NCSS + "popup1").css("zIndex", "0");
                  Neptq("." + NCSS + "tabs-content ." + NCSS + "controllers").focus()
              }, 600)
          });
          gamepad.bind(Gamepad.Event.BUTTON_UP, function(_0x13E47) {
              if (Neptq("#" + NCSS + "popup1").is(":focus")) {
                  var _0x13E1B = buttonMap[_0x13E47.control];
                  Neptq("input").each(function() {
                      theHidden = Neptq(this).attr("id");
                      attrData = Neptq(this).attr("data-gamepad-key");
                      DataIndex = Neptq(this).attr("data-gamepad-index");
                      if (attrData == _0x13E47.control && DataIndex == _0x13E47.gamepad.index) {
                          Neptq("#" + theHidden).attr("data-gamepad-key", "4545")
                      }
                  });
                  Neptq("." + NCSS + "charkey").html("Button set to " + _0x13E1B + " gamepad \u2116" + (_0x13E47.gamepad.index + 1));
                  Neptq("." + NCSS + "charkey").css("display", "block");
                  if (elementData === "" + NCSS + "ConStart") {
                      Neptq("#NJSSTART" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConSelect") {
                      Neptq("#NJSSELECT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConL1") {
                      Neptq("#NJSKEYL" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConR1") {
                      Neptq("#NJSKEYR" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConL2") {
                      Neptq("#NJSKEYL2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConR2") {
                      Neptq("#NJSKEYR2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConL3") {
                      Neptq("#NJSKEYL3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "ConR3") {
                      Neptq("#NJSKEYR3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button1") {
                      Neptq("#NJSKEYX" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button2") {
                      Neptq("#NJSKEYA" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button3") {
                      Neptq("#NJSKEYB" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button4") {
                      Neptq("#NJSKEYY" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button5") {
                      Neptq("#NJSKEYL" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button6") {
                      Neptq("#NJSKEYR" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button7") {
                      Neptq("#NJSKEYL2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button8") {
                      Neptq("#NJSKEYR2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button13") {
                      Neptq("#NJSKEYL3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button14") {
                      Neptq("#NJSKEYR3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button9") {
                      Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button10") {
                      Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button11") {
                      Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "cui_button12") {
                      Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "dpadu") {
                      Neptq("#NJSUP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "dpadd") {
                      Neptq("#NJSDOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "dpadl") {
                      Neptq("#NJSLEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "dpadr") {
                      Neptq("#NJSRIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogLu") {
                      Neptq("#NJSKEYL_A_UP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogLd") {
                      Neptq("#NJSKEYL_A_DOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogLl") {
                      Neptq("#NJSKEYL_A_LEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogLr") {
                      Neptq("#NJSKEYL_A_RIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogRu") {
                      Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogRd") {
                      Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogRl") {
                      Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  if (elementData === "" + NCSS + "AnalogRr") {
                      Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                  };
                  _0x13FA7();
                  var _0x13E73 = setTimeout(function() {
                      Neptq("#" + NCSS + "popup1").css("visibility", "hidden");
                      Neptq("#" + NCSS + "popup1").css("opacity", "0");
                      Neptq("#" + NCSS + "popup1").css("zIndex", "0");
                      Neptq("." + NCSS + "tabs-content ." + NCSS + "controllers").focus()
                  }, 600)
              }
          });
          Neptq("#" + NCSS + "popup1").click(function() {
              var _0x13E1B = setTimeout(function() {
                  Neptq("#" + NCSS + "popup1").css("visibility", "hidden");
                  Neptq("#" + NCSS + "popup1").css("opacity", "0");
                  Neptq("#" + NCSS + "popup1").css("zIndex", "0");
                  Neptq("." + NCSS + "tabs-content ." + NCSS + "controllers").focus()
              }, 600)
          });
          gamepad.bind(Gamepad.Event.AXIS_CHANGED, function(_0x13E47) {
              if (_0x13E47.axis == "LEFT_STICK_X") {
                  if (_0x13E47.value >= 0.5) {
                      axes_stick = 17
                  } else {
                      if (_0x13E47.value <= -0.5) {
                          axes_stick = 18
                      }
                  };
                  if (_0x13E47.value <= 0.5) {
                      axes_stick_up = 18
                  };
                  if (_0x13E47.value >= -0.5) {
                      axes_stick_up = 17
                  }
              };
              if (_0x13E47.axis == "LEFT_STICK_Y") {
                  if (_0x13E47.value >= 0.5) {
                      axes_stick = 19
                  } else {
                      if (_0x13E47.value <= -0.5) {
                          axes_stick = 20
                      }
                  };
                  if (_0x13E47.value <= 0.5) {
                      axes_stick_up = 20
                  };
                  if (_0x13E47.value >= -0.5) {
                      axes_stick_up = 19
                  }
              };
              if (_0x13E47.axis == "RIGHT_STICK_X") {
                  if (_0x13E47.value >= 0.5) {
                      axes_stick = 21
                  } else {
                      if (_0x13E47.value <= -0.5) {
                          axes_stick = 22
                      }
                  };
                  if (_0x13E47.value <= 0.5) {
                      axes_stick_up = 22
                  };
                  if (_0x13E47.value >= -0.5) {
                      axes_stick_up = 21
                  }
              };
              if (_0x13E47.axis == "RIGHT_STICK_Y") {
                  if (_0x13E47.value >= 0.5) {
                      axes_stick = 23
                  } else {
                      if (_0x13E47.value <= -0.5) {
                          axes_stick = 24
                      }
                  };
                  if (_0x13E47.value <= 0.5) {
                      axes_stick_up = 24
                  };
                  if (_0x13E47.value >= -0.5) {
                      axes_stick_up = 23
                  }
              };
              if (Neptq("#" + NCSS + "popup1").is(":focus")) {
                  Neptq("input").each(function() {
                      theHidden = Neptq(this).attr("id");
                      attrData = Neptq(this).attr("data-axes-key");
                      DataIndex = Neptq(this).attr("data-gamepad-index");
                      if (attrData == _0x13E47.control && DataIndex == _0x13E47.gamepad.index) {
                          Neptq("#" + theHidden).attr("data-axes-key", "4545")
                      }
                  });
                  if (axes_stick > 0) {
                      var _0x13E1B = buttonMap[axes_stick];
                      Neptq("." + NCSS + "charkey").html("Button set to " + _0x13E1B + " gamepad \u2116" + (_0x13E47.gamepad.index + 1));
                      Neptq("." + NCSS + "charkey").css("display", "block");
                      if (elementData === "" + NCSS + "ConStart") {
                          Neptq("#NJSSTART" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "ConSelect") {
                          Neptq("#NJSSELECT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "ConL1") {
                          Neptq("#NJSKEYL" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "ConR1") {
                          Neptq("#NJSKEYR" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "ConL2") {
                          Neptq("#NJSKEYL2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "ConR2") {
                          Neptq("#NJSKEYR2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "ConL3") {
                          Neptq("#NJSKEYL3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "ConR3") {
                          Neptq("#NJSKEYR3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button1") {
                          Neptq("#NJSKEYX" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button2") {
                          Neptq("#NJSKEYA" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button3") {
                          Neptq("#NJSKEYB" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button4") {
                          Neptq("#NJSKEYY" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button5") {
                          Neptq("#NJSKEYL" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button6") {
                          Neptq("#NJSKEYR" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button7") {
                          Neptq("#NJSKEYL2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button8") {
                          Neptq("#NJSKEYR2" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button13") {
                          Neptq("#NJSKEYL3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button14") {
                          Neptq("#NJSKEYR3" + Player + "").attr("data-type", 2).attr("data-gamepad-key", _0x13E47.control).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button9") {
                          Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button10") {
                          Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button11") {
                          Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "cui_button12") {
                          Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "dpadu") {
                          Neptq("#NJSUP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "dpadd") {
                          Neptq("#NJSDOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "dpadl") {
                          Neptq("#NJSLEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "dpadr") {
                          Neptq("#NJSRIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogLu") {
                          Neptq("#NJSKEYL_A_UP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogLd") {
                          Neptq("#NJSKEYL_A_DOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogLl") {
                          Neptq("#NJSKEYL_A_LEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogLr") {
                          Neptq("#NJSKEYL_A_RIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogRu") {
                          Neptq("#NJSKEYR_A_UP" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogRd") {
                          Neptq("#NJSKEYR_A_DOWN" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogRl") {
                          Neptq("#NJSKEYR_A_LEFT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      if (elementData === "" + NCSS + "AnalogRr") {
                          Neptq("#NJSKEYR_A_RIGHT" + Player + "").attr("data-type", 2).attr("data-gamepad-key", axes_stick).attr("data-axes-key", axes_stick_up).attr("data-gamepad-index", _0x13E47.gamepad.index)
                      };
                      _0x13FA7();
                      var _0x13E73 = setTimeout(function() {
                          Neptq("#" + NCSS + "popup1").css("visibility", "hidden");
                          Neptq("#" + NCSS + "popup1").css("opacity", "0");
                          Neptq("#" + NCSS + "popup1").css("zIndex", "0");
                          Neptq("." + NCSS + "tabs-content ." + NCSS + "controllers").focus()
                      }, 600)
                  }
              }
          })
      }
      _0x13E1B()
  }
  initInfoLable = _0x13FA7;
  callGpadUi = _0x140AF;
  SaveJson = _0x141E3;
  SaveGameJson = _0x1420F;
  loadJSONALL = _0x1423B;
  loadJSON = _0x14267;
  showUiPop = _0x142BF;
  initControllers = _0x142EB;
  _ssyyquu71 = _0x145AB;
  _aayuq8971 = _0x145D7;
  _sasiu89 = _0x14603;
  if (netp === 1) {
      if (window.xboxMode == undefined) {
          xboxMode = false
      };
      if (xboxMode === true) {
          Neptq.getJSON("https://impragma.github.io/NeptunJS/config/xbox_p1.json", _0x13E1B)
      } else {
          if (NepEmu === "n64") {
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/n64_p1.json", _0x13E47);
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/n64_p2.json", _0x13E73);
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/n64_p3.json", _0x13E9F);
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/n64_p4.json", _0x13ECB)
          } else {
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/P1.json", _0x13EF7);
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/P2.json", _0x13F23);
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/P3.json", _0x13F4F);
              Neptq.getJSON("https://impragma.github.io/NeptunJS/config/P4.json", _0x13F7B)
          }
      };
      focusElement = Neptq("#" + NCSS + "Neptun");
      button9 = "L2";
      button10 = "R2";
      button11 = "L3";
      button12 = "R3";
      dpad1 = "UP";
      dpad2 = "DOWN";
      dpad3 = "LEFT";
      dpad4 = "RIGHT";
      Lanalog1 = "UP";
      Lanalog2 = "DOWN";
      Lanalog3 = "LEFT";
      Lanalog4 = "RIGHT";
      Ranalog1 = "UP";
      Ranalog2 = "DOWN";
      Ranalog3 = "LEFT";
      Ranalog4 = "RIGHT";
      if (xboxMode === true) {
          buttonMap = {
              FACE_1: "A",
              FACE_2: "B",
              FACE_3: "X",
              FACE_4: "Y",
              LEFT_TOP_SHOULDER: "L1",
              RIGHT_TOP_SHOULDER: "R1",
              LEFT_BOTTOM_SHOULDER: "L2",
              RIGHT_BOTTOM_SHOULDER: "R2",
              SELECT_BACK: "SELECT",
              START_FORWARD: "START",
              LEFT_STICK: "L3",
              RIGHT_STICK: "R3",
              DPAD_UP: "UP",
              DPAD_DOWN: "DOWN",
              DPAD_LEFT: "LEFT",
              DPAD_RIGHT: "RIGHT",
              17: "L STICK RIGHT",
              18: "L STICK LEFT",
              19: "L STICK DOWN",
              20: "L STICK UP",
              24: "R STICK UP",
              23: "R STICK DOWN",
              22: "R STICK LEFT",
              21: "R STICK RIGHT",
              400: "Not set"
          };
          keyMap = {
              37: "",
              39: "",
              38: "",
              40: "",
              13: "",
              9: "",
              45: "",
              46: "",
              16: "",
              17: "",
              35: "",
              36: "",
              34: "",
              33: "",
              18: "",
              32: "",
              27: "",
              8: "",
              107: "",
              109: "",
              106: "",
              111: "",
              192: "",
              19: "",
              91: "",
              93: "",
              96: "",
              97: "",
              98: "",
              99: "",
              100: "",
              101: "",
              102: "",
              103: "",
              104: "",
              105: "",
              48: "",
              49: "",
              50: "",
              51: "",
              52: "",
              53: "",
              54: "",
              55: "",
              56: "",
              57: "",
              112: "",
              113: "",
              114: "",
              115: "",
              116: "",
              117: "",
              118: "",
              119: "",
              120: "",
              121: "",
              122: "",
              123: "",
              65: "",
              66: "",
              67: "",
              68: "",
              69: "",
              70: "",
              71: "",
              72: "",
              73: "",
              74: "",
              75: "",
              76: "",
              77: "",
              78: "",
              79: "",
              80: "",
              81: "",
              82: "",
              83: "",
              84: "",
              85: "",
              86: "",
              87: "",
              88: "",
              89: "",
              90: "",
              186: "",
              500: ""
          }
      } else {
          buttonMap = {
              FACE_1: " | A",
              FACE_2: " | B",
              FACE_3: " | X",
              FACE_4: " | Y",
              LEFT_TOP_SHOULDER: " | L1",
              RIGHT_TOP_SHOULDER: " | R1",
              LEFT_BOTTOM_SHOULDER: " | L2",
              RIGHT_BOTTOM_SHOULDER: " | R2",
              SELECT_BACK: " | SELECT",
              START_FORWARD: " | START",
              LEFT_STICK: " | L3",
              RIGHT_STICK: " | R3",
              DPAD_UP: " | UP",
              DPAD_DOWN: " | DOWN",
              DPAD_LEFT: " | LEFT",
              DPAD_RIGHT: " | RIGHT",
              17: " | L STICK RIGHT",
              18: " | L STICK LEFT",
              19: " | L STICK DOWN",
              20: " | L STICK UP",
              24: " | R STICK UP",
              23: " | R STICK DOWN",
              22: " | R STICK LEFT",
              21: " | R STICK RIGHT",
              400: " | Not set"
          };
          keyMap = {
              37: "LEFT",
              39: "RIGHT",
              38: "UP",
              40: "DOWN",
              13: "ENTER",
              9: "TAB",
              45: "INSERT",
              46: "DELETE",
              16: "SHIFT",
              17: "LCTRL",
              35: "END",
              36: "HOME",
              34: "PAGEDOWN",
              33: "PAGEUP",
              18: "LALT",
              32: "SPACE",
              27: "ESCAPE",
              8: "BACKSPACE",
              107: "NUMPAD PLUS",
              109: "NUMPAD MINUS",
              106: "NUMPAD MULTIPLY",
              111: "NUMPAD DIVIDE",
              192: "BACKQUOTE",
              19: "PAUSE",
              91: "META",
              93: "META",
              96: "NUMPAD 0",
              97: "NUMPAD 1",
              98: "NUMPAD 2",
              99: "NUMPAD 3",
              100: "NUMPAD 4",
              101: "NUMPAD 5",
              102: "NUMPAD 6",
              103: "NUMPAD 7",
              104: "NUMPAD 8",
              105: "NUMPAD 9",
              48: "0",
              49: "1",
              50: "2",
              51: "3",
              52: "4",
              53: "5",
              54: "6",
              55: "7",
              56: "8",
              57: "9",
              112: "F1",
              113: "F2",
              114: "F3",
              115: "F4",
              116: "F5",
              117: "F6",
              118: "F7",
              119: "F8",
              120: "F9",
              121: "F10",
              122: "F11",
              123: "F12",
              65: "A",
              66: "B",
              67: "C",
              68: "D",
              69: "E",
              70: "F",
              71: "G",
              72: "H",
              73: "I",
              74: "J",
              75: "K",
              76: "L",
              77: "M",
              78: "N",
              79: "O",
              80: "P",
              81: "Q",
              82: "R",
              83: "S",
              84: "T",
              85: "U",
              86: "V",
              87: "W",
              88: "X",
              89: "Y",
              90: "Z",
              186: "SEMI-COLON",
              500: "Not set"
          }
      };
      if (buttonMap === undefined || keyMap === undefined) {
          buttonMap = "no set";
          keyMap = "no set"
      };
      if (NeptunP === "sega" || NeptunP === "segaCD" || NeptunP === "sega32x") {
          Neptq("." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "arcade" || NeptunP === "cps1" || NeptunP === "cps2" || NeptunP === "cps3") {
          Neptq("." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "sega_saturn") {
          Neptq("." + NCSS + "labButtonR1,." + NCSS + "labButtonL1,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "labButtonSelect").css("display", "none")
      };
      if (NeptunP === "nes" || NeptunP === "fds" || NeptunP === "tg16" || NeptunP === "tg16CD") {
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "lynx") {
          Neptq("." + NCSS + "labButton4,." + NCSS + "labButton3,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "gboy") {
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton4,." + NCSS + "labButton3,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "segaGG" || NeptunP === "ngp" || NeptunP === "wswan") {
          Neptq("." + NCSS + "labButton3,." + NCSS + "labButton4,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "labButtonSelect").css("display", "none")
      };
      if (NeptunP === "3do") {
          Neptq("." + NCSS + "labButton4,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "psx") {
          Neptq("." + NCSS + "gamepadStateInfo").css("width", "31%");
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none");
          Neptq("." + NCSS + "Anlable").css("display", "block")
      };
      if (NeptunP === "msx") {
          Neptq("." + NCSS + "gamepadStateInfo").css("width", "31%");
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none");
          Neptq("." + NCSS + "Anlable").css("display", "block")
      };
      if (NeptunP === "zx") {
          Neptq("." + NCSS + "gamepadStateInfo").css("width", "31%");
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none");
          Neptq("." + NCSS + "Anlable").css("display", "block")
      };
      if (NeptunP === "snes") {
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "neogeo") {
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "dc") {
          Neptq("." + NCSS + "gamepadStateInfo").css("width", "31%");
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "AnlableRight,." + NCSS + "labButtonSelect").css("display", "none")
      };
      if (NeptunP === "atari2600") {
          Neptq("." + NCSS + "labButton1,." + NCSS + "labButton3,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton4,." + NCSS + "labButton3,." + NCSS + "labButtonL2,." + NCSS + "labButtonR2,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "labButtonSelect,." + NCSS + "labButtonStart").css("display", "none")
      };
      if (NeptunP === "atari7800") {
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton4,." + NCSS + "labButton3,." + NCSS + "labButtonL2,." + NCSS + "labButtonR2,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "labButtonSelect,." + NCSS + "labButtonStart").css("display", "none")
      };
      if (NeptunP === "psp") {
          Neptq("." + NCSS + "gamepadStateInfo").css("width", "31%");
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "AnlableRight").css("display", "none")
      };
      if (NeptunP === "atari_jaguar") {
          Neptq("." + NCSS + "gamepadStateInfo").css("width", "31%");
          Neptq("." + NCSS + "AnlableLeft,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "nds") {
          Neptq("." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "Anlable,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "gba") {
          Neptq("." + NCSS + "labButton3,." + NCSS + "labButton4,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3, ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "vboy") {
          Neptq("#" + NCSS + "infoCC ").css({
              "top": "-14px"
          });
          Neptq("." + NCSS + "gamepadStateInfo").css({
              "width": "31%",
              "top": "-100px"
          });
          Neptq("." + NCSS + "labButton3,." + NCSS + "AnlableLeft,." + NCSS + "labButton4,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13").css("display", "none")
      };
      if (NeptunP === "segaMS") {
          Neptq("." + NCSS + "labButton3,." + NCSS + "labButton4,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButtonL2 , ." + NCSS + "labButtonR2 ,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButtonL1 , ." + NCSS + "labButtonR1 , ." + NCSS + "Anlable,." + NCSS + "labButton7,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButton13,." + NCSS + "labButtonSelect,." + NCSS + "labButtonStart").css("display", "none")
      };
      if (NeptunP === "n64") {
          Neptq("#" + NCSS + "infoCC ").css({
              "top": "-14px"
          });
          Neptq("." + NCSS + "gamepadStateInfo").css({
              "width": "31%"
          });
          Neptq("." + NCSS + "labButton3,." + NCSS + "labButtonL3,." + NCSS + "labButtonR3,." + NCSS + "labButton4,." + NCSS + "labButton5,." + NCSS + "labButton6,." + NCSS + "labButton7,." + NCSS + "labButton4,." + NCSS + "labButton8,." + NCSS + "labButton9,." + NCSS + "labButton10,." + NCSS + "labButton11,." + NCSS + "labButton12,." + NCSS + "labButtonR2,." + NCSS + "labButton13,." + NCSS + "labButtonSelect").css("display", "none");
          Neptq("." + NCSS + "Anlable").css("display", "block")
      };
      if (NeptunP === "segaCD" || NeptunP === "sega" || NeptunP === "sega32x") {
          button1 = "MODE";
          button2 = "START";
          button6 = "Y";
          button8 = "Z";
          button3 = "A";
          button4 = "B";
          button5 = "C";
          button7 = "X"
      };
      if (NeptunP === "sega_saturn") {
          button2 = "START";
          button3 = "A";
          button4 = "B";
          button5 = "C";
          button7 = "X";
          button6 = "Y";
          button8 = "Z";
          button9 = "L";
          button10 = "R"
      };
      if (NeptunP === "neogeo") {
          button1 = "INSERT COINT";
          button2 = "START";
          button3 = "C";
          button4 = "A";
          button5 = "B";
          button6 = "D";
          button7 = "L1";
          button8 = "R1"
      };
      if (NeptunP === "arcade" || NeptunP === "cps1" || NeptunP === "cps2" || NeptunP === "cps3") {
          button1 = "INSERT COINT";
          button2 = "START";
          button3 = "A";
          button4 = "B";
          button5 = "C";
          button7 = "X";
          button6 = "Y";
          button8 = "Z"
      };
      if (NeptunP === "3do") {
          button1 = "X";
          button2 = "P";
          button3 = "A";
          button4 = "B";
          button5 = "C";
          button7 = "L";
          button8 = "R"
      };
      if (NeptunP === "dc") {
          button2 = "START";
          button3 = "X";
          button4 = "A";
          button5 = "B";
          button6 = "Y";
          button7 = "L";
          button8 = "R"
      };
      if (NeptunP === "psx" || NeptunP === "psp") {
          button1 = "SELECT";
          button2 = "START";
          button3 = "SQUARE";
          button4 = "CROSS";
          button5 = "CIRCLE";
          button6 = "TRIANGLE";
          button7 = "L";
          button8 = "R";
          button9 = "L2";
          button10 = "R2";
          button11 = "L3";
          button12 = "R3"
      };
      if (NeptunP === "segaGG" || NeptunP === "segaMS") {
          button2 = "START";
          button3 = "1";
          button4 = "2"
      };
      if (NeptunP === "tg16" || NeptunP === "tg16CD") {
          button1 = "SELECT";
          button2 = "RUN";
          button3 = "2";
          button4 = "1";
          button5 = "TURBO 2";
          button6 = "TURBO 1"
      };
      if (NeptunP === "atari_jaguar") {
          button1 = "OPTION";
          button2 = "START";
          button3 = "C";
          button4 = "B";
          button5 = "A";
          button6 = "2";
          button7 = "1";
          button8 = "3";
          button9 = "4";
          button10 = "5";
          Ranalog1 = "6";
          Ranalog2 = "7";
          Ranalog3 = "8";
          Ranalog4 = "9"
      };
      if (NeptunP === "atari7800") {
          button3 = "1";
          button4 = "2"
      };
      if (NeptunP === "n64") {
          button2 = "START";
          button3 = "B";
          button4 = "A";
          button7 = "L";
          button8 = "R";
          button9 = "Z";
          Ranalog1 = "C UP";
          Ranalog2 = "C DOWN";
          Ranalog3 = "C LEFT";
          Ranalog4 = "C RIGHT"
      };
      if (NeptunP === "ngp") {
          button2 = "OPTION";
          button3 = "A";
          button4 = "B"
      };
      if (NeptunP === "nes" || NeptunP === "fds" || NeptunP === "gboy" || NeptunP === "gba" || NeptunP === "lynx" || NeptunP === "wswan" || NeptunP === "vboy") {
          button1 = "SELECT";
          button2 = "START";
          button3 = "B";
          button4 = "A";
          button5 = "TURBO B";
          button6 = "TURBO A";
          button7 = "L";
          button8 = "R";
          if (NeptunP === "fds") {
              button7 = "Swich Disck side";
              button8 = "Load Disck"
          };
          if (NeptunP === "gba") {
              button7 = "L";
              button8 = "R"
          }
      };
      if (NeptunP === "snes" || NeptunP === "nds") {
          button1 = "SELECT";
          button2 = "START";
          button3 = "Y";
          button4 = "B";
          button5 = "A";
          button6 = "X";
          button7 = "L";
          button8 = "R";
          if (NeptunP === "nds") {
              button9 = "Swich screen"
          }
      };
      if (NeptunP === "msx") {
          button1 = "SELECT";
          button2 = "START";
          button3 = "X";
          button4 = "A";
          button5 = "B";
          button6 = "Y";
          button7 = "L1";
          button8 = "R1";
          button9 = "L2";
          button10 = "R2";
          button11 = "L3";
          button12 = "R3";
          Ranalog1 = "UP";
          Ranalog2 = "DOWN";
          Ranalog3 = "LEFT";
          Ranalog4 = "RIGHT"
      };
      if (NeptunP === "atari2600") {
          button2 = "START";
          button4 = "A"
      };
      Neptq("#" + NCSS + "labButtonStart").html(button2);
      Neptq("#" + NCSS + "labButtonSelect").html(button1);
      Neptq("#" + NCSS + "labButtonL1").html(button7);
      Neptq("#" + NCSS + "labButtonR1").html(button8);
      Neptq("#" + NCSS + "labButtonL2").html(button9);
      Neptq("#" + NCSS + "labButtonR2").html(button10);
      Neptq("#" + NCSS + "labButtonL3").html(button11);
      Neptq("#" + NCSS + "labButtonR3").html(button12);
      Neptq("#" + NCSS + "labButtonUP").html(dpad1);
      Neptq("#" + NCSS + "labButtonDown").html(dpad2);
      Neptq("#" + NCSS + "labButtonLeft").html(dpad3);
      Neptq("#" + NCSS + "labButtonRight").html(dpad4);
      Neptq("#" + NCSS + "labanUPL").html(Lanalog1);
      Neptq("#" + NCSS + "labanDownL").html(Lanalog2);
      Neptq("#" + NCSS + "labanLeftL").html(Lanalog3);
      Neptq("#" + NCSS + "labanRightL").html(Lanalog4);
      Neptq("#" + NCSS + "labanUPR").html(Ranalog1);
      Neptq("#" + NCSS + "labanDownR").html(Ranalog2);
      Neptq("#" + NCSS + "labanLeftR").html(Ranalog3);
      Neptq("#" + NCSS + "labanRightR").html(Ranalog4);
      Neptq("#" + NCSS + "labButton1").html(button3);
      Neptq("#" + NCSS + "labButton2").html(button4);
      Neptq("#" + NCSS + "labButton3").html(button5);
      Neptq("#" + NCSS + "labButton4").html(button6);
      Neptq("#" + NCSS + "labButton5").html(button7);
      Neptq("#" + NCSS + "labButton6").html(button8);
      Neptq("#" + NCSS + "labButton7").html(button9);
      Neptq("#" + NCSS + "labButton8").html(button10);
      Player = "";
      gamepad.bind(Gamepad.Event.CONNECTED, _0x13FD3);
      Neptq("." + NCSS + "tabs-title , #" + NCSS + "ConUI").click(_0x13FFF);
      Neptq("." + NCSS + "setmap").hover(_0x1402B);
      Neptq("." + NCSS + "setmap").mouseleave(_0x14057);
      Neptq("." + NCSS + "advance_settings").click(_0x14083);
      Neptq("#" + NCSS + "ConUI").click(_0x140DB);
      Neptq("#" + NCSS + "ClousCSUi").click(_0x14107);
      Neptq("." + NCSS + "ConReset").click(_0x14133);
      Neptq("#" + NCSS + "OP2").click(_0x1415F);
      Neptq("#" + NCSS + "OP3").click(_0x1418B);
      Neptq("#" + NCSS + "OP4").click(_0x141B7);
      _0x14267();
      Neptq("." + NCSS + "tabs-title a").click(_0x14293);
      _0x142EB();
      Neptq("." + NCSS + "setting-controllers input").keydown(_0x14317);
      Neptq("." + NCSS + "setting-controllers ." + NCSS + "submit").click(_0x14343);
      Neptq("." + NCSS + "overlay , ." + NCSS + "SwapNJSC ").mouseup(_0x1436F);
      Neptq("." + NCSS + "saveNJSC").click(_0x1439B);
      Neptq("." + NCSS + "saveGameNJSC").click(_0x143C7);
      Neptq("#" + NCSS + "DGpad1").click(_0x143F3);
      Neptq("#" + NCSS + "DGpad2").click(_0x1441F);
      Neptq("#" + NCSS + "DGpad3").click(_0x1444B);
      Neptq("#" + NCSS + "DGpad").click(_0x14477);
      gamepad.bind(Gamepad.Event.AXIS_CHANGED, _0x144A3);
      gamepad.bind(Gamepad.Event.BUTTON_DOWN, _0x144CF);
      RI = {
          temp: null,
          contexts: [],
          stateX: 0,
          stateY: 0,
          currentX: 0,
          currentY: 0,
          canvasEventHandler: (_0x144FB),
          eventHandler: (_0x14527)
      };
      test = {
          DiskSwapFinish: _0x14553,
          DiskSwap: _0x1457F
      };
      Neptq("." + NCSS + "setmap").click(_0x1462F)
  }
  return 8485
}()