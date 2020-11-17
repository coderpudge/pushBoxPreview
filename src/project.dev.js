window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Box: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6a3ax3TQ1HBpDDd1DjMG3R", "Box");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tools_1 = require("./Tools");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Box = function(_super) {
      __extends(Box, _super);
      function Box() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.hp = null;
        _this.curHp = 1;
        _this.cellSpeed = 600;
        return _this;
      }
      Box.prototype.init = function(target, type) {
        this.target = target;
        this.type = type;
        Tools_1.Tools.loadSprite(this.icon, this.getIcon(type), cc.size(90, 90));
        this.curHp = 1;
        this.setHp();
      };
      Box.prototype.setCell = function(row, column) {
        this.row = row;
        this.column = column;
        var idx = this.target.getMapIdx(row, column);
        this.node.name = idx + "";
        this.type == BOX_TYPE.ROLE && (this.target.roleBoxIdx = idx);
      };
      Box.prototype.moveToCell = function(row, column) {
        var position = this.target.getMapPosition(row, column);
        var time = this.node.position.sub(position).mag() / this.cellSpeed;
        var action = cc.moveTo(.5, position);
        this.node.runAction(action);
        this.setCell(row, column);
      };
      Box.prototype.setHp = function() {
        if (this.curHp > 1) {
          this.hp.node.active = true;
          this.hp.string = "" + this.curHp;
        } else this.hp.node.active = false;
      };
      Box.prototype.getIcon = function(type) {
        var url = "";
        switch (type) {
         case BOX_TYPE.ROLE:
          url = "img/role";
          break;

         case BOX_TYPE.WOOD:
          url = "img/woodbox";
          break;

         case BOX_TYPE.STONE:
          url = "img/stoneHouse";
          break;

         case BOX_TYPE.PLANT:
          url = "img/plant";
        }
        return url;
      };
      Box.prototype.hide = function() {
        var _this = this;
        var shrink = cc.scaleTo(.2, .5);
        var enlarge = cc.scaleTo(.2, 1);
        var cb = cc.callFunc(function() {
          _this.node.destroy();
        });
        var seq = cc.sequence(shrink.clone(), enlarge.clone(), shrink.clone(), enlarge.clone(), cb);
        this.node.runAction(seq);
      };
      __decorate([ property(cc.Node) ], Box.prototype, "icon", void 0);
      __decorate([ property(cc.Label) ], Box.prototype, "hp", void 0);
      Box = __decorate([ ccclass ], Box);
      return Box;
    }(cc.Component);
    exports.default = Box;
    var BOX_TYPE;
    (function(BOX_TYPE) {
      BOX_TYPE[BOX_TYPE["ROLE"] = 1] = "ROLE";
      BOX_TYPE[BOX_TYPE["WOOD"] = 2] = "WOOD";
      BOX_TYPE[BOX_TYPE["STONE"] = 3] = "STONE";
      BOX_TYPE[BOX_TYPE["PLANT"] = 4] = "PLANT";
    })(BOX_TYPE = exports.BOX_TYPE || (exports.BOX_TYPE = {}));
    cc._RF.pop();
  }, {
    "./Tools": "Tools"
  } ],
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Box_1 = require("./Box");
    var Tools_1 = require("./Tools");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Helloworld = function(_super) {
      __extends(Helloworld, _super);
      function Helloworld() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.platform = null;
        _this.box = null;
        _this.text = "hello";
        _this.map = {};
        return _this;
      }
      Helloworld.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.init(5, 5);
      };
      Helloworld.prototype.start = function() {};
      Helloworld.prototype.onTouchStart = function(touch) {};
      Helloworld.prototype.onKeyDown = function(event) {
        console.log("Press a key", event.keyCode);
        this.onMove(event.keyCode);
      };
      Helloworld.prototype.init = function(row, column, sideLength) {
        void 0 === sideLength && (sideLength = 100);
        this.row = row;
        this.column = column;
        this.sideLength = sideLength;
        var rdmCount = Math.floor(row * column / 5);
        var createdList = [];
        for (var i = 0; i < rdmCount; i++) {
          var rdm = Tools_1.Tools.getRandom(1, this.row * this.column);
          var isCreated = -1 != createdList.indexOf(rdm);
          isCreated ? i-- : createdList.push(rdm);
        }
        for (var i = 0; i < createdList.length; i++) {
          var idx = createdList[i];
          0 == i ? this.createBox(idx, true) : this.createBox(idx);
        }
      };
      Helloworld.prototype.getMapIdx = function(row, column) {
        return (row - 1) * this.column + column;
      };
      Helloworld.prototype.getMapCell = function(idx) {
        var row = Math.ceil(idx / this.column);
        var column = idx % this.column;
        0 == column && (column = this.column);
        return new Cell(row, column);
      };
      Helloworld.prototype.getBox = function(idx) {
        return this.platform.getChildByName("" + idx);
      };
      Helloworld.prototype.getMapPosition = function(row, column) {
        var x = (column - 1) * this.sideLength + .5 * this.sideLength;
        var y = (row - 1) * this.sideLength + .5 * this.sideLength;
        var anchor = this.platform.getAnchorPoint();
        var width = this.column * this.sideLength;
        var height = this.row * this.sideLength;
        return cc.v2(-anchor.x * width + x, anchor.y * height - y);
      };
      Helloworld.prototype.createBox = function(idx, isRole) {
        void 0 === isRole && (isRole = false);
        idx > this.row * this.column && cc.log("exceed the maximum limit ");
        var node = cc.instantiate(this.box);
        node.parent = this.platform;
        var cell = this.getMapCell(idx);
        cc.log("idx:", idx, cell.row, cell.column);
        var position = this.getMapPosition(cell.row, cell.column);
        node.position = position;
        var cmpt = node.getComponent(Box_1.default);
        var type = Box_1.BOX_TYPE.WOOD;
        if (isRole) {
          type = Box_1.BOX_TYPE.ROLE;
          this.roleBoxIdx = idx;
        }
        cmpt.init(this, type);
        cmpt.setCell(cell.row, cell.column);
      };
      Helloworld.prototype.onMove = function(keyCode) {
        var _this = this;
        if (this.isMoving) return;
        this.isMoving = true;
        var roleCell = this.getMapCell(this.roleBoxIdx);
        var diff;
        var moveCellList = [];
        var count = 1;
        var towardCount = 0;
        var canMoved = false;
        switch (keyCode) {
         case cc.macro.KEY.a:
          for (var i = 1; i <= this.column; i++) if (i <= roleCell.column) {
            var idx = this.getMapIdx(roleCell.row, i);
            var node = this.getBox(idx);
            if (node) {
              if (i > count) {
                var cmpt = node.getComponent(Box_1.default);
                cmpt.moveToCell(roleCell.row, count);
              }
              count++;
              towardCount++;
            }
          }
          canMoved = towardCount != roleCell.column;
          break;

         case cc.macro.KEY.d:
          count = this.column;
          for (var i = this.column; i >= roleCell.column; i--) if (i >= roleCell.column) {
            var idx = this.getMapIdx(roleCell.row, i);
            var node = this.getBox(idx);
            if (node) {
              if (i < count) {
                var cmpt = node.getComponent(Box_1.default);
                cmpt.moveToCell(roleCell.row, count);
              }
              count--;
              towardCount++;
            }
          }
          canMoved = towardCount != this.column - roleCell.column + 1;
          break;

         case cc.macro.KEY.s:
          count = this.row;
          for (var i = this.row; i >= roleCell.row; i--) if (i >= roleCell.row) {
            var idx = this.getMapIdx(i, roleCell.column);
            var node = this.getBox(idx);
            if (node) {
              if (i < count) {
                var cmpt = node.getComponent(Box_1.default);
                cmpt.moveToCell(count, roleCell.column);
              }
              count--;
              towardCount++;
            }
          }
          canMoved = towardCount != this.row - roleCell.row + 1;
          break;

         case cc.macro.KEY.w:
          for (var i = 1; i <= this.row; i++) if (i <= roleCell.row) {
            var idx = this.getMapIdx(i, roleCell.column);
            var node = this.getBox(idx);
            if (node) {
              if (i > count) {
                var cmpt = node.getComponent(Box_1.default);
                cmpt.moveToCell(count, roleCell.column);
              }
              count++;
              towardCount++;
            }
          }
          canMoved = towardCount != roleCell.row;
        }
        if (!canMoved) {
          this.isMoving = false;
          return;
        }
        var moveTime = 1;
        this.scheduleOnce(function() {
          _this.isMoving = false;
          _this.checkClear(function() {
            var isDie = _this.checkDie();
            if (isDie) {
              cc.log("game over");
              return;
            }
            if (_this.platform.childrenCount == _this.row * _this.column) {
              cc.log("game over");
              return;
            }
            var list = [];
            for (var i = 1; i <= _this.row * _this.column; i++) {
              var node = _this.getBox(i);
              node || list.push(i);
            }
            var idx = Tools_1.Tools.getRandom(0, list.length - 1);
            var rdm = list[idx];
            _this.createBox(rdm);
            _this.checkDie();
            _this.checkClear();
          });
        }, moveTime);
      };
      Helloworld.prototype.checkClear = function(cb) {
        var _this = this;
        this.isMoving = true;
        var clearTime = 1;
        var cell = this.getMapCell(this.roleBoxIdx);
        var rowList = [];
        var columnList = [];
        var isClear;
        for (var i = 1; i <= this.row; i++) {
          var list = [];
          for (var j = 1; j <= this.column; j++) {
            var idx = this.getMapIdx(i, j);
            if (idx != this.roleBoxIdx) {
              var node = this.getBox(idx);
              if (!node) {
                list.length = 0;
                break;
              }
              list.push(node);
            }
          }
          list.length == this.column && rowList.push(list);
        }
        for (var i = 1; i <= this.column; i++) {
          var list = [];
          for (var j = 1; j <= this.row; j++) {
            var idx = this.getMapIdx(j, i);
            if (idx != this.roleBoxIdx) {
              var node = this.getBox(idx);
              if (!node) {
                list.length = 0;
                break;
              }
              list.push(node);
            }
          }
          list.length == this.row && columnList.push(list);
        }
        if (rowList.length > 0) {
          for (var i = 0; i < rowList.length; i++) {
            var list = rowList[i];
            for (var j = 0; j < list.length; j++) {
              var node = list[j];
              var cmpt = node.getComponent(Box_1.default);
              cmpt.hide();
            }
          }
          isClear = true;
        }
        if (columnList.length > 0) {
          for (var i = 0; i < columnList.length; i++) {
            var list = columnList[i];
            for (var j = 0; j < list.length; j++) {
              var node = list[j];
              var cmpt = node.getComponent(Box_1.default);
              cmpt.hide();
            }
          }
          isClear = true;
        }
        if (isClear) this.scheduleOnce(function() {
          cb && cb();
          _this.isMoving = false;
        }, clearTime); else {
          cb && cb();
          this.isMoving = false;
        }
      };
      Helloworld.prototype.checkDie = function() {
        if (this.platform.childrenCount == this.row * this.column) return true;
        var cell = this.getMapCell(this.roleBoxIdx);
        var hasWay;
        if (cell.row - 1 > 0) {
          var idx = this.getMapIdx(cell.row - 1, cell.column);
          this.getBox(idx) || (hasWay = true);
        }
        if (cell.row + 1 <= this.row) {
          var idx = this.getMapIdx(cell.row + 1, cell.column);
          this.getBox(idx) || (hasWay = true);
        }
        if (cell.column - 1 > 0) {
          var idx = this.getMapIdx(cell.row, cell.column - 1);
          this.getBox(idx) || (hasWay = true);
        }
        if (cell.column + 1 <= this.column) {
          var idx = this.getMapIdx(cell.row, cell.column + 1);
          this.getBox(idx) || (hasWay = true);
        }
        return !hasWay;
      };
      __decorate([ property(cc.Label) ], Helloworld.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], Helloworld.prototype, "platform", void 0);
      __decorate([ property(cc.Node) ], Helloworld.prototype, "box", void 0);
      __decorate([ property ], Helloworld.prototype, "text", void 0);
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    }(cc.Component);
    exports.default = Helloworld;
    var Cell = function(_super) {
      __extends(Cell, _super);
      function Cell(row, column) {
        var _this = _super.call(this) || this;
        _this.row = row;
        _this.column = column;
        return _this;
      }
      return Cell;
    }(cc.ValueType);
    cc._RF.pop();
  }, {
    "./Box": "Box",
    "./Tools": "Tools"
  } ],
  Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83f10WgeY5L86hX7/bdh7Ao", "Tools");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ToolsClass = function() {
      function ToolsClass() {}
      ToolsClass.prototype.loadSprite = function(imgNode, url, resize) {
        var sprite = imgNode.getComponent(cc.Sprite);
        sprite || (sprite = imgNode.addComponent(cc.Sprite));
        cc.loader.loadRes(url, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) cc.error("cannot find img, check url:", url); else {
            sprite.spriteFrame = spriteFrame;
            if (resize) {
              imgNode.width = resize.width;
              imgNode.height = resize.height;
            }
          }
        });
      };
      ToolsClass.prototype.getRandom = function(n, m) {
        return Math.floor(Math.random() * (m - n) + n);
      };
      ToolsClass.Instance = new ToolsClass();
      return ToolsClass;
    }();
    exports.Tools = ToolsClass.Instance;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Box", "Helloworld", "Tools" ]);