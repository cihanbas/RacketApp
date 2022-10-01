import { moderateScale } from 'react-native-size-matters';

function normalize(number: number, factor = 0.25) {
    return moderateScale(number, factor);
}
const appPading = normalize(24)
export { normalize,appPading };