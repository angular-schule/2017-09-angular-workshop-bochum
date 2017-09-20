//

import { browser, $, $$ } from 'protractor';

describe('DRV KBS', () => {
  const impressumUrl = 'https://www.kbs.de/DE/00_ueber_uns/33_bottom_nav/01_impressum/node.html';

  beforeAll(() => browser.ignoreSynchronization = true);

  it('show the director', () => {
    browser.get(impressumUrl);

    const contentDiv = $('div#content');

    expect(contentDiv.getText()).toContain('Heinz-Günter Held');
    expect(contentDiv.getText()).not.toContain('Max Mustermann');
  });

  it('should show the "gut DABEI" phone number', () => {
    browser.get(impressumUrl);

    const tableRows = $$('div#content table tbody tr');
    const cells = tableRows.get(1).$$('td');

    expect(cells.get(0).getText()).toContain('gut DABEI');
    expect(cells.get(1).getText()).toContain('08000 200 506');
  });



  afterAll(() => browser.ignoreSynchronization = false);
});
