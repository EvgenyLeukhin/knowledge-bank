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
