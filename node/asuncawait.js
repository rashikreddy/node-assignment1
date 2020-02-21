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

authenticateUser = async (username, password) => {
    try {
        var verifyuser = await verifyUser(username, password);
        var getroles = await getRoles(verifyuser);
        var checkuseraccess = await checkUserAccess(getroles);
        if (checkuseraccess) {
            console.log('success');
        }
    } catch (error) {
        console.log(error)
    }
}

authenticateUser('rashik', 'reddy')