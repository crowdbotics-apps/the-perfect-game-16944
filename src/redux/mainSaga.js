import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView44698Saga from '../features/CalendarView44698/redux/sagas';
import EmailAuth44696Saga from '../features/EmailAuth44696/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView44698Saga,
EmailAuth44696Saga,
    
  ]);
}