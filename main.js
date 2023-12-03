import periodicTableData from "./periodicTable.json";

const container = document.getElementById("container");

const data = periodicTableData.elements
  .map((d) => {
    // removing hipotetical elements
    if (d.number < 119) {
      return {
        name: d.name,
        number: d.number,
        symbol: d.symbol,
        xpos: d.xpos,
        ypos: d.ypos,
      };
    }
    return {};
  })
  .filter((d) => d.symbol !== undefined);

data.map((item) => {
  const html = `
    <div class='cell' style='grid-column: ${item.xpos}; grid-row: ${item.ypos};' title='${item.name}'>
      <div class='symbol'>${item.symbol}</div>
      <div class='number'>${item.number}</div>
    </div>
  `;
  container.innerHTML += html;
});
