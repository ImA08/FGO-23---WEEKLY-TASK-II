export const dividedAndSort = (nums) => {
  return Number(
    nums
      .toString()
      .split("0")
      .map((num) => num.split("").sort().join(""))
      .join("")
  );
};

// console.log(dividedAndSort(153235104341031));
