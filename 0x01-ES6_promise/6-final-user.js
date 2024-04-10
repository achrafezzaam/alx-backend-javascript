import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resA) => (
      resA.map((resB) => ({
        status: resB.status,
        value: resB.status === 'fulfilled' ? resB.value : String(resB.reason),
      }))
    ));
}
