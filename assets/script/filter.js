function filterPort() {
  const portStart = document.getElementById('port-start');
  const portEnd = document.getElementById('port-end');

  const valueStart = portStart.value;
  const valueEnd = portEnd.value;

  const table = document.getElementById('schedule');

  const lineTable = table.querySelectorAll('tr');

  lineTable.forEach(line => {
    if (valueStart === "%" && valueEnd === "%") {
      console.log('exit');
      line.style.display = 'table-row';
      return;
    }

    let tdStart = line.querySelectorAll('td')[0];
    let tdEnd = line.querySelectorAll('td')[3];

    if (tdStart.dataset.port === valueStart) {
      // console.log(line);
      line.style.display = 'table-row';
    } else if (tdEnd.dataset.port === valueEnd) {
      line.style.display = 'table-row';

    } else {
      line.style.display = 'none';
    }

  })

  if (valueStart !== '%' && valueEnd !== '%') {
    lineTable.forEach(line => {
      let tdStart = line.querySelectorAll('td')[0];
      let tdEnd = line.querySelectorAll('td')[3];

      if (tdStart.dataset.port === valueStart && tdEnd.dataset.port === valueEnd) {
        line.style.display = 'table-row';
      } else {
        line.style.display = 'none';
      }
    });
  }

}