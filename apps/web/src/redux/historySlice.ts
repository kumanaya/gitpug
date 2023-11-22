import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface HistoryItem {
  username: string;
  status: string;
  public_repos: number;
  last_search: string;
}

interface HistorySliceState {
  history: HistoryItem[];
}

const LOCAL_STORAGE_KEY = "history";
const MAX_HISTORY_LENGTH = 20; // Define o número máximo de itens no histórico

// Função para obter o histórico inicial
function getInitialHistory(): HistorySliceState {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  return savedData ? JSON.parse(savedData) : { history: [] };
}

const initialState: HistorySliceState = getInitialHistory();

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<any>) => {
      const { username, status, public_repos } = action.payload;

      // Adiciona a nova pesquisa ao histórico
      state.history.push({
        username,
        status,
        public_repos,
        last_search: new Date().toISOString(),
      });

      // Limita o histórico ao número máximo de itens
      state.history = state.history.slice(-MAX_HISTORY_LENGTH);

      // Salva o histórico no localStorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },
    deleteFromHistoryByIndex: (state, action: PayloadAction<number>) => {
      const indexToDelete = action.payload;

      // Filtra o histórico, removendo o item na posição correspondente
      state.history = state.history.filter(
        (_, index) => index !== indexToDelete
      );

      // Salva o histórico atualizado no localStorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },
  },
});

export const { addToHistory, deleteFromHistoryByIndex } = historySlice.actions;

export const getHistory = (state: RootState) => state.history;

export default historySlice.reducer;
