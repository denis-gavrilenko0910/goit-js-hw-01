const getElementWidth = (content, padding, border) => {
  let contentRes = Number.parseFloat(content);
  let paddingRes = Number.parseFloat(padding);
  let borderRes = Number.parseFloat(border);
  let totalWidth = contentRes + paddingRes * 2 + borderRes * 2;
  return totalWidth;
};

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200
