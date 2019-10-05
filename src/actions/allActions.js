import * as types from '../constants/ActionTypes';

export const addToBoard = (index, turn) => ({
  type: types.SQUARES.ADD,
  index,
  turn
});
export const removeFromBoard = index => ({
  type: types.SQUARES.REMOVE,
  index
});
export const changeBoardFromHis = (arr, isRemove) => ({
  type: types.SQUARES.MANY,
  arr,
  isRemove
});
export const changeTurn = () => ({
  type: types.TURN.CHANGE
});
export const setTurn = turn => ({
  type: types.TURN.CHANGE,
  turn
});
export const winner = arr => ({
  type: types.WINNER_LINE.ADD,
  arr
});

export const addToHis = (index, turn) => ({
  type: types.HISTORY.ADD,
  index,
  turn
});
export const RemoveHis = (from, to) => ({
  type: types.HISTORY.REMOVE,
  from,
  to
});
export const ChangeHisIndex = index => ({
  type: types.HISTORY.CHANGE_INDEX,
  index
});
export const sort = () => ({
  type: types.SORT
});
