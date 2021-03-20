import {CryptoFunctions, CryptoFunctionsTestables} from '../crypto.js';
import Crypto from 'crypto';

test('Test hexStringtoUint8Array', () => {
  expect(CryptoFunctionsTestables.hexStringtoUint8Array("abcdef")).toEqual(new Uint8Array([171, 205, 239]));
});

test('Test normalStringtoUint8Array', () => {
  expect(CryptoFunctionsTestables.normalStringtoUint8Array("Test")).toEqual(new Uint8Array([0, 116, 0, 115, 0, 101, 0, 84]));
});

test('Test uint8ArraytoHexString with even length output', () => {
  expect(CryptoFunctionsTestables.uint8ArraytoHexString(new Uint8Array([171, 205, 239]))).toEqual("abcdef");
});

test('Test uint8ArraytoHexString with odd length output (leading zero on last byte should be dropped)', () => {
  expect(CryptoFunctionsTestables.uint8ArraytoHexString(new Uint8Array([171, 205, 239, 10]))).toEqual("abcdefa");
});

test('Test password hashing with hex salt', () => {
  let promise = CryptoFunctionsTestables.hashPassword("Password", "a9e5ca73a9bcba69a5487236", true);
  return promise.then( (result) => {
    expect(result.hash).toBe("0143652e0e0fcd87267fcaef4d9056517f13ff0ab12c54eaa3dee824433d9d28");
    expect(result.salt).toBe("a9e5ca73a9bcba69a5487236");
  });
});

test('Test password hashing with an invalid hex salt', () => {
  let promise = CryptoFunctionsTestables.hashPassword("Password", "Definitely not hex", true);
  
  return expect(promise).rejects.toThrow("Salt is not valid hex!");
});

test('Test password hashing with plaintext salt', () => {
  let promise = CryptoFunctionsTestables.hashPassword("Password", "Some salt", false);
  return promise.then( (result) => {
    expect(result.hash).toBe("2fc4af400d9e492e7fd7757aceecd49e6907548918a735709064f214bdf7ec47");
    expect(result.salt).toBe("0074006c0061007300200065006d006f0053");
  });
});

/*
 * This test requires rewire.js or babel-plugin-rewire, which is currently not
 * installed. So we are gonna leave this commented out for now as a reminder
 * to get that working.
*/
/*
test('Test password hashing with random salt', () => {
  console.log(CryptoFunctions.__Rewire__);
  CryptoFunctions.__Rewire__('generateIV', () => {return Uint8Array([ 145, 241, 38, 82, 29, 22, 213, 131,  6, 247, 106, 254 ])});
  let promise = CryptoFunctionsTestables.hashPassword("Password");
  return promise.then( (result) => {
    // Actually test here to make sure that the result is as we expect
    CryptoFunctions.__ResetDependency__('generateIV');
  });
});*/

/*
 * This test is thrown off by JSDOM. The AES library determines if it is in a
 * browser or in NodeJS by checking for the existance of window. JSDOM defines
 * window, but doesn't implement the WebCrypt API. Since all further tests in
 * this module depend on aesEncrypt working, this is going to be the end of
 * the tests here for now.
test('AES Encryption returns object with correct properties', () => {
  
  return CryptoFunctionsTestables.aesEncrypt("abcdef", "fedcba").then( (result) => {
    // Actually test here to make sure the result if as we expect
  });
  
  
});
*/
