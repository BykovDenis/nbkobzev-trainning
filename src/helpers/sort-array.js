export const sortArray = (id, dataTable, sort, sortKey) => {
  let dataTableNew;
  let sortNew;
  if (sortKey === id) {
    if (sort === 'asc') {
      dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? -1 : 1));
      sortNew = 'desc';
    } else {
      dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? 1 : -1));
      sortNew = 'asc';
    }
  } else {
    dataTableNew = [].concat(dataTable).sort((a, b) => (a[id] > b[id] ? 1 : -1));
    sortNew = 'asc';
  }
  return { dataTableNew, sortNew };
};
