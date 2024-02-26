import { create } from 'zustand';

interface Location {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

interface LocationState {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
}

const useLocationStore = create<LocationState>((set) => ({
  selectedLocation: null,
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));

export default useLocationStore;