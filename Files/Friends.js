export const friends = [];

export function rememberFriend(){
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    friends.push([name, email]);
    console.log(friends);
}