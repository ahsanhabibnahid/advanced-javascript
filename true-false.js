// falsy value => null, NaN, 0, '', "", false, undefined
// truthy value => ' ', " ", "0", true, [], {}

let age = 0;

if (age || age == 0) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}