import { useEffect, useState } from "react";

function GlitchText({Word}) {

    const [glitch, setGlitch] = useState("");
    const [wordLength, setwordLength] = useState(0);
    const [glitchLength, setGlitchLength] = useState(1);

    useEffect(() => {
        const glitchInterval = setInterval(generateRandomText, 10);
        const addLetterInterval = setInterval(addLetter, 300);

        return () => {
            clearInterval(glitchInterval);
            clearInterval(addLetterInterval);
        };
    }, []);

    useEffect(() => {

        if (Word.slice(0, wordLength) === Word) {
            setGlitchLength(0)
        }
    }, [Word, wordLength])

    const generateRandomText = () => {
        const randomText = Array.from({ length: 1 }, () =>
            String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        ).join("");

        setGlitch(randomText);
    };

    const addLetter = () => {
        if (Word.length > wordLength) {
            setwordLength(length => length + 1);
        }         
    }

    return <p>{Word.slice(0, wordLength) + glitch.slice(0, glitchLength)}</p>

}

export default GlitchText