---
title: context
sidebar_position: 4
---

- Позволяет передавать `state` на любой уровень, что-то вроде встроенного `redux` в `react`
- Можно избавиться от `property drilling`
- Внутрь контекста можно передавать всё что угодно (примитивы, функции, объекты).

### 1 шаг - создаем пустой контекст

```ts
import { createContext } from 'react';

export type TUserData = {
  name: string;
  surname: string;
  age?: number;
};

export const UserContext = createContext<TUserData>({
  name: '',
  surname: '',
  age: undefined,
});
```

### 2 шаг - подключаем контекст к приложению, значение контекста подключаем к useState

```tsx
import { UserContext } from './UserContext';

const App = () => {
  const [personData, setPersonData] = useState<TUserData>({
    name: 'Default Username',
    surname: 'Default Surname',
    age: null,
  });

  return (
    <UserContext.Provider value={personData}>
      <button
        onClick={() =>
          setPersonData({
            name: 'Jack',
            surname: 'Corbell',
            age: 35,
          })
        }
      >
        Change UserContext
      </button>

      <SomeComponent />
    </UserContext.Provider>
  )
}
```

### 3 шаг - используем контекст внутри вложенных компонентов в провайдер

Получаем доступ к personData через хук `useContext`. При изменении personData, данные будут обновляться внутри компонента.

Оборачиваем в `<Provider />`.

```tsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function SomeComp() {
  const personData = useContext(UserContext);
  const { name, surname, age } = personData;

  return (
    <ul>
      <li>{`name: ${name}`}</li>
      <li>{`surname: ${surname}`}</li>
      <li>{`age: ${age}`}</li>
    </ul>
  );
}
```

--- 

## Контекст сбольшим кол-вом данных с children

Передача методов и состояний по всему приложению.

```tsx
import React, { FC, PropsWithChildren, useContext } from 'react';

// типизируем контекст
interface IContextValue {
  isActive: boolean;
  isSocketConnected: boolean;
  isSocketClose: boolean;
  isSocketError: boolean;
  callData: CallData | null;
  historyCalls: History | null;
  statusCalls: CallStatus | null;
  userState: UserState | null;
  setIsActive: (value: boolean) => void;
  onConnect: () => void;
  onDisconnect: () => void;
  onCreateNewCall: (callData: string) => void;
  onChangeStatus: (statusData: {}) => void;
  onChangeTypeCall: (callReason: string, callTheme: string) => void;
  onChangeRecordSurvey: (callReason: string, callTheme: string, idFromHistory: string) => void;
  onCreateTrans: (callData: string) => void;
  onCreateTransSuccess: (phoneNumber: string, idFromHistory: string) => void;
  handleMakeTransfer: () => void;
  handleMute: () => void;
  handleEndProcessing: () => void;
  handleAnwser: () => void;
  handleHold: () => void;
  handleHangup: () => void;
}

// создаем контекст
export const SocketContext = createContext<IContextValue>({
  isActive: false,
  isSocketConnected: false,
  isSocketError: false,
  isSocketClose: false,
  callData: null,
  historyCalls: null,
  statusCalls: null,
  userState: null,
  setIsActive: () => {},
  onConnect: () => {},
  onDisconnect: () => {},
  onCreateNewCall: () => {},
  onChangeStatus: () => {},
  onChangeTypeCall: () => {},
  onChangeRecordSurvey: () => {},
  onCreateTrans: () => {},
  onCreateTransSuccess: () => {},
  handleMakeTransfer: () => {},
  handleMute: () => {},
  handleEndProcessing: () => {},
  handleAnwser: () => {},
  handleHold: () => {},
  handleHangup: () => {}
});

// создаем провайдер
export const SocketProvider: FC<PropsWithChildren<object>> = ({ children }) => {
  // состояния
  const socket: MutableRefObject<WebSocket | null> = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isSocketError, setIsSocketError] = useState(false);
  const [callData, setCallData] = useState<CallData | null>(null);
  const [historyCalls, setHistory] = useState<History | null>(null);
  const [statusCalls, setStatus] = useState<CallStatus | null>(null);
  const [userState, setUserState] = useState<UserState | null>(null);

  // методы
  function connect() { ... }
  function handleDisconnect() { ... }
  function handleMute() { ... }
  function handleEndProcessing() { ... }
  function handleHold() { ... }
  function handleHangup() { ... }
  function handleAnwser() { ... }
  function handleMakeTransfer() { ... }
  function handleMakeTransferNumb() { ... }
  function handleMakeTransferSuccessNumb() { ... }
  function handleMakeCall() { ... }
  function handleChangeStatus() { ... }
  function handleChangeTypeAppeal() { ... }
  function handleRecordSurvey() { ... }
  function handleEndCall() { ... }
  function handleRecordSurvey() { ... }
  function handleRecordSurvey() { ... }
  function handleRecordSurvey() { ... }

  // возвращаем провайдер со значенмем объектом из стейтов м методов
  return (
    <SocketContext.Provider
      value={{
        isActive,
        isSocketConnected: isConnected,
        isSocketClose: isClose,
        onConnect: connect,
        isSocketError: isSocketError,
        onDisconnect: handleDisconnect,
        onCreateNewCall: handleMakeCall,
        onChangeStatus: handleChangeStatus,
        onCreateTrans: handleMakeTransferNumb,
        onCreateTransSuccess: handleMakeTransferSuccessNumb,
        onChangeTypeCall: handleChangeTypeAppeal,
        onChangeRecordSurvey: handleRecordSurvey,
        handleMakeTransfer,
        setIsActive,
        callData,
        historyCalls,
        statusCalls,
        userState,
        handleMute,
        handleEndProcessing,
        handleAnwser,
        handleHold,
        handleHangup
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

// шоткат для импорта
export const useSocket = () => useContext(SocketContext);


// оборачиваем приложение
...
  <SocketProvider>
    <App />
  </SocketProvider>
...

// использование в компоненте
...
import { useSocket } from '@pages/Telephony/WebSocketProvider';
const { userState } = useSocket();
...
```

