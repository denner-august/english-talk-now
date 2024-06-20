"use client";
import "regenerator-runtime/runtime";

import styles from "./inputText.module.scss";

import { useSpeechRecognition } from "react-speech-recognition";
import { useEffect, useState } from "react";

import { useMicrofone } from "@/tools/microfone";

export function InputText() {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [ouvindo, setOuvindo] = useState("não ouvindo");

  useEffect(() => {
    if (listening === true) {
      setOuvindo("ouvindo");
    }

    return () => setOuvindo("não ouvindo");
  }, [listening]);

  return (
    <div className={styles.div}>
      <button onClick={useMicrofone.start}>falar</button>
      <button onClick={useMicrofone.stop}>para de falar</button>
      <button onClick={() => useMicrofone.reset(resetTranscript)}>
        resetar
      </button>
      <p>{transcript}</p>
      <h1>{ouvindo}</h1>
    </div>
  );
}
