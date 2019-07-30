import * as _ from 'lodash';

/**
* A Function which camel-case(s) an object's keys
* @param {object} v The object to change and return
* @example
* let myObj: object = {"foo-bar": "baz"};
* myObj = camelCaseKeys(myObj); => {"fooBar": "baz"}
*/
export function camelCaseKeys (v: object) : object {
  return _.mapKeys(v, (val: any, key: any) => {
    return _.camelCase(key);
  });
}
