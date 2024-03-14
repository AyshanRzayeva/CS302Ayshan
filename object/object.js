const user = {
    firstName: 'Ayshan',
    lastName: 'Rzayeva',
age : 24,
address: {
    city: 'Baku',
    country: 'Azerbaijan',
    street: 'Xudu Memmedov',
    some: {
        l:'1',
        b:'2000',
    }
},
uni: 'ADNSU',
isAdmin: false,
salary: null,
position: undefined
}
console.log(user);
console.log(user.address.some.l);

console.log('1', user.age);
delete user.salary
user.street = 'X.Memmedov',
console.log(user.address.street);
user.position = 'Cyber',
user.uni = 'Code'
user.address.some.watch = '9p',
console.log(user);
 


