{
  const nums1 = new Set([1, 2, 3, 4]);
  const nums2 = new Set([5, 3, 6, 4]);

  const getSetIntersection = (set1, set2) => {
    const result = new Set();

    set1.forEach((value) => {
      if (set2.has(value)) {
        result.add(value);
      }
    });

    return result;
  };

  console.log(getSetIntersection(nums1, nums2));
}

{
  const nums1 = new Set([1, 2, 3, 4]);
  const nums2 = new Set([5, 3, 6, 4]);

  const unionSet = (...sets) => {
    const result = new Set();

    sets.forEach((set) => {
      set.forEach((value) => {
        result.add(value);
      });
    });

    return result;
  };

  console.log(unionSet(nums1, nums2));
}
