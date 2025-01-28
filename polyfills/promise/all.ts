export function all<T>(promises:Promise<T>[]) {
    const results = new Array(promises.length)
    let pendingPromises=promises.length;
    return new Promise((resolve, reject) => {
      promises.forEach((promise, key) => {
        promise
          .then((result) => {
              pendingPromises--;
            results[key] = result
            if (pendingPromises === 0) {
              return resolve(results);
            }
          })
          .catch((err) => {
            return reject(err);
          });
      });
    })
  }  