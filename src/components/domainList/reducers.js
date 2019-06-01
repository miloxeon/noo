/* eslint-disable */
import states from 'constants/states';
import * as actions from './actions';
import { Map } from 'immutable';

export default (state = Map(), { type, payload }) => {
  switch (type) {
    case actions.getRemnantsRequest.toString():
      return state
        .set('state', states.requested)
        .set('page', payload.page)
        .set('limit', payload.limit);

    case actions.getRemnantsSuccess.toString():
      return state
        .set('state', states.successed)
        .set('remnants', payload)
        .set('total', payload.total);

    case actions.getMovementsSuccess.toString():
      return state
        .set('state', states.successed)
        .set('movements', payload)
        .set('inCost', payload.inCost);

    default:
      return state;
  }
};
