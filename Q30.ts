var usernames =[`Eric`,`Smith`,`John`,`Admin`,`Iren`]
for(let n=0; n<usernames.length; n++){
    if(usernames[n]==`Admin`){
        console.log(`Hello admin, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${usernames[n]}, thank you for logging in again.`);
    }
}
