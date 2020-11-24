export const sortArray = (id, dataTable, sort) => {
  let dataTableNew;
  if (sort === 'asc') {
    dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? -1 : 1));
  } else {
    dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? 1 : -1));
  }
  return dataTableNew;
};
