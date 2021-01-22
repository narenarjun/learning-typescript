import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReports';

//  Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
