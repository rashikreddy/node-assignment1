verifyUser = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'rashik' && password === 'reddy') {
                console.log('success');
                resolve('rashik');
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}

getRoles = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'rashik') {
                console.log('success');
                resolve({
                    "admin": 1,
                    "HR": 0
                });
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}

checkUserAccess = (roles) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roles.admin === 1) {
                console.log('success');
                resolve('success');
            } else if (roles.HR === 1) {
                console.log('success');
                resolve('success');
            } else {
                console.log('failure');
                reject('failure');
            }
        });
    });
}


authenticateUser = (username, password) => {
    verifyUser(username, password).then(getRoles).then(checkUserAccess).then(() => {
        console.log('executed sequentially')
    }).catch(() => {
        console.log('failure')
    });
}

authenticateUser('rashik', 'reddy');
