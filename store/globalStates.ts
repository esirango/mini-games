import { create } from "zustand";

export interface globalState {
    selectedImage: string;
    setSelectedImage: (value: string) => void;
}

const useglobalState = create<globalState>((set) => ({
    selectedImage: "",
    setSelectedImage(value) {
        set((state) => ({
            selectedImage: (state.selectedImage = value),
        }));
    },
}));

export default useglobalState;
