function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);

    if (!objectInCache) {
      let result = func(...args);
      cache.push({hash, value: result});

      if (cache.length > 5) { 
        cache.shift();
      }

      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }

    console.log("Из кэша: " + objectInCache.value);
    return "Из кэша: " + objectInCache.value;  
}
return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let isTrottled = false;

  return function(...args) {
    if(!isTrottled) {
      const result = func(...args);
      isTrottled = true;
  
      setTimeout(() => isTrottled = false, delay);
      return result;
    }
  }
}

function debounceDecorator2(func, delay) {
  let isTrottled = false;

  function wrapper(...args) {
    wrapper.count.push(args);

    if(!isTrottled) {
      const result = func(...args);
      isTrottled = true;

      setTimeout(() => isTrottled = false, delay);
      return result;
    }
  }
  wrapper.count = [];

  return wrapper;
}

// запустить в консоли
// console.log(upgradedSendSignalToo.count.length);