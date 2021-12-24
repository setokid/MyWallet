import AsyncStorage from '@react-native-async-storage/async-storage';

import envs from '../../config/env';

const {API_URL} = envs;

export async function logIn(email, password) {
  var result = [];
  try {
    await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        return (result = resData);
      })
      .catch(error => {
        console.log('login', error);
      });
  } catch (error) {}
  return result;
}

export async function signUp(email, password) {
  var result = [];
  console.log(`${API_URL}/register/`);
  try {
    await fetch(`${API_URL}/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        return (result = resData);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {}
  console.log(result);
  return result;
}

export async function getUserData() {
  let userToken;
  userToken = null;
  var resUserData = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then(res => {
        if (!res.ok) {
          throw res.status;
        } else {
          return (resUserData = res.json());
        }
      })
      .then(resData => {})
      .catch(error => {
        console.log('userdata', error);
      });
  } catch (error) {
    console.log('userdata', error);
  }
  console.log(resUserData);
  return resUserData;
}

export async function getTransaction() {
  let userToken;
  userToken = null;
  var resUserTransaction = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://35.193.29.249/userinfo/getrecenttransaction';
    await fetch(ApiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
    })
      .then(res => {
        if (!res.ok) {
          throw res.status;
        } else {
          return (resUserTransaction = res.json());
        }
      })
      .then(resData => {})
      .catch(error => {
        console.log('Tran', error);
      });
  } catch (error) {
    console.log('Tran', error);
  }
  return resUserTransaction;
}

export async function getTarget() {
  let userToken;
  userToken = null;
  var resUserTarget = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://35.193.29.249/userinfo/historytarget';
    await fetch(ApiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
    })
      .then(res => {
        if (!res.ok) {
          throw res.status;
        } else {
          return (resUserTarget = res.json());
        }
      })
      .then(resData => {})
      .catch(error => {
        console.log('Target', error);
      });
  } catch (error) {
    console.log('Target', error);
  }
  return resUserTarget;
}

// export async function getModal() {
//   let userToken;
//   userToken = null;
//   var resModal;
//   try {
//     userToken = await AsyncStorage.getItem('userToken');
//     const ApiUrl = 'http://35.193.29.249/userinfo/gettypeall';
//     await fetch(ApiUrl, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: userToken,
//       },
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw res.status;
//         } else {
//           return res.json();
//         }
//       })
//       .then(resData => {
//         return (resModal = resData);
//       })
//       .catch(error => {
//         console.log('Modal', error);
//       });
//   } catch (error) {
//     console.log('Modal', error);
//   }
//   return resModal;
// }

export async function addIncome(description, amount, currency, id) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/adduserincome`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        description: description,
        amount: amount,
        currency: currency,
        id_income: id,
      }),
    });
  } catch (error) {
    console.log('addincome', error);
  }
}

export async function addSpending(description, amount, currency, id) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/adduserspending`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        description: description,
        amount: amount,
        currency: currency,
        id_spending: id,
      }),
    });
  } catch (error) {
    console.log('addspending', error);
  }
}

export async function addTarget(name, currency, total, date_end, description) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://35.193.29.249/userinfo/addtarget';
    await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      body: JSON.stringify({
        name: name,
        currency: currency,
        total: total,
        date_end: date_end,
        description: description,
      }),
    });
  } catch (error) {
    console.log('addtarget', error);
  }
}

export async function addAmount(targetid, currency, amount, description) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://35.193.29.249/userinfo/addamounttarget';
    await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      body: JSON.stringify({
        targetid: targetid,
        currency: currency,
        amount: amount,
        description: description,
      }),
    });
  } catch (error) {
    console.log('addamount', error);
  }
}

export async function resetPassword(username) {}

export async function updateUserName(username) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://35.193.29.249/userinfo/updateusername';
    await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      body: JSON.stringify({
        username: username,
      }),
    });
  } catch (error) {
    console.log('updateusername', error);
  }
}
