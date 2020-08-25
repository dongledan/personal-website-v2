const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let d = new Date();

export const currConsoleDate = `${daysOfWeek[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}`;