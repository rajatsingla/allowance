const { program, Option } = require("commander");
const constants = require("./constants");
const handlebars = require("express-handlebars");
const utils = require("./utils");

// options start
program
  .option("-my, --mmyyyy <monthyear>", "Month Year")
  .addOption(
    new Option("-t, --type <type>", "Type of bill")
      .choices(["food", "book", "internet", "mobile"])
      .default("food")
  );

program.parse(process.argv);
const options = program.opts();

if (!options.mmyyyy) {
  console.log("Provide mmyyyy");
  return;
}
// Options end

const compileTemplate = async (path, context) => {
  let viewEngine = handlebars.create({ 
    defaultLayout: false, 
    helpers: {
      add: function (...args) { return parseFloat([...args].reduce((a, b) => a + b, 0)).toFixed(2); }
  }
  });
  let html = await viewEngine.renderView(path, context);
  return html;
};

const data = constants[options.type];

const print = async () => {
  data.context.order.date = utils.getDate(options.mmyyyy);
  data.context.order.shortDate = utils.getShortDate(data.context.order.date);
  data.context.order.monthStartDate = utils.monthStartDate(data.context.order.date);
  data.context.order.monthEndDate = utils.monthEndDate(data.context.order.date);
  data.context.order = utils.calculatePrice(data.context.order);
  const html = await compileTemplate(data.path, data.context);
  console.log(html);
};

print();
