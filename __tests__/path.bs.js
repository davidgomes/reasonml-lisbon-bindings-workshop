// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Path = require("path");

Jest.test("basename()", (function () {
        return Jest.ExpectJs[/* toEqual */12]("quux.html", Jest.ExpectJs[/* expect */0](Path.basename("/foo/bar/baz/asdf/quux.html", undefined)));
      }));

Jest.test("basename() with extension", (function () {
        return Jest.ExpectJs[/* toEqual */12]("quux", Jest.ExpectJs[/* expect */0](Path.basename("/foo/bar/baz/asdf/quux.html", ".html")));
      }));

Jest.test("delimiter", (function () {
        return Jest.ExpectJs[/* toEqual */12](":", Jest.ExpectJs[/* expect */0](Path.delimiter));
      }));

Jest.test("dirname()", (function () {
        return Jest.ExpectJs[/* toEqual */12]("/", Jest.ExpectJs[/* expect */0](Path.dirname("/Users")));
      }));

Jest.test("extname()", (function () {
        return Jest.ExpectJs[/* toEqual */12](".html", Jest.ExpectJs[/* expect */0](Path.extname("file.html")));
      }));

Jest.test("format() ", (function () {
        return Jest.ExpectJs[/* toEqual */12]("/home/user/dir/file.txt", Jest.ExpectJs[/* expect */0](Path.format({
                            dir: "/home/user/dir",
                            root: "/ignored",
                            base: "file.txt"
                          })));
      }));

Jest.test("format() 2 ", (function () {
        return Jest.ExpectJs[/* toEqual */12]("/file.txt", Jest.ExpectJs[/* expect */0](Path.format({
                            root: "/",
                            base: "file.txt",
                            ext: "ignored"
                          })));
      }));

Jest.test("isAbsolute()", (function () {
        return Jest.ExpectJs[/* toEqual */12](/* true */1, Jest.ExpectJs[/* expect */0](+Path.isAbsolute("/foo/bar")));
      }));

Jest.test("join()", (function () {
        return Jest.ExpectJs[/* toEqual */12]("Users/davidgomes", Jest.ExpectJs[/* expect */0](Path.join("Users", "davidgomes")));
      }));

Jest.test("normalize()", (function () {
        return Jest.ExpectJs[/* toEqual */12]("/foo/bar/baz/asdf", Jest.ExpectJs[/* expect */0](Path.normalize("/foo/bar//baz/asdf/quux/..")));
      }));

Jest.test("parse()", (function () {
        return Jest.ExpectJs[/* toEqual */12]({
                    root: "/",
                    dir: "/home/user/dir",
                    base: "file.txt",
                    ext: ".txt",
                    name: "file"
                  }, Jest.ExpectJs[/* expect */0](Path.parse("/home/user/dir/file.txt")));
      }));

Jest.test("relative()", (function () {
        return Jest.ExpectJs[/* toEqual */12]("../../impl/bbb", Jest.ExpectJs[/* expect */0](Path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb")));
      }));

Jest.test("resolve()", (function () {
        return Jest.ExpectJs[/* toEqual */12]("/tmp/file", Jest.ExpectJs[/* expect */0](Path.resolve("/foo/bar", "/tmp/file")));
      }));

Jest.test("sep", (function () {
        return Jest.ExpectJs[/* toEqual */12]("/", Jest.ExpectJs[/* expect */0](Path.sep));
      }));

/*  Not a pure module */
