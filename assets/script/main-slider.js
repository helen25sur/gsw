window.addEventListener("load", function (event) {
  const overlay = this.document.querySelector('.overlay');
  const url = 'images/main-slider/';
  const arrImage = [];

  // const openRequest = indexedDB.open('imagesBase', 1);

  // openRequest.onupgradeneeded = function () {
  //   console.log('выполнить инициализацию');
  // };

  // openRequest.onerror = function () {
  //   console.error("Error", openRequest.error);
  // };

  // openRequest.onsuccess = function () {
  //   let db = openRequest.result;
  //   console.log(db);

  //   if (!db.objectStoreNames.contains('images')) {
  //     db.createObjectStore('images', { keyPath: 'id' }); // создаем хранилище
  //   }

  //   db.onversionchange = function () {
  //     db.close();
  //     alert("База данных устарела, пожалуста, перезагрузите страницу.")
  //   };



  //   db.transaction('images', 'readwrite');

  //   const images = transaction.objectStore('images');

  //   let image = {
  //     id: 'img',
  //     src: `${url}01.jpg`,
  //     created: new Date()
  //   };

  //   const request = images.add(image);

  //   request.onsuccess = function () { // (4)
  //     console.log("Image добавлена в хранилище", request.result);
  //   };

  //   request.onerror = function () {
  //     console.log("Ошибка", request.error);
  //   };
  // };



});