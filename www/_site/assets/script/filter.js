function filter() {
  const portStart = document.getElementById('port-start');
  const portEnd = document.getElementById('port-end');

  const valueStart = portStart.value;
  const valueEnd = portEnd.value;

  console.log(valueStart, valueEnd);


  const table = document.getElementById('schedule');

  const lineTable = table.querySelectorAll('tr');

  lineTable.forEach(line => {
    const elems = line.querySelectorAll('td');

    if (valueStart === "%" && valueEnd === "%") {
      console.log('exit');
      line.style.display = 'table-row';
      return;
    }


    if (line.querySelectorAll('td')[0].dataset.port === valueStart) {
      console.log(line);
      line.style.display = 'table-row';

      if (line.querySelectorAll('td')[3].dataset.port === valueEnd) {
        line.style.display = 'table-row';
      } else {
        line.style.display = 'none';
      }

    } else {
      line.style.display = 'none';
    }

  })

}

