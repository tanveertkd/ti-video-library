import toast from 'react-hot-toast'

import { createContext, useContext, useReducer } from 'react';
import {
    clearHistoryService,
    getHistoryService,
    removeFromHistoryService,
    setHistoryService,
} from '../services';
import { useAuth } from './';
import { historyReducer } from '../reducers';

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
    const AUTH_TOKEN = localStorage.getItem('TI_VID_AUTH_TOKEN');
    const { auth } = useAuth();

    const getHistoryHandler = async () => {
        if (auth) {
            const response = await getHistoryService(AUTH_TOKEN);
            setHistory({ type: 'LOAD_HISTORY', payload: response.data.history });
        }
    };

    const setHistoryHandler = async (video) => {
        if (auth) {
            const response = await setHistoryService(video, AUTH_TOKEN);
            setHistory({ type: 'SET_HISTORY', payload: response.data.history });
        }
    };

    const removeFromHistoryHandler = async (id) => {
        if(auth){
            const response = await removeFromHistoryService(id, AUTH_TOKEN);
            setHistory({ type: 'SET_HISTORY', payload: response.data.history });
            toast.success("Removed from watch history");
        }
    };

    const clearHistoryHandler = async () => {
        if(auth){
            await clearHistoryService(AUTH_TOKEN);
            setHistory({ type: 'CLEAR_HISTORY' });
            toast.success("Cleared watch history");
        }
    };

    const [history, setHistory] = useReducer(historyReducer, {
        data: [],
    });

    return (
        <HistoryContext.Provider
            value={{
                history,
                setHistory,
                getHistoryHandler,
                setHistoryHandler,
                removeFromHistoryHandler,
                clearHistoryHandler,
            }}
        >
            {children}
        </HistoryContext.Provider>
    );
};

const useHistory = () => {
    const context = useContext(HistoryContext);
    if (context === undefined) throw new Error('History context must be defined first.');
    return context;
};

export { HistoryProvider, useHistory };
