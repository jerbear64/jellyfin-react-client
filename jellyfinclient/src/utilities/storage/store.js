import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import normalStorage from './normalStorage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AuthReducer from '../../reducers/authReducer';
import sensitiveStorage from './sensitiveStorage'
import ConnectReducer from '../../reducers/connectReducer';

const rootPersistConfig = {
    key: 'root',
    storage: normalStorage
}


//TODO add bulk storage (for sync and download)

const authPersistConfig = {
    key: 'authCredentials',
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ['loginStatus']
}

const connectPersistConfig = {
    key: 'connectionStatus',
    storage: sensitiveStorage,
    stateReconciler: hardSet,
    blacklist: ['connectStatus']
}

const rootReducer = combineReducers({
    authCredentials: persistReducer(authPersistConfig, AuthReducer),
    connectionStatus: persistReducer(connectPersistConfig, ConnectReducer)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createJellyfinStore = () => {
    let store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)))
    let persistor = persistStore(store)
    return { store, persistor }
}

const jellyfinStore = createJellyfinStore();

export default jellyfinStore;