---

## Пример сомописного provider из Fun chat

1. Создаем провайдер `useGuessMeProvider`, который будет что-то возвращать при какие-либо данные.

```ts
// useGuessMeProvider
import { IRoomPlayer, PLAYER_STATE } from '@store/room/roomSlice';
import { useAppSelector } from '@app/hooks';
import { defaultGameState, initialMapState } from './guessMe.types';
import { PLAYER_STATUS } from '@src/common/constants/system';
import { selectRoomPlayers } from '@store/room/roomSlice';
import { selectPlayerId } from '@store/reducers/player.reducer';
import { useState, useEffect } from 'react';
import { GuessMeState } from '@src/shared/gameInterfaces/guessMe.socket';
import { simpleMerge } from '@src/common/generics';
import WSClient from '@src/sockets';
import { CLIENT_EVENTS, SERVER_EVENTS } from '@src/shared/socketEvents/eventTypes';

interface GuessMeData {
  data: {
    guessMe: GuessMeState;
  };
}

export const useGuessMeProvider = (roomId: string) => {
  const [state, setState] = useState<GuessMeState>(defaultGameState);
  const players = useAppSelector(selectRoomPlayers);
  const playerId = useAppSelector(selectPlayerId);
  const isActivePlayer = playerId === state.activePlayerId;
  const currentPlayer = players.find((player) => player.playerId === playerId) || ({} as IRoomPlayer);
  const isSpectator = currentPlayer ? currentPlayer.state !== PLAYER_STATE.GAME : true;
  const stateMatcher = { ...initialMapState, [state.gameState]: true };

  useEffect(() => {
    const updateState = ({ data }: GuessMeData) => setState(simpleMerge(state, data.guessMe));

    WSClient.on(SERVER_EVENTS.ROOM_STATE_UPDATED, updateState);
    WSClient.on(SERVER_EVENTS.GAME_STATE_UPDATED, updateState);

    WSClient.emit(CLIENT_EVENTS.GAME_STATE_REQUESTED, { roomId });

    return () => {
      WSClient.off(SERVER_EVENTS.GAME_STATE_UPDATED, updateState);
      WSClient.off(SERVER_EVENTS.ROOM_STATE_UPDATED, updateState);
    };
  }, []);

  const setVote = (answerIndex: number) => setState(simpleMerge(state, {}));
  const setReady = () => setState(simpleMerge(state, {}));
  const setPreVote = (answerIndex: number) => setState(simpleMerge(state, {}));

  return [
    stateMatcher,
    { ...state, state: stateMatcher },
    playerId,
    players,
    { setVote, setReady, setPreVote },
    isActivePlayer,
    isSpectator,
  ] as const;
};
```

