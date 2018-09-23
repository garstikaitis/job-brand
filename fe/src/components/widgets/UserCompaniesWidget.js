import React from 'react';
import UserApi from '../../utils/UserApi';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '../../../node_modules/@material-ui/core';

class UserCompaniesWidget extends React.Component {
  state = {
    user: {},
    loading: true,
  };
  async componentDidMount() {
    this.setState({
      user: await UserApi.getUserById('5b97c615aae9e7e153367bd6'),
      loading: false,
    });
  }

  handleRedirect = slug => {
    window.location.href = `/companies/${slug}`;
  };

  renderCompanies = () => {
    if (!this.state.loading) {
      return this.state.user.companies.map(company => {
        return (
          <Grid key={company._id} item xs={6}>
            <Card>
              <CardContent>
                <Typography>{company.name}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => this.handleRedirect(company.slug)}
                  variant="contained"
                  color="secondary"
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      });
    } else {
      return <div>Loading..</div>;
    }
  };

  render() {
    return (
      <Grid alignItems="center" container spacing={40}>
        {this.renderCompanies()}
      </Grid>
    );
  }
}

export default UserCompaniesWidget;
