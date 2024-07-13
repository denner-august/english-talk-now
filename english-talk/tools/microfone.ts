import SpeechRecognition from "react-speech-recognition";
import frasesIngles from "@/words.json";

class Microfone {
  start() {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  }

  stop() {
    SpeechRecognition.stopListening();
  }

  reset(newfunction: () => void) {
    this.stop();
    newfunction();
  }

  frase() {
    const regex = /[^\w\s]/g;
    const randomIndex = Math.floor(
      Math.random() * frasesIngles["frases:"].length
    );

    const tratativa = frasesIngles["frases:"][randomIndex]
      .replace(regex, "")
      .toLowerCase();

    return tratativa;
  }
}

export const useMicrofone = new Microfone();
