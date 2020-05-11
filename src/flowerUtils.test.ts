import { getCondensedGenome, getAlphaGenome } from './flowerUtils';
import { Species } from './types';

test('getCondensedGenome', () => {
  const testCases =
  [
   ['00_01_11', '012'],
   ['01_01_01', '111'],
   ['00_00_00', '000'],
  ];
  testCases.forEach((testCase) => expect(getCondensedGenome(testCase[0])).toBe(testCase[1]));
  
});

test('getAlphaGenome', () => {
  const testCases =
  [
   ['cosmos','11_00_00', 'RR-yy-ss'],
   ['cosmos', '00_11_01', 'rr-YY-Ss'],
   ['windflower', '00_11_00', 'rr-OO-WW'],
   ['rose', '11_00_00_01', 'RR-yy-WW-Ss']
  ];
  testCases.forEach((testCase) => expect(getAlphaGenome(testCase[0] as Species, testCase[1])).toBe(testCase[2]));
  
});