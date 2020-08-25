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
    `Fun fact: This website's color scheme was made using this picture. ☝`,
    `My parents were deciding between Jackson and Danny. ^1000 Jackson Li, nice to meet you. <span role="img" aria-label="handshake"> 🤝</span> ^1000 Not bad... Has a nice ring to it, no?`,
    `Ask me about the time where I spent over 8 hours in the mountains during a Spartan race. ^1000 It was not pleasant.`
];

const endContent = [
    `Thank you for coming to my TED talk. ^1000 Stop by again, I'm here all day. <span role="img" aria-label="sweat-smile"> 😅</span> ^3000`,
];

const combinedContent = introContent.concat(shuffle(randomContent), endContent);
export const typewriterContentOptions = {
    strings: combinedContent,
    typeSpeed: 15,
    backDelay: 3000,
    loop: true,
    showCursor: false,
};
