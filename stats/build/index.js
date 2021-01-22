"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
//  Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CSVFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReports_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
