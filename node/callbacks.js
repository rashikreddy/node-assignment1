function verifyUser(username, password, cb) {
    if (username === 'rashik' && password === 'reddy') {
        console.log('success');
        cb(username);
    }
}

function getRoles(username, cb) {
    if (username === 'rashik') {
        console.log('success');
        cb({
            "admin": 1,
            "HR": 0
        });
    }
}

function checkUserAccess(roles, cb) {
    if (roles.admin === 1) {
        console.log('success');
        cb('success');
    } else if (roles.HR === 1) {
        console.log('success');
        cb('success');
    }
}

function authenticateUser(username, password) {
    verifyUser(username, password, function (callback1) {
        getRoles(callback1, function (callback2) {
            checkUserAccess(callback2, function (callback3) {
                console.log(callback3)
            });
        });
    });
}

authenticateUser('rashik', 'reddy');