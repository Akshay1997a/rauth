test("Callback", () => {
  function callback(data) {
    try {
      expect(data).toBe(true);
    } catch (error) {}
  }

  function fetchData(cb) {
    cb(!!true);
  }

  expect().toMatchSnapshot()
});
