'use strict';

import Switch from '../switch';

describe('Switch View', function() {

  beforeEach(() => {
    this.switch = new Switch();
  });

  it('Should run a few assertions', () => {
    expect(this.switch).toBeDefined();
  });

});
