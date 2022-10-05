import { Linking, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const isIOS = Platform.OS === 'ios'
function normalize(number: number, factor = 0.25) {
    return moderateScale(number, factor);
}
const appPading = normalize(24)

const link ='itms-apps://apps.apple.com/tr/app/times-tables-lets-learn/id1055437768?l=tr';

 
export const rateApp = () => {
    if (isIOS) {
        Linking.canOpenURL(link).then(supported => { 
            supported && Linking.openURL(link);
          }, (err) => alert('Something went wrong'));
    }
    else {
        Linking.openURL("https://play.google.com/store/apps/details?id=com.racketpal")

    }

}
export { normalize, appPading };