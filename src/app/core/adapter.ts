import * as moment from 'moment';
class MomentDateAdapter extends DateAdapter<Moment> {
  parse(value: any, parseFormat: any): moment.Moment {
      return moment(value, parseFormat);
  }

  // Implementation for remaining abstract methods of DateAdapter.
}
