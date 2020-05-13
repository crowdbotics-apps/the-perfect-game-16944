import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView44698Reducer from '../features/CalendarView44698/redux/reducers';
import EmailAuth44696Reducer from '../features/EmailAuth44696/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView44698: CalendarView44698Reducer,
EmailAuth44696: EmailAuth44696Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});