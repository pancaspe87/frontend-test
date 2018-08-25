'use strict';

import Checkbox from '../checkbox';

describe('Checkbox View', function() {

  beforeEach(() => {
    this.checkbox = new Checkbox();
  });

  it('Should run a few assertions', () => {
    expect(this.checkbox).toBeDefined();
  });

});
