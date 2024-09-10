'use client';

// import { useState, useEffect } from 'react';

// const SpeechToText = () => {
//     const [result, setResult] = useState<string>('');
//     const [isRecording, setIsRecording] = useState<boolean>(false);
//     const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

//     useEffect(() => {
//         const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//         if (SpeechRecognition) {
//             const rec = new SpeechRecognition();
//             rec.continuous = true;
//             rec.interimResults = true;
//             rec.lang = 'en-US';
//             rec.onresult = (event: SpeechRecognitionEvent) => {
//                 let transcript = '';
//                 for (let i = event.resultIndex; i < event.results.length; i++) {
//                     transcript += event.results[i][0].transcript;
//                 }
//                 setResult(transcript);
//                 if (transcript.toLowerCase().includes('stop recording')) {
//                     setResult(transcript.replace(/stop recording/gi, ''));
//                     stopRecording();
//                 }
//             };
//             rec.onerror = (event: SpeechRecognitionError) => {
//                 console.error('Speech recognition error:', event.error);
//             };
//             rec.onend = () => {
//                 setIsRecording(false);
//             };
//             setRecognition(rec);
//         } else {
//             console.error('Speech recognition not supported');
//         }
//     }, []);

//     const startRecording = () => {
//         if (recognition) {
//             recognition.start();
//             setIsRecording(true);
//         }
//     };

//     const stopRecording = () => {
//         if (recognition) {
//             recognition.stop();
//             setIsRecording(false);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
//             <h1 className="text-2xl mb-4">Real-time Speech to Text App</h1>
//             <div className="flex gap-4">
//                 <button
//                     onClick={startRecording}
//                     disabled={isRecording}
//                     className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
//                 >
//                     Start Recording
//                 </button>
//                 <button
//                     onClick={stopRecording}
//                     disabled={!isRecording}
//                     className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//                 >
//                     Stop Recording
//                 </button>
//             </div>
//             <div className="mt-4 p-4 bg-white text-black w-full max-w-lg rounded shadow-md">
//                 {result}
//             </div>
//         </div>
//     );
// };

// export default SpeechToText;


import axios from 'axios';
import { useState, useEffect } from 'react';

const SpeechToText = () => {
    const [result, setResult] = useState<string>('');
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
            const rec = new SpeechRecognition();
            rec.continuous = true;
            rec.interimResults = true;
            rec.lang = 'en-US';
            rec.onresult = (event: SpeechRecognitionEvent) => {
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
                setResult(transcript);
                if (transcript.toLowerCase().includes('stop recording')) {
                    setResult(transcript.replace(/stop recording/gi, ''));
                    stopRecording();
                }
            };
            rec.onerror = (event: SpeechRecognitionError) => {
                console.error('Speech recognition error:', event.error);
            };
            rec.onend = () => {
                setIsRecording(false);
            };
            setRecognition(rec);
        } else {
            console.error('Speech recognition not supported');
        }
    }, []);

    const startRecording = () => {
        if (recognition) {
            recognition.start();
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (recognition) {
            recognition.stop();
            setIsRecording(false);
            sendTextToBackend(result);
        }
    };

    const sendTextToBackend = async (text: string) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/speech/`, {
                text
            });
            console.log('Backend response:', response.data);
        } catch (error) {
            console.error('Error sending text to backend:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
            <h1 className="text-2xl mb-4">Real-time Speech to Text App</h1>
            <div className="flex gap-4">
                <button
                    onClick={startRecording}
                    disabled={isRecording}
                    className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                >
                    Start Recording
                </button>
                <button
                    onClick={stopRecording}
                    disabled={!isRecording}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Stop Recording
                </button>
            </div>
            <div className="mt-4 p-4 bg-white text-black w-full max-w-lg rounded shadow-md">
                {result}
            </div>
        </div>
    );
};

export default SpeechToText;
