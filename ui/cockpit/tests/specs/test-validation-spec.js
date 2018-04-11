var testHelper = require('../../../common/tests/test-helper');
var setupFile = require('./process-setup');
var dashboardPage = require('../pages/dashboard');

describe.only('E2E-Test Validation Spec', function() {
  

  before(function() {
    return testHelper(setupFile.setup1, function() {
      dashboardPage.navigateToWebapp('Cockpit');
      dashboardPage.authentication.userLogin('admin', 'admin');
    });
  });

  it('should find all menu items', function() {

    expect(dashboardPage.navbarItem(0).getText()).to.eventually.eql('Processes');
    expect(dashboardPage.navbarItem(1).getText()).to.eventually.eql('Decisions');
    expect(dashboardPage.navbarItem(2).getText()).to.eventually.eql('Human Tasks');
    expect(dashboardPage.navbarItem(3).getText()).to.eventually.eql('More');

    dashboardPage.navbarDropDown().click();
    expect(dashboardPage.navbarDropDownItem(0).getText()).to.eventually.eql('Deployments');
    expect(dashboardPage.navbarDropDownItem(1).getText()).to.eventually.eql('Batches');
  });
});