import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUserData() {
  let userToken;
  userToken = null;
  var resUserData = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/userinfo/index?currency=VND';
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
          return (resUserData = res.json());
        }
      })
      .then(resData => {})
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  return resUserData;
}

export async function getTransaction() {
  let userToken;
  userToken = null;
  var resUserTransaction = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/userinfo/getrecenttransaction';
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
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  return resUserTransaction;
}

export async function getTarget() {
  let userToken;
  userToken = null;
  var resUserTarget = [];
  try {
    userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
    const ApiUrl = 'http://localhost:8585/userinfo/historytarget';
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
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  return resUserTarget;
}

export async function getModal() {
  let userToken;
  userToken = null;
  var resModal;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/userinfo/gettypeall';
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
          return res.json();
        }
      })
      .then(resData => {
        return (resModal = resData);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
  return resModal;
}

export async function addIncome(id, currency, amount, description) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/income/addincome';
    await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      body: JSON.stringify({
        incomeid: id,
        currency: currency,
        amout: amount,
        description: description,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function addSpending(id, currency, amount, description) {
  let userToken;
  userToken = null;
  console.log(id, currency, amount, description);
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/spending/addspending';
    await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      body: JSON.stringify({
        spendingid: id,
        currency: currency,
        amout: amount,
        description: description,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function addTarget(name, currency, total, date_end, description) {
  let userToken;
  userToken = null;
  console.log(name, currency, total, date_end, description);
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/userinfo/addtarget';
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
    console.log(error);
  }
}

export async function addAmount(targetid, currency, amount, description) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/userinfo/addamounttarget';
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
    console.log(error);
  }
}

export async function updateUserName(username) {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('userToken');
    const ApiUrl = 'http://localhost:8585/userinfo/updateusername';
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
    console.log(error);
  }
}
