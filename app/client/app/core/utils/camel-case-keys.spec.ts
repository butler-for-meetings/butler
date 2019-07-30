/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { camelCaseKeys } from './camel-case-keys';

describe("CamelCase functionality", () => {
  it("Should camelCase the keys of the object", () => {
    expect(camelCaseKeys({"foo-bar": "baz"})).toBe({"fooBar": "baz"});
  });
});
