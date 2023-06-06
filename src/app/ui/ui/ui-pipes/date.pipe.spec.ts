import { DatePipe } from '@angular/common';

describe('DatePipe', () => {
  let pipe: DatePipe;

  beforeEach(() => {
    pipe = new DatePipe('en-US');
  });

  it('should format a date correctly', () => {
    const date = new Date('2023-06-06T00:00:00Z');
    const formattedDate = pipe.transform(date, 'MMMM d');
    const expectedDate = 'June 6';
    expect(formattedDate).toEqual(expectedDate);
  });
});
