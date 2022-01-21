import AsyncStorage from '@react-native-async-storage/async-storage';

import envs from '../../config/env';

const API_URL = 'http://104.154.46.80:8080';
console.log(API_URL);

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
  console.log(result);
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
  var resUserData;
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
          return res.json();
        }
      })
      .then(resData => {
        resUserData = resData;
      })
      .catch(error => {
        console.log('userdata', error);
      });
  } catch (error) {
    console.log('userdata', error);
  }
  return resUserData;
}

export async function getTransaction() {
  let userToken;
  userToken = null;
  var resUserTransaction = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/info`, {
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
    await fetch(`${API_URL}/api/seeallusertarget`, {
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
  console.log('sda', resUserTarget);
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

export async function addIncome(description, amount, currency, id, date) {
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
        date: date,
      }),
    });
  } catch (error) {
    console.log('addincome', error);
  }
}

export async function addSpending(description, amount, currency, id, date) {
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
        date: date,
      }),
    });
  } catch (error) {
    console.log('addspending', error);
  }
}

export async function addTarget(
  description,
  start_date,
  end_date,
  amount,
  currency,
) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/addusertarget`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        description: description,
        start_date: start_date,
        end_date: end_date,
        amount: amount,
        currency: currency,
      }),
    });
  } catch (error) {
    console.log('addtarget', error);
  }
}

export async function addAmount(id_target, amount, currency, rate_currency) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/addusertransactiontotarget`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        id_target:
          '7e6047d69e1dd79d541a14fce2abd37fe74d9d383a3656b946138ea490adbb65',
        amount: '85000',
        currency: 'VND',
        rate_currency: '1',
      }),
    });
  } catch (error) {
    console.log('addamount', error);
  }
}

export async function resetPassword(username) {}

export async function updateUserName(ngaysinh, username) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/changeinfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        ngaysinh: ngaysinh,
        username: username,
      }),
    });
  } catch (error) {
    console.log('updateusername', error);
  }
}
export async function updatePassWord(password, newpassword) {
  let userToken;
  userToken = null;
  var resUpdatePassWord;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    await fetch(`${API_URL}/api/changepassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        password: password,
        newpassword: newpassword,
      }),
    })
      .then(res => {
        if (res.error != 'data and hash arguments required') {
          return res.json();
        }
      })
      .then(resData => {
        return (resUpdatePassWord = resData);
      })
      .catch(error => {
        console.log('updatepassword', error);
      });
  } catch (error) {
    console.log('update password', error);
  }
  console.log('c', resUpdatePassWord);
  return resUpdatePassWord;
}
