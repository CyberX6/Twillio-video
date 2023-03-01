import React, { useEffect } from 'react';
// @ts-ignore
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const Transcript = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
