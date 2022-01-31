const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('test', (done) => {
  try {
    expect(uppercase('adson', fn)).toBe('ADSON');
    done();
  } catch (error) {
    done(error);
  }
});
