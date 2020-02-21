verifyUser = (username, password) => {
    try {
        if (username === 'rashik' && password === 'reddy') {
            console.log('success');
            return username;
        } else {
            console.log('failure');
            throw new Error('Username or Password not matched');
        }
    } catch (error) {
        console.log(error);
    }
}


getRoles = (username) => {
    try {
        if (username === 'rashik') {
            console.log('success');
            return ({
                "admin": 1,
                "HR": 0
            });
        } else {
            console.log('failure');
            throw new Error('Failure at roles');
        }
    } catch (error) {
        console.log(error);
    }
}

checkUserAccess = (roles) => {
    try {
        if (roles.admin === 1) {
            console.log('success');
            return 'success';
        } else if (roles.HR === 1) {
            console.log('success');
            return 'success';
        } else {
            console.log('failure');
            throw new Error('failed at check users');
        }
    } catch (error) {
        console.log(error);
    }
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