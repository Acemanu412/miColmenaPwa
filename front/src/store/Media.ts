import { types } from "mobx-state-tree";

const Media = types.model({})
    .volatile(() => ({
        audio: null,
        photo: null,
    }))
    .actions((self) => ({
        setPhoto(photo) {
            self.photo = photo;
        },
        setAudio(audio) {
            self.audio = audio;
        },
    }));

export default Media;
