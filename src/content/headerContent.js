function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(arr) {
    for (let currIdx = 0; currIdx < arr.length; currIdx++) {
        const randomIdx = getRandom(currIdx, arr.length - 1);

        if (randomIdx !== currIdx) {
            const currVal = arr[currIdx];
            arr[currIdx] = arr[randomIdx];
            arr[randomIdx] = currVal;
        }
    }
    return arr;
}

const introContent = [
    `I'm a software engineer based in Queens, New York. ^500 Home to New York's best food.`,
    `My passion is to deliver fast and seamless user experiences.`,
];

let randomContent = [
    `Fun fact: This website's color scheme was made using the picture above ☝.`,
    `My parents were deciding between Jackson and Danny. ^1000 Jackson Li, nice to meet you <span role="img" aria-label="handshake"> 🤝</span>. ^1000 Not bad... Has a nice ring to it, no?`,
    `Ask me about the time where I spent over 8 hours in the mountains during a Spartan race. ^1000 2/10 would not recommend.`,
    `My guilty pleasure is watching 90 Day Fiancé.`,
    `Ask me about anything fitness related <span role="img" aria-label="muscle">💪</span>. ^1000 I workout so I can eat shamelessly.`,
    `If I could have any superpower, it would be to stop time. ^1000 I always think about this when I wake up in the morning as I hit snooze 30 times.`,
    `I played the tuba in middle school. ^1000 I had to sit on a phonebook to play it <span role="img" aria-label="sweat-smile">😅</span>.`,
    `I mostly listen to indie/alternative, hip hop, and Spotify's algorithm. ^1000 My favorite band is Cage The Elephant.`,
    `I am currently reading <i>The Design of Everyday Things</i>, <i>Pragmatic Thinking and Learning</i>, and Haruki Murakami.`,
];

const endContent = [
    `Thank you for coming to my TED talk. ^1000 Stop by again, I'm here all day <span role="img" aria-label="grimacing">😬</span>. ^3000`,
];

const combinedContent = introContent.concat(shuffle(randomContent), endContent);
export const typewriterContentOptions = {
    strings: combinedContent,
    typeSpeed: 15,
    backDelay: 3000,
    loop: true,
    showCursor: false,
};
