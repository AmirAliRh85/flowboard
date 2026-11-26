import { create } from "zustand";

type PanelState =
{
    isCollapsed : boolean;
    setIsCollapsed : () => void;
}

export const usePanelStore = create<PanelState>((set) => ({
    isCollapsed : false,
    setIsCollapsed : () => set((state) => ({isCollapsed : !state.isCollapsed}))
}));