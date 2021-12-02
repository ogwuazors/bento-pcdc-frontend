import React from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';
import aboutPageRoutes from '../../bento/aboutPagesRoutes';
import Header from '../Header/HeaderView';
import NavBar from '../NavBar/NavBarContainer';
import Footer from '../Footer/FooterView';
import Error from '../../pages/error/Error';
import Dashboard from '../../pages/dashboardTab/dashboardController';
import CaseDetail from '../../pages/caseDetail/caseDetailController';
import ArmDetail from '../../pages/armDetail/armDetailController';
import modelPage from '../../pages/modelPage/modelPageView';
import table from '../../pages/table/tableView';
// routes
import Home from '../../pages/landing/landingController';
import About from '../../pages/about/aboutController';
import DataDictonary from '../../pages/dataDictionary/dataDictonaryController';
import Trials from '../../pages/trials/trialsController';
import Programs from '../../pages/programs/programsController';
import TrialDetail from '../../pages/trialDetail/trialDetailController';
import Sites from '../../pages/sites/sitesController';
import SiteDetail from '../../pages/siteDetail/siteDetailController';
// end routes
import GraphqlClient from '../GraphqlClient/GraphqlView';
import fileCentricCart from '../../pages/fileCentricCart/cartController';
import JBrowse from '../JBrowse/JBrowseView';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Layout = ({ classes, isSidebarOpened }) => (
  <>
    <CssBaseline />
    <HashRouter>
      <>
        <Header />
        <NavBar />
        {/* Reminder: Ajay need to replace the ICDC with env variable and
          change build npm to read env variable */}
        <div
          className={classes.content}
        >
          <Route component={ScrollToTop} />
          <Switch>
            <Route exact path="/ICDC/" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/cases" component={Dashboard} />
            <Route path="/trials" component={Trials} />
            <Route path="/programs" component={Programs} />
            <Route path="/sites" component={Sites} />
            <Route path="/model" component={modelPage} />
            <Route path="/table" component={table} />
            <Route path="/fileCentricCart" component={fileCentricCart} />
            <Route path="/trial/:id" component={TrialDetail} />
            <Route path="/site/:id" component={SiteDetail} />
            <Route path="/case/:id" component={CaseDetail} />
            <Route path="/arm/:id" component={ArmDetail} />
            <Route path="/JBrowse" component={JBrowse} />
            {aboutPageRoutes.map(
              (aboutPageRoute, index) => (
                <Route
                  key={index}
                  path={aboutPageRoute}
                  component={About}
                />
              ),
            )}
            <Route path="/data-dictionary" component={DataDictonary} />
            <Route path="/graphql" component={GraphqlClient} />
            <Route component={Error} />
          </Switch>
          <Footer data={{ isSidebarOpened }} />
        </div>
      </>
    </HashRouter>
  </>
);

const styles = (theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    flexGrow: 1,
    // width: `calc(100vw - 240px)`,   // Ajay need to add this on addung side bar
    width: 'calc(100%)', // Remove this on adding sidebar
    background: theme.custom.bodyBackGround,
    marginTop: '185px',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.5em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px #ccc',
      borderRadius: '0px',
      backgroundColor: '#FFFFFF',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#97b0c0',
      outline: '1px solid slategrey',
      borderRadius: '0px',
    },
  },
});

export default withStyles(styles)(Layout);
