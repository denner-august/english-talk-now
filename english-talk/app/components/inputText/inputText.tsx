"use client";
import "regenerator-runtime/runtime";

import styles from "./inputText.module.scss";

import { useSpeechRecognition } from "react-speech-recognition";
import { useEffect, useState } from "react";

import { useMicrofone } from "@/tools/microfone";

export function InputText() {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [ouvindo, setOuvindo] = useState("não ouvindo");
  const [fraseAtual, setFraseAtual] = useState("frase");

  function newFrase() {
    setFraseAtual(useMicrofone.frase());
  }

  useEffect(() => {
    newFrase();
  }, []);

  useEffect(() => {
    if (listening === true) {
      setOuvindo("ouvindo");
    }

    return () => setOuvindo("não ouvindo");
  }, [listening]);

  useEffect(() => {
    async function compare() {
      const removePontuação = /[^\w\s]/g;

      const frase1 = fraseAtual.trim().toLowerCase();
      const fraseRemovidaTeste = transcript.replace(removePontuação, "");
      const frase2 = fraseRemovidaTeste.trim().toLowerCase();

      if (frase1 === frase2) {
        window.alert("correto");
        return newFrase();
      }

      console.log(frase1, frase2);
    }

    compare();
  }, [listening == true]);

  return (
    <div className={styles.div}>
      <button onClick={() => newFrase()}> nova frase</button>
      <button>ouvir a frase</button>
      <button onClick={useMicrofone.start}>falar</button>
      <button onClick={useMicrofone.stop}>para de falar</button>
      <button onClick={() => useMicrofone.reset(resetTranscript)}>
        resetar
      </button>
      <p> {fraseAtual}</p>
      <p>{transcript}</p>
      <h1>{ouvindo}</h1>
    </div>
  );
}
