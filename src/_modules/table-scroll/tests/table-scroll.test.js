'use strict';

import TableScroll from '../table-scroll';

describe('TableScroll View', function() {

  beforeEach(() => {
    this.tableScroll = new TableScroll();
  });

  it('Should run a few assertions', () => {
    expect(this.tableScroll).toBeDefined();
  });

});
