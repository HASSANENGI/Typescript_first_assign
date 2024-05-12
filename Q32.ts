let current_user=[`Mike`,`Dale`,`Walker`,`George`,`Bob`]
let new_users=[`Bill`,`Alan`,`Bob`,`Stephen`,`Dale`]
for(let i=0; i<new_users.length; i++) {
    if(current_user.includes(new_users[i])) {
        console.log(`${new_users[i]} is already in use, Enter a new user name`);
    }
    else {
        console.log(`${new_users[i]} is avaliable`)
    }
    }

