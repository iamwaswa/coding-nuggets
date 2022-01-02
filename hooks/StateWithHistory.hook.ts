import { Reducer, useReducer } from 'react';

interface IUseStateWithHistoryActions<TState> {
  currentIndexInHistory: number;
  history: Array<TState>;
  back(): void;
  forward(): void;
  go(index: number): void;
}

/**
 * Manages the history of the given state.
 * @param initialState The initial state
 * @returns The history of the given state
 */
export function useStateWithHistory<TState>(
  initialState: TState
): [
  TState,
  (args: TState | ((currentState: TState) => TState)) => void,
  IUseStateWithHistoryActions<TState>
] {
  const [{ currentIndexInHistory, history, state }, dispatch] = useReducer<
    Reducer<StateWithHistory<TState>, StateWithHistoryAction<TState>>
  >(reducer, getInitialState(initialState));

  return [
    state,
    function setState(
      update: TState | ((currentState: TState) => TState)
    ): void {
      dispatch({
        type: StateWithHistoryActionType.UPDATE_STATE,
        payload: {
          update,
        },
      });
    },
    {
      currentIndexInHistory,
      history,
      back(): void {
        dispatch({
          type: StateWithHistoryActionType.BACK,
        });
      },
      forward(): void {
        dispatch({
          type: StateWithHistoryActionType.FORWARD,
        });
      },
      go(index: number): void {
        dispatch({
          type: StateWithHistoryActionType.GO,
          payload: {
            index,
          },
        });
      },
    },
  ];
}

enum StateWithHistoryActionType {
  BACK = 'Back',
  FORWARD = 'Forward',
  GO = 'Go',
  UPDATE_STATE = 'Update state',
}

type StateWithHistoryAction<TState> =
  | {
      type: StateWithHistoryActionType.BACK;
    }
  | {
      type: StateWithHistoryActionType.FORWARD;
    }
  | {
      type: StateWithHistoryActionType.GO;
      payload: {
        index: number;
      };
    }
  | {
      type: StateWithHistoryActionType.UPDATE_STATE;
      payload: {
        update: TState | ((currentState: TState) => TState);
      };
    };

type StateWithHistory<TState> = {
  currentIndexInHistory: number;
  history: Array<TState>;
  state: TState;
};

function getInitialState<TState>(
  initialState: TState
): StateWithHistory<TState> {
  return {
    currentIndexInHistory: 0,
    history: [initialState],
    state: initialState,
  };
}

export function reducer<TState>(
  state: StateWithHistory<TState>,
  action: StateWithHistoryAction<TState>
): StateWithHistory<TState> {
  switch (action.type) {
    case StateWithHistoryActionType.BACK: {
      const newCurrentIndexInHistory = Math.max(
        state.currentIndexInHistory - 1,
        0
      );

      return {
        ...state,
        currentIndexInHistory: newCurrentIndexInHistory,
        state: state.history[newCurrentIndexInHistory],
      };
    }

    case StateWithHistoryActionType.GO: {
      const newCurrentIndexInHistory = Math.max(
        Math.min(action.payload.index, Math.max(state.history.length - 1, 0)),
        0
      );

      return {
        ...state,
        currentIndexInHistory: newCurrentIndexInHistory,
        state: state.history[newCurrentIndexInHistory],
      };
    }

    case StateWithHistoryActionType.FORWARD: {
      const newCurrentIndexInHistory = Math.min(
        state.currentIndexInHistory + 1,
        Math.max(state.history.length - 1, 0)
      );

      return {
        ...state,
        currentIndexInHistory: newCurrentIndexInHistory,
        state: state.history[newCurrentIndexInHistory],
      };
    }

    case StateWithHistoryActionType.UPDATE_STATE: {
      const newState = isFunctionUpdate(action.payload.update)
        ? action.payload.update(state.state)
        : action.payload.update;

      return {
        ...state,
        currentIndexInHistory: state.currentIndexInHistory + 1,
        history: [
          ...state.history.slice(0, state.currentIndexInHistory + 1),
          newState,
        ],
        state: newState,
      };
    }

    default: {
      return state;
    }
  }
}

function isFunctionUpdate<TState>(
  update: TState | ((currentState: TState) => TState)
): update is (currentState: TState) => TState {
  return typeof update === `function`;
}
