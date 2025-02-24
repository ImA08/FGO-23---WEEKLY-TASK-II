export const getDataAdd = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";

    const addressRespon = await fetch(url);
    if (!addressRespon.ok) throw new Error(addressRespon.statusText);
    const addresData = await addressRespon.json();
    const addressesData = [];

    const results = Promise.all(
      addresData.map(async (personAddress) => {
        const { name, address } = personAddress;
        const result = { name };
        try {
          const { city } = address;

          addressesData.push(Object.assign(result, { city }));
        } catch (error) {
          if (error instanceof Error) return error.message;
        }
      })
    );

    const compare = (a, b) => {
      if (a.city < b.city) {
        return -1;
      }
      if (a.city > b.city) {
        return 1;
      }
      return 0;
    };
    addressesData.sort(compare);
    console.log(addressesData);
  } catch (e) {
    if (e instanceof Error) e.message;
  }
};

// getDataAdd();
