const arg = require('arg');
const tools = require('../index');

function testJSONMethods(args) {
    const argsOpts = {
      '--json': String,
      '--json-obj1': String,
      '--json-obj2': String
    };
  
    const options = arg(argsOpts, { argv: args });
  
    if (options['--json']) {
      const json = options['--json'];
      console.log('Parsed JSON:', tools.json.parseJSON(json));
      console.log('Stringified JSON:', tools.json.stringifyJSON(parseJSON(json)));
    }
  
    if (options['--json-obj1'] && options['--json-obj2']) {
      const obj1 = tools.json.parseJSON(options['--json-obj1']);
      const obj2 = tools.json.parseJSON(options['--json-obj2']);
      console.log('Merged JSON:', tools.json.mergeJSON(obj1, obj2));
      console.log('Deep copied JSON:', tools.json.deepCopyJSON(obj1));
      console.log('Formatted JSON:', tools.json.formatJSON(obj1));
    }
  }
  
  // Test JSON methods with command line arguments
  testJSONMethods(process.argv.slice(2));