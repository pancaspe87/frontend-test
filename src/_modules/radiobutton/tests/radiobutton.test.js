'use strict';

import Radiobutton from '../radiobutton';

describe('Radiobutton View', function() {

  beforeEach(() => {
    this.radiobutton = new Radiobutton();
  });

  it('Should run a few assertions', () => {
    expect(this.radiobutton).toBeDefined();
  });

});
