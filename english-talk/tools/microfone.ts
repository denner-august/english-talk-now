import SpeechRecognition from "react-speech-recognition";

class Microfone {
  start() {
    SpeechRecognition.startListening({
      continuous: true,
    });
  }

  stop() {
    SpeechRecognition.stopListening();
  }

  reset(newfunction: () => void) {
    this.stop();
    newfunction();
  }
}

export const useMicrofone = new Microfone();