2. Создаем хук, который забирает данные с провайдера и дальше возвращает их в объекте.

```ts
// useGameHook
import { GameTypes } from '@src/common/constants/common';
import WSClient from '@src/sockets';
import { useEffect } from 'react';
import { useGuessMeProvider } from './guessMeProvider';
// import { setVotedFor, setReadyNextRound } from '@store/reducers/guessMe';
import { useDispatch } from 'react-redux';
import { CLIENT_EVENTS } from '@shared/socketEvents/eventTypes';
import { PlayerStatus, PLAYER_STATUS } from '@src/common/constants/system';
import { updatePlayerState } from '@store/room/roomSlice';
import { updateGuessMeLabelsThunk } from './guessMe.labels';
import { sendRoundStarted } from '@services/analyticsThunk';
import { endGameEvent } from '@src/common/sendEvents';
import { useAppDispatch } from '@src/app/hooks';

const useGameHook = (roomId: string) => {
  const dispatch = useAppDispatch();
  const [state, game, playerId, players, storeActions, isActivePlayer, isSpectator] = useGuessMeProvider(roomId);

  useEffect(() => {
    dispatch(updateGuessMeLabelsThunk(game));
  }, [game]);

  useEffect(() => {
    if (state.READY_START_ROUND) {
      dispatch(sendRoundStarted(game.roundNumber.toString()));
    }
  }, [state.READY_START_ROUND]);

  return {
    state,
    game,
    playerId,
    players,
    isActivePlayer,
    isSpectator,
    actions: {
      onSpin: () => {
        WSClient.emit(CLIENT_EVENTS.ROUND_STARTED, {
          roomId,
          activeGameId: game.activeGameId,
          gameType: GameTypes.GUESS_ME,
        });
      },

      onPreVote: (value: number) => {
        storeActions.setPreVote(value);
        WSClient.emit(CLIENT_EVENTS.PLAYER_PRE_VOTED, {
          roomId,
          activeGameId: game.activeGameId,
          playerId,
          value,
        });
      },

      onVote: (value: number) => {
        storeActions.setVote(value);
        WSClient.emit(CLIENT_EVENTS.PLAYER_VOTED, {
          roomId,
          activeGameId: game.activeGameId,
          playerId,
          value,
        });
      },

      onNext: () => {
        storeActions.setReady();
        WSClient.emit(CLIENT_EVENTS.PLAYER_READY, {
          roomId,
          activeGameId: game.activeGameId,
          playerId,
        });
      },

      onGameQuit: () => {
        // dispatch(updatePlayerState(playerId, PLAYER_STATUS.READY_TO_QUIT_GAME as PlayerStatus));
        endGameEvent(roomId, playerId, GameTypes.GUESS_ME);
      },
    },
  };
};

export { useGameHook };
```

3. Забираем все эти данные при вызове этого кастомного хука в любом компоненте.

```tsx
// использование в компоненте 
import { useGameHook } from './guessMe.hook';
...
const { state, game, playerId, actions, players, isActivePlayer, isSpectator } = useGameHook(roomId);
const { onSpin, onPreVote, onVote, onNext, onGameQuit } = actions;
```
